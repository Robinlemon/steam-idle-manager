export interface ITier {
    Name: string;
    GamesIdledRequirement: number;
    GamesAllowed: number;
}

export const TierList = [
    {
        Name: 'Idler',
        GamesIdledRequirement: 0,
        GamesAllowed: 1
    },
    {
        Name: 'Junior - Idler',
        GamesIdledRequirement: 6,
        GamesAllowed: 1
    },
    {
        Name: 'Enthusiast - Idler',
        GamesIdledRequirement: 15,
        GamesAllowed: 1
    },
    {
        Name: 'Addicted - Idler',
        GamesIdledRequirement: 30,
        GamesAllowed: 1
    },
    {
        Name: 'Senior - Idler',
        GamesIdledRequirement: 60,
        GamesAllowed: 1
    },
    {
        Name: 'Pro - Idler',
        GamesIdledRequirement: 90,
        GamesAllowed: 1
    },
    {
        Name: 'Legendary - Idler',
        GamesIdledRequirement: 120,
        GamesAllowed: 1
    },
    {
        Name: 'Divine - Idler',
        GamesIdledRequirement: 150,
        GamesAllowed: 1
    }
] as ITier[];

export default (GamesIdled: number): ITier =>
    TierList.reduce((CurrentRank: ITier, CurrentTier: ITier) => {
        if (GamesIdled >= CurrentTier.GamesIdledRequirement) {
            CurrentRank = CurrentTier;
        }
        return CurrentRank;
    });
