declare module 'steam-user' {
    export = SteamUser;
    
    class SteamUser {
        constructor(conn: any, options: any);

        addFriend(steamID: any, callback: any): any;

        addFriendToGroup(groupID: any, userSteamID: any, callback: any): any;

        banFromChat(chatID: any, userID: any): void;

        blockUser(steamID: any, callback: any): any;

        cancelAuthTicket(appid: any, callback: any): any;

        cancelTradeRequest(steamID: any): void;

        changeTradeURL(callback: any): any;

        chatMessage(recipient: any, message: any, type?: any): void;

        chatMsg(recipient: any, message: any, type: any): void;

        chatTyping(recipient: any): void;

        createChatRoom(
            convertUserID: any,
            inviteUserID: any,
            callback: any
        ): any;

        createFriendsGroup(groupName: any, callback: any): any;

        deleteFriendsGroup(groupID: any, callback: any): any;

        downloadChunk(
            appID: any,
            depotID: any,
            chunkSha1: any,
            contentServer: any,
            callback: any
        ): any;

        downloadFile(
            appID: any,
            depotID: any,
            fileManifest: any,
            outputFilePath: any,
            callback: any
        ): any;

        enableTwoFactor(callback: any): any;

        finalizeTwoFactor(secret: any, activationCode: any, callback: any): any;

        gamesPlayed(apps: any, force: any): any;

        getAliases(userSteamIDs: any, callback: any): any;

        getAppBetaDecryptionKeys(appID: any, password: any, callback: any): any;

        getAppOwnershipTicket(appid: any, callback: any): any;

        getAppRichPresenceLocalization(
            appID: any,
            language: any,
            callback: any
        ): any;

        getAssetClassInfo(
            language: any,
            appid: any,
            classes: any,
            callback: any
        ): any;

        getAuthSecret(callback: any): any;

        getAuthSessionTicket(appid: any, callback: any): any;

        getCDNAuthToken(
            appID: any,
            depotID: any,
            hostname: any,
            callback: any
        ): any;

        getChatHistory(steamID: any, callback: any): any;

        getContentServers(callback: any): any;

        getCredentialChangeTimes(callback: any): any;

        getDepotDecryptionKey(appID: any, depotID: any, callback: any): any;

        getEmoticonList(callback: any): any;

        getEncryptedAppTicket(appid: any, userData: any, callback: any): any;

        getGameBadgeLevel(appid: any, callback: any): any;

        getManifest(
            appID: any,
            depotID: any,
            manifestID: any,
            callback: any
        ): any;

        getNicknames(callback: any): any;

        getOwnedApps(): any;

        getOwnedDepots(): any;

        getOwnedPackages(): any;

        getPersonas(steamids: any, callback: any): any;

        getPlayerCount(appid: any, callback: any): any;

        getProductAccessToken(apps: any, packages: any, callback: any): any;

        getProductChanges(sinceChangenumber: any, callback: any): any;

        getProductInfo(
            apps: any,
            packages: any,
            inclTokens: any,
            callback: any,
            requestType: any
        ): any;

        getPublishedFileDetails(ids: any, callback: any): any;

        getRawManifest(
            appID: any,
            depotID: any,
            manifestID: any,
            callback: any
        ): any;

        getServerIPsBySteamID(steamids: any, callback: any): any;

        getServerList(filter: any, limit: any, callback: any): any;

        getServerSteamIDsByIP(ips: any, callback: any): any;

        getSteamGuardDetails(callback: any): any;

        getSteamLevels(steamids: any, callback: any): any;

        getStoreTagNames(language: any, tagIDs: any, callback: any): any;

        getTradeURL(callback: any): any;

        inviteToChat(chatID: any, userID: any): void;

        inviteToGroup(userSteamID: any, groupSteamID: any): void;

        joinChat(steamID: any, callback: any): any;

        kickFromChat(chatID: any, userID: any): void;

        kickPlayingSession(callback: any): any;

        leaveChat(steamID: any): void;

        logOff(): void;

        logOn(details: any): void;

        ownsApp(appid: any): any;

        ownsDepot(depotid: any): any;

        ownsPackage(packageid: any): any;

        redeemKey(key: any, callback: any): any;

        relog(): void;

        removeFriend(steamID: any): void;

        removeFriendFromGroup(
            groupID: any,
            userSteamID: any,
            callback: any
        ): any;

        renameFriendsGroup(groupID: any, newName: any, callback: any): any;

        requestFreeLicense(appIDs: any, callback: any): any;

        requestValidationEmail(callback: any): any;

        respondToGroupInvite(groupSteamID: any, accept: any): void;

        sendToGC(
            appid: any,
            msgType: any,
            protoBufHeader: any,
            payload: any,
            callback: any
        ): void;

        serverQuery(conditions: any, callback: any): any;

        setChatOfficersOnly(steamID: any): void;

        setChatPrivate(steamID: any): void;

        setChatPublic(steamID: any): void;

        setNickname(steamID: any, nickname: any, callback: any): any;

        setOption(option: any, value: any): void;

        setOptions(options: any): void;

        setPersona(state: any, name: any): void;

        setSentry(sentry: any): void;

        setUIMode(mode: any): void;

        trade(steamID: any): void;

        unbanFromChat(chatID: any, userID: any): void;

        unblockUser(steamID: any, callback: any): any;

        unsetChatOfficersOnly(steamID: any): void;

        uploadRichPresence(appid: any, richPresence: any): void;

        validateAuthTickets(appid: any, tickets: any, callback: any): any;

        webLogOn(): void;

        static CurrencyData: {
            '1': {
                prepend: string;
            };
            '10': {
                prepend: string;
            };
            '11': {
                prepend: string;
            };
            '12': {
                prepend: string;
            };
            '13': {
                prepend: string;
            };
            '14': {
                prepend: string;
            };
            '15': {
                append: string;
            };
            '16': {
                prepend: string;
                whole: boolean;
            };
            '17': {
                append: string;
            };
            '18': {
                append: string;
            };
            '19': {
                prepend: string;
            };
            '2': {
                prepend: string;
            };
            '20': {
                prepend: string;
            };
            '21': {
                prepend: string;
            };
            '22': {
                prepend: string;
            };
            '23': {
                append: string;
            };
            '24': {
                append: string;
            };
            '25': {
                append: string;
            };
            '26': {
                append: string;
            };
            '27': {
                append: string;
            };
            '28': {
                append: string;
            };
            '29': {
                append: string;
            };
            '3': {
                append: string;
                commas: boolean;
            };
            '30': {
                append: string;
            };
            '31': {
                append: string;
            };
            '32': {
                append: string;
            };
            '4': {
                append: string;
            };
            '5': {
                append: string;
                commas: boolean;
                whole: boolean;
            };
            '6': {
                append: string;
            };
            '7': {
                append: string;
                commas: boolean;
            };
            '8': {
                prepend: string;
                whole: boolean;
            };
            '9': {
                append: string;
                commas: boolean;
            };
        };

        static EAccountFlags: {
            '0': string;
            '1': string;
            '1024': string;
            '1048576': string;
            '1073741824': string;
            '128': string;
            '131072': string;
            '134217728': string;
            '16': string;
            '16384': string;
            '16777216': string;
            '2': string;
            '2048': string;
            '2097152': string;
            '256': string;
            '262144': string;
            '268435456': string;
            '32': string;
            '32768': string;
            '33554432': string;
            '4': string;
            '4096': string;
            '4194304': string;
            '512': string;
            '524288': string;
            '536870912': string;
            '64': string;
            '65536': string;
            '67108864': string;
            '8': string;
            '8192': string;
            '8388608': string;
            Admin: number;
            AppEditor: number;
            BannedFromWebAPI: number;
            ClansOnlyFromFriends: number;
            Debug: number;
            Disabled: number;
            EmailValidated: number;
            ForceEmailVerification: number;
            ForcePasswordChange: number;
            GlobalModerator: number;
            HWIDSet: number;
            LimitedUser: number;
            LimitedUserForce: number;
            Lockdown: number;
            LogonExtraSecurity: number;
            LogonExtraSecurityDisabled: number;
            MarketingTreatment: number;
            MasterAppEditor: number;
            NeedLogs: number;
            NeedsSSANextSteamLogon: number;
            NormalUser: number;
            OGGInviteOptOut: number;
            ParentalSettings: number;
            PasswordSet: number;
            PersonaNameSet: number;
            PersonalQASet: number;
            Steam2MigrationComplete: number;
            Supervisor: number;
            Support: number;
            ThirdPartySupport: number;
            Unbannable: number;
            VacBeta: number;
        };

        static EAccountType: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            AnonGameServer: number;
            AnonUser: number;
            Chat: number;
            Clan: number;
            ConsoleUser: number;
            ContentServer: number;
            GameServer: number;
            Individual: number;
            Invalid: number;
            Max: number;
            Multiseat: number;
            Pending: number;
        };

        static EActivationCodeClass: {
            '0': string;
            '1': string;
            '2': string;
            '2147483647': string;
            '3': string;
            '4': string;
            '4294967295': string;
            '5': string;
            DBLookup: number;
            Doom3CDKey: number;
            Invalid: number;
            Max: number;
            Steam2010Key: number;
            Test: number;
            ValveCDKey: number;
            WonCDKey: number;
        };

