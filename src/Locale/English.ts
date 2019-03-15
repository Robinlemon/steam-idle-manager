import INamespaceMap from './INamespaces';

const Data: INamespaceMap = {
    AddKeyDescription:
        'Adds the given key to the given game, to add multiple keys separe them by comma (,).',
    AddKeyResponse: 'Added a key to $1\n$2 now has $3 keys.',

    AddTagDescription: 'Appends a Tag to a User model',
    AddTagResponse: '',

    AllIdledDescription:
        'Responds with a list of Users that have returned cards',
    AllIdledResponse: '',

    AllOweDescription: 'Responds with a list of User models that owe cards',
    AllOweResponse: '',

    AppsDescription:
        'Responds with how many applications we have information stored for',
    AppsResponse: '',

    BanDescription: 'Bans a particular User',
    BanResponse: '',

    BroadcastDescription: 'Sends a message to all friends',
    BroadcastResponse: '',

    CompareDescription:
        'Responds with a list of game keys I have that you are eligible to use',
    CompareResponse: '',

    GroupDescription: 'Links you to the group',
    GroupResponse: '',

    OweDescription: 'Responds with a list of cards you owe',
    OweResponse: '',

    PrintRawDescription: '[DEBUG] Prints the raw JSOn of a User model',
    PrintRawResponse: '',

    RedeemDescription: 'Responds with a game key',
    RedeemResponse: '',

    RedeemAllDescription:
        'Responds with all game keys applicable to your account and tier',
    RedeemAllResponse: '',

    RemoveTagDescription: 'Removes a Tag from a User model',
    RemoveTagResponse: '',

    StockDescription: 'Retrieves a list of all games we have keys for',
    StockResponse: '',

    TierDescription: 'Responds with your current tier',
    TierResponse: '',

    UnbanDescription: 'Unban a particular User',
    UnbanResponse: ''
};

export default Data;
