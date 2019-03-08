export interface ITier {
    Name: string;
    GamesIdledRequirement: number;
}

export const TierList = <ITier[]>[
    {
        Name: 'Idler',
        GamesIdledRequirement: 0
    },
    {
        Name: 'Junior - Idler',
        GamesIdledRequirement: 6
    },
    {
        Name: 'Enthusiast - Idler',
        GamesIdledRequirement: 15
    },
    {
        Name: 'Addicted - Idler',
        GamesIdledRequirement: 30
    },
    {
        Name: 'Senior - Idler',
        GamesIdledRequirement: 60
    },
    {
        Name: 'Pro - Idler',
        GamesIdledRequirement: 90
    },
    {
        Name: 'Legendary - Idler',
        GamesIdledRequirement: 120
    },
    {
        Name: 'Divine - Idler',
        GamesIdledRequirement: 150
    }
];

export default (GamesIdled: number): ITier =>
    TierList.reduce((CurrentTier: ITier) => {
        if (GamesIdled >= CurrentTier.GamesIdledRequirement) return CurrentTier;
    });