        static EAppInfoSection: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            All: number;
            Common: number;
            Community: number;
            Config: number;
            DRM: number;
            DRM_UNUSED: number;
            Depots: number;
            Extended: number;
            First: number;
            Install: number;
            Items: number;
            ItemsUNUSED: number;
            Localization: number;
            Max: number;
            OGG: number;
            Policies: number;
            Stats: number;
            Store: number;
            SysReqs: number;
            UFS: number;
            Unknown: number;
            VAC: number;
            VAC_UNUSED: number;
        };

        static EAppUsageEvent: {
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            GameLaunch: number;
            GameLaunchFreeWeekend: number;
            GameLaunchTrial: number;
            InGameAdViewed: number;
            MarketingMessageView: number;
            Media: number;
            PreloadFinish: number;
            PreloadStart: number;
        };

        static EAudioFormat: {
            '0': string;
            '1': string;
            '16BitLittleEndian': number;
            '2': string;
            Float: number;
            None: number;
        };

        static EAuthSessionResponse: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            AuthTicketCanceled: number;
            AuthTicketInvalid: number;
            AuthTicketInvalidAlreadyUsed: number;
            LoggedInElseWhere: number;
            NoLicenseOrExpired: number;
            OK: number;
            PublisherIssuedBan: number;
            UserNotConnectedToSteam: number;
            VACBanned: number;
            VACCheckTimedOut: number;
        };

        static EBillingType: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            AutoGrant: number;
            BillMonthly: number;
            BillOnceOnly: number;
            BillOnceOrCDKey: number;
            CommercialLicense: number;
            FreeCommercialLicense: number;
            FreeOnDemand: number;
            Gift: number;
            GuestPass: number;
            HardwarePromo: number;
            NoCost: number;
            NumBillingTypes: number;
            OEMTicket: number;
            ProofOfPrepurchaseOnly: number;
            RecurringOption: number;
            Rental: number;
            Repurchaseable: number;
        };

        static EBroadcastWatchLocation: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            Chat_Tab: number;
            Chat_WatchParty: number;
            CommunityPage: number;
            InGame: number;
            Invalid: number;
            SteamTV_Tab: number;
            SteamTV_WatchParty: number;
            StoreAppPage: number;
        };

        static EChatAction: {
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            Ban: number;
            CloseChat: number;
            EndVoiceSpeak: number;
            InviteChat: number;
            Kick: number;
            LockChat: number;
            SetInvisibleToFriends: number;
            SetJoinable: number;
            SetModerated: number;
            SetOwner: number;
            SetUnjoinable: number;
            SetUnmoderated: number;
            SetVisibleToFriends: number;
            StartVoiceSpeak: number;
            UnBan: number;
            UnlockChat: number;
        };

        static EChatActionResult: {
            '1': string;
            '10': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            ChatDoesntExist: number;
            ChatFull: number;
            Error: number;
            NotAllowedOnBannedUser: number;
            NotAllowedOnChatOwner: number;
            NotAllowedOnClanMember: number;
            NotAllowedOnSelf: number;
            NotPermitted: number;
            Success: number;
            VoiceSlotsFull: number;
        };

        static EChatEntryType: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            ChatMsg: number;
            Disconnected: number;
            Emote: number;
            Entered: number;
            HistoricalChat: number;
            Invalid: number;
            InviteGame: number;
            LeftConversation: number;
            LinkBlocked: number;
            LobbyGameStart: number;
            Reserved1: number;
            Reserved2: number;
            Typing: number;
            WasBanned: number;
            WasKicked: number;
        };

        static EChatFlags: {
            '1': string;
            '2': string;
            '4': string;
            '8': string;
            InvisibleToFriends: number;
            Locked: number;
            Moderated: number;
            Unjoinable: number;
        };

        static EChatInfoType: {
            '1': string;
            '2': string;
            '3': string;
            InfoUpdate: number;
            MemberLimitChange: number;
            StateChange: number;
        };

        static EChatMemberStateChange: {
            '1': string;
            '16': string;
            '2': string;
            '4': string;
            '4096': string;
            '8': string;
            '8192': string;
            Banned: number;
            Disconnected: number;
            Entered: number;
            Kicked: number;
            Left: number;
            VoiceDoneSpeaking: number;
            VoiceSpeaking: number;
        };

        static EChatPermission: {
            '1': string;
            '1019': string;
            '128': string;
            '16': string;
            '2': string;
            '256': string;
            '32': string;
            '512': string;
            '64': string;
            '8': string;
            Ban: number;
            ChangeAccess: number;
            ChangePermissions: number;
            Close: number;
            EveryoneDefault: number;
            EveryoneNotInClanDefault: number;
            Invite: number;
            Kick: number;
            Mask: number;
            MemberDefault: number;
            Mute: number;
            OfficerDefault: number;
            OwnerDefault: number;
            SetMetadata: number;
            Talk: number;
        };

        static EChatRoomEnterResponse: {
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            Banned: number;
            ClanDisabled: number;
            CommunityBan: number;
            DoesntExist: number;
            Error: number;
            Full: number;
            Limited: number;
            MemberBlockedYou: number;
            NoRankingDataLobby: number;
            NoRankingDataUser: number;
            NotAllowed: number;
            RankOutOfRange: number;
            Success: number;
            YouBlockedMember: number;
        };

        static EChatRoomGroupRank: {
            '0': string;
            '10': string;
            '15': string;
            '20': string;
            '30': string;
            '40': string;
            '50': string;
            '99': string;
            Default: number;
            Guest: number;
            Member: number;
            Moderator: number;
            Officer: number;
            Owner: number;
            TestInvalid: number;
            Viewer: number;
        };

        static EChatRoomJoinState: {
            '0': string;
            '1': string;
            '2': string;
            '99': string;
            Default: number;
            Joined: number;
            None: number;
            TestInvalid: number;
        };

        static EChatRoomMemberStateChange: {
            '0': string;
            '1': string;
            '10': string;
            '12': string;
            '2': string;
            '3': string;
            '4': string;
            '7': string;
            '8': string;
            '9': string;
            Banned: number;
            Invalid: number;
            InviteDismissed: number;
            Invited: number;
            Joined: number;
            Kicked: number;
            Muted: number;
            Parted: number;
            RankChanged: number;
            RolesChanged: number;
        };

        static EChatRoomNotificationLevel: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            AllMessages: number;
            Invalid: number;
            MentionAll: number;
            MentionMe: number;
            None: number;
        };

        static EChatRoomServerMessage: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '8': string;
            '9': string;
            AppCustom: number;
            ChatRoomAvatarChanged: number;
            ChatRoomTaglineChanged: number;
            Invalid: number;
            InviteDismissed: number;
            Invited: number;
            Joined: number;
            Kicked: number;
            Parted: number;
            RenameChatRoom: number;
        };

        static EChatRoomType: {
            '1': string;
            '2': string;
            '3': string;
            Friend: number;
            Lobby: number;
            MUC: number;
        };

        static EClanPermission: {
            '0': string;
            '1': string;
            '128': string;
            '16': string;
            '2': string;
            '3': string;
            '4': string;
            '8': string;
            AllMembers: number;
            Member: number;
            Moderator: number;
            Nobody: number;
            NonMember: number;
            OGGGameOwner: number;
            Officer: number;
            Owner: number;
            OwnerAndOfficer: number;
            OwnerOfficerModerator: number;
        };

        static EClanRank: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            Member: number;
            Moderator: number;
            None: number;
            Officer: number;
            Owner: number;
        };

        static EClanRelationship: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            Blocked: number;
            Invited: number;
            KickAcknowledged: number;
            Kicked: number;
            Member: number;
            None: number;
        };

        static EClientPersonaStateFlag: {
            '1': string;
            '1024': string;
            '128': string;
            '16': string;
            '2': string;
            '2048': string;
            '256': string;
            '32': string;
            '4': string;
            '512': string;
            '64': string;
            '8': string;
            ClanInfo: number;
            ClanTag: number;
            Facebook: number;
            GameDataBlob: number;
            GameExtraInfo: number;
            LastSeen: number;
            Metadata: number;
            PlayerName: number;
            Presence: number;
            QueryPort: number;
            SourceID: number;
            Status: number;
        };

        static EClientStat: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            BytesDownloaded: number;
            Max: number;
            P2PConnectionsRelay: number;
            P2PConnectionsUDP: number;
            P2PGameConnections: number;
            P2PVoiceConnections: number;
        };

        static EClientStatAggregateMethod: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            Event: number;
            LatestOnly: number;
            Scalar: number;
            Sum: number;
        };

        static EClientUIMode: {
            BigPicture: number;
            Mobile: number;
            None: number;
            Web: number;
        };

        static EConnectionProtocol: {
            Auto: number;
            TCP: number;
            WebSocket: number;
        };

        static EContentDownloadSourceType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            CDN: number;
            CS: number;
            Invalid: number;
            LANPeer: number;
            LCS: number;
            Max: number;
            OpenCache: number;
            ProxyCache: number;
            SLS: number;
            SteamCache: number;
        };

        static EControllerLayoutType: {
            '0': string;
            '1': string;
            Phone: number;
            Tablet: number;
        };

        static ECurrencyCode: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '2': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
            '24': string;
            '25': string;
            '26': string;
            '27': string;
            '28': string;
            '29': string;
            '3': string;
            '30': string;
            '31': string;
            '32': string;
            '34': string;
            '35': string;
            '36': string;
            '37': string;
            '38': string;
            '39': string;
            '4': string;
            '40': string;
            '41': string;
            '42': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            AED: number;
            ARS: number;
            AUD: number;
            BRL: number;
            BYN: number;
            CAD: number;
            CHF: number;
            CLP: number;
            CNY: number;
            COP: number;
            CRC: number;
            EUR: number;
            GBP: number;
            HKD: number;
            IDR: number;
            ILS: number;
            INR: number;
            Invalid: number;
            JPY: number;
            KRW: number;
            KWD: number;
            KZT: number;
            MXN: number;
            MYR: number;
            Max: number;
            NOK: number;
            NZD: number;
            PEN: number;
            PHP: number;
            PLN: number;
            QAR: number;
            RUB: number;
            SAR: number;
            SGD: number;
            THB: number;
            TRY: number;
            TWD: number;
            UAH: number;
            USD: number;
            UYU: number;
            VND: number;
            ZAR: number;
        };

        static EDRMBlobDownloadErrorDetail: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '131071': string;
            '131072': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '65536': string;
            '7': string;
            '8': string;
            '9': string;
            AppIdMismatch: number;
            AppIdUnexpected: number;
            AppliedSignatureCorrupt: number;
            ApplyMergeGuid: number;
            ApplySignature: number;
            ApplyStrips: number;
            ApplyValveSignatureHeader: number;
            DownloadFailed: number;
            NextBase: number;
            None: number;
            OpenZip: number;
            PathManipulationError: number;
            ReadZipDirectory: number;
            TargetLocked: number;
            TargetLocked_Base: number;
            TargetLocked_Max: number;
            UnexpectedZipEntry: number;
            UnknownBlobType: number;
            UnzipFullFile: number;
            UnzipMergeGuid: number;
            UnzipSignature: number;
            UnzipStrips: number;
            UnzipValveSignatureHeader: number;
        };

        static EDRMBlobDownloadType: {
            '0': string;
            '1': string;
            '16': string;
            '2': string;
            '32': string;
            '4': string;
            '64': string;
            '7': string;
            '8': string;
            AddTimestamp: number;
            AllMask: number;
            Compressed: number;
            Error: number;
            File: number;
            HighPriority: number;
            IsJob: number;
            LowPriority: number;
            Parts: number;
        };

        static EDenyReason: {
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            Cheater: number;
            Generic: number;
            IncompatibleAnticheat: number;
            IncompatibleSoftware: number;
            InvalidVersion: number;
            LoggedInElseWhere: number;
            MemoryCorruption: number;
            NoLicense: number;
            NotLoggedOn: number;
            SteamConnectionError: number;
            SteamConnectionLost: number;
            SteamOwnerLeftGuestUser: number;
            SteamResponseTimedOut: number;
            SteamValidationStalled: number;
            UnknownText: number;
        };

        static EDepotFileFlag: {
            '1': string;
            '128': string;
            '16': string;
            '2': string;
            '256': string;
            '32': string;
            '4': string;
            '512': string;
            '64': string;
            '8': string;
            CustomExecutable: number;
            Directory: number;
            Encrypted: number;
            Executable: number;
            Hidden: number;
            InstallScript: number;
            ReadOnly: number;
            Symlink: number;
            UserConfig: number;
            VersionedUserConfig: number;
        };

        static EEconTradeResponse: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '18': string;
            '2': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
            '24': string;
            '25': string;
            '26': string;
            '27': string;
            '28': string;
            '29': string;
            '3': string;
            '30': string;
            '31': string;
            '4': string;
            '5': string;
            '50': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            Accepted: number;
            AlreadyHasTradeRequest: number;
            AlreadyTrading: number;
            Cancel: number;
            ConnectionFailed: number;
            CyberCafeInitiator: number;
            CyberCafeTarget: number;
            Declined: number;
            Disabled: number;
            InitiatorBlockedTarget: number;
            InitiatorNeedsSteamGuard: number;
            InitiatorNeedsVerifiedEmail: number;
            InitiatorNewDeviceCooldown: number;
            InitiatorPasswordResetProbation: number;
            InitiatorRecentEmailChange: number;
            InitiatorSentInvalidCookie: number;
            InitiatorSteamGuardDuration: number;
            NeedsEmailConfirmation: number;
            NeedsMobileConfirmation: number;
            NoResponse: number;
            NotLoggedIn: number;
            OKToDeliver: number;
            SchoolLabInitiator: number;
            SchoolLabTarget: number;
            TargetAccountCannotTrade: number;
            TargetAlreadyTrading: number;
            TooSoon: number;
            TooSoonPenalty: number;
            TradeBannedInitiator: number;
            TradeBannedTarget: number;
            TradingHoldForClearedTradeOffersInitiator: number;
            WouldExceedMaxAssetCount: number;
        };

        static EFrameAccumulatedStat: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            CaptureDurationMS: number;
            ClientBitrateKbitPerSec: number;
            ClientDurationMS: number;
            ConvertDurationMS: number;
            DecodeDurationMS: number;
            DisplayDurationMS: number;
            EncodeDurationMS: number;
            FPS: number;
            FrameDurationMS: number;
            GameLatencyMS: number;
            InputLatencyMS: number;
            LinkBandwidthKbitPerSec: number;
            NetworkDurationMS: number;
            PacketLossPercentage: number;
            PingTimeMS: number;
            RoundTripLatencyMS: number;
            ServerBitrateKbitPerSec: number;
            ServerDurationMS: number;
            SteamDurationMS: number;
        };

        static EFriendFlags: {
            '0': string;
            '1': string;
            '1024': string;
            '128': string;
            '16': string;
            '2': string;
            '2048': string;
            '256': string;
            '4': string;
            '4096': string;
            '512': string;
            '65535': string;
            '8': string;
            Blocked: number;
            ChatMember: number;
            ClanMember: number;
            FlagAll: number;
            FriendshipRequested: number;
            Ignored: number;
            IgnoredFriend: number;
            Immediate: number;
            None: number;
            OnGameServer: number;
            RequestingFriendship: number;
            RequestingInfo: number;
            Suggested: number;
        };

        static EFriendRelationship: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            Blocked: number;
            Friend: number;
            Ignored: number;
            IgnoredFriend: number;
            Max: number;
            None: number;
            RequestInitiator: number;
            RequestRecipient: number;
            SuggestedFriend: number;
        };

        static EGameSearchAction: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            Accept: number;
            Cancel: number;
            Decline: number;
            None: number;
        };

        static EGameSearchResult: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            Invalid: number;
            SearchCanceled: number;
            SearchCompleteAccepted: number;
            SearchCompleteDeclined: number;
            SearchFailedNoHosts: number;
            SearchGameFound: number;
            SearchInProgress: number;
        };

        static EHIDDeviceDisconnectMethod: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            Bluetooth: number;
            FeatureReport: number;
            OutputReport: number;
            Unknown: number;
        };

        static EHIDDeviceLocation: {
            '0': string;
            '2': string;
            '3': string;
            Any: number;
            Local: number;
            Remote: number;
        };

        static EIntroducerRouting: {
            '0': string;
            '1': string;
            '2': string;
            FileShare: number;
            P2PNetworking: number;
            P2PVoiceChat: number;
        };

        static EJSRegisterMethodType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            Callback: number;
            Function: number;
            Invalid: number;
            Promise: number;
        };

        static EKeyEscrowUsage: {
            '0': string;
            StreamingDevice: number;
        };

        static ELeaderboardDataRequest: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            Friends: number;
            Global: number;
            GlobalAroundUser: number;
            Users: number;
        };

        static ELeaderboardDisplayType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            None: number;
            Numeric: number;
            TimeMilliSeconds: number;
            TimeSeconds: number;
        };

        static ELeaderboardSortMethod: {
            '0': string;
            '1': string;
            '2': string;
            Ascending: number;
            Descending: number;
            None: number;
        };

        static ELeaderboardUploadScoreMethod: {
            '0': string;
            '1': string;
            '2': string;
            ForceUpdate: number;
            KeepBest: number;
            None: number;
        };

        static ELicenseFlags: {
            '0': string;
            '1': string;
            '1024': string;
            '128': string;
            '16': string;
            '2': string;
            '2048': string;
            '256': string;
            '32': string;
            '4': string;
            '512': string;
            '64': string;
            '8': string;
            CancelledByAdmin: number;
            CancelledByFriendlyFraudLock: number;
            CancelledByUser: number;
            Expired: number;
            ForceRunRestriction: number;
            ImportedFromSteam2: number;
            LowViolenceContent: number;
            None: number;
            NotActivated: number;
            Pending: number;
            RegionRestrictionExpired: number;
            Renew: number;
            RenewalFailed: number;
        };

        static ELicenseType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            LimitedUseDelayedActivation: number;
            NoLicense: number;
            RecurringCharge: number;
            RecurringChargeLimitedUse: number;
            RecurringChargeLimitedUseWithOverages: number;
            RecurringOption: number;
            SinglePurchase: number;
            SinglePurchaseLimitedUse: number;
        };

        static ELogFileType: {
            '0': string;
            '1': string;
            '2': string;
            SystemBoot: number;
            SystemDebug: number;
            SystemReset: number;
        };

        static EMachineIDType: {
            AccountNameGenerated: number;
            AlwaysRandom: number;
            None: number;
            PersistentRandom: number;
        };

        static EMarketingMessageFlags: {
            '0': string;
            '1': string;
            '2': string;
            '4': string;
            '8': string;
            HighPriority: number;
            None: number;
            PlatformLinux: number;
            PlatformMac: number;
            PlatformRestrictions: number;
            PlatformWindows: number;
        };

        static EMsg: {
            '0': string;
            '1': string;
            '100': string;
            '1000': string;
            '1004': string;
            '1005': string;
            '1006': string;
            '1007': string;
            '1008': string;
            '1009': string;
            '1010': string;
            '1014': string;
            '1015': string;
            '1017': string;
            '1018': string;
            '1019': string;
            '1020': string;
            '1023': string;
            '1024': string;
            '1025': string;
            '1026': string;
            '1027': string;
            '1028': string;
            '1100': string;
            '1101': string;
            '1102': string;
            '1103': string;
            '1104': string;
            '1105': string;
            '1106': string;
            '1107': string;
            '1108': string;
            '1109': string;
            '1110': string;
            '1111': string;
            '1112': string;
            '1113': string;
            '1114': string;
            '1115': string;
            '1116': string;
            '1117': string;
            '1118': string;
            '1119': string;
            '1120': string;
            '1121': string;
            '1122': string;
            '1123': string;
            '1124': string;
            '1125': string;
            '1126': string;
            '1127': string;
            '1128': string;
            '1129': string;
            '113': string;
            '1130': string;
            '1131': string;
            '1132': string;
            '1133': string;
            '115': string;
            '120': string;
            '1200': string;
            '1201': string;
            '1202': string;
            '1203': string;
            '1204': string;
            '121': string;
            '123': string;
            '124': string;
            '126': string;
            '127': string;
            '128': string;
            '129': string;
            '130': string;
            '1300': string;
            '1301': string;
            '1302': string;
            '1303': string;
            '1304': string;
            '1305': string;
            '131': string;
            '132': string;
            '133': string;
            '134': string;
            '135': string;
            '136': string;
            '137': string;
            '138': string;
            '139': string;
            '140': string;
            '1400': string;
            '1401': string;
            '1402': string;
            '1404': string;
            '1406': string;
            '1407': string;
            '1408': string;
            '1409': string;
            '141': string;
            '1410': string;
            '1411': string;
            '1413': string;
            '1414': string;
            '1415': string;
            '1416': string;
            '1417': string;
            '1418': string;
            '1419': string;
            '142': string;
            '1420': string;
            '1421': string;
            '1422': string;
            '1423': string;
            '1424': string;
            '1425': string;
            '1426': string;
            '1427': string;
            '1428': string;
            '1429': string;
            '143': string;
            '1430': string;
            '1431': string;
            '1432': string;
            '1433': string;
            '1434': string;
            '1435': string;
            '1436': string;
            '1437': string;
            '1438': string;
            '1439': string;
            '144': string;
            '1440': string;
            '1441': string;
            '1445': string;
            '1446': string;
            '1448': string;
            '1449': string;
            '145': string;
            '1450': string;
            '1451': string;
            '1452': string;
            '1453': string;
            '1454': string;
            '1455': string;
            '1456': string;
            '1457': string;
            '1458': string;
            '1459': string;
            '146': string;
            '1460': string;
            '1461': string;
            '1462': string;
            '1463': string;
            '1464': string;
            '1465': string;
            '1468': string;
            '1469': string;
            '147': string;
            '1470': string;
            '1471': string;
            '1472': string;
            '1473': string;
            '1474': string;
            '1475': string;
            '1476': string;
            '1477': string;
            '1478': string;
            '1479': string;
            '148': string;
            '1480': string;
            '1481': string;
            '1482': string;
            '1483': string;
            '1484': string;
            '1485': string;
            '1486': string;
            '1487': string;
            '1488': string;
            '1489': string;
            '149': string;
            '1490': string;
            '1491': string;
            '1492': string;
            '1493': string;
            '1494': string;
            '1495': string;
            '1496': string;
            '1497': string;
            '1498': string;
            '150': string;
            '1500': string;
            '1501': string;
            '1502': string;
            '1503': string;
            '1504': string;
            '1505': string;
            '1506': string;
            '1507': string;
            '1508': string;
            '1509': string;
            '151': string;
            '1510': string;
            '1511': string;
            '1512': string;
            '1513': string;
            '1514': string;
            '1515': string;
            '1516': string;
            '1517': string;
            '1518': string;
            '1519': string;
            '152': string;
            '1600': string;
            '1601': string;
            '1602': string;
            '1603': string;
            '1604': string;
            '1605': string;
            '1606': string;
            '1607': string;
            '1608': string;
            '1609': string;
            '1610': string;
            '1611': string;
            '1612': string;
            '1613': string;
            '1614': string;
            '1615': string;
            '1616': string;
            '1617': string;
            '1618': string;
            '1619': string;
            '1620': string;
            '1621': string;
            '1622': string;
            '1623': string;
            '1624': string;
            '1625': string;
            '1626': string;
            '1627': string;
            '1628': string;
            '1629': string;
            '1630': string;
            '1631': string;
            '1700': string;
            '1701': string;
            '1702': string;
            '1703': string;
            '1800': string;
            '1801': string;
            '1802': string;
            '1803': string;
            '1804': string;
            '1805': string;
            '1806': string;
            '1900': string;
            '1901': string;
            '1902': string;
            '1903': string;
            '2': string;
            '200': string;
            '201': string;
            '202': string;
            '203': string;
            '204': string;
            '205': string;
            '215': string;
            '2200': string;
            '2201': string;
            '2202': string;
            '2203': string;
            '2204': string;
            '2205': string;
            '2206': string;
            '2207': string;
            '2208': string;
            '2209': string;
            '221': string;
            '2210': string;
            '2211': string;
            '2212': string;
            '2213': string;
            '2214': string;
            '2215': string;
            '2216': string;
            '2217': string;
            '2218': string;
            '2219': string;
            '2220': string;
            '2221': string;
            '2222': string;
            '2223': string;
            '2224': string;
            '2225': string;
            '2226': string;
            '2227': string;
            '2228': string;
            '2229': string;
            '2230': string;
            '2231': string;
            '2232': string;
            '2233': string;
            '2234': string;
            '2235': string;
            '2236': string;
            '2237': string;
            '225': string;
            '226': string;
            '227': string;
            '228': string;
            '229': string;
            '230': string;
            '233': string;
            '234': string;
            '235': string;
            '236': string;
            '237': string;
            '238': string;
            '239': string;
            '2500': string;
            '2502': string;
            '2900': string;
            '2902': string;
            '2903': string;
            '2904': string;
            '2905': string;
            '2906': string;
            '2907': string;
            '2908': string;
            '300': string;
            '3000': string;
            '3001': string;
            '3002': string;
            '301': string;
            '307': string;
            '308': string;
            '309': string;
            '3100': string;
            '3101': string;
            '3102': string;
            '3103': string;
            '3104': string;
            '3105': string;
            '3106': string;
            '3107': string;
            '3108': string;
            '3109': string;
            '3110': string;
            '3111': string;
            '3112': string;
            '3113': string;
            '3114': string;
            '3115': string;
            '3116': string;
            '3117': string;
            '3118': string;
            '314': string;
            '3150': string;
            '3151': string;
            '3152': string;
            '3153': string;
            '3154': string;
            '3155': string;
            '3156': string;
            '3157': string;
            '3158': string;
            '3159': string;
            '316': string;
            '3160': string;
            '3161': string;
            '3162': string;
            '317': string;
            '318': string;
            '319': string;
            '320': string;
            '3200': string;
            '3201': string;
            '3202': string;
            '3203': string;
            '3204': string;
            '3205': string;
            '3206': string;
            '3207': string;
            '3208': string;
            '3209': string;
            '321': string;
            '3210': string;
            '3211': string;
            '3212': string;
            '3213': string;
            '3214': string;
            '322': string;
            '323': string;
            '324': string;
            '325': string;
            '326': string;
            '327': string;
            '328': string;
            '329': string;
            '330': string;
            '331': string;
            '332': string;
            '333': string;
            '3400': string;
            '3401': string;
            '3402': string;
            '3403': string;
            '3404': string;
            '3406': string;
            '3600': string;
            '3601': string;
            '3602': string;
            '3603': string;
            '3604': string;
            '3605': string;
            '3606': string;
            '3607': string;
            '3608': string;
            '3609': string;
            '3610': string;
            '3611': string;
            '3612': string;
            '3613': string;
            '3614': string;
            '3615': string;
            '3616': string;
            '3617': string;
            '3618': string;
            '3619': string;
            '3620': string;
            '3621': string;
            '3622': string;
            '3623': string;
            '3624': string;
            '3625': string;
            '3626': string;
            '3628': string;
            '3629': string;
            '3630': string;
            '3631': string;
            '400': string;
            '4000': string;
            '4001': string;
            '4002': string;
            '4003': string;
            '4004': string;
            '4005': string;
            '4006': string;
            '4007': string;
            '4008': string;
            '4009': string;
            '401': string;
            '4010': string;
            '4011': string;
            '4012': string;
            '4013': string;
            '4014': string;
            '4015': string;
            '4016': string;
            '4017': string;
            '4018': string;
            '4019': string;
            '402': string;
            '4020': string;
            '4021': string;
            '4022': string;
            '4023': string;
            '4024': string;
            '4025': string;
            '4026': string;
            '4027': string;
            '4028': string;
            '4029': string;
            '403': string;
            '4030': string;
            '4031': string;
            '4032': string;
            '4033': string;
            '4034': string;
            '4035': string;
            '4036': string;
            '4037': string;
            '4038': string;
            '4039': string;
            '404': string;
            '4040': string;
            '4041': string;
            '4042': string;
            '4043': string;
            '4044': string;
            '4045': string;
            '4046': string;
            '4047': string;
            '4048': string;
            '4049': string;
            '405': string;
            '4050': string;
            '4051': string;
            '4052': string;
            '4053': string;
            '4054': string;
            '4055': string;
            '4056': string;
            '4057': string;
            '4058': string;
            '4059': string;
            '406': string;
            '4060': string;
            '4061': string;
            '4062': string;
            '4063': string;
            '4064': string;
            '4065': string;
            '4066': string;
            '4067': string;
            '4068': string;
            '4069': string;
            '407': string;
            '4070': string;
            '4071': string;
            '4072': string;
            '4073': string;
            '4074': string;
            '4075': string;
            '4076': string;
            '4077': string;
            '4078': string;
            '4079': string;
            '408': string;
            '4080': string;
            '4081': string;
            '4082': string;
            '4083': string;
            '4084': string;
            '4085': string;
            '4086': string;
            '4087': string;
            '4088': string;
            '4089': string;
            '409': string;
            '4090': string;
            '4091': string;
            '4092': string;
            '4093': string;
            '4094': string;
            '4095': string;
            '4096': string;
            '4097': string;
            '4098': string;
            '4099': string;
            '410': string;
            '4100': string;
            '4101': string;
            '4102': string;
            '4103': string;
            '4104': string;
            '4105': string;
            '4106': string;
            '4107': string;
            '4108': string;
            '4109': string;
            '411': string;
            '4110': string;
            '4111': string;
            '4112': string;
            '4113': string;
            '4114': string;
            '4115': string;
            '4116': string;
            '4117': string;
            '4118': string;
            '4119': string;
            '412': string;
            '4120': string;
            '4121': string;
            '4122': string;
            '4123': string;
            '4124': string;
            '4125': string;
            '4126': string;
            '4127': string;
            '4128': string;
            '4129': string;
            '413': string;
            '4130': string;
            '4131': string;
            '4132': string;
            '4133': string;
            '4134': string;
            '4135': string;
            '4136': string;
            '4137': string;
            '4138': string;
            '4139': string;
            '414': string;
            '4140': string;
            '4141': string;
            '4142': string;
            '4143': string;
            '4144': string;
            '4145': string;
            '4146': string;
            '4147': string;
            '4148': string;
            '4149': string;
            '415': string;
            '4150': string;
            '4151': string;
            '4152': string;
            '4153': string;
            '4154': string;
            '4155': string;
            '4156': string;
            '4157': string;
            '4158': string;
            '4159': string;
            '416': string;
            '4160': string;
            '4161': string;
            '4162': string;
            '4163': string;
            '4165': string;
            '4166': string;
            '4172': string;
            '4173': string;
            '4174': string;
            '4175': string;
            '4176': string;
            '4177': string;
            '4178': string;
            '4179': string;
            '4180': string;
            '4181': string;
            '4182': string;
            '4183': string;
            '4184': string;
            '4185': string;
            '4186': string;
            '4187': string;
            '4188': string;
            '4189': string;
            '419': string;
            '4190': string;
            '4191': string;
            '4194': string;
            '4195': string;
            '4196': string;
            '4197': string;
            '4198': string;
            '4199': string;
            '420': string;
            '4200': string;
            '4201': string;
            '4202': string;
            '4203': string;
            '4204': string;
            '4205': string;
            '4206': string;
            '4209': string;
            '421': string;
            '4210': string;
            '4211': string;
            '4212': string;
            '4213': string;
            '4216': string;
            '4219': string;
            '422': string;
            '4220': string;
            '4222': string;
            '4223': string;
            '4224': string;
            '4225': string;
            '4226': string;
            '4227': string;
            '4228': string;
            '423': string;
            '4231': string;
            '4232': string;
            '4234': string;
            '4236': string;
            '4237': string;
            '4238': string;
            '4239': string;
            '424': string;
            '4240': string;
            '4241': string;
            '4242': string;
            '4244': string;
            '4245': string;
            '4246': string;
            '4247': string;
            '4248': string;
            '4249': string;
            '425': string;
            '4250': string;
            '4251': string;
            '4252': string;
            '4253': string;
            '4254': string;
            '4255': string;
            '4256': string;
            '4257': string;
            '4258': string;
            '4259': string;
            '426': string;
            '4260': string;
            '4261': string;
            '4262': string;
            '4263': string;
            '4264': string;
            '4265': string;
            '4266': string;
            '4267': string;
            '4268': string;
            '4269': string;
            '427': string;
            '4270': string;
            '4271': string;
            '4272': string;
            '4275': string;
            '4276': string;
            '4277': string;
            '4278': string;
            '4279': string;
            '428': string;
            '4280': string;
            '4281': string;
            '4282': string;
            '4283': string;
            '4284': string;
            '4285': string;
            '4286': string;
            '4287': string;
            '4288': string;
            '4289': string;
            '429': string;
            '4290': string;
            '4291': string;
            '4292': string;
            '4293': string;
            '4294': string;
            '4295': string;
            '4296': string;
            '4297': string;
            '4298': string;
            '4299': string;
            '430': string;
            '4300': string;
            '4301': string;
            '4302': string;
            '4305': string;
            '4306': string;
            '4307': string;
            '4308': string;
            '4309': string;
            '431': string;
            '4310': string;
            '4311': string;
            '4312': string;
            '4313': string;
            '4314': string;
            '4315': string;
            '4316': string;
            '4317': string;
            '432': string;
            '4320': string;
            '4321': string;
            '4322': string;
            '4323': string;
            '4324': string;
            '4325': string;
            '4326': string;
            '4327': string;
            '4328': string;
            '4329': string;
            '433': string;
            '4330': string;
            '4331': string;
            '4332': string;
            '4333': string;
            '4334': string;
            '4335': string;
            '4336': string;
            '4337': string;
            '4338': string;
            '4339': string;
            '4340': string;
            '4341': string;
            '4342': string;
            '4343': string;
            '4344': string;
            '4345': string;
            '4346': string;
            '4347': string;
            '4348': string;
            '4349': string;
            '4350': string;
            '4351': string;
            '4352': string;
            '4353': string;
            '4354': string;
            '4355': string;
            '4356': string;
            '4357': string;
            '4358': string;
            '4359': string;
            '4360': string;
            '4361': string;
            '4362': string;
            '4363': string;
            '4364': string;
            '4365': string;
            '4366': string;
            '4367': string;
            '4368': string;
            '4372': string;
            '4373': string;
            '4374': string;
            '4375': string;
            '4376': string;
            '4377': string;
            '4378': string;
            '4379': string;
            '4380': string;
            '4381': string;
            '4382': string;
            '4383': string;
            '4384': string;
            '4385': string;
            '4386': string;
            '4387': string;
            '4388': string;
            '4389': string;
            '4390': string;
            '4391': string;
            '4392': string;
            '4393': string;
            '4394': string;
            '4395': string;
            '4396': string;
            '4397': string;
            '4398': string;
            '4399': string;
            '4400': string;
            '4401': string;
            '4402': string;
            '4403': string;
            '4404': string;
            '4405': string;
            '4406': string;
            '4407': string;
            '4408': string;
            '4409': string;
            '4410': string;
            '4411': string;
            '4412': string;
            '500': string;
            '5000': string;
            '5001': string;
            '5002': string;
            '5003': string;
            '5004': string;
            '5005': string;
            '5006': string;
            '5007': string;
            '5008': string;
            '5009': string;
            '5010': string;
            '5011': string;
            '5012': string;
            '504': string;
            '505': string;
            '507': string;
            '508': string;
            '509': string;
            '510': string;
            '511': string;
            '512': string;
            '513': string;
            '514': string;
            '515': string;
            '516': string;
            '517': string;
            '518': string;
            '519': string;
            '5200': string;
            '5202': string;
            '5203': string;
            '5204': string;
            '5205': string;
            '5206': string;
            '5207': string;
            '521': string;
            '5210': string;
            '5211': string;
            '5212': string;
            '5213': string;
            '5214': string;
            '5215': string;
            '5216': string;
            '5217': string;
            '5218': string;
            '5219': string;
            '522': string;
            '5220': string;
            '5221': string;
            '5222': string;
            '5223': string;
            '5226': string;
            '5227': string;
            '5228': string;
            '5229': string;
            '523': string;
            '5230': string;
            '5231': string;
            '5232': string;
            '5233': string;
            '5234': string;
            '5235': string;
            '5236': string;
            '5237': string;
            '5238': string;
            '5239': string;
            '524': string;
            '5240': string;
            '5241': string;
            '5242': string;
            '5243': string;
            '5244': string;
            '5245': string;
            '5246': string;
            '5247': string;
            '5248': string;
            '5249': string;
            '525': string;
            '5250': string;
            '5251': string;
            '5252': string;
            '5253': string;
            '5254': string;
            '526': string;
            '527': string;
            '528': string;
            '529': string;
            '530': string;
            '531': string;
            '532': string;
            '533': string;
            '534': string;
            '535': string;
            '536': string;
            '537': string;
            '538': string;
            '539': string;
            '540': string;
            '5400': string;
            '5401': string;
            '5402': string;
            '5403': string;
            '5404': string;
            '5405': string;
            '5406': string;
            '5407': string;
            '5408': string;
            '5409': string;
            '5410': string;
            '5411': string;
            '5412': string;
            '5413': string;
            '5414': string;
            '5415': string;
            '5416': string;
            '5417': string;
            '5418': string;
            '5419': string;
            '5420': string;
            '5426': string;
            '5427': string;
            '5428': string;
            '5429': string;
            '5430': string;
            '5431': string;
            '5432': string;
            '5433': string;
            '5434': string;
            '5435': string;
            '5436': string;
            '5437': string;
            '5438': string;
            '5439': string;
            '5440': string;
            '5441': string;
            '5442': string;
            '5443': string;
            '5444': string;
            '5445': string;
            '5446': string;
            '5448': string;
            '5449': string;
            '5450': string;
            '5451': string;
            '5452': string;
            '5453': string;
            '5454': string;
            '5455': string;
            '5456': string;
            '5457': string;
            '5458': string;
            '5459': string;
            '5460': string;
            '5461': string;
            '5462': string;
            '5463': string;
            '5464': string;
            '5465': string;
            '5466': string;
            '5467': string;
            '5468': string;
            '5469': string;
            '5470': string;
            '5480': string;
            '5481': string;
            '5482': string;
            '5483': string;
            '5484': string;
            '5485': string;
            '5486': string;
            '5487': string;
            '5488': string;
            '5489': string;
            '5490': string;
            '5491': string;
            '5492': string;
            '5493': string;
            '5494': string;
            '5495': string;
            '5496': string;
            '550': string;
            '5500': string;
            '5501': string;
            '5502': string;
            '5503': string;
            '5504': string;
            '5505': string;
            '5506': string;
            '5507': string;
            '5508': string;
            '5509': string;
            '551': string;
            '5510': string;
            '5511': string;
            '5512': string;
            '5514': string;
            '5515': string;
            '5516': string;
            '5517': string;
            '5518': string;
            '5519': string;
            '552': string;
            '5520': string;
            '5521': string;
            '5522': string;
            '5523': string;
            '5524': string;
            '5525': string;
            '5526': string;
            '5527': string;
            '5528': string;
            '5529': string;
            '553': string;
            '5530': string;
            '5531': string;
            '5532': string;
            '5533': string;
            '5534': string;
            '5535': string;
            '5536': string;
            '5537': string;
            '5538': string;
            '5539': string;
            '554': string;
            '5540': string;
            '5541': string;
            '5542': string;
            '5543': string;
            '5544': string;
            '5545': string;
            '5546': string;
            '5547': string;
            '5548': string;
            '5549': string;
            '555': string;
            '5550': string;
            '5551': string;
            '5552': string;
            '5553': string;
            '5554': string;
            '5555': string;
            '5556': string;
            '5557': string;
            '5558': string;
            '5559': string;
            '556': string;
            '5560': string;
            '5561': string;
            '5562': string;
            '5563': string;
            '5564': string;
            '5565': string;
            '5566': string;
            '5567': string;
            '5568': string;
            '5569': string;
            '557': string;
            '5570': string;
            '5571': string;
            '5572': string;
            '5573': string;
            '5574': string;
            '5575': string;
            '5576': string;
            '5577': string;
            '5578': string;
            '5579': string;
            '558': string;
            '5580': string;
            '5581': string;
            '5582': string;
            '5583': string;
            '5584': string;
            '5585': string;
            '5586': string;
            '5587': string;
            '5588': string;
            '5589': string;
            '559': string;
            '5590': string;
            '5591': string;
            '5592': string;
            '5593': string;
            '5594': string;
            '5595': string;
            '5596': string;
            '5597': string;
            '5598': string;
            '5599': string;
            '560': string;
            '5600': string;
            '5601': string;
            '5602': string;
            '5603': string;
            '5604': string;
            '5605': string;
            '5606': string;
            '5607': string;
            '5608': string;
            '5609': string;
            '561': string;
            '5610': string;
            '5611': string;
            '5612': string;
            '5613': string;
            '5614': string;
            '5615': string;
            '5616': string;
            '5617': string;
            '5618': string;
            '5619': string;
            '562': string;
            '5620': string;
            '5621': string;
            '5622': string;
            '563': string;
            '564': string;
            '565': string;
            '566': string;
            '567': string;
            '568': string;
            '569': string;
            '570': string;
            '571': string;
            '572': string;
            '573': string;
            '574': string;
            '575': string;
            '576': string;
            '577': string;
            '578': string;
            '579': string;
            '580': string;
            '5800': string;
            '5801': string;
            '5802': string;
            '5803': string;
            '5804': string;
            '5805': string;
            '5806': string;
            '5807': string;
            '5808': string;
            '5809': string;
            '581': string;
            '5810': string;
            '5812': string;
            '5813': string;
            '5814': string;
            '5815': string;
            '5816': string;
            '5817': string;
            '5818': string;
            '5819': string;
            '582': string;
            '5820': string;
            '5823': string;
            '5824': string;
            '5825': string;
            '5826': string;
            '5827': string;
            '5828': string;
            '5829': string;
            '583': string;
            '5830': string;
            '5831': string;
            '5832': string;
            '5833': string;
            '5834': string;
            '5835': string;
            '5836': string;
            '5837': string;
            '5838': string;
            '5839': string;
            '584': string;
            '5840': string;
            '5841': string;
            '5842': string;
            '5843': string;
            '5844': string;
            '5845': string;
            '5846': string;
            '5847': string;
            '5848': string;
            '586': string;
            '587': string;
            '588': string;
            '589': string;
            '590': string;
            '591': string;
            '592': string;
            '593': string;
            '594': string;
            '595': string;
            '596': string;
            '597': string;
            '598': string;
            '600': string;
            '601': string;
            '602': string;
            '604': string;
            '605': string;
            '606': string;
            '607': string;
            '608': string;
            '609': string;
            '610': string;
            '611': string;
            '6200': string;
            '6201': string;
            '6202': string;
            '625': string;
            '628': string;
            '629': string;
            '630': string;
            '631': string;
            '633': string;
            '634': string;
            '635': string;
            '636': string;
            '637': string;
            '638': string;
            '639': string;
            '640': string;
            '6400': string;
            '6401': string;
            '6403': string;
            '6404': string;
            '6405': string;
            '6406': string;
            '6407': string;
            '641': string;
            '642': string;
            '643': string;
            '644': string;
            '645': string;
            '646': string;
            '650': string;
            '6500': string;
            '6501': string;
            '6502': string;
            '6503': string;
            '6504': string;
            '6505': string;
            '6506': string;
            '6507': string;
            '6508': string;
            '6509': string;
            '652': string;
            '6600': string;
            '6601': string;
            '6602': string;
            '6603': string;
            '6604': string;
            '6605': string;
            '6606': string;
            '6607': string;
            '6608': string;
            '6609': string;
            '6610': string;
            '6611': string;
            '6612': string;
            '6613': string;
            '6614': string;
            '6615': string;
            '6616': string;
            '6617': string;
            '6618': string;
            '6619': string;
            '6620': string;
            '6621': string;
            '6622': string;
            '6623': string;
            '6624': string;
            '6800': string;
            '6801': string;
            '6802': string;
            '6803': string;
            '6804': string;
            '6805': string;
            '6806': string;
            '6807': string;
            '6808': string;
            '6809': string;
            '6810': string;
            '6811': string;
            '6812': string;
            '6813': string;
            '700': string;
            '7000': string;
            '7001': string;
            '7002': string;
            '7003': string;
            '7004': string;
            '7005': string;
            '7006': string;
            '7007': string;
            '701': string;
            '702': string;
            '703': string;
            '704': string;
            '705': string;
            '706': string;
            '707': string;
            '708': string;
            '709': string;
            '710': string;
            '7100': string;
            '7101': string;
            '711': string;
            '712': string;
            '714': string;
            '715': string;
            '716': string;
            '717': string;
            '718': string;
            '719': string;
            '720': string;
            '7200': string;
            '7201': string;
            '7202': string;
            '7203': string;
            '7204': string;
            '7205': string;
            '7206': string;
            '7207': string;
            '7208': string;
            '721': string;
            '722': string;
            '726': string;
            '727': string;
            '728': string;
            '729': string;
            '730': string;
            '7300': string;
            '7301': string;
            '7302': string;
            '7303': string;
            '7304': string;
            '7307': string;
            '7308': string;
            '7309': string;
            '731': string;
            '7310': string;
            '7311': string;
            '7312': string;
            '7313': string;
            '7314': string;
            '7315': string;
            '7316': string;
            '7317': string;
            '7318': string;
            '7319': string;
            '732': string;
            '7320': string;
            '7321': string;
            '7322': string;
            '7323': string;
            '7324': string;
            '7325': string;
            '7326': string;
            '7327': string;
            '7328': string;
            '7329': string;
            '7330': string;
            '7331': string;
            '7332': string;
            '7333': string;
            '7334': string;
            '7335': string;
            '7336': string;
            '7337': string;
            '7338': string;
            '7339': string;
            '7340': string;
            '7341': string;
            '7342': string;
            '7343': string;
            '7344': string;
            '7345': string;
            '7346': string;
            '7347': string;
            '7348': string;
            '7349': string;
            '735': string;
            '7350': string;
            '7351': string;
            '7352': string;
            '7353': string;
            '7354': string;
            '7355': string;
            '7356': string;
            '7357': string;
            '7358': string;
            '7359': string;
            '736': string;
            '7360': string;
            '7361': string;
            '7362': string;
            '7363': string;
            '7364': string;
            '7365': string;
            '7366': string;
            '7367': string;
            '7368': string;
            '7369': string;
            '737': string;
            '7370': string;
            '7371': string;
            '7372': string;
            '7373': string;
            '7374': string;
            '7375': string;
            '7376': string;
            '7377': string;
            '7378': string;
            '7379': string;
            '738': string;
            '7380': string;
            '7381': string;
            '7382': string;
            '7383': string;
            '7384': string;
            '7385': string;
            '739': string;
            '740': string;
            '741': string;
            '742': string;
            '743': string;
            '744': string;
            '745': string;
            '746': string;
            '747': string;
            '748': string;
            '749': string;
            '7500': string;
            '7501': string;
            '7502': string;
            '7503': string;
            '7504': string;
            '7505': string;
            '7506': string;
            '7507': string;
            '7508': string;
            '7509': string;
            '751': string;
            '7510': string;
            '7511': string;
            '7512': string;
            '7513': string;
            '7514': string;
            '7515': string;
            '7516': string;
            '7517': string;
            '7518': string;
            '7519': string;
            '7520': string;
            '7521': string;
            '7522': string;
            '7523': string;
            '7524': string;
            '7525': string;
            '7526': string;
            '7527': string;
            '7528': string;
            '7529': string;
            '753': string;
            '7530': string;
            '755': string;
            '756': string;
            '757': string;
            '758': string;
            '759': string;
            '760': string;
            '7600': string;
            '7601': string;
            '7602': string;
            '7603': string;
            '7604': string;
            '7605': string;
            '7606': string;
            '7607': string;
            '761': string;
            '763': string;
            '764': string;
            '765': string;
            '766': string;
            '767': string;
            '768': string;
            '770': string;
            '7700': string;
            '7701': string;
            '7702': string;
            '7703': string;
            '7704': string;
            '7705': string;
            '7706': string;
            '7707': string;
            '7708': string;
            '771': string;
            '7711': string;
            '7712': string;
            '7713': string;
            '7714': string;
            '773': string;
            '774': string;
            '775': string;
            '779': string;
            '780': string;
            '7800': string;
            '7801': string;
            '7803': string;
            '7804': string;
            '7805': string;
            '7806': string;
            '7807': string;
            '7808': string;
            '781': string;
            '782': string;
            '783': string;
            '784': string;
            '785': string;
            '786': string;
            '787': string;
            '788': string;
            '789': string;
            '7900': string;
            '7901': string;
            '7902': string;
            '791': string;
            '792': string;
            '793': string;
            '794': string;
            '795': string;
            '796': string;
            '797': string;
            '798': string;
            '799': string;
            '800': string;
            '8000': string;
            '801': string;
            '802': string;
            '803': string;
            '805': string;
            '807': string;
            '808': string;
            '809': string;
            '810': string;
            '8100': string;
            '8101': string;
            '8102': string;
            '8103': string;
            '8104': string;
            '8105': string;
            '8106': string;
            '8107': string;
            '8108': string;
            '8109': string;
            '811': string;
            '8110': string;
            '813': string;
            '814': string;
            '815': string;
            '818': string;
            '819': string;
            '820': string;
            '8200': string;
            '8201': string;
            '821': string;
            '822': string;
            '830': string;
            '8300': string;
            '8301': string;
            '8302': string;
            '8303': string;
            '8304': string;
            '8305': string;
            '8306': string;
            '831': string;
            '832': string;
            '833': string;
            '834': string;
            '839': string;
            '840': string;
            '8400': string;
            '8401': string;
            '8402': string;
            '841': string;
            '842': string;
            '845': string;
            '846': string;
            '848': string;
            '849': string;
            '850': string;
            '8500': string;
            '8501': string;
            '8502': string;
            '8503': string;
            '8504': string;
            '8505': string;
            '8506': string;
            '8507': string;
            '8508': string;
            '8509': string;
            '851': string;
            '8510': string;
            '8511': string;
            '8512': string;
            '8513': string;
            '855': string;
            '856': string;
            '857': string;
            '858': string;
            '860': string;
            '8600': string;
            '8601': string;
            '8602': string;
            '8603': string;
            '8604': string;
            '861': string;
            '862': string;
            '863': string;
            '866': string;
            '867': string;
            '8700': string;
            '8701': string;
            '880': string;
            '8800': string;
            '8900': string;
            '8901': string;
            '8902': string;
            '8903': string;
            '8904': string;
            '8905': string;
            '8906': string;
            '891': string;
            '892': string;
            '896': string;
            '897': string;
            '898': string;
            '899': string;
            '900': string;
            '9000': string;
            '9001': string;
            '9002': string;
            '901': string;
            '903': string;
            '905': string;
            '906': string;
            '907': string;
            '908': string;
            '909': string;
            '910': string;
            '9100': string;
            '9101': string;
            '9102': string;
            '9103': string;
            '9104': string;
            '9105': string;
            '9106': string;
            '9107': string;
            '9108': string;
            '9109': string;
            '911': string;
            '9110': string;
            '9111': string;
            '9112': string;
            '9113': string;
            '9114': string;
            '9115': string;
            '9116': string;
            '9117': string;
            '9118': string;
            '9119': string;
            '9120': string;
            '9121': string;
            '9122': string;
            '9123': string;
            '9124': string;
            '9125': string;
            '9126': string;
            '9127': string;
            '9128': string;
            '9129': string;
            '9130': string;
            '9131': string;
            '9132': string;
            '9133': string;
            '918': string;
            '919': string;
            '920': string;
            '9200': string;
            '9201': string;
            '9202': string;
            '9203': string;
            '921': string;
            '922': string;
            '923': string;
            '9300': string;
            '9330': string;
            '9331': string;
            '936': string;
            '937': string;
            '938': string;
            '939': string;
            '940': string;
            '9400': string;
            '9401': string;
            '9402': string;
            '9403': string;
            '9404': string;
            '9405': string;
            '9406': string;
            '9407': string;
            '9408': string;
            '941': string;
            '9500': string;
            '9501': string;
            '9502': string;
            '9503': string;
            '9504': string;
            '9505': string;
            '9506': string;
            '9507': string;
            '9508': string;
            '9509': string;
            '9510': string;
            '9511': string;
            '9512': string;
            '9513': string;
            '9514': string;
            '9600': string;
            '9601': string;
            '9700': string;
            '9701': string;
            '9702': string;
            '9703': string;
            '9704': string;
            '9800': string;
            '9801': string;
            '9802': string;
            AIGetAppGCFlags: number;
            AIGetAppGCFlagsResponse: number;
            AIGetAppInfo: number;
            AIGetAppInfoResponse: number;
            AIGetAppList: number;
            AIGetAppListResponse: number;
            AISAppInfoTableChanged: number;
            AISCreateMarketingMessage: number;
            AISCreateMarketingMessageResponse: number;
            AISDeleteMarketingMessage: number;
            AISGetCouponDefinition: number;
            AISGetCouponDefinitionResponse: number;
            AISGetMarketingMessage: number;
            AISGetMarketingMessageResponse: number;
            AISGetMarketingTreatments: number;
            AISGetMarketingTreatmentsResponse: number;
            AISGetPackageChangeNumber: number;
            AISGetPackageChangeNumberResponse: number;
            AISRefreshContentDescription: number;
            AISRequestContentDescription: number;
            AISRequestMarketingMessageUpdate: number;
            AISRequestMarketingTreatmentUpdate: number;
            AISTestAddPackage: number;
            AISTestEnableGC: number;
            AISUpdateAppInfo: number;
            AISUpdateMarketingMessage: number;
            AISUpdateMarketingMessageResponse: number;
            AISUpdatePackageCosts: number;
            AISUpdatePackageCostsResponse: number;
            AISUpdatePackageInfo: number;
            AISUpdateSlaveContentDescription: number;
            AISUpdateSlaveContentDescriptionResponse: number;
            AMAccountPS3Unlink: number;
            AMAccountPS3UnlinkResponse: number;
            AMAcctAllowedToPurchase: number;
            AMAcctAllowedToPurchaseResponse: number;
            AMAcknowledgeClanInvite: number;
            AMAddClanNews: number;
            AMAddComment: number;
            AMAddCommentResponse: number;
            AMAddFounderToClan: number;
            AMAddFreeLicense: number;
            AMAddFreeLicenseResponse: number;
            AMAddFriend: number;
            AMAddFriendResponse: number;
            AMAddLicense: number;
            AMAddMinutesToLicense: number;
            AMAddPublisherUser: number;
            AMAddUsersToMarketingTreatment: number;
            AMAllowUserContentQuery: number;
            AMAllowUserContentResponse: number;
            AMAllowUserFilesRequest: number;
            AMAllowUserFilesResponse: number;
            AMAuthenticateUser: number;
            AMAuthenticateUserResponse: number;
            AMAuthenticatedPlayerList: number;
            AMBanFromChat: number;
            AMBeginProcessingLicenses: number;
            AMBitPayPayment: number;
            AMBitPayPaymentResponse: number;
            AMBoaCompraPayment: number;
            AMBoaCompraPaymentResponse: number;
            AMCancelEasyCollect: number;
            AMCancelEasyCollectResponse: number;
            AMCancelLicense: number;
            AMCancelPurchase: number;
            AMChallengeNotification: number;
            AMChallengeVerdict: number;
            AMChangeClanOwner: number;
            AMChatActionResult: number;
            AMChatCleanup: number;
            AMChatEnter: number;
            AMChatInvite: number;
            AMChatMulti: number;
            AMCheckClanInviteRateLimiting: number;
            AMCheckClanMembership: number;
            AMCheckClanMembershipResponse: number;
            AMClaimUnownedUserGift: number;
            AMClaimUnownedUserGiftResponse: number;
            AMClanCleanup: number;
            AMClanCleanupList: number;
            AMClanDataUpdated: number;
            AMClanPermissions: number;
            AMClanPermissionsResponse: number;
            AMClansInCommon: number;
            AMClansInCommonCount: number;
            AMClansInCommonCountResponse: number;
            AMClansInCommonResponse: number;
            AMClearDispute: number;
            AMClearDisputeResponse: number;
            AMClearPersonaMetadataBlob: number;
            AMClientAcceptFriendInvite: number;
            AMClientAddFriendToGroup: number;
            AMClientAddFriendToGroupResponse: number;
            AMClientChatActionRelay: number;
            AMClientChatInviteRelay: number;
            AMClientChatMemberInfoRelay: number;
            AMClientChatMsgRelay: number;
            AMClientCreateFriendsGroup: number;
            AMClientCreateFriendsGroupResponse: number;
            AMClientDeleteFriendsGroup: number;
            AMClientDeleteFriendsGroupResponse: number;
            AMClientJoinChatRelay: number;
            AMClientNotPlaying: number;
            AMClientPublishRemovalFromSource: number;
            AMClientRemoveFriendFromGroup: number;
            AMClientRemoveFriendFromGroupResponse: number;
            AMClientRenameFriendsGroup: number;
            AMClientRenameFriendsGroupResponse: number;
            AMClientSetPlayerNickname: number;
            AMClientSetPlayerNicknameResponse: number;
            AMCompleteExternalPurchase: number;
            AMCompleteExternalPurchaseResponse: number;
            AMCompletePurchase: number;
            AMConvertClan: number;
            AMConvertWallet: number;
            AMConvertWalletResponse: number;
            AMCreateAccountRecord: number;
            AMCreateAccountRecordInSteam3: number;
            AMCreateAccountResponse: number;
            AMCreateChargeback: number;
            AMCreateChargebackResponse: number;
            AMCreateChat: number;
            AMCreateChatResponse: number;
            AMCreateClan: number;
            AMCreateClanAnnouncement: number;
            AMCreateClanAnnouncementResponse: number;
            AMCreateClanEvent: number;
            AMCreateClanEventResponse: number;
            AMCreateClanResponse: number;
            AMCreateDispute: number;
            AMCreateDisputeResponse: number;
            AMCreateRefund: number;
            AMCreateRefundResponse: number;
            AMDegicaPayment: number;
            AMDegicaPaymentResponse: number;
            AMDeleteClanAnnouncement: number;
            AMDeleteClanAnnouncementResponse: number;
            AMDeleteClanEvent: number;
            AMDeleteClanEventResponse: number;
            AMDeleteComment: number;
            AMDeleteCommentResponse: number;
            AMDeleteStoredCard: number;
            AMDeleteStoredPaymentInfo: number;
            AMDeleteStoredPaypalAgreement: number;
            AMDumpClan: number;
            AMDumpUser: number;
            AMEClubPayment: number;
            AMEClubPaymentResponse: number;
            AMEditBanReason: number;
            AMExpireCaptchaByGID: number;
            AMExtendLicense: number;
            AMFinalizePurchase: number;
            AMFinalizePurchaseResponse: number;
            AMFindAccounts: number;
            AMFindAccountsResponse: number;
            AMFindClanUser: number;
            AMFindClanUserResponse: number;
            AMFindGSByIP: number;
            AMFindHungTransactions: number;
            AMFixPendingPurchase: number;
            AMFixPendingPurchaseResponse: number;
            AMFixPendingRefund: number;
            AMFoundGSByIP: number;
            AMFriendsInCommon: number;
            AMFriendsInCommonCountResponse: number;
            AMFriendsInCommonResponse: number;
            AMFriendsList: number;
            AMFriendsListResponse: number;
            AMGMSGameServerRemove: number;
            AMGMSGameServerUpdate: number;
            AMGSSearch: number;
            AMGameServerAccountChangePassword: number;
            AMGameServerAccountDeleteAccount: number;
            AMGameServerPlayerCompatibilityCheck: number;
            AMGameServerPlayerCompatibilityCheckResponse: number;
            AMGameServerRemove: number;
            AMGameServerUpdate: number;
            AMGetAccountBanInfo: number;
            AMGetAccountBanInfoResponse: number;
            AMGetAccountCommunityBanInfo: number;
            AMGetAccountCommunityBanInfoResponse: number;
            AMGetAccountDetails: number;
            AMGetAccountDetails2: number;
            AMGetAccountDetailsResponse: number;
            AMGetAccountDetailsResponse2: number;
            AMGetAccountEmailAddress: number;
            AMGetAccountEmailAddressResponse: number;
            AMGetAccountFlagsForWGSpoofing: number;
            AMGetAccountFlagsForWGSpoofingResponse: number;
            AMGetAccountFriendsCount: number;
            AMGetAccountFriendsCountResponse: number;
            AMGetAccountLinks: number;
            AMGetAccountLinksResponse: number;
            AMGetAccountPSNInfo: number;
            AMGetAccountPSNInfoResponse: number;
            AMGetAccountResetDetailsRequest: number;
            AMGetAccountResetDetailsResponse: number;
            AMGetAccountStatus: number;
            AMGetAccountStatusResponse: number;
            AMGetBillingAddress: number;
            AMGetBillingAddressResponse: number;
            AMGetCaptchaDataByGID: number;
            AMGetCaptchaDataByGIDResponse: number;
            AMGetCaptchaDataForIP: number;
            AMGetCaptchaDataForIPResponse: number;
            AMGetCardList: number;
            AMGetCardListResponse: number;
            AMGetChatBanList: number;
            AMGetChatBanListResponse: number;
            AMGetClanAnnouncements: number;
            AMGetClanAnnouncementsCount: number;
            AMGetClanAnnouncementsCountResponse: number;
            AMGetClanAnnouncementsResponse: number;
            AMGetClanDetails: number;
            AMGetClanDetailsForForumCreation: number;
            AMGetClanDetailsForForumCreationResponse: number;
            AMGetClanDetailsResponse: number;
            AMGetClanEvents: number;
            AMGetClanEventsResponse: number;
            AMGetClanHistory: number;
            AMGetClanHistoryResponse: number;
            AMGetClanMembers: number;
            AMGetClanMembersResponse: number;
            AMGetClanMembershipList: number;
            AMGetClanMembershipListResponse: number;
            AMGetClanOfficers: number;
            AMGetClanOfficersResponse: number;
            AMGetClanPOTW: number;
            AMGetClanPOTWResponse: number;
            AMGetClanPermissionBits: number;
            AMGetClanPermissionBitsResponse: number;
            AMGetClanPermissionSettings: number;
            AMGetClanPermissionSettingsResponse: number;
            AMGetClanRank: number;
            AMGetClanRankResponse: number;
            AMGetComments: number;
            AMGetCommentsResponse: number;
            AMGetCommunityPrivacyState: number;
            AMGetCommunityPrivacyStateResponse: number;
            AMGetFinalPrice: number;
            AMGetFinalPriceResponse: number;
            AMGetFriendRelationship: number;
            AMGetFriendRelationshipResponse: number;
            AMGetFriendsLobbies: number;
            AMGetFriendsLobbiesResponse: number;
            AMGetFriendsWishlistInfo: number;
            AMGetFriendsWishlistInfoResponse: number;
            AMGetGSPlayerList: number;
            AMGetGSPlayerListResponse: number;
            AMGetGameMembers: number;
            AMGetGameMembersResponse: number;
            AMGetGiftTargetListRelay: number;
            AMGetIgnored: number;
            AMGetIgnoredResponse: number;
            AMGetLegacyGameKey: number;
            AMGetLegacyGameKeyResponse: number;
            AMGetLicenses: number;
            AMGetLicensesResponse: number;
            AMGetLobbyList: number;
            AMGetLobbyListResponse: number;
            AMGetLobbyMetadata: number;
            AMGetLobbyMetadataResponse: number;
            AMGetNameHistory: number;
            AMGetNameHistoryResponse: number;
            AMGetPaypalAgreements: number;
            AMGetPaypalAgreementsResponse: number;
            AMGetPendingNotificationCount: number;
            AMGetPendingNotificationCountResponse: number;
            AMGetPlayerBanDetails: number;
            AMGetPlayerBanDetailsResponse: number;
            AMGetPlayerLinkDetails: number;
            AMGetPlayerLinkDetailsResponse: number;
            AMGetPreviousCBAccount: number;
            AMGetPreviousCBAccountResponse: number;
            AMGetPurchaseStatus: number;
            AMGetSingleClanAnnouncement: number;
            AMGetSingleClanAnnouncementResponse: number;
            AMGetSingleClanEvent: number;
            AMGetSingleClanEventResponse: number;
            AMGetSteamIDForMicroTxn: number;
            AMGetSteamIDForMicroTxnResponse: number;
            AMGetStoredPaymentSummary: number;
            AMGetStoredPaymentSummaryResponse: number;
            AMGetUserAchievementStatus: number;
            AMGetUserClansNews: number;
            AMGetUserClansNewsResponse: number;
            AMGetUserCurrentGameInfo: number;
            AMGetUserCurrentGameInfoResponse: number;
            AMGetUserFriendNewsResponse: number;
            AMGetUserFriendsMinutesPlayed: number;
            AMGetUserFriendsMinutesPlayedResponse: number;
            AMGetUserGameStats: number;
            AMGetUserGameStatsResponse: number;
            AMGetUserGameplayInfo: number;
            AMGetUserGameplayInfoResponse: number;
            AMGetUserGifts: number;
            AMGetUserGiftsResponse: number;
            AMGetUserGroupStatus: number;
            AMGetUserGroupStatusResponse: number;
            AMGetUserHistory: number;
            AMGetUserHistoryResponse: number;
            AMGetUserLicenseHistory: number;
            AMGetUserLicenseHistoryResponse: number;
            AMGetUserLicenseList: number;
            AMGetUserLicenseListResponse: number;
            AMGetUserMinutesPlayed: number;
            AMGetUserMinutesPlayedResponse: number;
            AMGetUserNews: number;
            AMGetUserNewsResponse: number;
            AMGetUserNewsSubscriptions: number;
            AMGetUserNewsSubscriptionsResponse: number;
            AMGetUserStats: number;
            AMGetUserVacBanList: number;
            AMGetUserVacBanListResponse: number;
            AMGetWalletConversionRate: number;
            AMGetWalletConversionRateResponse: number;
            AMGetWalletDetails: number;
            AMGetWalletDetailsResponse: number;
            AMGiftRevoked: number;
            AMGrantCoupon: number;
            AMGrantCouponResponse: number;
            AMGrantGuestPasses: number;
            AMGrantGuestPasses2: number;
            AMGrantGuestPasses2Response: number;
            AMHandlePendingTransaction: number;
            AMHandlePendingTransactionResponse: number;
            AMInitPurchase: number;
            AMInitPurchaseResponse: number;
            AMInviteUserToClan: number;
            AMIsAccountInCaptchaGracePeriod: number;
            AMIsAccountInCaptchaGracePeriodResponse: number;
            AMIsPackageRestrictedInUserCountry: number;
            AMIsPackageRestrictedInUserCountryResponse: number;
            AMIsUserBanned: number;
            AMIsValidAccountID: number;
            AMJoinPublicClan: number;
            AMKickUserFromClan: number;
            AMLeaveClan: number;
            AMLoadActivationCodes: number;
            AMLoadActivationCodesResponse: number;
            AMLoadOEMTickets: number;
            AMLockProfile: number;
            AMLookupKey: number;
            AMLookupKeyResponse: number;
            AMMOLPayment: number;
            AMMOLPaymentResponse: number;
            AMMarketingTreatmentUpdate: number;
            AMMoPayPayment: number;
            AMMoPayPaymentResponse: number;
            AMNameChange: number;
            AMNewChallenge: number;
            AMNotifyChatOfClanChange: number;
            AMNotifySessionDeviceAuthorized: number;
            AMP2PIntroducerMessage: number;
            AMPasswordHashUpgrade: number;
            AMPayPalPaymentsHubPayment: number;
            AMPayPalPaymentsHubPaymentResponse: number;
            AMPayelpPayment: number;
            AMPayelpPaymentResponse: number;
            AMPersonaChangeResponse: number;
            AMPlayerGetClanBasicDetails: number;
            AMPlayerGetClanBasicDetailsResponse: number;
            AMPlayerHostedOnGameServer: number;
            AMPlayerNicknameList: number;
            AMPlayerNicknameListResponse: number;
            AMPrimePersonaStateCache: number;
            AMProbeClanMembershipList: number;
            AMProbeClanMembershipListResponse: number;
            AMPublishChatMemberInfo: number;
            AMPublishChatMetadata: number;
            AMPublishChatRoomInfo: number;
            AMPurchaseResponse: number;
            AMRecordBanEnforcement: number;
            AMRefreshGuestPasses: number;
            AMRefreshSessions: number;
            AMRegisterKey: number;
            AMRelayGetFriendsWhoPlayGame: number;
            AMRelayGetFriendsWhoPlayGameResponse: number;
            AMRelayPublishStatus: number;
            AMRelayToGC: number;
            AMReloadAccount: number;
            AMReloadGameGroupPolicy: number;
            AMRemoveFriend: number;
            AMRemovePublisherUser: number;
            AMRenewAgreement: number;
            AMRenewLicense: number;
            AMRequestAccountData: number;
            AMRequestAccountDataResponse: number;
            AMRequestChatMetadata: number;
            AMRequestClanData: number;
            AMRequestClanDetails: number;
            AMRequestFriendData: number;
            AMResetCommunityContent: number;
            AMResetUserVerificationGSByIP: number;
            AMResolveNegativeWalletCredits: number;
            AMResolveNegativeWalletCreditsResponse: number;
            AMResubmitPurchase: number;
            AMReverseChargeback: number;
            AMReverseChargebackResponse: number;
            AMRevokeLegacyGameKeys: number;
            AMRevokePurchaseResponse: number;
            AMRollbackGiftTransfer: number;
            AMRollbackGiftTransferResponse: number;
            AMRouteFriendMsg: number;
            AMRouteToClients: number;
            AMSendAccountInfoUpdate: number;
            AMSendEmail: number;
            AMSendQueuedEmails: number;
            AMSendSystemIMToUser: number;
            AMServiceModulesCache: number;
            AMServiceModulesCall: number;
            AMServiceModulesCallResponse: number;
            AMSessionInfoRequest: number;
            AMSessionInfoResponse: number;
            AMSessionQuery: number;
            AMSessionQueryResponse: number;
            AMSetAccountDetails: number;
            AMSetAccountFlags: number;
            AMSetAccountLinks: number;
            AMSetAccountLinksResponse: number;
            AMSetAccountTrustedRequest: number;
            AMSetAvatar: number;
            AMSetClanDetails: number;
            AMSetClanName: number;
            AMSetClanNameResponse: number;
            AMSetClanPOTW: number;
            AMSetClanPOTWResponse: number;
            AMSetClanPermissionBits: number;
            AMSetClanPermissionBitsResponse: number;
            AMSetClanPermissionSettings: number;
            AMSetClanPermissionSettingsResponse: number;
            AMSetClanRank: number;
            AMSetClanRankResponse: number;
            AMSetCommunityProfileSettings: number;
            AMSetCommunityProfileSettingsResponse: number;
            AMSetCommunityState: number;
            AMSetDRMTestConfig: number;
            AMSetFriendRelationshipNone: number;
            AMSetIgnored: number;
            AMSetIgnoredResponse: number;
            AMSetLicenseFlags: number;
            AMSetPersonaName: number;
            AMSetPreApproval: number;
            AMSetPreApprovalResponse: number;
            AMSetProfileURL: number;
            AMSetUserGiftUnowned: number;
            AMSetUserGiftUnownedResponse: number;
            AMSetUserNewsSubscriptions: number;
            AMSmart2PayPayment: number;
            AMSmart2PayPaymentResponse: number;
            AMStoreCancelPurchase: number;
            AMStoreCompletePurchase: number;
            AMStoreGetFinalPrice: number;
            AMStoreGetFinalPriceResponse: number;
            AMStoreInitPurchase: number;
            AMStoreInitPurchaseResponse: number;
            AMStorePurchaseResponse: number;
            AMStoreUserStats: number;
            AMStoreUserStatsResponse: number;
            AMSubscribeToPersonaFeed: number;
            AMSupportChangeEmail: number;
            AMSupportChangePassword: number;
            AMSupportChangeSecretQA: number;
            AMSupportEnableOrDisable: number;
            AMSupportIsAccountEnabled: number;
            AMSupportIsAccountEnabledResponse: number;
            AMSupportKickSession: number;
            AMSupportRemoveAccountSecurity: number;
            AMSwapKioskDeposit: number;
            AMSwapKioskDepositResponse: number;
            AMTicketAuthRequestOrResponse: number;
            AMToMDSGetDepotDecryptionKey: number;
            AMTrackFailedAuthByIP: number;
            AMTransferLockedGifts: number;
            AMTransferLockedGiftsResponse: number;
            AMTwoFactorRecoverAuthenticatorRequest: number;
            AMTwoFactorRecoverAuthenticatorResponse: number;
            AMUnBanFromChat: number;
            AMUpdateBillingAddress: number;
            AMUpdateBillingAddressResponse: number;
            AMUpdateChatMetadata: number;
            AMUpdateClanAnnouncement: number;
            AMUpdateClanAnnouncementResponse: number;
            AMUpdateClanEvent: number;
            AMUpdateClanEventResponse: number;
            AMUpdateGSPlayStats: number;
            AMUpdatePersonaStateCache: number;
            AMUpdateProviderStatus: number;
            AMUpdateUserBanRequest: number;
            AMUserClanList: number;
            AMUserClanListResponse: number;
            AMVACStatusUpdate: number;
            AMValidateCaptchaDataForIP: number;
            AMValidateCaptchaDataForIPResponse: number;
            AMValidateEmailLink: number;
            AMValidateEmailLinkResponse: number;
            AMValidatePasswordResetCodeAndSendSmsRequest: number;
            AMValidatePasswordResetCodeAndSendSmsResponse: number;
            AMValidateWGToken: number;
            AMValidateWGTokenResponse: number;
            AMVerfiyUser: number;
            AMVerifyDepotManagementRights: number;
            AMVerifyDepotManagementRightsResponse: number;
            AMWipeFriendsList: number;
            AMWriteNews: number;
            AMXsollaPayment: number;
            AMXsollaPaymentResponse: number;
            ATSCSPerfTestResponse: number;
            ATSCSPerfTestTask: number;
            ATSCallTest: number;
            ATSCallTestReply: number;
            ATSCycleTCM: number;
            ATSExternalStressActionResult: number;
            ATSExternalStressJobQueued: number;
            ATSExternalStressJobRunning: number;
            ATSExternalStressJobStart: number;
            ATSExternalStressJobStopAll: number;
            ATSExternalStressJobStopped: number;
            ATSInitDRMSStressTest: number;
            ATSRunFailServerTest: number;
            ATSStartExternalStress: number;
            ATSStartStressTest: number;
            ATSStarted: number;
            ATSStopStressTest: number;
            ATSUFSPerfTestResponse: number;
            ATSUFSPerfTestTask: number;
            AdminCmd: number;
            AdminCmdResponse: number;
            AdminConsoleTitle: number;
            AdminGCCommand: number;
            AdminGCGetCommandList: number;
            AdminGCGetCommandListResponse: number;
            AdminGCSpew: number;
            AdminLogEvent: number;
            AdminLogListenRequest: number;
            AdminMsgSpew: number;
            AdminPwLogon: number;
            AdminPwLogonResponse: number;
            AdminSpew: number;
            Alert: number;
            AllowUserToPlayQuery: number;
            AllowUserToPlayResponse: number;
            AssignSysID: number;
            BRPCheckActivationCodes: number;
            BRPCheckActivationCodesResponse: number;
            BRPCheckFinanceCloseOutDate: number;
            BRPCheckSettlementReports: number;
            BRPCommitGC: number;
            BRPCommitGCResponse: number;
            BRPCommitWP: number;
            BRPCommitWPResponse: number;
            BRPConvertToCurrentKeys: number;
            BRPConvertToCurrentKeysResponse: number;
            BRPFindHungTransactions: number;
            BRPPostTaxToAvalara: number;
            BRPPostTransactionTax: number;
            BRPPostTransactionTaxResponse: number;
            BRPProcessGCReports: number;
            BRPProcessIMReports: number;
            BRPProcessLicenses: number;
            BRPProcessLicensesResponse: number;
            BRPProcessPPReports: number;
            BRPProcessPartnerPayments: number;
            BRPProcessPaymentRules: number;
            BRPProcessUSBankReports: number;
            BRPProcessWPReports: number;
            BRPPruneCardUsageStats: number;
            BRPPruneCardUsageStatsResponse: number;
            BRPRemoveExpiredPaymentData: number;
            BRPRemoveExpiredPaymentDataResponse: number;
            BRPSettleCB: number;
            BRPSettleNOVA: number;
            BRPStartShippingJobs: number;
            BSBannedRequest: number;
            BSBoaCompraConfirmProductDelivery: number;
            BSBoaCompraConfirmProductDeliveryResponse: number;
            BSChaseRFRRequest: number;
            BSCheckJobRunning: number;
            BSCheckJobRunningResponse: number;
            BSCommitGCTxn: number;
            BSCommitWPTxn: number;
            BSCompletePurchase: number;
            BSCompletePurchaseResponse: number;
            BSConvertToCurrentKeys: number;
            BSConvertToCurrentKeysResponse: number;
            BSGenerateBoaCompraMD5: number;
            BSGenerateBoaCompraMD5Response: number;
            BSGenerateMoPayMD5: number;
            BSGenerateMoPayMD5Response: number;
            BSGetBillingAddress: number;
            BSGetBillingAddressResponse: number;
            BSGetCreditCardInfo: number;
            BSGetCreditCardInfoResponse: number;
            BSGetEvents: number;
            BSGetPayPalUserInfo: number;
            BSGetPayPalUserInfoResponse: number;
            BSGetProPackOrderStatus: number;
            BSGetProPackOrderStatusResponse: number;
            BSInitGCBankXferTxn: number;
            BSInitGCBankXferTxnResponse: number;
            BSInitPayPalTxn: number;
            BSInitPayPalTxnResponse: number;
            BSInitPurchase: number;
            BSInitPurchaseResponse: number;
            BSMoPayConfirmProductDelivery: number;
            BSMoPayConfirmProductDeliveryResponse: number;
            BSPaymentInstrBan: number;
            BSPaymentInstrBanResponse: number;
            BSProcessGCReports: number;
            BSProcessPPReports: number;
            BSProcessUSBankReports: number;
            BSPruneCardUsageStats: number;
            BSPruneCardUsageStatsResponse: number;
            BSPurchaseResponse: number;
            BSPurchaseRunFraudChecks: number;
            BSPurchaseRunFraudChecksResponse: number;
            BSPurchaseStart: number;
            BSQiwiWalletInvoice: number;
            BSQiwiWalletInvoiceResponse: number;
            BSQueryBankInformation: number;
            BSQueryBankInformationResponse: number;
            BSQueryCBOrderStatus: number;
            BSQueryCBOrderStatusResponse: number;
            BSQueryFindCreditCard: number;
            BSQueryFindCreditCardResponse: number;
            BSQueryGCBankXferTxn: number;
            BSQueryGCBankXferTxnResponse: number;
            BSQueryPaymentInstResponse: number;
            BSQueryPaymentInstUsage: number;
            BSQueryTransactionStatus: number;
            BSQueryTransactionStatusResponse: number;
            BSQueryTxnExtendedInfo: number;
            BSQueryTxnExtendedInfoResponse: number;
            BSRefundTxn: number;
            BSRefundTxnResponse: number;
            BSRemoveExpiredPaymentData: number;
            BSRemoveExpiredPaymentDataResponse: number;
            BSResetPackagePurchaseRateLimit: number;
            BSResetPackagePurchaseRateLimitResponse: number;
            BSReverseRedeemPOSAKey: number;
            BSReverseRedeemPOSAKeyResponse: number;
            BSRunRedFlagReport: number;
            BSSendShippingRequest: number;
            BSSendShippingRequestResponse: number;
            BSSettleComplete: number;
            BSSettleNOVA: number;
            BSStartShippingJobs: number;
            BSStatusInquiryPOSAKey: number;
            BSStatusInquiryPOSAKeyResponse: number;
            BSStoreBankInformation: number;
            BSStoreBankInformationResponse: number;
            BSUpdateConversionRates: number;
            BSUpdateInventoryFromProPack: number;
            BSUpdateInventoryFromProPackResponse: number;
            BSUpdatePaymentData: number;
            BSUpdatePaymentDataResponse: number;
            BSValidateMoPaySignature: number;
            BSValidateMoPaySignatureResponse: number;
            BSValidateXsollaSignature: number;
            BSValidateXsollaSignatureResponse: number;
            BSVerifyPOSAKey: number;
            BSVerifyPOSAKeyResponse: number;
            BackpackAddToCurrency: number;
            BackpackAddToCurrencyResponse: number;
            BackpackBase: number;
            BadLoginIPList: number;
            BaseAIS: number;
            BaseAM: number;
            BaseAMRange2: number;
            BaseATS: number;
            BaseAdmin: number;
            BaseBRP: number;
            BaseBS: number;
            BaseCCSRange: number;
            BaseCM: number;
            BaseCS: number;
            BaseChannelAuth: number;
            BaseClient: number;
            BaseClient2: number;
            BaseClient3: number;
            BaseDFS: number;
            BaseDP: number;
            BaseDRMS: number;
            BaseDSS: number;
            BaseEPM: number;
            BaseFBS: number;
            BaseFTSRange: number;
            BaseFileXfer: number;
            BaseGC: number;
            BaseGM: number;
            BaseGameServer: number;
            BaseGeneral: number;
            BaseLBSRange: number;
            BaseMDS: number;
            BaseOGS: number;
            BaseP2P: number;
            BasePSRange: number;
            BaseSM: number;
            BaseShell: number;
            BaseTest: number;
            BaseUFSRange: number;
            BaseVS: number;
            BoxMonitorBase: number;
            BoxMonitorReportRequest: number;
            BoxMonitorReportResponse: number;
            CCSAddComment: number;
            CCSAddCommentResponse: number;
            CCSDeleteAllCommentsByAuthor: number;
            CCSDeleteAllCommentsByAuthorResponse: number;
            CCSDeleteComment: number;
            CCSDeleteCommentResponse: number;
            CCSGetComments: number;
            CCSGetCommentsForNews: number;
            CCSGetCommentsForNewsResponse: number;
            CCSGetCommentsResponse: number;
            CCSNotifyCommentCount: number;
            CCSPreloadComments: number;
            CEGPropStatusDRMSRequest: number;
            CEGPropStatusDRMSResponse: number;
            CEGVersionSetEnableDisableRequest: number;
            CEGVersionSetEnableDisableResponse: number;
            CEGWhackFailureReportRequest: number;
            CEGWhackFailureReportResponse: number;
            CMAppInfoResponseDeprecated: number;
            CMSetAllowState: number;
            CMSpewAllowState: number;
            CREBase: number;
            CREEnumeratePublishedFiles: number;
            CREEnumeratePublishedFilesResponse: number;
            CREGetUserPublishedItemVoteDetails: number;
            CREGetUserPublishedItemVoteDetailsResponse: number;
            CREItemVoteSummary: number;
            CREItemVoteSummaryResponse: number;
            CREPublishedFileVoteAdded: number;
            CRERankByTrend: number;
            CRERankByTrendResponse: number;
            CRERankByVote: number;
            CRERankByVoteResponse: number;
            CREUpdateUserPublishedItemVote: number;
            CREUpdateUserPublishedItemVoteResponse: number;
            CSBase: number;
            CSPing: number;
            CSPingResponse: number;
            CSUserContentApprove: number;
            CSUserContentDeny: number;
            CSUserContentRequest: number;
            ChannelAuthChallenge: number;
            ChannelAuthResponse: number;
            ChannelAuthResult: number;
            ChannelEncryptRequest: number;
            ChannelEncryptResponse: number;
            ChannelEncryptResult: number;
            ClientAMGetClanOfficers: number;
            ClientAMGetClanOfficersResponse: number;
            ClientAMGetPersonaNameHistory: number;
            ClientAMGetPersonaNameHistoryResponse: number;
            ClientAccountInfo: number;
            ClientAckGuestPass: number;
            ClientAckGuestPassResponse: number;
            ClientAckMessageByGID: number;
            ClientAckPurchaseReceipt: number;
            ClientAckVACBan: number;
            ClientAckVACBan2: number;
            ClientAcknowledgeClanInvite: number;
            ClientActivateOEMLicense: number;
            ClientAddFriend: number;
            ClientAddFriendResponse: number;
            ClientAnonLogOn_Deprecated: number;
            ClientAnonUserLogOn_Deprecated: number;
            ClientAppInfoChanges: number;
            ClientAppInfoRequest: number;
            ClientAppInfoResponse: number;
            ClientAppInfoUpdate: number;
            ClientAppMinutesPlayedData: number;
            ClientAppUsageEvent: number;
            ClientAuthList: number;
            ClientAuthListAck: number;
            ClientAuthList_Deprecated: number;
            ClientAuthorizeLocalDevice: number;
            ClientAuthorizeLocalDeviceNotification: number;
            ClientAuthorizeLocalDeviceRequest: number;
            ClientAuthorizeLocalDeviceResponse: number;
            ClientBroadcastBase: number;
            ClientBroadcastDisconnect: number;
            ClientBroadcastFrames: number;
            ClientBroadcastInit: number;
            ClientBroadcastScreenshot: number;
            ClientBroadcastUploadConfig: number;
            ClientCMList: number;
            ClientCancelLicense: number;
            ClientCancelLicenseResponse: number;
            ClientChangeStatus: number;
            ClientChangeSteamGuardOptions: number;
            ClientChangeSteamGuardOptionsResponse: number;
            ClientChatAction: number;
            ClientChatActionResult: number;
            ClientChatDeclined: number;
            ClientChatEnter: number;
            ClientChatGetFriendMessageHistory: number;
            ClientChatGetFriendMessageHistoryForOfflineMessages: number;
            ClientChatGetFriendMessageHistoryResponse: number;
            ClientChatInvite: number;
            ClientChatMemberInfo: number;
            ClientChatMsg: number;
            ClientChatOfflineMessageNotification: number;
            ClientChatRequestOfflineMessageCount: number;
            ClientChatRoomInfo: number;
            ClientCheckAppBetaPassword: number;
            ClientCheckAppBetaPasswordResponse: number;
            ClientCheckFileSignature: number;
            ClientCheckFileSignatureResponse: number;
            ClientCheckPassword: number;
            ClientCheckPasswordResponse: number;
            ClientClanState: number;
            ClientCommentNotifications: number;
            ClientConcurrentSessionsBase: number;
            ClientConnectionStats: number;
            ClientContentServerLogOn_Deprecated: number;
            ClientCreateAccount2: number;
            ClientCreateAccount3: number;
            ClientCreateAccountProto: number;
            ClientCreateAccountProtoResponse: number;
            ClientCreateAccountResponse: number;
            ClientCreateAcctResponse: number;
            ClientCreateChat: number;
            ClientCreateChatResponse: number;
            ClientCurrentUIMode: number;
            ClientDFSAuthenticateRequest: number;
            ClientDFSAuthenticateResponse: number;
            ClientDFSDownloadStatus: number;
            ClientDFSEndSession: number;
            ClientDPCheckSpecialSurvey: number;
            ClientDPCheckSpecialSurveyResponse: number;
            ClientDPContentStatsReport: number;
            ClientDPSendSpecialSurveyResponse: number;
            ClientDPSendSpecialSurveyResponseReply: number;
            ClientDPSteam2AppStarted: number;
            ClientDPUpdateAppJobReport: number;
            ClientDRMBlobRequest: number;
            ClientDRMBlobResponse: number;
            ClientDRMDownloadRequest: number;
            ClientDRMDownloadRequestWithCrashData: number;
            ClientDRMDownloadResponse: number;
            ClientDRMFinalResult: number;
            ClientDRMProblemReport: number;
            ClientDRMTest: number;
            ClientDRMTestResult: number;
            ClientDeauthorizeDevice: number;
            ClientDeauthorizeDeviceRequest: number;
            ClientDeregisterWithServer: number;
            ClientDisableTestLicense: number;
            ClientDisableTestLicenseResponse: number;
            ClientDownloadRateStatistics: number;
            ClientEmailAddrInfo: number;
            ClientEmailChange3: number;
            ClientEmailChange4: number;
            ClientEmailChangeResponse: number;
            ClientEmailChangeResponse4: number;
            ClientEmoticonList: number;
            ClientEnableTestLicense: number;
            ClientEnableTestLicenseResponse: number;
            ClientEncryptPct: number;
            ClientFSEnumerateFollowingList: number;
            ClientFSEnumerateFollowingListResponse: number;
            ClientFSGetFollowerCount: number;
            ClientFSGetFollowerCountResponse: number;
            ClientFSGetFriendMessageHistory: number;
            ClientFSGetFriendMessageHistoryForOfflineMessages: number;
            ClientFSGetFriendMessageHistoryResponse: number;
            ClientFSGetFriendsSteamLevels: number;
            ClientFSGetFriendsSteamLevelsResponse: number;
            ClientFSGetIsFollowing: number;
            ClientFSGetIsFollowingResponse: number;
            ClientFSOfflineMessageNotification: number;
            ClientFSRequestOfflineMessageCount: number;
            ClientFavoritesList: number;
            ClientFileToDownload: number;
            ClientFileToDownloadResponse: number;
            ClientFriendMsg: number;
            ClientFriendMsgEchoToSender: number;
            ClientFriendMsgIncoming: number;
            ClientFriendProfileInfo: number;
            ClientFriendProfileInfoResponse: number;
            ClientFriendRemovedFromSource: number;
            ClientFriendUserStatusPublished: number;
            ClientFriendsGroupsList: number;
            ClientFriendsList: number;
            ClientFromGC: number;
            ClientGCMsgFailed: number;
            ClientGMSServerQuery: number;
            ClientGameConnectDeny: number;
            ClientGameConnectTokens: number;
            ClientGameConnect_obsolete: number;
            ClientGameEnded_obsolete: number;
            ClientGamesPlayed: number;
            ClientGamesPlayed2_obsolete: number;
            ClientGamesPlayed3_obsolete: number;
            ClientGamesPlayedNoDataBlob: number;
            ClientGamesPlayedWithDataBlob: number;
            ClientGamesPlayed_obsolete: number;
            ClientGetAppBetaPasswords: number;
            ClientGetAppBetaPasswordsResponse: number;
            ClientGetAppOwnershipTicket: number;
            ClientGetAppOwnershipTicketResponse: number;
            ClientGetAuthorizedDevices: number;
            ClientGetAuthorizedDevicesResponse: number;
            ClientGetCDNAuthToken: number;
            ClientGetCDNAuthTokenResponse: number;
            ClientGetClanActivityCounts: number;
            ClientGetClanActivityCountsResponse: number;
            ClientGetClientAppList: number;
            ClientGetClientAppListResponse: number;
            ClientGetClientDetails: number;
            ClientGetClientDetailsResponse: number;
            ClientGetDepotDecryptionKey: number;
            ClientGetDepotDecryptionKeyResponse: number;
            ClientGetEmoticonList: number;
            ClientGetFinalPrice: number;
            ClientGetFinalPriceResponse: number;
            ClientGetFriendsWhoPlayGame: number;
            ClientGetFriendsWhoPlayGameResponse: number;
            ClientGetGiftTargetList: number;
            ClientGetGiftTargetListResponse: number;
            ClientGetLegacyGameKey: number;
            ClientGetLegacyGameKeyResponse: number;
            ClientGetLicenses: number;
            ClientGetLobbyListResponse: number;
            ClientGetLobbyMetadata: number;
            ClientGetLobbyMetadataResponse: number;
            ClientGetMicroTxnInfo: number;
            ClientGetMicroTxnInfoResponse: number;
            ClientGetNumberOfCurrentPlayers: number;
            ClientGetNumberOfCurrentPlayersDP: number;
            ClientGetNumberOfCurrentPlayersDPResponse: number;
            ClientGetNumberOfCurrentPlayersResponse: number;
            ClientGetPurchaseReceipts: number;
            ClientGetUserStats: number;
            ClientGetUserStatsResponse: number;
            ClientHeartBeat: number;
            ClientHideFriend: number;
            ClientInformOfCreateAccount: number;
            ClientInformOfResetForgottenPassword: number;
            ClientInformOfResetForgottenPasswordResponse: number;
            ClientInitPurchase: number;
            ClientInitPurchaseResponse: number;
            ClientInstallClientApp: number;
            ClientInstallClientAppResponse: number;
            ClientInviteFriend: number;
            ClientInviteFriendResponse: number;
            ClientInviteUserToClan: number;
            ClientIsLimitedAccount: number;
            ClientItemAnnouncements: number;
            ClientJoinChat: number;
            ClientKickPlayingSession: number;
            ClientLBSFindOrCreateLB: number;
            ClientLBSFindOrCreateLBResponse: number;
            ClientLBSGetLBEntries: number;
            ClientLBSGetLBEntriesResponse: number;
            ClientLBSSetScore: number;
            ClientLBSSetScoreResponse: number;
            ClientLBSSetUGC: number;
            ClientLBSSetUGCResponse: number;
            ClientLicenseList: number;
            ClientLogOff: number;
            ClientLogOnResponse: number;
            ClientLogOnWithCredentials_Deprecated: number;
            ClientLogOnWithHash_Deprecated: number;
            ClientLogOn_Deprecated: number;
            ClientLoggedOff: number;
            ClientLogon: number;
            ClientLogonGameServer: number;
            ClientLookupKey: number;
            ClientLookupKeyResponse: number;
            ClientMDSGetDepotManifest: number;
            ClientMDSGetDepotManifestChunk: number;
            ClientMDSGetDepotManifestResponse: number;
            ClientMDSGetPrevDepotBuild: number;
            ClientMDSGetPrevDepotBuildResponse: number;
            ClientMDSHeartbeat: number;
            ClientMDSInitDepotBuildRequest: number;
            ClientMDSInitDepotBuildResponse: number;
            ClientMDSInitWorkshopBuildRequest: number;
            ClientMDSInitWorkshopBuildResponse: number;
            ClientMDSLoginRequest: number;
            ClientMDSLoginResponse: number;
            ClientMDSRegisterAppBuild: number;
            ClientMDSRegisterAppBuildResponse: number;
            ClientMDSSetAppBuildLive: number;
            ClientMDSSetAppBuildLiveResponse: number;
            ClientMDSSignInstallScript: number;
            ClientMDSSignInstallScriptResponse: number;
            ClientMDSTransmitManifestDataChunk: number;
            ClientMDSUploadDepotChunks: number;
            ClientMDSUploadDepotChunksResponse: number;
            ClientMDSUploadManifestRequest: number;
            ClientMDSUploadManifestResponse: number;
            ClientMDSUploadRateTest: number;
            ClientMDSUploadRateTestResponse: number;
            ClientMMSCreateLobby: number;
            ClientMMSCreateLobbyResponse: number;
            ClientMMSFlushFrenemyListCache: number;
            ClientMMSFlushFrenemyListCacheResponse: number;
            ClientMMSGetLobbyData: number;
            ClientMMSGetLobbyList: number;
            ClientMMSGetLobbyListResponse: number;
            ClientMMSInviteToLobby: number;
            ClientMMSJoinLobby: number;
            ClientMMSJoinLobbyResponse: number;
            ClientMMSLeaveLobby: number;
            ClientMMSLeaveLobbyResponse: number;
            ClientMMSLobbyChatMsg: number;
            ClientMMSLobbyData: number;
            ClientMMSLobbyGameServerSet: number;
            ClientMMSSendLobbyChatMsg: number;
            ClientMMSSetLobbyData: number;
            ClientMMSSetLobbyDataResponse: number;
            ClientMMSSetLobbyGameServer: number;
            ClientMMSSetLobbyLinked: number;
            ClientMMSSetLobbyOwner: number;
            ClientMMSSetLobbyOwnerResponse: number;
            ClientMMSUserJoinedLobby: number;
            ClientMMSUserLeftLobby: number;
            ClientMarketingMessageUpdate: number;
            ClientMarketingMessageUpdate2: number;
            ClientMicroTxnAuthRequest: number;
            ClientMicroTxnAuthorize: number;
            ClientMicroTxnAuthorizeResponse: number;
            ClientNOP: number;
            ClientNatTraversalStatEvent: number;
            ClientNetworkingCertRequest: number;
            ClientNetworkingCertRequestResponse: number;
            ClientNewLoginKey: number;
            ClientNewLoginKeyAccepted: number;
            ClientNewsUpdate: number;
            ClientNoUDPConnectivity: number;
            ClientNotLoggedOnDeprecated: number;
            ClientOGSBeginSession: number;
            ClientOGSBeginSessionResponse: number;
            ClientOGSEndSession: number;
            ClientOGSEndSessionResponse: number;
            ClientOGSGameServerPingSample: number;
            ClientOGSReportBug: number;
            ClientOGSReportString: number;
            ClientOGSWriteRow: number;
            ClientP2PConnectionFailInfo: number;
            ClientP2PConnectionInfo: number;
            ClientP2PIntroducerMessage: number;
            ClientPICSAccessTokenRequest: number;
            ClientPICSAccessTokenResponse: number;
            ClientPICSChangesSinceRequest: number;
            ClientPICSChangesSinceResponse: number;
            ClientPICSProductInfoRequest: number;
            ClientPICSProductInfoResponse: number;
            ClientPackageInfoRequest: number;
            ClientPackageInfoResponse: number;
            ClientPackageVersions: number;
            ClientPasswordChange3: number;
            ClientPasswordChangeResponse: number;
            ClientPersonaChangeResponse: number;
            ClientPersonaState: number;
            ClientPersonalQAChange3: number;
            ClientPing: number;
            ClientPingResponse: number;
            ClientPlayerNicknameList: number;
            ClientPlayingSessionState: number;
            ClientPurchaseResponse: number;
            ClientPurchaseWithMachineID: number;
            ClientReadMachineAuth: number;
            ClientReadMachineAuthResponse: number;
            ClientRedeemGuestPass: number;
            ClientRedeemGuestPassResponse: number;
            ClientRegisterAuthTicketWithCM: number;
            ClientRegisterKey: number;
            ClientRegisterOEMMachine: number;
            ClientRegisterOEMMachineResponse: number;
            ClientRemoveFriend: number;
            ClientReportOverlayDetourFailure: number;
            ClientRequestAccountData: number;
            ClientRequestAccountDataResponse: number;
            ClientRequestAuthList: number;
            ClientRequestChangeMail: number;
            ClientRequestChangeMailResponse: number;
            ClientRequestCommentNotifications: number;
            ClientRequestEncryptedAppTicket: number;
            ClientRequestEncryptedAppTicketResponse: number;
            ClientRequestForgottenPasswordEmail: number;
            ClientRequestForgottenPasswordEmail3: number;
            ClientRequestForgottenPasswordEmailResponse: number;
            ClientRequestFreeLicense: number;
            ClientRequestFreeLicenseResponse: number;
            ClientRequestFriendData: number;
            ClientRequestFriendship: number;
            ClientRequestItemAnnouncements: number;
            ClientRequestMachineAuth: number;
            ClientRequestMachineAuthResponse: number;
            ClientRequestOAuthTokenForApp: number;
            ClientRequestOAuthTokenForAppResponse: number;
            ClientRequestValidationMail: number;
            ClientRequestValidationMailResponse: number;
            ClientRequestWebAPIAuthenticateUserNonce: number;
            ClientRequestWebAPIAuthenticateUserNonceResponse: number;
            ClientRequestedClientStats: number;
            ClientResetForgottenPassword: number;
            ClientResetForgottenPassword3: number;
            ClientResetForgottenPassword4: number;
            ClientResetForgottenPasswordResponse: number;
            ClientResetPassword: number;
            ClientResetPasswordResponse: number;
            ClientRichPresenceInfo: number;
            ClientRichPresenceRequest: number;
            ClientRichPresenceUpload: number;
            ClientScreenshotsChanged: number;
            ClientSecretQAChangeResponse: number;
            ClientSendGuestPass: number;
            ClientSendGuestPassResponse: number;
            ClientSentLogs: number;
            ClientServerList: number;
            ClientServerTimestampRequest: number;
            ClientServerUnavailable: number;
            ClientServersAvailable: number;
            ClientServiceCall: number;
            ClientServiceCallResponse: number;
            ClientServiceMethod: number;
            ClientServiceMethodResponse: number;
            ClientServiceModule: number;
            ClientSessionEnd: number;
            ClientSessionStart: number;
            ClientSessionToken: number;
            ClientSessionUpdate: number;
            ClientSessionUpdateAuthTicket: number;
            ClientSetClientAppUpdateState: number;
            ClientSetClientAppUpdateStateResponse: number;
            ClientSetHeartbeatRate: number;
            ClientSetIgnoreFriend: number;
            ClientSetIgnoreFriendResponse: number;
            ClientSharedLibraryBase: number;
            ClientSharedLibraryLockStatus: number;
            ClientSharedLibraryStopPlaying: number;
            ClientSharedLicensesLockStatus: number;
            ClientSharedLicensesStopPlaying: number;
            ClientStat: number;
            ClientStat2: number;
            ClientStat2Int32: number;
            ClientStatsUpdated: number;
            ClientSteamUsageEvent: number;
            ClientStoreUserStats: number;
            ClientStoreUserStats2: number;
            ClientStoreUserStatsResponse: number;
            ClientSubscribeToPersonaFeed: number;
            ClientSystemIM: number;
            ClientSystemIMAck: number;
            ClientTicketAuthComplete: number;
            ClientToGC: number;
            ClientUCMAddScreenshot: number;
            ClientUCMAddScreenshotResponse: number;
            ClientUCMDeletePublishedFile: number;
            ClientUCMDeletePublishedFileResponse: number;
            ClientUCMDeleteScreenshot: number;
            ClientUCMDeleteScreenshotResponse: number;
            ClientUCMEnumeratePublishedFilesByUserAction: number;
            ClientUCMEnumeratePublishedFilesByUserActionResponse: number;
            ClientUCMEnumerateUserPublishedFiles: number;
            ClientUCMEnumerateUserPublishedFilesResponse: number;
            ClientUCMEnumerateUserSubscribedFiles: number;
            ClientUCMEnumerateUserSubscribedFilesResponse: number;
            ClientUCMEnumerateUserSubscribedFilesWithUpdates: number;
            ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse: number;
            ClientUCMGetPublishedFileDetails: number;
            ClientUCMGetPublishedFileDetailsResponse: number;
            ClientUCMGetPublishedFilesForUser: number;
            ClientUCMGetPublishedFilesForUserResponse: number;
            ClientUCMPublishFile: number;
            ClientUCMPublishFileResponse: number;
            ClientUCMPublishedFileDeleted: number;
            ClientUCMPublishedFileSubscribed: number;
            ClientUCMPublishedFileUnsubscribed: number;
            ClientUCMSetUserPublishedFileAction: number;
            ClientUCMSetUserPublishedFileActionResponse: number;
            ClientUCMSubscribePublishedFile: number;
            ClientUCMSubscribePublishedFileResponse: number;
            ClientUCMUnsubscribePublishedFile: number;
            ClientUCMUnsubscribePublishedFileResponse: number;
            ClientUCMUpdatePublishedFile: number;
            ClientUCMUpdatePublishedFileResponse: number;
            ClientUDSInviteToGame: number;
            ClientUDSP2PSessionEnded: number;
            ClientUDSP2PSessionStarted: number;
            ClientUFSDeleteFileRequest: number;
            ClientUFSDeleteFileResponse: number;
            ClientUFSDownloadChunk: number;
            ClientUFSDownloadRequest: number;
            ClientUFSDownloadResponse: number;
            ClientUFSGetFileListForApp: number;
            ClientUFSGetFileListForAppResponse: number;
            ClientUFSGetSingleFileInfo: number;
            ClientUFSGetSingleFileInfoResponse: number;
            ClientUFSGetUGCDetails: number;
            ClientUFSGetUGCDetailsResponse: number;
            ClientUFSLoginRequest: number;
            ClientUFSLoginResponse: number;
            ClientUFSShareFile: number;
            ClientUFSShareFileResponse: number;
            ClientUFSTransferHeartbeat: number;
            ClientUFSUploadFileChunk: number;
            ClientUFSUploadFileFinished: number;
            ClientUFSUploadFileRequest: number;
            ClientUFSUploadFileResponse: number;
            ClientUGSGetGlobalStats: number;
            ClientUGSGetGlobalStatsResponse: number;
            ClientUninstallClientApp: number;
            ClientUninstallClientAppResponse: number;
            ClientUnlockHEVC: number;
            ClientUnlockHEVCResponse: number;
            ClientUnlockStreaming: number;
            ClientUnlockStreamingResponse: number;
            ClientUpdateChatMetadata: number;
            ClientUpdateGuestPassesList: number;
            ClientUpdateMachineAuth: number;
            ClientUpdateMachineAuthResponse: number;
            ClientUpdateUserGameInfo: number;
            ClientUseLocalDeviceAuthorizations: number;
            ClientUserNotifications: number;
            ClientVACBanStatus: number;
            ClientVACChallenge: number;
            ClientVACResponse: number;
            ClientVTTCert: number;
            ClientVacStatusQuery: number;
            ClientVacStatusResponse: number;
            ClientVanityURLChangedNotification: number;
            ClientVerifyPassword: number;
            ClientVerifyPasswordResponse: number;
            ClientVoiceCallPreAuthorize: number;
            ClientVoiceCallPreAuthorizeResponse: number;
            ClientWalletInfoUpdate: number;
            ClientWorkshopItemChangesRequest: number;
            ClientWorkshopItemChangesResponse: number;
            ClientWorkshopItemInfoRequest: number;
            ClientWorkshopItemInfoResponse: number;
            CommunityAddFriendNews: number;
            CommunityDeleteUserNews: number;
            CommunityGetUserFriendNews: number;
            ContentDescriptionUpdate: number;
            DFSAcceptedResponse: number;
            DFSConnection: number;
            DFSConnectionReply: number;
            DFSGetFile: number;
            DFSGetFileFromServer: number;
            DFSInstallLocalFile: number;
            DFSPurgeFile: number;
            DFSRecvTransmitFile: number;
            DFSRequestPingback: number;
            DFSRequestPingback2: number;
            DFSResponsePingback2: number;
            DFSRouteFile: number;
            DFSRouteFileResponse: number;
            DFSSendTransmitFile: number;
            DFSStartTransfer: number;
            DFSTransferComplete: number;
            DPAccountCreationStats: number;
            DPAchievementStats: number;
            DPBlockingStats: number;
            DPCloudStats: number;
            DPDownloadRateStatistics: number;
            DPFacebookStatistics: number;
            DPGamePlayedStats: number;
            DPGameServersPlayersStats: number;
            DPGetPlayerCount: number;
            DPGetPlayerCountResponse: number;
            DPNatTraversalStats: number;
            DPPartnerMicroTxns: number;
            DPPartnerMicroTxnsResponse: number;
            DPSetPublishingState: number;
            DPSteamUsageEvent: number;
            DPStoreSaleStatistics: number;
            DPStreamingUniquePlayersStat: number;
            DPUniquePlayersStat: number;
            DPUpdateContentEvent: number;
            DPVRUniquePlayersStat: number;
            DPVacBanStats: number;
            DPVacCafeBanStats: number;
            DPVacCertBanStats: number;
            DPVacInfractionStats: number;
            DRMAdminUpdate: number;
            DRMAdminUpdateResponse: number;
            DRMBuildBlobRequest: number;
            DRMBuildBlobResponse: number;
            DRMDetailsReportRequest: number;
            DRMDetailsReportResponse: number;
            DRMEmptyGuidCache: number;
            DRMEmptyGuidCacheResponse: number;
            DRMProcessFile: number;
            DRMProcessFileResponse: number;
            DRMRange2: number;
            DRMResolveGuidRequest: number;
            DRMResolveGuidResponse: number;
            DRMSFetchVersionSet: number;
            DRMSFetchVersionSetResponse: number;
            DRMStabilityReport: number;
            DRMStabilityReportResponse: number;
            DRMSync: number;
            DRMSyncResponse: number;
            DRMVariabilityReport: number;
            DRMVariabilityReportResponse: number;
            DRMWorkerProcess: number;
            DRMWorkerProcessAnalyzeFileRequest: number;
            DRMWorkerProcessAnalyzeFileResponse: number;
            DRMWorkerProcessBackfillOriginalRequest: number;
            DRMWorkerProcessBackfillOriginalResponse: number;
            DRMWorkerProcessDRMAndSign: number;
            DRMWorkerProcessDRMAndSignResponse: number;
            DRMWorkerProcessDescribeSecretRequest: number;
            DRMWorkerProcessDescribeSecretResponse: number;
            DRMWorkerProcessEvaluateCrashRequest: number;
            DRMWorkerProcessEvaluateCrashResponse: number;
            DRMWorkerProcessExamineBlobRequest: number;
            DRMWorkerProcessExamineBlobResponse: number;
            DRMWorkerProcessGetBlobRequest: number;
            DRMWorkerProcessGetBlobResponse: number;
            DRMWorkerProcessGetDRMGuidsFromFileRequest: number;
            DRMWorkerProcessGetDRMGuidsFromFileResponse: number;
            DRMWorkerProcessInstallAllRequest: number;
            DRMWorkerProcessInstallAllResponse: number;
            DRMWorkerProcessInstallDRMDLLRequest: number;
            DRMWorkerProcessInstallDRMDLLResponse: number;
            DRMWorkerProcessInstallProcessedFilesRequest: number;
            DRMWorkerProcessInstallProcessedFilesResponse: number;
            DRMWorkerProcessSecretIdStringRequest: number;
            DRMWorkerProcessSecretIdStringResponse: number;
            DRMWorkerProcessSplitAndInstallRequest: number;
            DRMWorkerProcessSplitAndInstallResponse: number;
            DRMWorkerProcessSteamworksInfoRequest: number;
            DRMWorkerProcessSteamworksInfoResponse: number;
            DRMWorkerProcessUnpackBlobRequest: number;
            DRMWorkerProcessUnpackBlobResponse: number;
            DRMWorkerProcessValidateDRMDLLRequest: number;
            DRMWorkerProcessValidateDRMDLLResponse: number;
            DRMWorkerProcessValidateFileRequest: number;
            DRMWorkerProcessValidateFileResponse: number;
            DSSCurrentFileList: number;
            DSSNewFile: number;
            DSSSynchList: number;
            DSSSynchListResponse: number;
            DSSSynchSubscribe: number;
            DSSSynchUnsubscribe: number;
            DestJobFailed: number;
            DeviceAuthorizationBase: number;
            DirRequest: number;
            DirResponse: number;
            EPMRestartProcess: number;
            EPMStartProcess: number;
            EPMStopProcess: number;
            EconBase: number;
            EconCDKeyProcessTransaction: number;
            EconCDKeyProcessTransactionResponse: number;
            EconFlushInventoryCache: number;
            EconFlushInventoryCacheResponse: number;
            EconGetErrorLogs: number;
            EconGetErrorLogsResponse: number;
            EconTrading_CancelTradeRequest: number;
            EconTrading_InitiateTradeProposed: number;
            EconTrading_InitiateTradeRequest: number;
            EconTrading_InitiateTradeResponse: number;
            EconTrading_InitiateTradeResult: number;
            EconTrading_StartSession: number;
            Exit: number;
            ExitShell: number;
            ExitShells: number;
            FBSApplyAccountCred: number;
            FBSApplyAccountCredResponse: number;
            FBSApplyOSUpdates: number;
            FBSBootstrapperGetPackageChunk: number;
            FBSBootstrapperGetPackageChunkResponse: number;
            FBSBootstrapperPackageRequest: number;
            FBSBootstrapperPackageResponse: number;
            FBSBootstrapperPackageTransferProgress: number;
            FBSConnectionData: number;
            FBSDeployHotFixPackage: number;
            FBSDeployHotFixResponse: number;
            FBSDeployPackage: number;
            FBSDeployResponse: number;
            FBSDownloadHotFix: number;
            FBSDownloadHotFixResponse: number;
            FBSForceBounce: number;
            FBSForceRefresh: number;
            FBSInfoFromBootstrapper: number;
            FBSMinidumpServer: number;
            FBSQueryGMForRequest: number;
            FBSQueryGMResponse: number;
            FBSRebootBox: number;
            FBSRebootBoxResponse: number;
            FBSReqVersion: number;
            FBSRestartBootstrapper: number;
            FBSRunCMDScript: number;
            FBSSetBigBrotherMode: number;
            FBSSetShellCount: number;
            FBSSetShellCount_obsolete: number;
            FBSSetState: number;
            FBSTerminateShell: number;
            FBSTerminateZombies: number;
            FBSUpdateBootstrapper: number;
            FBSUpdateTargetConfigFile: number;
            FBSVersionInfo: number;
            FSAddOrRemoveFollower: number;
            FSAddOrRemoveFollowerResponse: number;
            FSBase: number;
            FSCommentNotification: number;
            FSCommentNotificationViewed: number;
            FSComputeFrenematrix: number;
            FSComputeFrenematrixResponse: number;
            FSGetPendingNotificationCount: number;
            FSGetPendingNotificationCountResponse: number;
            FSPlayStatusNotification: number;
            FSPublishPersonaStatus: number;
            FSRequestFriendData: number;
            FSRichPresenceRequest: number;
            FSRichPresenceResponse: number;
            FSUpdateFollowingList: number;
            FTSBrowseClans: number;
            FTSBrowseClansResponse: number;
            FTSClanDeleted: number;
            FTSGetBrowseCounts: number;
            FTSGetBrowseCountsResponse: number;
            FTSGetGSPlayStats: number;
            FTSGetGSPlayStatsForServer: number;
            FTSGetGSPlayStatsForServerResponse: number;
            FTSGetGSPlayStatsResponse: number;
            FTSReportIPUpdates: number;
            FTSSearch: number;
            FTSSearchClansByLocation: number;
            FTSSearchClansByLocationResponse: number;
            FTSSearchPlayersByLocation: number;
            FTSSearchPlayersByLocationResponse: number;
            FTSSearchResponse: number;
            FTSSearchStatus: number;
            FTSSearchStatusResponse: number;
            FailServer: number;
            FileXferData: number;
            FileXferDataAck: number;
            FileXferEnd: number;
            FileXferRequest: number;
            FileXferResponse: number;
            GCAchievementAwarded: number;
            GCCmdBounce: number;
            GCCmdDeploy: number;
            GCCmdDeployResponse: number;
            GCCmdDown: number;
            GCCmdForceBounce: number;
            GCCmdRevive: number;
            GCCmdStatus: number;
            GCCmdSwitch: number;
            GCGetAccountDetails: number;
            GCGetAccountDetails_DEPRECATED: number;
            GCGetEmailTemplate: number;
            GCGetEmailTemplateResponse: number;
            GCHAccountLockStatusChange: number;
            GCHAccountPhoneNumberChange: number;
            GCHAccountTradeBanStatusChange: number;
            GCHAccountTwoFactorChange: number;
            GCHAccountVacStatusChange: number;
            GCHKillGC: number;
            GCHKillGCResponse: number;
            GCHRelay: number;
            GCHRelayClientToIS: number;
            GCHRelayToClient: number;
            GCHRequestStatus: number;
            GCHRequestStatusResponse: number;
            GCHRequestUpdateSession: number;
            GCHSpawnGC: number;
            GCHSpawnGCResponse: number;
            GCHUpdateSession: number;
            GCHVacVerificationChange: number;
            GCInterAppMessage: number;
            GCRegisterWebInterfaces: number;
            GCRegisterWebInterfaces_Deprecated: number;
            GCSendClient: number;
            GCSystemMessage: number;
            GCUpdateGSState: number;
            GCUpdatePlayedState: number;
            GCValidateSession: number;
            GCValidateSessionResponse: number;
            GMConvertUserWallets: number;
            GMDRMSync: number;
            GMGetServiceMethodRouting: number;
            GMGetServiceMethodRoutingResponse: number;
            GMLoadActivationCodes: number;
            GMQueueForFBS: number;
            GMReportPHPError: number;
            GMSBase: number;
            GMSClientServerQueryResponse: number;
            GMSGameServerReplicate: number;
            GMSchemaConversionResults: number;
            GMSchemaConversionResultsResponse: number;
            GMWriteConfigToSQL: number;
            GMWriteShellFailureToSQL: number;
            GMWriteStatsToSOS: number;
            GSApprove: number;
            GSAssociateWithClan: number;
            GSAssociateWithClanResponse: number;
            GSComputeNewPlayerCompatibility: number;
            GSComputeNewPlayerCompatibilityResponse: number;
            GSDeny: number;
            GSDisconnectNotice: number;
            GSGetPlayStats: number;
            GSGetPlayStatsResponse: number;
            GSGetReputation: number;
            GSGetReputationResponse: number;
            GSGetUserAchievementStatus: number;
            GSGetUserAchievementStatusResponse: number;
            GSGetUserGroupStatus: number;
            GSGetUserGroupStatusResponse: number;
            GSKick: number;
            GSPerformHardwareSurvey: number;
            GSPlayerList: number;
            GSServerType: number;
            GSStatus: number;
            GSStatus2: number;
            GSStatusReply: number;
            GSStatusUpdate_Unused: number;
            GSUserPlaying: number;
            GameServerOutOfDate: number;
            GenericReply: number;
            GetUserIPCountry: number;
            GetUserIPCountryResponse: number;
            GracefulExitShell: number;
            Heartbeat: number;
            HubConnect: number;
            ISRelayToGCH: number;
            Invalid: number;
            InvalidateDBOCacheItems: number;
            JobHeartbeat: number;
            JobHeartbeatTest: number;
            JobHeartbeatTestResponse: number;
            KGSAllocateKeyRange: number;
            KGSAllocateKeyRangeResponse: number;
            KGSBase: number;
            KGSGenerateGameStopWCKeys: number;
            KGSGenerateGameStopWCKeysResponse: number;
            KGSGenerateKeys: number;
            KGSGenerateKeysResponse: number;
            KGSRemapKeys: number;
            KGSRemapKeysResponse: number;
            KeepAlive: number;
            LBSDeleteLB: number;
            LBSDeleteLBEntry: number;
            LBSDeleteLBResponse: number;
            LBSFindOrCreateLB: number;
            LBSFindOrCreateLBResponse: number;
            LBSGetLBEntries: number;
            LBSGetLBEntriesResponse: number;
            LBSGetLBList: number;
            LBSGetLBListResponse: number;
            LBSResetLB: number;
            LBSResetLBResponse: number;
            LBSSetLBDetails: number;
            LBSSetScore: number;
            LBSSetScoreResponse: number;
            LicenseProcessingComplete: number;
            LoadDBOCacheItem: number;
            LoadDBOCacheItemResponse: number;
            LogSearchCancel: number;
            LogSearchRequest: number;
            LogSearchResponse: number;
            LogsinkBase: number;
            LogsinkWriteReport: number;
            MDSContentServerConfig: number;
            MDSContentServerConfigRequest: number;
            MDSContentServerStatsBroadcast: number;
            MDSDownloadDepotChunksAck: number;
            MDSGetDepotChunk: number;
            MDSGetDepotChunkChunk: number;
            MDSGetDepotChunkResponse: number;
            MDSGetDepotManifest: number;
            MDSGetDepotManifestChunk: number;
            MDSGetDepotManifestResponse: number;
            MDSGetServerListForUser: number;
            MDSGetServerListForUserResponse: number;
            MDSGetVersionsForDepot: number;
            MDSGetVersionsForDepotResponse: number;
            MDSMigrateChunk: number;
            MDSMigrateChunkResponse: number;
            MDSSetPublicVersionForDepot: number;
            MDSSetPublicVersionForDepotResponse: number;
            MDSToAMGetDepotDecryptionKeyResponse: number;
            MDSToCSFlushChunk: number;
            MDSUpdateContentServerConfig: number;
            MMSBase: number;
            MPASBase: number;
            MPASVacBanReset: number;
            MarketingMessageUpdate: number;
            Multi: number;
            NonStdMsgBase: number;
            NonStdMsgChase: number;
            NonStdMsgDFSTransfer: number;
            NonStdMsgHTTPClient: number;
            NonStdMsgHTTPServer: number;
            NonStdMsgLogsink: number;
            NonStdMsgMemcached: number;
            NonStdMsgPHPSimulator: number;
            NonStdMsgRTMPServer: number;
            NonStdMsgSteam2Emulator: number;
            NonStdMsgSyslog: number;
            NonStdMsgTests: number;
            NonStdMsgUMQpipeAAPL: number;
            NonStdMsgWGResponse: number;
            NotificationOfSuspiciousActivity: number;
            NotifyWatchdog: number;
            OGSBeginSession: number;
            OGSBeginSessionResponse: number;
            OGSEndSession: number;
            OGSEndSessionResponse: number;
            OGSWriteAppSessionRow: number;
            P2PIntroducerMessage: number;
            PICSBase: number;
            PSAddPackageToShoppingCart: number;
            PSAddPackageToShoppingCartResponse: number;
            PSAddWalletCreditToShoppingCart: number;
            PSAddWalletCreditToShoppingCartResponse: number;
            PSCreateShoppingCart: number;
            PSCreateShoppingCartResponse: number;
            PSGetShoppingCartContents: number;
            PSGetShoppingCartContentsResponse: number;
            PSIsValidShoppingCart: number;
            PSIsValidShoppingCartResponse: number;
            PSRemoveLineItemFromShoppingCart: number;
            PSRemoveLineItemFromShoppingCartResponse: number;
            PhysicalBoxInventory: number;
            Ping: number;
            PingResponse: number;
            PrepareToExit: number;
            ProtobufWrapped: number;
            ProvideWindowsEventLogEntries: number;
            QuestServerBase: number;
            QueuedEmailsComplete: number;
            RMDeleteMemcachedKeys: number;
            RMMsgTraceAddTrigger: number;
            RMMsgTraceEvent: number;
            RMMsgTraceRemoveTrigger: number;
            RMRange: number;
            RMRemoteInvoke: number;
            RMTestVerisignOTP: number;
            RMTestVerisignOTPResponse: number;
            RemoteClientAcceptEULA: number;
            RemoteClientAppStatus: number;
            RemoteClientAuth: number;
            RemoteClientAuthResponse: number;
            RemoteClientBase: number;
            RemoteClientGetControllerConfig: number;
            RemoteClientGetControllerConfigResposne: number;
            RemoteClientPing: number;
            RemoteClientPingResponse: number;
            RemoteClientStartStream: number;
            RemoteClientStartStreamResponse: number;
            RemoteClientStreamingEnabled: number;
            RemoteSysID: number;
            ReqChallenge: number;
            ReqChallengeTest: number;
            RequestFullStatsBlock: number;
            RequestStatHistory: number;
            RequestWindowsEventLogEntries: number;
            RouteMessage: number;
            SCIDRequest: number;
            SCIDResponse: number;
            SLCBase: number;
            SLCOwnerLibraryChanged: number;
            SLCRequestUserSessionStatus: number;
            SLCSharedLibraryChanged: number;
            SLCSharedLicensesLockStatus: number;
            SLCUserSessionStatus: number;
            SMExpensiveReport: number;
            SMFishingReport: number;
            SMGetSchemaConversionResults: number;
            SMGetSchemaConversionResultsResponse: number;
            SMHourlyReport: number;
            SMMonitorSpace: number;
            SMPartitionRenames: number;
            SecretsBase: number;
            SecretsCredentialPairResponse: number;
            SecretsRequestCredentialPair: number;
            SecretsRequestServerIdentity: number;
            SecretsServerIdentityResponse: number;
            SecretsUpdateServerIdentities: number;
            ServiceMethod: number;
            ServiceMethodCallFromClient: number;
            ServiceMethodResponse: number;
            ServiceMethodSendToClient: number;
            SetTestFlag: number;
            ShellCheckWindowsUpdates: number;
            ShellCheckWindowsUpdatesResponse: number;
            ShellConfigInfoUpdate: number;
            ShellFailed: number;
            ShellFlushUserLicenseCache: number;
            ShellSearchLogs: number;
            ShellSearchLogsResponse: number;
            StatHistory: number;
            Stats: number;
            StatsDeprecated: number;
            StoreBase: number;
            StoreUpdateRecommendationCount: number;
            Subscribe: number;
            TestInitDB: number;
            TestResetServer: number;
            TestWorkerProcess: number;
            TestWorkerProcessLoadUnloadModuleRequest: number;
            TestWorkerProcessLoadUnloadModuleResponse: number;
            TestWorkerProcessServiceModuleCallRequest: number;
            TestWorkerProcessServiceModuleCallResponse: number;
            TimestampRequest: number;
            TimestampResponse: number;
            UCMAddTaggedScreenshot: number;
            UCMBase: number;
            UCMDeleteOldScreenshot: number;
            UCMDeleteOldScreenshotResponse: number;
            UCMDeleteOldVideo: number;
            UCMDeleteOldVideoResponse: number;
            UCMDeletePublishedFile: number;
            UCMDeletePublishedFileResponse: number;
            UCMFixStatsPublishedFile: number;
            UCMGetPublishedFilesForUser: number;
            UCMGetPublishedFilesForUserResponse: number;
            UCMGetUserSubscribedFiles: number;
            UCMGetUserSubscribedFilesResponse: number;
            UCMPublishFile: number;
            UCMPublishFileResponse: number;
            UCMPublishedFileChildAdd: number;
            UCMPublishedFileChildAddResponse: number;
            UCMPublishedFileChildChangeSortOrder: number;
            UCMPublishedFileChildChangeSortOrderResponse: number;
            UCMPublishedFileChildRemove: number;
            UCMPublishedFileChildRemoveResponse: number;
            UCMPublishedFileContentUpdated: number;
            UCMPublishedFileParentChanged: number;
            UCMPublishedFilePreviewAdd: number;
            UCMPublishedFilePreviewAddResponse: number;
            UCMPublishedFilePreviewChangeSortOrder: number;
            UCMPublishedFilePreviewChangeSortOrderResponse: number;
            UCMPublishedFilePreviewRemove: number;
            UCMPublishedFilePreviewRemoveResponse: number;
            UCMPublishedFileReported: number;
            UCMPublishedFileSubscribed: number;
            UCMPublishedFileUnsubscribed: number;
            UCMPublishedFileUpdated: number;
            UCMReloadPublishedFile: number;
            UCMReloadUserFileListCaches: number;
            UCMRemoveTaggedScreenshot: number;
            UCMResetCommunityContent: number;
            UCMResetCommunityContentResponse: number;
            UCMUpdateOldScreenshotPrivacy: number;
            UCMUpdateOldScreenshotPrivacyResponse: number;
            UCMUpdatePublishedFile: number;
            UCMUpdatePublishedFileBan: number;
            UCMUpdatePublishedFileBanResponse: number;
            UCMUpdatePublishedFileIncompatibleStatus: number;
            UCMUpdatePublishedFileResponse: number;
            UCMUpdatePublishedFileStat: number;
            UCMUpdateTaggedScreenshot: number;
            UCMValidateObjectExists: number;
            UCMValidateObjectExistsResponse: number;
            UDSBase: number;
            UDSFindSession: number;
            UDSFindSessionResponse: number;
            UDSHasSession: number;
            UDSHasSessionResponse: number;
            UDSRenderUserAuth: number;
            UDSRenderUserAuthResponse: number;
            UFSDownloadChunk: number;
            UFSDownloadChunkRequest: number;
            UFSDownloadChunkResponse: number;
            UFSDownloadFinishRequest: number;
            UFSDownloadFinishResponse: number;
            UFSDownloadRequest: number;
            UFSDownloadResponse: number;
            UFSDownloadStartRequest: number;
            UFSDownloadStartResponse: number;
            UFSFlushURLCache: number;
            UFSGetUGCURLs: number;
            UFSGetUGCURLsResponse: number;
            UFSHttpUploadFileFinishRequest: number;
            UFSHttpUploadFileFinishResponse: number;
            UFSMigrateFile: number;
            UFSMigrateFileAppID: number;
            UFSMigrateFileAppIDResponse: number;
            UFSMigrateFileResponse: number;
            UFSReloadAccount: number;
            UFSReloadAccountResponse: number;
            UFSReloadPartitionInfo: number;
            UFSSynchronizeFile: number;
            UFSSynchronizeFileResponse: number;
            UFSUpdateFileFlags: number;
            UFSUpdateFileFlagsResponse: number;
            UFSUpdateRecordBatched: number;
            UFSUpdateRecordBatchedResponse: number;
            UFSUploadCommit: number;
            UFSUploadCommitResponse: number;
            UGSBase: number;
            UGSUpdateGlobalStats: number;
            UMQ2AM_ClientMsgBatch: number;
            UMQBase: number;
            UMQEnqueueMobileAnnouncements: number;
            UMQEnqueueMobileSalePromotions: number;
            UMQIncomingChatMessage: number;
            UMQLogoffRequest: number;
            UMQLogoffResponse: number;
            UMQLogonRequest: number;
            UMQLogonResponse: number;
            UMQPoll: number;
            UMQPollResults: number;
            UMQSendChatMessage: number;
            UniverseChanged: number;
            UniverseData: number;
            UpdateConfigFile: number;
            UpdateCreditCardRequest: number;
            UpdateRecordResponse: number;
            UpdateUserBanResponse: number;
            VACResponse: number;
            VSAddCheat: number;
            VSChallengeResultText: number;
            VSGetChallengeResults: number;
            VSLoadDBFinished: number;
            VSMarkCheat: number;
            VSPurgeCodeModDB: number;
            VSReportLingerer: number;
            VSRequestManagedChallenge: number;
            WGRequest: number;
            WGResponse: number;
            WebAPIBase: number;
            WebAPIInvalidateOAuthClientCache: number;
            WebAPIInvalidateOAuthTokenCache: number;
            WebAPIInvalidateTokensForAccount: number;
            WebAPIJobRequest: number;
            WebAPIJobResponse: number;
            WebAPIRegisterGCInterfaces: number;
            WebAPISetSecrets: number;
            WebAPIValidateOAuth2Token: number;
            WebAPIValidateOAuth2TokenResponse: number;
            WorkerProcess: number;
            WorkerProcessPingRequest: number;
            WorkerProcessPingResponse: number;
            WorkerProcessShutdown: number;
            WorkshopAcceptTOSRequest: number;
            WorkshopAcceptTOSResponse: number;
            WorkshopBase: number;
            ZipRequest: number;
            ZipResponse: number;
        };

        static ENewsUpdateType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            AppNews: number;
            CDDBUpdate: number;
            ClientUpdate: number;
            SteamAds: number;
            SteamNews: number;
        };

        static ENotificationSetting: {
            '0': string;
            '1': string;
            '2': string;
            Always: number;
            Never: number;
            NotifyUseDefault: number;
        };

        static EOSType: {
            '-1': string;
            '-100': string;
            '-101': string;
            '-102': string;
            '-189': string;
            '-190': string;
            '-191': string;
            '-192': string;
            '-193': string;
            '-194': string;
            '-195': string;
            '-196': string;
            '-197': string;
            '-198': string;
            '-199': string;
            '-200': string;
            '-201': string;
            '-202': string;
            '-203': string;
            '-300': string;
            '-400': string;
            '-500': string;
            '-600': string;
            '-700': string;
            '-83': string;
            '-84': string;
            '-85': string;
            '-86': string;
            '-87': string;
            '-88': string;
            '-89': string;
            '-90': string;
            '-92': string;
            '-93': string;
            '-94': string;
            '-95': string;
            '-99': string;
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '2': string;
            '26': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            AndroidUnknown: number;
            IOSUnknown: number;
            Linux22: number;
            Linux24: number;
            Linux26: number;
            Linux310: number;
            Linux316: number;
            Linux318: number;
            Linux32: number;
            Linux35: number;
            Linux36: number;
            Linux3x: number;
            Linux41: number;
            Linux44: number;
            Linux49: number;
            Linux4x: number;
            LinuxMax: number;
            LinuxUnknown: number;
            MacOS1010: number;
            MacOS1011: number;
            MacOS1012: number;
            MacOS104: number;
            MacOS105: number;
            MacOS1058: number;
            MacOS106: number;
            MacOS1063: number;
            MacOS1064_slgu: number;
            MacOS1067: number;
            MacOS107: number;
            MacOS108: number;
            MacOS109: number;
            MacOSMax: number;
            MacOSUnknown: number;
            Macos1013: number;
            Macos1014: number;
            Max: number;
            PS3: number;
            UMQ: number;
            Unknown: number;
            Web: number;
            Win10: number;
            Win200: number;
            Win2000: number;
            Win2003: number;
            Win2008: number;
            Win2012: number;
            Win2012R2: number;
            Win2016: number;
            Win311: number;
            Win7: number;
            Win8: number;
            Win81: number;
            Win95: number;
            Win98: number;
            WinMAX: number;
            WinME: number;
            WinNT: number;
            WinUnknown: number;
            WinVista: number;
            WinXP: number;
            Windows10: number;
            Windows7: number;
            Windows8: number;
            Windows81: number;
        };

        static EPaymentMethod: {
            '0': string;
            '1': string;
            '10': string;
            '1024': string;
            '11': string;
            '12': string;
            '128': string;
            '129': string;
            '13': string;
            '130': string;
            '131': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '2': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
            '24': string;
            '25': string;
            '256': string;
            '26': string;
            '27': string;
            '28': string;
            '29': string;
            '3': string;
            '30': string;
            '31': string;
            '32': string;
            '33': string;
            '34': string;
            '35': string;
            '36': string;
            '37': string;
            '38': string;
            '39': string;
            '4': string;
            '40': string;
            '41': string;
            '42': string;
            '43': string;
            '44': string;
            '45': string;
            '46': string;
            '47': string;
            '48': string;
            '49': string;
            '5': string;
            '50': string;
            '51': string;
            '512': string;
            '52': string;
            '53': string;
            '54': string;
            '55': string;
            '56': string;
            '57': string;
            '58': string;
            '59': string;
            '6': string;
            '60': string;
            '61': string;
            '62': string;
            '64': string;
            '65': string;
            '66': string;
            '67': string;
            '68': string;
            '69': string;
            '7': string;
            '70': string;
            '71': string;
            '72': string;
            '73': string;
            '74': string;
            '75': string;
            '76': string;
            '77': string;
            '78': string;
            '79': string;
            '8': string;
            '9': string;
            ActivationCode: number;
            Akbank: number;
            AliPay: number;
            AmexBrazil: number;
            Aura: number;
            AuthorizedDevice: number;
            AutoGrant: number;
            BBVAContinental: number;
            BancoCreditoDePeru: number;
            BancoDoBrasilOnline: number;
            BankAsya: number;
            BankTransferJapan: number;
            Beeline: number;
            BitCoin: number;
            BoaCompraGold: number;
            BoletoBancario: number;
            BookVoucher: number;
            BradescoOnline: number;
            Carnet: number;
            CashU: number;
            ClickAndBuy: number;
            Complimentary: number;
            ConvenientStoreVoucher: number;
            CreditCard: number;
            CreditCardJapan: number;
            CultureVoucher: number;
            DenizBank: number;
            DinersCardBrazil: number;
            EClubPoints: number;
            Efecty: number;
            Exito: number;
            Finansbank: number;
            GameStop: number;
            GameVoucher: number;
            Garanti: number;
            Giropay: number;
            GuestPass: number;
            Halkbank: number;
            HappymoneyVoucher: number;
            HardwarePromo: number;
            Hipercard: number;
            Ideal: number;
            IsBank: number;
            ItauOnline: number;
            Kiosk: number;
            Konbini: number;
            MOLPoints: number;
            Maestro: number;
            MaestroBoaCompra: number;
            MangirKart: number;
            MasterComp: number;
            MastercardBrazil: number;
            MoPay: number;
            MoneyBookers: number;
            Multibanco: number;
            None: number;
            OEMTicket: number;
            OXXO: number;
            OneCard: number;
            PSE: number;
            PTT: number;
            PagoEfectivo: number;
            Pagseguro: number;
            Paloto: number;
            PayEasy: number;
            PayEasyJapan: number;
            PayPal: number;
            PaySafeCard: number;
            Payshop: number;
            PinValidda: number;
            Promotional: number;
            Qiwi: number;
            SPEI: number;
            SafetyPay: number;
            Sofort: number;
            Split: number;
            SteamPressMaster: number;
            StorePromotion: number;
            ThreePay: number;
            ToditoCash: number;
            Trustly: number;
            UnionPay: number;
            Valve: number;
            VisaBrazil: number;
            Wallet: number;
            WebMoney: number;
            WebMoneyJapan: number;
            Yandex: number;
            YapiKredi: number;
            Zong: number;
        };

        static EPersonaState: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            Away: number;
            Busy: number;
            Invisible: number;
            LookingToPlay: number;
            LookingToTrade: number;
            Max: number;
            Offline: number;
            Online: number;
            Snooze: number;
        };

        static EPersonaStateFlag: {
            '1': string;
            '1024': string;
            '2': string;
            '2048': string;
            '256': string;
            '4': string;
            '4096': string;
            '512': string;
            ClientTypeMobile: number;
            ClientTypeTenfoot: number;
            ClientTypeVR: number;
            ClientTypeWeb: number;
            Golden: number;
            HasRichPresence: number;
            InJoinableGame: number;
            LaunchTypeGamepad: number;
            OnlineUsingBigPicture: number;
            OnlineUsingMobile: number;
            OnlineUsingVR: number;
            OnlineUsingWeb: number;
        };

        static EPlatformType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            Linux: number;
            Linux32: number;
            Linux64: number;
            Max: number;
            OSX: number;
            PS3: number;
            Unknown: number;
            Win32: number;
            Win64: number;
        };

        static EProtoExecutionSite: {
            '0': string;
            '2': string;
            SteamClient: number;
            Unknown: number;
        };

        static EPublishedFileForSaleStatus: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            ApprovedForSale: number;
            NoLongerForSale: number;
            NotForSale: number;
            PendingApproval: number;
            RejectedForSale: number;
            TentativeApproval: number;
        };

        static EPublishedFileVisibility: {
            '0': string;
            '1': string;
            '2': string;
            FriendsOnly: number;
            Private: number;
            Public: number;
        };

        static EPurchaseResult: {
            AlreadyOwned: number;
            BaseGameRequired: number;
            DuplicatedKey: number;
            InvalidKey: number;
            OK: number;
            OnCooldown: number;
            RegionLockedKey: number;
            Unknown: number;
        };

        static EPurchaseResultDetail: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '2': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
            '24': string;
            '25': string;
            '26': string;
            '27': string;
            '28': string;
            '29': string;
            '3': string;
            '30': string;
            '31': string;
            '32': string;
            '33': string;
            '34': string;
            '35': string;
            '36': string;
            '37': string;
            '38': string;
            '39': string;
            '4': string;
            '40': string;
            '41': string;
            '42': string;
            '43': string;
            '44': string;
            '45': string;
            '46': string;
            '47': string;
            '48': string;
            '49': string;
            '5': string;
            '50': string;
            '51': string;
            '52': string;
            '53': string;
            '54': string;
            '55': string;
            '56': string;
            '57': string;
            '58': string;
            '59': string;
            '6': string;
            '60': string;
            '61': string;
            '62': string;
            '63': string;
            '64': string;
            '65': string;
            '66': string;
            '67': string;
            '7': string;
            '8': string;
            '9': string;
            AVSFailure: number;
            AccountLocked: number;
            AcctIsBlocked: number;
            AcctNotVerified: number;
            AlreadyPurchased: number;
            BadActivationCode: number;
            BillingAgreementAlreadyExists: number;
            BillingAgreementCancelled: number;
            BundleTypeCannotBeGifted: number;
            CanceledByNewTransaction: number;
            CancelledByUser: number;
            CannotGiftShippedGoods: number;
            CannotRedeemCodeFromClient: number;
            CannotShipInternationally: number;
            CannotShipToCountry: number;
            CannotShipToPOBox: number;
            CartValueTooHigh: number;
            ContactSupport: number;
            CreditCardBinMismatchesType: number;
            DelayedCompletion: number;
            DoesNotOwnRequiredApp: number;
            DuplicateActivationCode: number;
            EmailNotValidated: number;
            ExceededSteamLimit: number;
            ExpiredCard: number;
            ExpiredCoupon: number;
            FailCurrencyTransProvider: number;
            FailedCyberCafe: number;
            ForceCanceledPending: number;
            FraudCheckFailed: number;
            HungTransactionCancelled: number;
            InsufficientFunds: number;
            InsufficientInventory: number;
            InvalidAccount: number;
            InvalidCoupon: number;
            InvalidData: number;
            InvalidPackage: number;
            InvalidPaymentMethod: number;
            InvalidShippingAddress: number;
            InvalidTaxAddress: number;
            MustLoginPS3AppForPurchase: number;
            NeedsPreApproval: number;
            NoCachedPaymentMethod: number;
            NoDetail: number;
            NoWallet: number;
            OtherAbortableInProgress: number;
            OthersInProgress: number;
            OverlappingPackagesInCart: number;
            OverlappingPackagesInPendingTransaction: number;
            OwnsExcludedApp: number;
            POSACodeNotActivated: number;
            PaypalInternalError: number;
            PhysicalProductLimitExceeded: number;
            PreApprovalDenied: number;
            PurchaseAmountNoSupportedByProvider: number;
            PurchaseCannotBeReplayed: number;
            RateLimited: number;
            RegionNotSupported: number;
            RestrictedCountry: number;
            StoreBillingCountryMismatch: number;
            Timeout: number;
            TransactionExpired: number;
            UnknownGlobalCollectError: number;
            UseOtherFunctionSource: number;
            UseOtherPaymentMethod: number;
            WalletCurrencyMismatch: number;
            WouldExceedMaxWallet: number;
            WrongPrice: number;
        };

        static ERegionCode: {
            '0': string;
            '1': string;
            '2': string;
            '255': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            Africa: number;
            Asia: number;
            Australia: number;
            Europe: number;
            MiddleEast: number;
            SouthAmerica: number;
            USEast: number;
            USWest: number;
            World: number;
        };

        static ERemoteClientBroadcastMsg: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            AuthorizationCancelRequest: number;
            AuthorizationRequest: number;
            AuthorizationResponse: number;
            ClientIDDeconflict: number;
            Discovery: number;
            Offline: number;
            ProofRequest: number;
            ProofResponse: number;
            Status: number;
            StreamingCancelRequest: number;
            StreamingRequest: number;
            StreamingResponse: number;
        };

        static ERemoteClientService: {
            '0': string;
            '1': string;
            '2': string;
            '4': string;
            '8': string;
            ContentCache: number;
            GameStreaming: number;
            None: number;
            RemoteControl: number;
            SiteLicense: number;
        };

        static ERemoteDeviceAuthorizationResult: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            Busy: number;
            Canceled: number;
            Denied: number;
            Failed: number;
            InProgress: number;
            NotLoggedIn: number;
            Offline: number;
            Success: number;
            TimedOut: number;
        };

        static ERemoteDeviceStreamingResult: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            BroadcastingActive: number;
            Busy: number;
            Canceled: number;
            Disabled: number;
            DriversNotInstalled: number;
            Failed: number;
            InProgress: number;
            PINRequired: number;
            ScreenLocked: number;
            Success: number;
            Unauthorized: number;
            VRActive: number;
        };

        static ERemoteStoragePlatform: {
            '-1': string;
            '0': string;
            '1': string;
            '16': string;
            '2': string;
            '4': string;
            '8': string;
            All: number;
            Linux: number;
            None: number;
            OSX: number;
            PS3: number;
            Reserved1: number;
            Reserved2: number;
            Windows: number;
        };

        static EResult: {
            '0': string;
            '1': string;
            '10': string;
            '100': string;
            '101': string;
            '102': string;
            '103': string;
            '104': string;
            '105': string;
            '106': string;
            '107': string;
            '108': string;
            '109': string;
            '11': string;
            '110': string;
            '111': string;
            '112': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '2': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
            '24': string;
            '25': string;
            '26': string;
            '27': string;
            '28': string;
            '29': string;
            '3': string;
            '30': string;
            '31': string;
            '32': string;
            '33': string;
            '34': string;
            '35': string;
            '36': string;
            '37': string;
            '38': string;
            '39': string;
            '40': string;
            '41': string;
            '42': string;
            '43': string;
            '44': string;
            '45': string;
            '46': string;
            '47': string;
            '48': string;
            '49': string;
            '5': string;
            '50': string;
            '51': string;
            '52': string;
            '53': string;
            '54': string;
            '55': string;
            '56': string;
            '57': string;
            '58': string;
            '59': string;
            '6': string;
            '60': string;
            '61': string;
            '62': string;
            '63': string;
            '64': string;
            '65': string;
            '66': string;
            '67': string;
            '68': string;
            '69': string;
            '7': string;
            '70': string;
            '71': string;
            '72': string;
            '73': string;
            '74': string;
            '75': string;
            '76': string;
            '77': string;
            '78': string;
            '79': string;
            '8': string;
            '80': string;
            '81': string;
            '82': string;
            '83': string;
            '84': string;
            '85': string;
            '86': string;
            '87': string;
            '88': string;
            '89': string;
            '9': string;
            '90': string;
            '91': string;
            '92': string;
            '93': string;
            '94': string;
            '95': string;
            '96': string;
            '97': string;
            '98': string;
            '99': string;
            AccessDenied: number;
            AccountActivityLimitExceeded: number;
            AccountAssociatedToMultiplePartners: number;
            AccountAssociatedToMultiplePlayers: number;
            AccountDisabled: number;
            AccountLimitExceeded: number;
            AccountLocked: number;
            AccountLockedDown: number;
            AccountLoginDeniedNeedTwoFactor: number;
            AccountLoginDeniedThrottle: number;
            AccountLogonDenied: number;
            AccountLogonDeniedNeedTwoFactorCode: number;
            AccountLogonDeniedNoMail: number;
            AccountLogonDeniedNoMailSent: number;
            AccountLogonDeniedVerifiedEmailRequired: number;
            AccountNotFeatured: number;
            AccountNotFound: number;
            AccountNotFriends: number;
            AdministratorOK: number;
            AlreadyLoggedInElsewhere: number;
            AlreadyOwned: number;
            AlreadyRedeemed: number;
            BadResponse: number;
            Banned: number;
            Blocked: number;
            Busy: number;
            Cancelled: number;
            CannotUseOldPassword: number;
            ConnectFailed: number;
            ContentVersion: number;
            DataCorruption: number;
            Disabled: number;
            DiskFull: number;
            DuplicateName: number;
            DuplicateRequest: number;
            EmailSendFailure: number;
            EncryptionFailure: number;
            Expired: number;
            ExpiredLoginAuthCode: number;
            ExternalAccountAlreadyLinked: number;
            ExternalAccountUnlinked: number;
            FacebookQueryError: number;
            Fail: number;
            FileNotFound: number;
            GSLTDenied: number;
            GSLTExpired: number;
            GSOwnerDenied: number;
            HandshakeFailed: number;
            HardwareNotCapableOfIPT: number;
            IOFailure: number;
            IPBanned: number;
            IPLoginRestrictionFailed: number;
            IPNotFound: number;
            IPTInitError: number;
            Ignored: number;
            IllegalPassword: number;
            InsufficientFunds: number;
            InsufficientPrivilege: number;
            Invalid: number;
            InvalidCEGSubmission: number;
            InvalidEmail: number;
            InvalidItemType: number;
            InvalidLoginAuthCode: number;
            InvalidName: number;
            InvalidParam: number;
            InvalidPassword: number;
            InvalidProtocolVer: number;
            InvalidState: number;
            InvalidSteamID: number;
            ItemDeleted: number;
            ItemOrEntryHasBeenDeleted: number;
            LimitExceeded: number;
            LimitedUserAccount: number;
            LockingFailed: number;
            LoggedInElsewhere: number;
            LogonSessionReplaced: number;
            NeedCaptcha: number;
            NoConnection: number;
            NoMatch: number;
            NoMatchingURL: number;
            NoMobileDevice: number;
            NoMobileDeviceAvailable: number;
            NoSiteLicensesFound: number;
            NotLoggedOn: number;
            NotModified: number;
            NotSettled: number;
            OK: number;
            PSNTicketInvalid: number;
            ParentalControlRestricted: number;
            PasswordNotSet: number;
            PasswordRequiredToKickSession: number;
            PasswordUnset: number;
            Pending: number;
            PersistFailed: number;
            PhoneActivityLimitExceeded: number;
            RateLimitExceeded: number;
            RefundToWallet: number;
            RegionLocked: number;
            RemoteCallFailed: number;
            RemoteDisconnect: number;
            RemoteFileConflict: number;
            RequirePasswordReEntry: number;
            RestrictedDevice: number;
            Revoked: number;
            SMSCodeFailed: number;
            SameAsPreviousValue: number;
            ServiceReadOnly: number;
            ServiceUnavailable: number;
            ShoppingCartNotFound: number;
            Suspended: number;
            TimeIsOutOfSync: number;
            TimeNotSynced: number;
            Timeout: number;
            TooManyAccountsAccessThisResource: number;
            TooManyPending: number;
            TryAnotherCM: number;
            TwoFactorActivationCodeMismatch: number;
            TwoFactorCodeMismatch: number;
            UnexpectedError: number;
            ValueOutOfRange: number;
            WGNetworkSendExceeded: number;
        };

        static EServerFlags: {
            '0': string;
            '1': string;
            '16': string;
            '2': string;
            '32': string;
            '4': string;
            '8': string;
            Active: number;
            Dedicated: number;
            Linux: number;
            None: number;
            Passworded: number;
            Private: number;
            Secure: number;
        };

        static EServerType: {
            '-1': string;
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '2': string;
            '20': string;
            '21': string;
            '23': string;
            '24': string;
            '25': string;
            '26': string;
            '27': string;
            '28': string;
            '29': string;
            '3': string;
            '30': string;
            '31': string;
            '32': string;
            '33': string;
            '34': string;
            '35': string;
            '36': string;
            '37': string;
            '38': string;
            '39': string;
            '4': string;
            '40': string;
            '41': string;
            '42': string;
            '43': string;
            '44': string;
            '45': string;
            '46': string;
            '47': string;
            '48': string;
            '49': string;
            '5': string;
            '50': string;
            '51': string;
            '52': string;
            '53': string;
            '54': string;
            '55': string;
            '56': string;
            '57': string;
            '58': string;
            '59': string;
            '6': string;
            '60': string;
            '61': string;
            '62': string;
            '63': string;
            '64': string;
            '65': string;
            '66': string;
            '67': string;
            '68': string;
            '69': string;
            '7': string;
            '70': string;
            '71': string;
            '72': string;
            '73': string;
            '74': string;
            '75': string;
            '76': string;
            '77': string;
            '78': string;
            '79': string;
            '8': string;
            '80': string;
            '81': string;
            '82': string;
            '83': string;
            '84': string;
            '85': string;
            '86': string;
            '87': string;
            '88': string;
            '89': string;
            '9': string;
            '90': string;
            '91': string;
            '92': string;
            '93': string;
            '94': string;
            '95': string;
            '96': string;
            '97': string;
            ACS: number;
            AM: number;
            ASBOBSOLETE: number;
            ATS: number;
            AccountScore: number;
            AppInformation: number;
            Auth: number;
            BRP: number;
            BS: number;
            BUM: number;
            BUMOBOSOLETE: number;
            Backpack: number;
            BootstrapOBSOLETE: number;
            BoxMonitor: number;
            BroadcastChat: number;
            BroadcastDirectory: number;
            BroadcastRelay: number;
            CCS: number;
            CM: number;
            CRE: number;
            CS: number;
            Client: number;
            Community: number;
            Console: number;
            DFS: number;
            DP: number;
            DRMS: number;
            DSS: number;
            DepotWebContent: number;
            EPM: number;
            EPMOBSOLETE: number;
            ES: number;
            Econ: number;
            EmailDelivery: number;
            ExternalConfig: number;
            ExternalMonitor: number;
            FBS: number;
            FG: number;
            FS: number;
            FTS: number;
            First: number;
            GC: number;
            GCH: number;
            GM: number;
            GMS: number;
            GameNotifications: number;
            HLTVRelay: number;
            HubOBSOLETE: number;
            IS: number;
            Invalid: number;
            InventoryManagement: number;
            KGS: number;
            LBS: number;
            Localization: number;
            LogRequest: number;
            LogWorker: number;
            Logsink: number;
            MDS: number;
            MMS: number;
            MPAS: number;
            Market: number;
            MarketRepl: number;
            MarketSearch: number;
            Max: number;
            MoneyStats: number;
            NS: number;
            OGS: number;
            P2PRelayOBSOLETE: number;
            PICS: number;
            PNP: number;
            PS: number;
            Parental: number;
            Partner: number;
            PartnerUpload: number;
            Phone: number;
            PublicTest: number;
            Quest: number;
            RM: number;
            SLC: number;
            SM: number;
            SS: number;
            Secrets: number;
            Shell: number;
            SolrMgr: number;
            Spare: number;
            Steam2Emulator: number;
            Store: number;
            StoreCatalog: number;
            StoreFeature: number;
            Support: number;
            TaxForm: number;
            Trade: number;
            TradeOffer: number;
            UCM: number;
            UDS: number;
            UFS: number;
            UGS: number;
            UMQ: number;
            Util: number;
            VS: number;
            VideoManager: number;
            WDS: number;
            WG: number;
            WebAPI: number;
            Workshop: number;
        };

        static EStreamActivity: {
            '1': string;
            '2': string;
            '3': string;
            Desktop: number;
            Game: number;
            Idle: number;
        };

        static EStreamAudioCodec: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            AAC: number;
            MP3: number;
            None: number;
            Opus: number;
            Raw: number;
            Vorbis: number;
        };

        static EStreamBitrate: {
            '-1': string;
            '0': string;
            Autodetect: number;
            Unlimited: number;
        };

        static EStreamChannel: {
            '-1': string;
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            Control: number;
            DataChannelStart: number;
            Discovery: number;
            Invalid: number;
            Stats: number;
        };

        static EStreamControlMessage: {
            '1': string;
            '100': string;
            '101': string;
            '102': string;
            '103': string;
            '104': string;
            '105': string;
            '106': string;
            '107': string;
            '108': string;
            '109': string;
            '110': string;
            '111': string;
            '112': string;
            '113': string;
            '114': string;
            '115': string;
            '116': string;
            '15': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '50': string;
            '51': string;
            '52': string;
            '53': string;
            '54': string;
            '55': string;
            '56': string;
            '57': string;
            '58': string;
            '59': string;
            '6': string;
            '60': string;
            '61': string;
            '62': string;
            '63': string;
            '64': string;
            '65': string;
            '66': string;
            '67': string;
            '68': string;
            '69': string;
            '7': string;
            '70': string;
            '71': string;
            '74': string;
            '75': string;
            '76': string;
            '77': string;
            '78': string;
            '8': string;
            '80': string;
            '81': string;
            '82': string;
            '83': string;
            '87': string;
            '88': string;
            '89': string;
            '9': string;
            '90': string;
            '93': string;
            '94': string;
            '95': string;
            '96': string;
            '97': string;
            '98': string;
            '99': string;
            AuthenticationRequest: number;
            AuthenticationResponse: number;
            ClientHandshake: number;
            DeleteCursor: number;
            GetCursorImage: number;
            GetTouchConfigData: number;
            GetTouchIconData: number;
            HideCursor: number;
            InputKeyDown: number;
            InputKeyUp: number;
            InputLatencyTest: number;
            InputMouseDown: number;
            InputMouseMotion: number;
            InputMouseUp: number;
            InputMouseWheel: number;
            InputText: number;
            KeepAlive: number;
            LAST_SETUP_MESSAGE: number;
            NegotiationComplete: number;
            NegotiationInit: number;
            NegotiationSetConfig: number;
            OBSOLETE: number;
            OverlayEnabled: number;
            QuitRequest: number;
            RemoteHID: number;
            SaveTouchConfigLayout: number;
            ServerHandshake: number;
            SetActivity: number;
            SetCursor: number;
            SetCursorImage: number;
            SetGammaRamp: number;
            SetIcon: number;
            SetQoS: number;
            SetSpectatorMode: number;
            SetStreamingClientConfig: number;
            SetTargetBitrate: number;
            SetTargetFramerate: number;
            SetTitle: number;
            SetTouchConfigData: number;
            SetTouchIconData: number;
            ShowCursor: number;
            StartAudioData: number;
            StartMicrophoneData: number;
            StartNetworkTest: number;
            StartVideoData: number;
            StopAudioData: number;
            StopMicrophoneData: number;
            StopVideoData: number;
            SystemSuspend: number;
            TouchActionSetActive: number;
            TouchConfigActive: number;
            VideoDecoderInfo: number;
            VideoEncoderInfo: number;
            VirtualHereReady: number;
            VirtualHereRequest: number;
            VirtualHereShareDevice: number;
        };

        static EStreamDataMessage: {
            '1': string;
            '2': string;
            DataLost: number;
            DataPacket: number;
        };

        static EStreamDiscoveryMessage: {
            '1': string;
            '2': string;
            PingRequest: number;
            PingResponse: number;
        };

        static EStreamFrameEvent: {
            '0': string;
            '1': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            CaptureBegin: number;
            CaptureEnd: number;
            Complete: number;
            ConvertBegin: number;
            ConvertEnd: number;
            DecodeBegin: number;
            DecodeEnd: number;
            EncodeBegin: number;
            EncodeEnd: number;
            InputEventHandled: number;
            InputEventQueued: number;
            InputEventRecv: number;
            InputEventSend: number;
            InputEventStart: number;
            Recv: number;
            Send: number;
            Start: number;
            UploadBegin: number;
            UploadEnd: number;
        };

        static EStreamFrameResult: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            Displayed: number;
            DroppedDecodeCorrupt: number;
            DroppedDecodeSlow: number;
            DroppedLate: number;
            DroppedNetworkLost: number;
            DroppedNetworkSlow: number;
            DroppedReset: number;
            Pending: number;
        };

        static EStreamFramerateLimiter: {
            '1': string;
            '16': string;
            '2': string;
            '32': string;
            '4': string;
            '64': string;
            '8': string;
            SlowCapture: number;
            SlowConvert: number;
            SlowDecode: number;
            SlowDisplay: number;
            SlowEncode: number;
            SlowGame: number;
            SlowNetwork: number;
        };

        static EStreamGamepadInputType: {
            '0': string;
            '1': string;
            '1024': string;
            '1048576': string;
            '128': string;
            '131072': string;
            '16': string;
            '16384': string;
            '2': string;
            '2097152': string;
            '256': string;
            '262144': string;
            '32': string;
            '32768': string;
            '4': string;
            '4096': string;
            '512': string;
            '524288': string;
            '64': string;
            '65536': string;
            '8': string;
            '8192': string;
            A: number;
            B: number;
            Back: number;
            DPadDown: number;
            DPadLeft: number;
            DPadRight: number;
            DPadUp: number;
            Guide: number;
            Invalid: number;
            LeftShoulder: number;
            LeftThumb: number;
            LeftThumbX: number;
            LeftThumbY: number;
            LeftTrigger: number;
            RightShoulder: number;
            RightThumb: number;
            RightThumbX: number;
            RightThumbY: number;
            RightTrigger: number;
            Start: number;
            X: number;
            Y: number;
        };

        static EStreamMouseButton: {
            '1': string;
            '16': string;
            '2': string;
            '32': string;
            '4096': string;
            '64': string;
            Left: number;
            Middle: number;
            Right: number;
            Unknown: number;
            X1: number;
            X2: number;
        };

        static EStreamMouseWheelDirection: {
            '-120': string;
            '120': string;
            '3': string;
            '4': string;
            Down: number;
            Left: number;
            Right: number;
            Up: number;
        };

        static EStreamQualityPreference: {
            '1': string;
            '2': string;
            '3': string;
            Balanced: number;
            Beautiful: number;
            Fast: number;
        };

        static EStreamStatsMessage: {
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            DebugDump: number;
            FrameEvents: number;
            LogMessage: number;
            LogUploadBegin: number;
            LogUploadComplete: number;
            LogUploadData: number;
        };

        static EStreamVersion: {
            '0': string;
            '1': string;
            Current: number;
            None: number;
        };

        static EStreamVideoCodec: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            H264: number;
            HEVC: number;
            None: number;
            ORBX1: number;
            ORBX2: number;
            Raw: number;
            VP8: number;
            VP9: number;
        };

        static EStreamingDataType: {
            '0': string;
            '1': string;
            '2': string;
            AudioData: number;
            MicrophoneData: number;
            VideoData: number;
        };

        static ESystemIMType: {
            '0': string;
            '1': string;
            '10': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            CardWillExpire: number;
            GiftRevoked: number;
            GuestPassGranted: number;
            GuestPassReceived: number;
            InvalidCard: number;
            Max: number;
            RawText: number;
            RecurringPurchaseFailed: number;
            SubscriptionExpired: number;
            SupportMessage: number;
            SupportMessageClearAlert: number;
        };

        static EUCMFilePrivacyState: {
            '-1': string;
            '2': string;
            '4': string;
            '8': string;
            All: number;
            FriendsOnly: number;
            Invalid: number;
            Private: number;
            Public: number;
        };

        static EUdpPacketType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            Accept: number;
            Challenge: number;
            ChallengeReq: number;
            Connect: number;
            Data: number;
            Datagram: number;
            Disconnect: number;
            Invalid: number;
            Max: number;
        };

        static EUniverse: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            Beta: number;
            Dev: number;
            Internal: number;
            Invalid: number;
            Max: number;
            Public: number;
        };

        static EVideoFormat: {
            '0': string;
            '1': string;
            '2': string;
            Accel: number;
            None: number;
            YV12: number;
        };

        static EWorkshopEnumerationType: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            ContentByFriends: number;
            FavoriteOfFriends: number;
            RankedByVote: number;
            Recent: number;
            RecentFromFollowedUsers: number;
            Trending: number;
            VotedByFriends: number;
        };

        static EWorkshopFileAction: {
            '0': string;
            '1': string;
            Completed: number;
            Played: number;
        };

        static EWorkshopFileType: {
            '0': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            First: number;
            GameManagedItem: number;
            Max: number;
            SteamVideo: number;
            SteamworksAccessInvite: number;
        };

        static formatCurrency(amount: any, currency: any): any;

        static parseAppTicket(ticket: any, allowInvalidSignature: any): any;

        static parseEncryptedAppTicket(ticket: any, encryptionKey: any): any;
    }

    declare namespace steam_user {
        namespace formatCurrency {
            const prototype: {};
        }

        namespace parseAppTicket {
            const prototype: {};
        }

        namespace parseEncryptedAppTicket {
            const prototype: {};
        }

        namespace prototype {
            const packageName: string;

            const packageVersion: string;

            function addFriend(steamID: any, callback: any): any;

            function addFriendToGroup(
                groupID: any,
                userSteamID: any,
                callback: any
            ): any;

            function addListener(type: any, listener: any): any;

            function banFromChat(chatID: any, userID: any): void;

            function blockUser(steamID: any, callback: any): any;

            function cancelAuthTicket(appid: any, callback: any): any;

            function cancelTradeRequest(steamID: any): void;

            function changeTradeURL(callback: any): any;

            function chatMessage(recipient: any, message: any, type: any): void;

            function chatMsg(recipient: any, message: any, type: any): void;

            function chatTyping(recipient: any): void;

            function createChatRoom(
                convertUserID: any,
                inviteUserID: any,
                callback: any
            ): any;

            function createFriendsGroup(groupName: any, callback: any): any;

            function deleteFriendsGroup(groupID: any, callback: any): any;

            function downloadChunk(
                appID: any,
                depotID: any,
                chunkSha1: any,
                contentServer: any,
                callback: any
            ): any;

            function downloadFile(
                appID: any,
                depotID: any,
                fileManifest: any,
                outputFilePath: any,
                callback: any
            ): any;

            function emit(type: any, args: any): any;

            function enableTwoFactor(callback: any): any;

            function eventNames(): any;

            function finalizeTwoFactor(
                secret: any,
                activationCode: any,
                callback: any
            ): any;

            function gamesPlayed(apps: any, force: any): any;

            function getAliases(userSteamIDs: any, callback: any): any;

            function getAppBetaDecryptionKeys(
                appID: any,
                password: any,
                callback: any
            ): any;

            function getAppOwnershipTicket(appid: any, callback: any): any;

            function getAppRichPresenceLocalization(
                appID: any,
                language: any,
                callback: any
            ): any;

            function getAssetClassInfo(
                language: any,
                appid: any,
                classes: any,
                callback: any
            ): any;

            function getAuthSecret(callback: any): any;

            function getAuthSessionTicket(appid: any, callback: any): any;

            function getCDNAuthToken(
                appID: any,
                depotID: any,
                hostname: any,
                callback: any
            ): any;

            function getChatHistory(steamID: any, callback: any): any;

            function getContentServers(callback: any): any;

            function getCredentialChangeTimes(callback: any): any;

            function getDepotDecryptionKey(
                appID: any,
                depotID: any,
                callback: any
            ): any;

            function getEmoticonList(callback: any): any;

            function getEncryptedAppTicket(
                appid: any,
                userData: any,
                callback: any
            ): any;

            function getGameBadgeLevel(appid: any, callback: any): any;

            function getManifest(
                appID: any,
                depotID: any,
                manifestID: any,
                callback: any
            ): any;

            function getMaxListeners(): any;

            function getNicknames(callback: any): any;

            function getOwnedApps(): any;

            function getOwnedDepots(): any;

            function getOwnedPackages(): any;

            function getPersonas(steamids: any, callback: any): any;

            function getPlayerCount(appid: any, callback: any): any;

            function getProductAccessToken(
                apps: any,
                packages: any,
                callback: any
            ): any;

            function getProductChanges(
                sinceChangenumber: any,
                callback: any
            ): any;

            function getProductInfo(
                apps: any,
                packages: any,
                inclTokens: any,
                callback: any,
                requestType: any
            ): any;

            function getPublishedFileDetails(ids: any, callback: any): any;

            function getRawManifest(
                appID: any,
                depotID: any,
                manifestID: any,
                callback: any
            ): any;

            function getServerIPsBySteamID(steamids: any, callback: any): any;

            function getServerList(filter: any, limit: any, callback: any): any;

            function getServerSteamIDsByIP(ips: any, callback: any): any;

            function getSteamGuardDetails(callback: any): any;

            function getSteamLevels(steamids: any, callback: any): any;

            function getStoreTagNames(
                language: any,
                tagIDs: any,
                callback: any
            ): any;

            function getTradeURL(callback: any): any;

            function inviteToChat(chatID: any, userID: any): void;

            function inviteToGroup(userSteamID: any, groupSteamID: any): void;

            function joinChat(steamID: any, callback: any): any;

            function kickFromChat(chatID: any, userID: any): void;

            function kickPlayingSession(callback: any): any;

            function leaveChat(steamID: any): void;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function logOff(): void;

            function logOn(details: any): void;

            function off(type: any, listener: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function ownsApp(appid: any): any;

            function ownsDepot(depotid: any): any;

            function ownsPackage(packageid: any): any;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function rawListeners(type: any): any;

            function redeemKey(key: any, callback: any): any;

            function relog(): void;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeFriend(steamID: any): void;

            function removeFriendFromGroup(
                groupID: any,
                userSteamID: any,
                callback: any
            ): any;

            function removeListener(type: any, listener: any): any;

            function renameFriendsGroup(
                groupID: any,
                newName: any,
                callback: any
            ): any;

            function requestFreeLicense(appIDs: any, callback: any): any;

            function requestValidationEmail(callback: any): any;

            function respondToGroupInvite(groupSteamID: any, accept: any): void;

            function sendToGC(
                appid: any,
                msgType: any,
                protoBufHeader: any,
                payload: any,
                callback: any
            ): void;

            function serverQuery(conditions: any, callback: any): any;

            function setChatOfficersOnly(steamID: any): void;

            function setChatPrivate(steamID: any): void;

            function setChatPublic(steamID: any): void;

            function setMaxListeners(n: any): any;

            function setNickname(
                steamID: any,
                nickname: any,
                callback: any
            ): any;

            function setOption(option: any, value: any): void;

            function setOptions(options: any): void;

            function setPersona(state: any, name: any): void;

            function setSentry(sentry: any): void;

            function setUIMode(mode: any): void;

            function trade(steamID: any): void;

            function unbanFromChat(chatID: any, userID: any): void;

            function unblockUser(steamID: any, callback: any): any;

            function unsetChatOfficersOnly(steamID: any): void;

            function uploadRichPresence(appid: any, richPresence: any): void;

            function validateAuthTickets(
                appid: any,
                tickets: any,
                callback: any
            ): any;

            function webLogOn(): void;

            namespace addFriend {
                const prototype: {};
            }

            namespace addFriendToGroup {
                const prototype: {};
            }

            namespace addListener {
                const prototype: {};
            }

            namespace banFromChat {
                const prototype: {};
            }

            namespace blockUser {
                const prototype: {};
            }

            namespace cancelAuthTicket {
                const prototype: {};
            }

            namespace cancelTradeRequest {
                const prototype: {};
            }

            namespace changeTradeURL {
                const prototype: {};
            }

            namespace chatMessage {
                const prototype: {};
            }

            namespace chatMsg {
                const prototype: {};
            }

            namespace chatTyping {
                const prototype: {};
            }

            namespace createChatRoom {
                const prototype: {};
            }

            namespace createFriendsGroup {
                const prototype: {};
            }

            namespace deleteFriendsGroup {
                const prototype: {};
            }

            namespace downloadChunk {
                const prototype: {};
            }

            namespace downloadFile {
                const prototype: {};
            }

            namespace emit {
                const prototype: {};
            }

            namespace enableTwoFactor {
                const prototype: {};
            }

            namespace eventNames {
                const prototype: {};
            }

            namespace finalizeTwoFactor {
                const prototype: {};
            }

            namespace gamesPlayed {
                const prototype: {};
            }

            namespace getAliases {
                const prototype: {};
            }

            namespace getAppBetaDecryptionKeys {
                const prototype: {};
            }

            namespace getAppOwnershipTicket {
                const prototype: {};
            }

            namespace getAppRichPresenceLocalization {
                const prototype: {};
            }

            namespace getAssetClassInfo {
                const prototype: {};
            }

            namespace getAuthSecret {
                const prototype: {};
            }

            namespace getAuthSessionTicket {
                const prototype: {};
            }

            namespace getCDNAuthToken {
                const prototype: {};
            }

            namespace getChatHistory {
                const prototype: {};
            }

            namespace getContentServers {
                const prototype: {};
            }

            namespace getCredentialChangeTimes {
                const prototype: {};
            }

            namespace getDepotDecryptionKey {
                const prototype: {};
            }

            namespace getEmoticonList {
                const prototype: {};
            }

            namespace getEncryptedAppTicket {
                const prototype: {};
            }

            namespace getGameBadgeLevel {
                const prototype: {};
            }

            namespace getManifest {
                const prototype: {};
            }

            namespace getMaxListeners {
                const prototype: {};
            }

            namespace getNicknames {
                const prototype: {};
            }

            namespace getOwnedApps {
                const prototype: {};
            }

            namespace getOwnedDepots {
                const prototype: {};
            }

            namespace getOwnedPackages {
                const prototype: {};
            }

            namespace getPersonas {
                const prototype: {};
            }

            namespace getPlayerCount {
                const prototype: {};
            }

            namespace getProductAccessToken {
                const prototype: {};
            }

            namespace getProductChanges {
                const prototype: {};
            }

            namespace getProductInfo {
                const prototype: {};
            }

            namespace getPublishedFileDetails {
                const prototype: {};
            }

            namespace getRawManifest {
                const prototype: {};
            }

            namespace getServerIPsBySteamID {
                const prototype: {};
            }

            namespace getServerList {
                const prototype: {};
            }

            namespace getServerSteamIDsByIP {
                const prototype: {};
            }

            namespace getSteamGuardDetails {
                const prototype: {};
            }

            namespace getSteamLevels {
                const prototype: {};
            }

            namespace getStoreTagNames {
                const prototype: {};
            }

            namespace getTradeURL {
                const prototype: {};
            }

            namespace inviteToChat {
                const prototype: {};
            }

            namespace inviteToGroup {
                const prototype: {};
            }

            namespace joinChat {
                const prototype: {};
            }

            namespace kickFromChat {
                const prototype: {};
            }

            namespace kickPlayingSession {
                const prototype: {};
            }

            namespace leaveChat {
                const prototype: {};
            }

            namespace listenerCount {
                const prototype: {};
            }

            namespace listeners {
                const prototype: {};
            }

            namespace logOff {
                const prototype: {};
            }

            namespace logOn {
                const prototype: {};
            }

            namespace off {
                const prototype: {};
            }

            namespace on {
                const prototype: {};
            }

            namespace once {
                const prototype: {};
            }

            namespace ownsApp {
                const prototype: {};
            }

            namespace ownsDepot {
                const prototype: {};
            }

            namespace ownsPackage {
                const prototype: {};
            }

            namespace prependListener {
                const prototype: {};
            }

            namespace prependOnceListener {
                const prototype: {};
            }

            namespace rawListeners {
                const prototype: {};
            }

            namespace redeemKey {
                const prototype: {};
            }

            namespace relog {
                const prototype: {};
            }

            namespace removeAllListeners {
                const prototype: {};
            }

            namespace removeFriend {
                const prototype: {};
            }

            namespace removeFriendFromGroup {
                const prototype: {};
            }

            namespace removeListener {
                const prototype: {};
            }

            namespace renameFriendsGroup {
                const prototype: {};
            }

            namespace requestFreeLicense {
                const prototype: {};
            }

            namespace requestValidationEmail {
                const prototype: {};
            }

            namespace respondToGroupInvite {
                const prototype: {};
            }

            namespace sendToGC {
                const prototype: {};
            }

            namespace serverQuery {
                const prototype: {};
            }

            namespace setChatOfficersOnly {
                const prototype: {};
            }

            namespace setChatPrivate {
                const prototype: {};
            }

            namespace setChatPublic {
                const prototype: {};
            }

            namespace setMaxListeners {
                const prototype: {};
            }

            namespace setNickname {
                const prototype: {};
            }

            namespace setOption {
                const prototype: {};
            }

            namespace setOptions {
                const prototype: {};
            }

            namespace setPersona {
                const prototype: {};
            }

            namespace setSentry {
                const prototype: {};
            }

            namespace setUIMode {
                const prototype: {};
            }

            namespace trade {
                const prototype: {};
            }

            namespace unbanFromChat {
                const prototype: {};
            }

            namespace unblockUser {
                const prototype: {};
            }

            namespace unsetChatOfficersOnly {
                const prototype: {};
            }

            namespace uploadRichPresence {
                const prototype: {};
            }

            namespace validateAuthTickets {
                const prototype: {};
            }

            namespace webLogOn {
                const prototype: {};
            }
        }
    }
}
