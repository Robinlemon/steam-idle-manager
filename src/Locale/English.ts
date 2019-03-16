import INamespaceMap from './INamespaces';

const Data: INamespaceMap = {
    SteamName: '¡ IdleFreaks Distributor |> $1',
    SteamGame: 'Distributing CD Keys',
    SteamWelcome: 'Welcome $1!\n>Use !help to get started',

    AddKeyDescription:
        'Adds the given key to the given game, to add multiple keys separe them by comma (,).',
    AddKeyResponse: 'Added a key to $1\n$2 now has $3 keys.',

    AddTagDescription: 'Appends a Tag to a User model',
    AddTagResponse: 'Gave $1 Tags to $2',

    AllIdledDescription:
        'Responds with a list of Users that have returned cards',
    AllIdledResponse: '$1 -> $2',

    AllOweDescription: 'Responds with a list of User models that owe cards',
    AllOweResponse: '$1',

    AppsDescription:
        'Responds with how many applications we have information stored for',
    AppsResponse: 'We have information for $1 apps',

    BanDescription: 'Bans a particular User',
    BanResponse: 'User $1 is now banned',

    BroadcastDescription: 'Sends a message to all friends',
    BroadcastResponse: 'Successfully broadcast:\n$1',

    CompareDescription:
        'Responds with a list of game keys I have that you are eligible to use',
    CompareResponse: 'You are eligible for the following games:\n',
    CompareResponseIter: '> $1',
    CompareResponseZero: 'Sorry we dont have any games available for you.',

    ContactDescription: 'This will contact an administrator',
    ContactResponse: 'You can contact me here: https://google.com/',

    GroupDescription: 'Links you to the group',
    GroupResponse: 'You can join the group here: ',

    OweDescription: 'Responds with a list of cards you owe',
    OweResponse: 'You owe:\n',
    OweResponseIter: '$1 ($2): $3',
    OweResponseZero: "You don't owe anything!",

    PrintRawDescription: '[DEBUG] Prints the raw JSOn of a User model',
    PrintRawResponse: 'InstanceType<User> -> $1',

    RedeemDescription: 'Responds with a game key',
    RedeemResponse: '',

    RedeemAllDescription:
        'Responds with all game keys applicable to your account and tier',
    RedeemAllResponse: '',

    RemoveTagDescription: 'Removes a Tag from a User model',
    RemoveTagResponse: '',

    StockDescription: 'Retrieves a list of all games we have keys for',
    StockResponse: '($1) $2',

    TierDescription: 'Responds with your current tier',
    TierResponse: '',

    UnbanDescription: 'Unban a particular User',
    UnbanResponse: '',

    UserModelInvalid: "You don't exist in our system. Try re-adding me!"
};

export default Data;
