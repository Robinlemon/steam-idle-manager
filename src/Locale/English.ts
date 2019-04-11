import INamespaceMap from './INamespaces';

const Data: INamespaceMap = {
    SteamName: '¡ IdleFreaks Distributor |> $1',
    SteamGame: 'Distributing CD Keys',
    SteamWelcome: 'Welcome $1!\n>Use !help to get started',

    HelpDescription: 'Displays this menu',

    AddKeyDescription:
        'Adds the given key to the given game, to add multiple keys separe them by comma (,).',
    AddKeyResponse: 'Added $1 to $2\n\n$3 now has $4 keys.',
    AddKeyResponseOne: 'a key',
    AddKeyResponseMany: '$1 keys',

    AddTagDescription: 'Appends a tag to a user',
    AddTagResponseOne: 'Gave $1 tag to $2',
    AddTagResponseMany: 'Gave $1 tags to $2',

    AllIdledDescription:
        'Responds with a list of users that have returned cards',
    AllIdledResponse: '$1 -> $2',

    AllOweDescription: 'Responds with a list of users that owe cards',
    AllOweResponse: '$1',

    AppsDescription:
        'Responds with how many applications we have information stored for',
    AppsResponse: 'We have information for $1 apps',

    BanDescription: 'Bans a particular user',
    BanResponse: 'User $1 is now banned',
    BanMetaResponse: 'You have been banned.',

    BroadcastDescription: 'Sends a message to all friends',
    BroadcastResponse: 'Successfully broadcast: $1',

    ClearUsersDescription: 'Wipes the database of all users',
    ClearUsersResponse: 'Purged $1 users',

    ClearKeysDescription: 'Wipes the database of all keys',
    ClearKeysResponse: 'Purged all keys',

    CompareDescription:
        'Responds with a list of game keys I have that you are eligible to use',
    CompareResponse: 'You are eligible for the following games:\n',
    CompareResponseIter: '> $1',
    CompareResponseZero: 'Sorry we dont have any games available for you.',

    ContactDescription: 'This will contact an administrator',
    ContactResponse: 'You can contact me here: https://google.com/',

    GroupDescription: 'Links you to the group',
    GroupResponse: 'https://steamcommunity.com/groups/$1',

    OweDescription: 'Responds with a list of cards you owe',
    OweResponse: 'You owe:\n',
    OweResponseIter: '$1 ($2): $3 Cards',
    OweResponseZero: "You don't owe anything!",

    RemakeUserDescription: 'Recreates a user model on the backend',
    RemakeUserResponse: 'Successfuly recreated model for $1',

    OfferDescription: 'Sends you an offer for cards you owe',
    OfferResponse: 'Sent you an offer with security token: $1',
    OfferResponseNoCardsDetected: "You don't have any cards you owe",
    OfferResponseNoCardsRequired: "You don't owe any cards!",
    OfferResponseOfferFail: "Couldn't send you an offer.",
    OfferResponseInventoryFail: "Couldn't get your inventory.",

    PrintRawDescription: 'Generate a JSON dump of a user',
    PrintRawResponse: 'InstanceType<User> -> $1',

    RedeemDescription: 'Responds with a game key',
    RedeemResponse: 'You have successfully redeemed a copy:\n$1',
    RedeemResponseNoStock: 'We do not have any stock of this game.',
    RedeemResponseNoMatch: "We don't have any games you can redeem.",
    RedeemResponseNotEligible: 'You are not eligible to redeem any more games.',

    RedeemAllDescription:
        'Responds with all game keys applicable to your account and tier',
    RedeemAllResponse: '$1 Games Redeemed: ',
    RedeemAllResponseIter: '($1) $2: $3',

    RemoveTagDescription: 'Removes a tag from a user',
    RemoveTagResponse: 'Removed $1 tags from $2',

    StockDescription: 'Retrieves a list of all games we have keys for',
    StockResponse: '($1) $2: $3',

    SteamIDDescription: 'Retrieves your SteamID64',
    SteamIDResponse: 'Your SteamID: $1',

    TierDescription: 'Responds with your current tier',
    TierTagDecorator: '[$1]',
    TierResponse: 'You are tier: $1\nTags: $2',

    UnbanDescription: 'Unban a particular user.',
    UnbanResponse: '$1 is now unbanned',

    GenericError: 'An error occured.',

    UserModelNotFound: "We don't have a record for this user.",
    UserModelInvalid: "You don't exist in our system. Try re-adding me!"
};

export default Data;
