import NanoID from 'nanoid';
import LanguageDecoder from '../../LanguageDecoder';
import Logger, { Levels } from '../../Logger';
import User from '../../Models/User';
import { CEconItem } from '../../SteamAPIManager';
import BaseCommand, { ITriggerArgs } from '../BaseCommand';

export default class Offer extends BaseCommand {
    constructor(LanguageDecoder: LanguageDecoder) {
        super('offer', LanguageDecoder, true);

        this.Logger = new Logger(this.constructor.name);
        this.Description = this.InterpolateString('OfferDescription');
    }

    public Trigger = async ({
        SteamClient,
        SteamID64,
        Arguments,
        SteamAPIManager
    }: ITriggerArgs): Promise<void> => {
        try {
            const Inventory = await SteamAPIManager.GetInventory(
                SteamID64,
                753,
                6
            );
            const TheirCards = this.FilterCards(Inventory);

            if (TheirCards.length === 0) {
                SteamClient.chatMessage(
                    SteamID64,
                    this.InterpolateString('OfferResponseNoCardsDetected')
                );
                return;
            }

            const UserRecord = await User.findOne({
                SteamID64
            });

            if (UserRecord === null) {
                SteamClient.chatMessage(
                    SteamID64,
                    this.InterpolateString('UserModelNotFound')
                );
                return;
            }

            const WhatWeWant: Record<string, number> = UserRecord.Owe.reduce(
                (Accumulator: Record<string, number>, Record) => {
                    Accumulator[Record.AppID.toString()] =
                        Record.CardsRequired - Record.CardsGiven;
                    return Accumulator;
                },
                {}
            );

            const AppIDsToMatch = Object.keys(WhatWeWant);

            if (AppIDsToMatch.length === 0) {
                SteamClient.chatMessage(
                    SteamID64,
                    this.InterpolateString('OfferResponseNoCardsRequired')
                );
                return;
            }

            const Matched: Record<string, CEconItem[]> = TheirCards.reduce(
                (Accumulator: Record<string, CEconItem[]>, CardObj) => {
                    const CardAppID = CardObj.market_fee_app.toString();

                    if (AppIDsToMatch.includes(CardAppID)) {
                        if (Object.keys(Accumulator).includes(CardAppID)) {
                            Accumulator[CardAppID].push(CardObj);
                        } else {
                            Accumulator[CardAppID] = [CardObj];
                        }
                    }

                    return Accumulator;
                },
                {}
            );

            if (Object.keys(Matched).length === 0) {
                SteamClient.chatMessage(
                    SteamID64,
                    this.InterpolateString('OfferResponseNoCardsDetected')
                );
                return;
            }

            const Restricted = Object.entries(Matched).reduce(
                (Accumulator, [AppID, Cards]) => {
                    const Required = WhatWeWant[AppID];
                    const WhatTheyGot = Cards.length;
                    const WeTake = Math.min(WhatTheyGot, Required);

                    return [
                        ...Accumulator,
                        ...this.RestrictArray(Cards, WeTake)
                    ];
                },
                [] as CEconItem[]
            );

            try {
                const SecureToken = NanoID(32);
                const Offer = await SteamAPIManager.SendOffer(
                    SteamID64,
                    Restricted,
                    SecureToken
                );

                this.Logger.log(
                    `Sent offer ${
                        Offer.id
                    } to ${SteamID64} with token ${SecureToken}`
                );

                SteamClient.chatMessage(
                    SteamID64,
                    this.InterpolateString('OfferResponse', [SecureToken])
                );
            } catch (Err) {
                this.Logger.log(Err, Levels.ERROR);

                SteamClient.chatMessage(
                    SteamID64,
                    this.InterpolateString('OfferResponseOfferFail')
                );
            }
        } catch (Err) {
            this.Logger.log(Err, Levels.ERROR);

            SteamClient.chatMessage(
                SteamID64,
                this.InterpolateString('OfferResponseInventoryFail')
            );
        }
    };

    private FilterCards = (Items: CEconItem[]) =>
        Items.filter(
            Item =>
                (Item.getTag('item_class') || { name: '' }).name ===
                'Trading Card'
        );

    private RestrictArray = <T>(Original: T[], Len: number): T[] => {
        if (Len === Original.length) {
            return Original;
        }
        if (Len > Original.length || Len < 1) {
            throw new Error('IndexOutOfBounds');
        }
        return Original.slice(0, Len);
    };
}
