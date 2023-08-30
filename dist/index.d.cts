import { BinaryDataWriter, BinaryDataReader } from '@hetwan.io';

declare abstract class DofusMessage {
    static id: number;
    id: number;
    constructor();
    serialize(_: BinaryDataWriter): void;
    deserialize(_: BinaryDataReader): void;
}

declare class DofusType {
    static id: number;
    id: number;
    constructor();
    serialize(_: BinaryDataWriter): void;
    deserialize(_: BinaryDataReader): void;
}

declare class NetworkMessage {
    static readonly BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
    static readonly BIT_MASK = 3;
    static readonly PACKET_METADATA_LENGTH = 7;
    static encode(message: DofusMessage): Buffer;
    static decode(data: Buffer): {
        messageId: number;
        instanceId: number;
        messageLength: number;
        messageReader: BinaryDataReader;
    };
    private static computeTypeLength;
    private static subComputeStaticHeader;
    private static getPacketLength;
}

declare enum SubEntityBindingPointCategoryEnum {
    HOOK_POINT_CATEGORY_UNUSED = 0,
    HOOK_POINT_CATEGORY_PET = 1,
    HOOK_POINT_CATEGORY_MOUNT_DRIVER = 2,
    HOOK_POINT_CATEGORY_LIFTED_ENTITY = 3,
    HOOK_POINT_CATEGORY_BASE_BACKGROUND = 4,
    HOOK_POINT_CATEGORY_MERCHANT_BAG = 5,
    HOOK_POINT_CATEGORY_BASE_FOREGROUND = 6,
    HOOK_POINT_CATEGORY_PET_FOLLOWER = 7,
    HOOK_POINT_CATEGORY_UNDERWATER_BUBBLES = 8
}
declare enum BuildTypeEnum {
    RELEASE = 0,
    BETA = 1,
    ALPHA = 2,
    TESTING = 3,
    INTERNAL = 4,
    DEBUG = 5,
    DRAFT = 6
}
declare enum ChatActivableChannelsEnum {
    CHANNEL_GLOBAL = 0,
    CHANNEL_TEAM = 1,
    CHANNEL_GUILD = 2,
    CHANNEL_ALLIANCE = 3,
    CHANNEL_PARTY = 4,
    CHANNEL_SALES = 5,
    CHANNEL_SEEK = 6,
    CHANNEL_NOOB = 7,
    CHANNEL_ADMIN = 8,
    PSEUDO_CHANNEL_PRIVATE = 9,
    PSEUDO_CHANNEL_INFO = 10,
    PSEUDO_CHANNEL_FIGHT_LOG = 11,
    CHANNEL_ADS = 12,
    CHANNEL_ARENA = 13,
    CHANNEL_COMMUNITY = 14
}
declare enum FightSpellCastCriticalEnum {
    NORMAL = 1,
    CRITICAL_HIT = 2,
    CRITICAL_FAIL = 3
}
declare enum PlayerLifeStatusEnum {
    STATUS_ALIVE_AND_KICKING = 0,
    STATUS_TOMBSTONE = 1,
    STATUS_PHANTOM = 2
}
declare enum PrismStateEnum {
    PRISM_STATE_INVULNERABLE = 0,
    PRISM_STATE_NORMAL = 1,
    PRISM_STATE_ATTACKED = 2,
    PRISM_STATE_FIGHTING = 3,
    PRISM_STATE_WEAKENED = 4,
    PRISM_STATE_VULNERABLE = 5,
    PRISM_STATE_DEFEATED = 6,
    PRISM_STATE_SABOTAGED = 7
}
declare enum MapObstacleStateEnum {
    OBSTACLE_OPENED = 1,
    OBSTACLE_CLOSED = 2
}
declare enum AggressableStatusEnum {
    NON_AGGRESSABLE = 0,
    PvP_ENABLED_AGGRESSABLE = 10,
    PvP_ENABLED_NON_AGGRESSABLE = 11,
    AvA_ENABLED_AGGRESSABLE = 20,
    AvA_ENABLED_NON_AGGRESSABLE = 21,
    AvA_DISQUALIFIED = 22,
    AvA_PREQUALIFIED_AGGRESSABLE = 23
}
declare enum TeamEnum {
    TEAM_CHALLENGER = 0,
    TEAM_DEFENDER = 1,
    TEAM_SPECTATOR = 2
}
declare enum GameActionFightInvisibilityStateEnum {
    INVISIBLE = 1,
    DETECTED = 2,
    VISIBLE = 3
}
declare enum CharacterInventoryPositionEnum {
    ACCESSORY_POSITION_AMULET = 0,
    ACCESSORY_POSITION_WEAPON = 1,
    INVENTORY_POSITION_RING_LEFT = 2,
    ACCESSORY_POSITION_BELT = 3,
    INVENTORY_POSITION_RING_RIGHT = 4,
    ACCESSORY_POSITION_BOOTS = 5,
    ACCESSORY_POSITION_HAT = 6,
    ACCESSORY_POSITION_CAPE = 7,
    ACCESSORY_POSITION_PETS = 8,
    INVENTORY_POSITION_DOFUS_1 = 9,
    INVENTORY_POSITION_DOFUS_2 = 10,
    INVENTORY_POSITION_DOFUS_3 = 11,
    INVENTORY_POSITION_DOFUS_4 = 12,
    INVENTORY_POSITION_DOFUS_5 = 13,
    INVENTORY_POSITION_DOFUS_6 = 14,
    ACCESSORY_POSITION_SHIELD = 15,
    INVENTORY_POSITION_MOUNT = 16,
    INVENTORY_POSITION_MUTATION = 20,
    INVENTORY_POSITION_BOOST_FOOD = 21,
    INVENTORY_POSITION_FIRST_BONUS = 22,
    INVENTORY_POSITION_SECOND_BONUS = 23,
    INVENTORY_POSITION_FIRST_MALUS = 24,
    INVENTORY_POSITION_SECOND_MALUS = 25,
    INVENTORY_POSITION_ROLEPLAY_BUFFER = 26,
    INVENTORY_POSITION_FOLLOWER = 27,
    INVENTORY_POSITION_ENTITY = 28,
    ACCESSORY_POSITION_RIDE_HARNESS = 29,
    INVENTORY_POSITION_COSTUME = 30,
    INVENTORY_POSITION_NOT_EQUIPED = 63
}
declare enum FightTypeEnum {
    FIGHT_TYPE_CHALLENGE = 0,
    FIGHT_TYPE_AGRESSION = 1,
    FIGHT_TYPE_PvMA = 2,
    FIGHT_TYPE_MXvM = 3,
    FIGHT_TYPE_PvM = 4,
    FIGHT_TYPE_PvT = 5,
    FIGHT_TYPE_PvMU = 6,
    FIGHT_TYPE_PVP_ARENA = 7,
    FIGHT_TYPE_Koh = 8,
    FIGHT_TYPE_PvPr = 9,
    FIGHT_TYPE_BREACH = 10
}
declare enum FightOutcomeEnum {
    RESULT_LOST = 0,
    RESULT_DRAW = 1,
    RESULT_VICTORY = 2,
    RESULT_TAX = 5,
    RESULT_DEFENDER_GROUP = 6
}
declare enum CharacterSpellModificationTypeEnum {
    INVALID_MODIFICATION = 0,
    RANGEABLE = 1,
    DAMAGE = 2,
    BASE_DAMAGE = 3,
    HEAL_BONUS = 4,
    AP_COST = 5,
    CAST_INTERVAL = 6,
    CAST_INTERVAL_SET = 7,
    CRITICAL_HIT_BONUS = 8,
    CAST_LINE = 9,
    LOS = 10,
    MAX_CAST_PER_TURN = 11,
    MAX_CAST_PER_TARGET = 12,
    RANGE_MAX = 13,
    RANGE_MIN = 14
}
declare enum DebugLevelEnum {
    LEVEL_TRACE = 0,
    LEVEL_DEBUG = 1,
    LEVEL_INFO = 2,
    LEVEL_WARN = 3,
    LEVEL_ERROR = 4,
    LEVEL_FATAL = 5
}
declare enum GameServerTypeEnum {
    SERVER_TYPE_UNDEFINED = -1,
    SERVER_TYPE_CLASSICAL = 0,
    SERVER_TYPE_HARDCORE = 1,
    SERVER_TYPE_KOLIZEUM = 2,
    SERVER_TYPE_TOURNAMENT = 3,
    SERVER_TYPE_EPIC = 4,
    SERVER_TYPE_TEMPORIS = 5
}
declare enum ShortcutBarEnum {
    GENERAL_SHORTCUT_BAR = 0,
    SPELL_SHORTCUT_BAR = 1
}
declare enum CharacterCreationResultEnum {
    OK = 0,
    ERR_NO_REASON = 1,
    ERR_INVALID_NAME = 2,
    ERR_NAME_ALREADY_EXISTS = 3,
    ERR_TOO_MANY_CHARACTERS = 4,
    ERR_NOT_ALLOWED = 5,
    ERR_NEW_PLAYER_NOT_ALLOWED = 6,
    ERR_RESTRICED_ZONE = 7,
    ERR_INCONSISTENT_COMMUNITY = 8
}
declare enum ExchangeErrorEnum {
    REQUEST_IMPOSSIBLE = 1,
    REQUEST_CHARACTER_OCCUPIED = 2,
    REQUEST_CHARACTER_JOB_NOT_EQUIPED = 3,
    REQUEST_CHARACTER_TOOL_TOO_FAR = 4,
    REQUEST_CHARACTER_OVERLOADED = 5,
    REQUEST_CHARACTER_NOT_SUSCRIBER = 6,
    REQUEST_CHARACTER_RESTRICTED = 7,
    REQUEST_CHARACTER_GUEST = 8,
    MOUNT_PADDOCK_ERROR = 10,
    BID_SEARCH_ERROR = 11,
    SELL_ERROR = 63,
    BUY_ERROR = 64
}
declare enum ServerCompletionEnum {
    COMPLETION_RECOMANDATED = 0,
    COMPLETION_AVERAGE = 1,
    COMPLETION_HIGH = 2,
    COMPLETION_COMING_SOON = 3,
    COMPLETION_FULL = 4
}
declare enum ServerStatusEnum {
    STATUS_UNKNOWN = 0,
    OFFLINE = 1,
    STARTING = 2,
    ONLINE = 3,
    NOJOIN = 4,
    SAVING = 5,
    STOPING = 6,
    FULL = 7
}
declare enum BoostableCharacteristicEnum {
    BOOSTABLE_CHARAC_STRENGTH = 10,
    BOOSTABLE_CHARAC_VITALITY = 11,
    BOOSTABLE_CHARAC_WISDOM = 12,
    BOOSTABLE_CHARAC_CHANCE = 13,
    BOOSTABLE_CHARAC_AGILITY = 14,
    BOOSTABLE_CHARAC_INTELLIGENCE = 15
}
declare enum CompassTypeEnum {
    COMPASS_TYPE_SIMPLE = 0,
    COMPASS_TYPE_SPOUSE = 1,
    COMPASS_TYPE_PARTY = 2,
    COMPASS_TYPE_PVP_SEEK = 3,
    COMPASS_TYPE_QUEST = 4
}
declare enum PlayerStatusEnum {
    PLAYER_STATUS_OFFLINE = 0,
    PLAYER_STATUS_UNKNOWN = 1,
    PLAYER_STATUS_AVAILABLE = 10,
    PLAYER_STATUS_IDLE = 20,
    PLAYER_STATUS_AFK = 21,
    PLAYER_STATUS_PRIVATE = 30,
    PLAYER_STATUS_SOLO = 40
}
declare enum AlignmentSideEnum {
    ALIGNMENT_UNKNOWN = -2,
    ALIGNMENT_WITHOUT = -1,
    ALIGNMENT_NEUTRAL = 0,
    ALIGNMENT_ANGEL = 1,
    ALIGNMENT_EVIL = 2
}
declare enum MountCharacteristicEnum {
    ENERGY = 1,
    SERENITY = 2,
    STAMINA = 3,
    LOVE = 4,
    MATURITY = 5,
    TIREDNESS = 6,
    CARRIER = 7,
    FERTILE = 8,
    PREGNANT = 9
}
declare enum ExchangeTypeEnum {
    UNKNOWN_TRADE_TYPE = -1,
    NPC_SHOP = 0,
    PLAYER_TRADE = 1,
    NPC_TRADE = 2,
    CRAFT = 3,
    DISCONNECTED_VENDOR = 4,
    STORAGE = 5,
    SHOP_STOCK = 6,
    TAXCOLLECTOR = 8,
    NPC_MODIFY_TRADE = 9,
    BIDHOUSE_SELL = 10,
    BIDHOUSE_BUY = 11,
    MULTICRAFT_CRAFTER = 12,
    MULTICRAFT_CUSTOMER = 13,
    JOB_INDEX = 14,
    MOUNT = 15,
    MOUNT_STABLE = 16,
    NPC_RESURECT_PET = 17,
    NPC_TRADE_DRAGOTURKEY = 18,
    REALESTATE_HOUSE = 19,
    REALESTATE_FARM = 20,
    RUNES_TRADE = 21,
    RECYCLE_TRADE = 22,
    BANK = 23,
    TRASHBIN = 24,
    ALLIANCE_PRISM = 25,
    HAVENBAG = 26,
    NPC_TRADE_SEEMYOOL = 27,
    NPC_TRADE_RHINEETLE = 28,
    EVOLUTIVE_OBJECT_ELEMENTARY_RECYCLE = 29,
    NPC_RIDE_CAPABILITY_TRADE = 30
}
declare enum GameContextEnum {
    ROLE_PLAY = 1,
    FIGHT = 2
}
declare enum FighterRefusedReasonEnum {
    FIGHTER_REFUSED = -1,
    FIGHTER_ACCEPTED = 0,
    CHALLENGE_FULL = 1,
    TEAM_FULL = 2,
    WRONG_ALIGNMENT = 3,
    WRONG_GUILD = 4,
    TOO_LATE = 5,
    MUTANT_REFUSED = 6,
    WRONG_MAP = 7,
    JUST_RESPAWNED = 8,
    IM_OCCUPIED = 9,
    OPPONENT_OCCUPIED = 10,
    FIGHT_MYSELF = 11,
    INSUFFICIENT_RIGHTS = 12,
    MEMBER_ACCOUNT_NEEDED = 13,
    OPPONENT_NOT_MEMBER = 14,
    TEAM_LIMITED_BY_MAINCHARACTER = 15,
    MULTIACCOUNT_NOT_ALLOWED = 16,
    GHOST_REFUSED = 17,
    RESTRICTED_ACCOUNT = 19,
    WRONG_ALLIANCE = 20,
    AVA_ZONE = 21,
    ENTITY_REFUSED = 22,
    NOT_ENOUGH_ROOM = 23,
    GUEST_ACCOUNT = 24
}
declare enum LockableResultEnum {
    LOCKABLE_UNLOCKED = 0,
    LOCKABLE_CODE_ERROR = 1,
    LOCKABLE_UNLOCK_FORBIDDEN = 2
}
declare enum ClientUITypeEnum {
    CLIENT_UI_UNDEFINED = 0,
    CLIENT_UI_TELEPORT_GUILD_HOUSE = 1,
    CLIENT_UI_TELEPORT_GUILD_PADDOCK = 2,
    CLIENT_UI_OBJECT_MIMICRY = 3,
    CLIENT_UI_LEGENDARY_TREASURE_QUEST = 4,
    CLIENT_UI_TELEPORT_HOUSE = 5
}
declare enum TeleporterTypeEnum {
    TELEPORTER_ZAAP = 0,
    TELEPORTER_SUBWAY = 1,
    TELEPORTER_PRISM = 2,
    TELEPORTER_HAVENBAG = 3,
    TELEPORTER_ANOMALY = 4
}
declare enum IdentificationFailureReasonEnum {
    BAD_VERSION = 1,
    WRONG_CREDENTIALS = 2,
    BANNED = 3,
    KICKED = 4,
    IN_MAINTENANCE = 5,
    TOO_MANY_ON_IP = 6,
    TIME_OUT = 7,
    BAD_IPRANGE = 8,
    CREDENTIALS_RESET = 9,
    EMAIL_UNVALIDATED = 10,
    OTP_TIMEOUT = 11,
    LOCKED = 12,
    ANONYMOUS_IP_FORBIDDEN = 13,
    SERVICE_UNAVAILABLE = 53,
    EXTERNAL_ACCOUNT_LINK_REFUSED = 61,
    EXTERNAL_ACCOUNT_ALREADY_LINKED = 62,
    UNKNOWN_AUTH_ERROR = 99,
    SPARE = 100
}
declare enum SocialNoticeErrorEnum {
    SOCIAL_NOTICE_UNKNOWN_ERROR = 0,
    SOCIAL_NOTICE_INVALID_RIGHTS = 1,
    SOCIAL_NOTICE_COOLDOWN = 2
}
declare enum TaxCollectorErrorReasonEnum {
    TAX_COLLECTOR_ERROR_UNKNOWN = 0,
    TAX_COLLECTOR_NOT_FOUND = 1,
    TAX_COLLECTOR_NOT_OWNED = 2,
    TAX_COLLECTOR_NO_RIGHTS = 3,
    TAX_COLLECTOR_MAX_REACHED = 4,
    TAX_COLLECTOR_ALREADY_ONE = 5,
    TAX_COLLECTOR_CANT_HIRE_YET = 6,
    TAX_COLLECTOR_CANT_HIRE_HERE = 7,
    TAX_COLLECTOR_NOT_ENOUGH_KAMAS = 8
}
declare enum GuildInformationsTypeEnum {
    INFO_GENERAL = 1,
    INFO_MEMBERS = 2,
    INFO_BOOSTS = 3,
    INFO_PADDOCKS = 4,
    INFO_HOUSES = 5,
    INFO_TAX_COLLECTOR_GUILD_ONLY = 6,
    INFO_TAX_COLLECTOR_ALLIANCE = 7,
    INFO_TAX_COLLECTOR_LEAVE = 8,
    INFO_RECRUITMENT = 9
}
declare enum SocialGroupInvitationStateEnum {
    SOCIAL_GROUP_INVITATION_FAILED = 0,
    SOCIAL_GROUP_INVITATION_SENT = 1,
    SOCIAL_GROUP_INVITATION_CANCELED = 2,
    SOCIAL_GROUP_INVITATION_OK = 3
}
declare enum ListAddFailureEnum {
    LIST_ADD_FAILURE_UNKNOWN = 0,
    LIST_ADD_FAILURE_OVER_QUOTA = 1,
    LIST_ADD_FAILURE_NOT_FOUND = 2,
    LIST_ADD_FAILURE_EGOCENTRIC = 3,
    LIST_ADD_FAILURE_IS_DOUBLE = 4,
    LIST_ADD_FAILURE_IS_CONFLICTING_DOUBLE = 5
}
declare enum TaxCollectorMovementTypeEnum {
    TAX_COLLECTOR_UNKNOWN_ACTION = 0,
    TAX_COLLECTOR_HIRED = 1,
    TAX_COLLECTOR_HARVESTED = 2,
    TAX_COLLECTOR_DEFEATED = 3,
    TAX_COLLECTOR_DESTROYED = 4
}
declare enum TaxCollectorStateEnum {
    STATE_COLLECTING = 0,
    STATE_WAITING_FOR_HELP = 1,
    STATE_FIGHTING = 2
}
declare enum SocialGroupCreationResultEnum {
    SOCIAL_GROUP_CREATE_OK = 1,
    SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID = 2,
    SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP = 3,
    SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS = 4,
    SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS = 5,
    SOCIAL_GROUP_CREATE_ERROR_LEAVE = 6,
    SOCIAL_GROUP_CREATE_ERROR_CANCEL = 7,
    SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET = 8,
    SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID = 9,
    SOCIAL_GROUP_CREATE_ERROR_TAG_INVALID = 10,
    SOCIAL_GROUP_CREATE_ERROR_TAG_ALREADY_EXISTS = 11,
    SOCIAL_GROUP_CREATE_ERROR_NEEDS_SUBGROUP = 12,
    SOCIAL_GROUP_CREATE_ERROR_UNKNOWN = 99
}
declare enum PlayerStateEnum {
    NOT_CONNECTED = 0,
    GAME_TYPE_ROLEPLAY = 1,
    GAME_TYPE_FIGHT = 2,
    UNKNOWN_STATE = 99
}
declare enum ObjectErrorEnum {
    INVENTORY_FULL = 1,
    CANNOT_EQUIP_TWICE = 2,
    NOT_TRADABLE = 3,
    CANNOT_DROP = 4,
    CANNOT_DROP_NO_PLACE = 5,
    CANNOT_DESTROY = 6,
    LEVEL_TOO_LOW = 7,
    LIVING_OBJECT_REFUSED_FOOD = 8,
    CANNOT_UNEQUIP = 9,
    CANNOT_EQUIP_HERE = 10,
    CRITERIONS = 11,
    SYMBIOTIC_OBJECT_ERROR = 12,
    EVOLUTIVE_OBJECT_REFUSED_FOOD = 13
}
declare enum GameHierarchyEnum {
    UNAVAILABLE = -1,
    PLAYER = 0,
    MODERATOR = 10,
    GAMEMASTER_PADAWAN = 20,
    GAMEMASTER = 30,
    ADMIN = 40,
    UNKNOWN_SPECIAL_USER = 50
}
declare enum TextInformationTypeEnum {
    TEXT_INFORMATION_MESSAGE = 0,
    TEXT_INFORMATION_ERROR = 1,
    TEXT_INFORMATION_PVP = 2,
    TEXT_INFORMATION_FIGHT_LOG = 3,
    TEXT_INFORMATION_POPUP = 4,
    TEXT_LIVING_OBJECT = 5,
    TEXT_ENTITY_TALK = 6,
    TEXT_INFORMATION_FIGHT = 7
}
declare enum ChatChannelsMultiEnum {
    CHANNEL_GLOBAL = 0,
    CHANNEL_TEAM = 1,
    CHANNEL_GUILD = 2,
    CHANNEL_ALLIANCE = 3,
    CHANNEL_PARTY = 4,
    CHANNEL_SALES = 5,
    CHANNEL_SEEK = 6,
    CHANNEL_NOOB = 7,
    CHANNEL_ADMIN = 8,
    CHANNEL_ADS = 12,
    CHANNEL_ARENA = 13,
    CHANNEL_COMMUNITY = 14
}
declare enum ChatErrorEnum {
    CHAT_ERROR_UNKNOWN = 0,
    CHAT_ERROR_RECEIVER_NOT_FOUND = 1,
    CHAT_ERROR_INTERIOR_MONOLOGUE = 2,
    CHAT_ERROR_NO_GUILD = 3,
    CHAT_ERROR_NO_PARTY = 4,
    CHAT_ERROR_ALLIANCE = 5,
    CHAT_ERROR_INVALID_MAP = 6,
    CHAT_ERROR_NO_PARTY_ARENA = 7,
    CHAT_ERROR_NO_TEAM = 8,
    CHAT_ERROR_MALFORMED_CONTENT = 9,
    CHAT_ERROR_NO_CHANNEL_COMMUNITY = 10
}
declare enum PartyJoinErrorEnum {
    PARTY_JOIN_ERROR_UNKNOWN = 0,
    PARTY_JOIN_ERROR_PLAYER_NOT_FOUND = 1,
    PARTY_JOIN_ERROR_PARTY_NOT_FOUND = 2,
    PARTY_JOIN_ERROR_PARTY_FULL = 3,
    PARTY_JOIN_ERROR_PLAYER_BUSY = 4,
    PARTY_JOIN_ERROR_PLAYER_ALREADY_INVITED = 6,
    PARTY_JOIN_ERROR_PLAYER_TOO_SOLLICITED = 7,
    PARTY_JOIN_ERROR_PLAYER_LOYAL = 8,
    PARTY_JOIN_ERROR_UNMODIFIABLE = 9,
    PARTY_JOIN_ERROR_UNMET_CRITERION = 10,
    PARTY_JOIN_ERROR_NOT_ENOUGH_ROOM = 11,
    PARTY_JOIN_ERROR_COMPOSITION_CHANGED = 12,
    PARTY_JOIN_ERROR_PLAYER_IN_TUTORIAL = 13
}
declare enum PartyTypeEnum {
    PARTY_TYPE_UNDEFINED = 0,
    PARTY_TYPE_CLASSICAL = 1,
    PARTY_TYPE_DUNGEON = 2,
    PARTY_TYPE_ARENA = 3
}
declare enum PvpArenaTypeEnum {
    ARENA_TYPE_1VS1 = 1,
    ARENA_TYPE_3VS3_SOLO = 2,
    ARENA_TYPE_3VS3_TEAM = 3
}
declare enum PvpArenaStepEnum {
    ARENA_STEP_REGISTRED = 0,
    ARENA_STEP_WAITING_FIGHT = 1,
    ARENA_STEP_STARTING_FIGHT = 2,
    ARENA_STEP_UNREGISTER = 3
}
declare enum PartyNameErrorEnum {
    PARTY_NAME_UNDEFINED_ERROR = 0,
    PARTY_NAME_INVALID = 1,
    PARTY_NAME_ALREADY_USED = 2,
    PARTY_NAME_UNALLOWED_RIGHTS = 3,
    PARTY_NAME_UNALLOWED_NOW = 4
}
declare enum PrismSetSabotagedRefusedReasonEnum {
    SABOTAGE_REFUSED = -1,
    SABOTAGE_INSUFFICIENT_RIGHTS = 0,
    SABOTAGE_MEMBER_ACCOUNT_NEEDED = 1,
    SABOTAGE_RESTRICTED_ACCOUNT = 2,
    SABOTAGE_WRONG_ALLIANCE = 3,
    SABOTAGE_NO_PRISM = 4,
    SABOTAGE_WRONG_STATE = 5
}
declare enum PrismListenEnum {
    PRISM_LISTEN_NONE = 0,
    PRISM_LISTEN_MINE = 1,
    PRISM_LISTEN_ALL = 2
}
declare enum FightDispellableEnum {
    DISPELLABLE = 1,
    DISPELLABLE_BY_DEATH = 2,
    DISPELLABLE_BY_STRONG_DISPEL = 3,
    REALLY_NOT_DISPELLABLE = 4
}
declare enum GameActionMarkCellsTypeEnum {
    CELLS_CIRCLE = 0,
    CELLS_CROSS = 1,
    CELLS_SQUARE = 2
}
declare enum TeamTypeEnum {
    TEAM_TYPE_PLAYER = 0,
    TEAM_TYPE_MONSTER = 1,
    TEAM_TYPE_MUTANT = 2,
    TEAM_TYPE_TAXCOLLECTOR = 3,
    TEAM_TYPE_BAD_PLAYER = 4,
    TEAM_TYPE_PRISM = 5
}
declare enum BreachRoomUnlockEnum {
    BREACH_UNLOCK_SUCCESS = 0,
    BREACH_UNLOCK_FAIL_NOT_ENOUGH_BUDGET = 1
}
declare enum HavenBagDailyLoteryErrorEnum {
    HAVENBAG_DAILY_LOTERY_OK = 0,
    HAVENBAG_DAILY_LOTERY_ALREADYUSED = 1,
    HAVENBAG_DAILY_LOTERY_ERROR = 2
}
declare enum FightOptionsEnum {
    FIGHT_OPTION_SET_SECRET = 0,
    FIGHT_OPTION_SET_TO_PARTY_ONLY = 1,
    FIGHT_OPTION_SET_CLOSED = 2,
    FIGHT_OPTION_ASK_FOR_HELP = 3
}
declare enum TreasureHuntFlagRequestEnum {
    TREASURE_HUNT_FLAG_ERROR_UNDEFINED = 0,
    TREASURE_HUNT_FLAG_OK = 1,
    TREASURE_HUNT_FLAG_WRONG = 2,
    TREASURE_HUNT_FLAG_TOO_MANY = 3,
    TREASURE_HUNT_FLAG_ERROR_IMPOSSIBLE = 4,
    TREASURE_HUNT_FLAG_WRONG_INDEX = 5,
    TREASURE_HUNT_FLAG_SAME_MAP = 6
}
declare enum TreasureHuntDigRequestEnum {
    TREASURE_HUNT_DIG_ERROR_UNDEFINED = 0,
    TREASURE_HUNT_DIG_NEW_HINT = 1,
    TREASURE_HUNT_DIG_FINISHED = 2,
    TREASURE_HUNT_DIG_WRONG = 3,
    TREASURE_HUNT_DIG_LOST = 4,
    TREASURE_HUNT_DIG_ERROR_IMPOSSIBLE = 5,
    TREASURE_HUNT_DIG_WRONG_AND_YOU_KNOW_IT = 6
}
declare enum TreasureHuntFlagStateEnum {
    TREASURE_HUNT_FLAG_STATE_UNKNOWN = 0,
    TREASURE_HUNT_FLAG_STATE_OK = 1,
    TREASURE_HUNT_FLAG_STATE_WRONG = 2
}
declare enum TreasureHuntRequestEnum {
    TREASURE_HUNT_ERROR_UNDEFINED = 0,
    TREASURE_HUNT_OK = 1,
    TREASURE_HUNT_ERROR_NO_QUEST_FOUND = 2,
    TREASURE_HUNT_ERROR_ALREADY_HAVE_QUEST = 3,
    TREASURE_HUNT_ERROR_NOT_AVAILABLE = 4,
    TREASURE_HUNT_ERROR_DAILY_LIMIT_EXCEEDED = 5
}
declare enum TreasureHuntTypeEnum {
    TREASURE_HUNT_CLASSIC = 0,
    TREASURE_HUNT_PORTAL = 1,
    TREASURE_HUNT_LEGENDARY = 2
}
declare enum CharacterDeletionErrorEnum {
    DEL_ERR_NO_REASON = 1,
    DEL_ERR_TOO_MANY_CHAR_DELETION = 2,
    DEL_ERR_BAD_SECRET_ANSWER = 3,
    DEL_ERR_RESTRICED_ZONE = 4
}
declare enum CharacterRemodelingEnum {
    CHARACTER_REMODELING_NOT_APPLICABLE = 0,
    CHARACTER_REMODELING_NAME = 1,
    CHARACTER_REMODELING_COLORS = 2,
    CHARACTER_REMODELING_COSMETIC = 4,
    CHARACTER_REMODELING_BREED = 8,
    CHARACTER_REMODELING_GENDER = 16,
    CHARACTER_OPT_REMODELING_NAME = 32,
    CHARACTER_OPT_REMODELING_ALL = 64
}
declare enum ServerConnectionErrorEnum {
    SERVER_CONNECTION_ERROR_DUE_TO_STATUS = 0,
    SERVER_CONNECTION_ERROR_NO_REASON = 1,
    SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED = 2,
    SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED = 3,
    SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED = 4,
    SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY = 5,
    SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY = 6,
    SERVER_CONNECTION_ERROR_MONOACCOUNT_CANNOT_VERIFY = 7,
    SERVER_CONNECTION_ERROR_MONOACCOUNT_ONLY = 8,
    SERVER_CONNECTION_ERROR_SERVER_OVERLOAD = 9
}
declare enum HaapiAuthTypeEnum {
    HAAPI_API_KEY = 0,
    HAAPI_TOKEN = 1
}
declare enum HaapiSessionTypeEnum {
    HAAPI_ACCOUNT_SESSION = 0,
    HAAPI_GAME_SESSION = 1
}
declare enum ForgettableSpellListActionEnum {
    FORGETTABLE_SPELL_LIST_DISPATCH = 0,
    FORGETTABLE_SPELL_LIST_UPDATE = 1
}
declare enum StatsUpgradeResultEnum {
    NONE = -1,
    SUCCESS = 0,
    RESTRICTED = 1,
    GUEST = 2,
    IN_FIGHT = 3,
    NOT_ENOUGH_POINT = 4
}
declare enum ConsoleMessageTypeEnum {
    CONSOLE_TEXT_MESSAGE = 0,
    CONSOLE_INFO_MESSAGE = 1,
    CONSOLE_ERR_MESSAGE = 2
}
declare enum AlignmentWarEffortDonationResultEnum {
    WAR_EFFORT_DONATION_SUCCESS = 0,
    WAR_EFFORT_DONATION_ERROR_NOT_ENOUGH_KAMAS = 1,
    WAR_EFFORT_DONATION_ERROR_INVALID_ALIGNMENT = 2,
    WAR_EFFORT_DONATION_ERROR_KAMAS_LIMIT_REACH = 3,
    WAR_EFFORT_DONATION_ERROR_UNKNOWN = 4
}
declare enum DialogTypeEnum {
    DIALOG_BOOK = 0,
    DIALOG_DIALOG = 1,
    DIALOG_LOCKABLE = 2,
    DIALOG_PURCHASABLE = 3,
    DIALOG_GUILD_INVITATION = 4,
    DIALOG_GUILD_CREATE = 5,
    DIALOG_GUILD_RENAME = 6,
    DIALOG_MARRIAGE = 7,
    DIALOG_DUNGEON_MEETING = 8,
    DIALOG_SPELL_FORGET = 9,
    DIALOG_TELEPORTER = 10,
    DIALOG_EXCHANGE = 11,
    DIALOG_ALLIANCE_INVITATION = 12,
    DIALOG_ALLIANCE_CREATE = 13,
    DIALOG_ALLIANCE_RENAME = 14,
    DIALOG_HAVENBAG_MEETING = 15
}
declare enum SocialContactCategoryEnum {
    SOCIAL_CONTACT_FRIEND = 0,
    SOCIAL_CONTACT_SPOUSE = 1,
    SOCIAL_CONTACT_PARTY = 2,
    SOCIAL_CONTACT_GUILD = 3,
    SOCIAL_CONTACT_ALLIANCE = 4,
    SOCIAL_CONTACT_CRAFTER = 5,
    SOCIAL_CONTACT_INTERLOCUTOR = 6,
    SOCIAL_CONTACT_FIGHT = 7
}
declare enum ExchangeReplayStopReasonEnum {
    STOPPED_REASON_OK = 1,
    STOPPED_REASON_USER = 2,
    STOPPED_REASON_MISSING_RESSOURCE = 3,
    STOPPED_REASON_IMPOSSIBLE_MODIFICATION = 4
}
declare enum MountEquipedErrorEnum {
    UNSET = 0,
    SET = 1,
    RIDING = 2
}
declare enum AllianceRightsBitEnum {
    ALLIANCE_RIGHT_NONE = 0,
    ALLIANCE_RIGHT_BOSS = 1,
    ALLIANCE_RIGHT_MANAGE_PRISMS = 2,
    ALLIANCE_RIGHT_TALK_IN_CHAN = 4,
    ALLIANCE_RIGHT_RECRUIT_GUILDS = 8,
    ALLIANCE_RIGHT_KICK_GUILDS = 16,
    ALLIANCE_RIGHT_MANAGE_RIGHTS = 32
}
declare enum AccessoryPreviewErrorEnum {
    PREVIEW_ERROR = 0,
    PREVIEW_COOLDOWN = 1,
    PREVIEW_BAD_ITEM = 2
}
declare enum PresetUseResultEnum {
    PRESET_USE_OK = 1,
    PRESET_USE_OK_PARTIAL = 2,
    PRESET_USE_ERR_STATS_FIGHT_PREPARATION = 3,
    PRESET_USE_ERR_COOLDOWN = 4,
    PRESET_USE_ERR_BAD_PRESET_ID = 5,
    PRESET_USE_ERR_INVALID_STATE = 6,
    PRESET_USE_ERR_STATS = 7,
    PRESET_USE_ERR_CRITERION = 8,
    PRESET_USE_ERR_UNKNOWN = 9,
    PRESET_USE_ERR_INVALID_DATA = 10
}
declare enum PresetDeleteResultEnum {
    PRESET_DEL_OK = 1,
    PRESET_DEL_ERR_UNKNOWN = 2,
    PRESET_DEL_ERR_BAD_PRESET_ID = 3,
    PRESET_DEL_ERR_SYSTEM_INACTIVE = 4
}
declare enum PresetSaveResultEnum {
    PRESET_SAVE_OK = 1,
    PRESET_SAVE_ERR_UNKNOWN = 2,
    PRESET_SAVE_ERR_TOO_MANY = 3,
    PRESET_SAVE_ERR_INVALID_PLAYER_STATE = 4,
    PRESET_SAVE_ERR_SYSTEM_INACTIVE = 5,
    PRESET_SAVE_ERR_INVALID_ID = 6
}
declare enum DelayedActionTypeEnum {
    DELAYED_ACTION_DISCONNECT = 0,
    DELAYED_ACTION_OBJECT_USE = 1,
    DELAYED_ACTION_JOIN_CHARACTER = 2,
    DELAYED_ACTION_AGGRESSION_IMMUNE = 3
}
declare enum BreachRewardLockEnum {
    BREACH_REWARD_LOCK_OWNER = 0,
    BREACH_REWARD_LOCK_FIGHTER = 1,
    BREACH_REWARD_LOCK_RESOURCES = 2,
    BREACH_REWARD_LOCK_CRITERION = 3,
    BREACH_REWARD_LOCK_USELESS = 4,
    BREACH_REWARD_MAX_PURCHASE_REACHED = 5
}
declare enum BidCancellationEnum {
    UNKNOWN_TYPE = 0,
    CLASSIC = 1,
    FRAUD = 2
}
declare enum BidValidationEnum {
    GENERIC_ERROR = 0,
    BUFFER_OVERLOAD = 1,
    OFFER_DOESNT_EXIST = 2,
    OFFER_ALREADY_EXISTS = 3,
    NOT_ENOUGH_KAMAS = 4,
    NOT_ENOUGH_OGRINES = 5,
    SERVER_MAINTENANCE = 6,
    PLAYER_IN_DEBT = 7,
    OFFER_IS_YOURS = 8,
    VALIDATION_SUCCESS = 100
}
declare enum BidActionEnum {
    INVALID_ACTION = 0,
    CONSUME_BUFF = 1,
    CANCEL = 2,
    CREATE_KAMA = 3,
    CREATE_OGRINE = 4,
    BUY_KAMA = 5,
    BUY_OGRINE = 6
}
declare enum CraftResultEnum {
    CRAFT_IMPOSSIBLE = 0,
    CRAFT_FAILED = 1,
    CRAFT_SUCCESS = 2,
    CRAFT_NEUTRAL = 3,
    CRAFT_FORBIDDEN = 4
}
declare enum HavenBagShareBitEnum {
    HAVEN_BAG_NONE = 0,
    HAVEN_BAG_FRIENDS = 1,
    HAVEN_BAG_GUILD = 2
}
declare enum GuildRecruitmentTypeEnum {
    DISABLED = 0,
    AUTOMATIC = 1,
    MANUAL = 2
}
declare enum GuildApplicationStateEnum {
    ADDED = 0,
    DELETED = 1,
    UPDATED = 2
}
declare enum GuildSummarySortEnum {
    SORT_BY_NAME = 0,
    SORT_BY_LEVEL = 1,
    SORT_BY_NB_MEMBERS = 2,
    SORT_BY_LAST_ACTIVITY = 3
}
declare enum BreedEnum {
    INCARNATION = -11,
    PRISM = -10,
    MOUNT_OUTSIDE = -9,
    MUTANT_IN_DUNGEON = -8,
    MUTANT = -7,
    TAX_COLLECTOR = -6,
    HUMAN_VENDOR = -5,
    NPC = -4,
    MONSTER_GROUP = -3,
    MONSTER = -2,
    SUMMONED = -1,
    UNDEFINED = 0,
    Feca = 1,
    Osamodas = 2,
    Enutrof = 3,
    Sram = 4,
    Xelor = 5,
    Ecaflip = 6,
    Eniripsa = 7,
    Iop = 8,
    Cra = 9,
    Sadida = 10,
    Sacrieur = 11,
    Pandawa = 12,
    Roublard = 13,
    Zobal = 14,
    Steamer = 15,
    Eliotrope = 16,
    Huppermage = 17,
    Ouginak = 18
}
declare enum NicknameErrorEnum {
    ALREADY_USED = 1,
    SAME_AS_LOGIN = 2,
    TOO_SIMILAR_TO_LOGIN = 3,
    INVALID_NICK = 4,
    UNKNOWN_NICK_ERROR = 99
}
declare enum ForgettableSpellClientActionEnum {
    FORGETTABLE_SPELL_FORGET = 0,
    FORGETTABLE_SPELL_EQUIP = 1,
    FORGETTABLE_SPELL_UNEQUIP = 2
}
declare enum SavablePresetTypeEnum {
    CHARACTER_BUILD = 0,
    SPELL_PRESET = 1
}
declare enum ExchangeHandleMountStableTypeEnum {
    EXCHANGE_MOUNTSTABLES_PUT = 1,
    EXCHANGE_MOUNTSTABLES_GET = 2,
    EXCHANGE_MOUNTSTABLES_FREE = 3,
    EXCHANGE_MOUNTSTABLES_CERTIF = 4,
    EXCHANGE_MOUNTSTABLES_UNCERTIF = 5,
    EXCHANGE_MOUNTPADDOCK_PUT = 6,
    EXCHANGE_MOUNTPADDOCK_GET = 7,
    EXCHANGE_MOUNTPADDOCK_FREE = 8,
    EXCHANGE_EQUIPED_MOUNTPADDOCK_PUT = 9,
    EXCHANGE_EQUIPED_MOUNTPADDOCK_GET = 10,
    EXCHANGE_EQUIPED_FREE = 11,
    EXCHANGE_CERTIFICAT_FREE = 12,
    EXCHANGE_EQUIPED_CERTIF = 13,
    EXCHANGE_MOUNTPADDOCK_CERTIF = 14,
    EXCHANGE_UNCERTIF_TO_EQUIPED = 15,
    EXCHANGE_UNCERTIF_TO_PADDOCK = 16,
    EXCHANGE_MOUNTSTABLES_STERILIZE = 17,
    EXCHANGE_EQUIPED_STERILIZE = 18,
    EXCHANGE_MOUNTPADDOCK_STERILIZE = 19
}
declare enum AlliancePrismModuleTypeEnum {
    TELEPORTER = 0,
    RECYCLER = 1
}
declare enum PlayableBreedEnum {
    UNDEFINED = 0,
    Feca = 1,
    Osamodas = 2,
    Enutrof = 3,
    Sram = 4,
    Xelor = 5,
    Ecaflip = 6,
    Eniripsa = 7,
    Iop = 8,
    Cra = 9,
    Sadida = 10,
    Sacrieur = 11,
    Pandawa = 12,
    Roublard = 13,
    Zobal = 14,
    Steamer = 15,
    Eliotrope = 16,
    Huppermage = 17,
    Ouginak = 18
}
declare enum HavenBagRoomActionEnum {
    HAVEN_BAG_ROOM_DISPATCH = 0,
    HAVEN_BAG_ROOM_UPDATE = 1
}
declare enum SubscriptionRequiredEnum {
    LIMITED_TO_SUBSCRIBER = 0,
    LIMIT_ON_JOB_XP = 1,
    LIMIT_ON_JOB_USE = 2,
    LIMIT_ON_MAP = 3,
    LIMIT_ON_ITEM = 4,
    LIMIT_ON_VENDOR = 5,
    LIMIT_ON_HAVENBAG = 6
}
declare enum GuildRightsBitEnum {
    GUILD_RIGHT_NONE = 0,
    GUILD_RIGHT_BOSS = 1,
    GUILD_RIGHT_MANAGE_GUILD_BOOSTS = 2,
    GUILD_RIGHT_MANAGE_RIGHTS = 4,
    GUILD_RIGHT_INVITE_NEW_MEMBERS = 8,
    GUILD_RIGHT_BAN_MEMBERS = 16,
    GUILD_RIGHT_MANAGE_XP_CONTRIBUTION = 32,
    GUILD_RIGHT_MANAGE_RANKS = 64,
    GUILD_RIGHT_HIRE_TAX_COLLECTOR = 128,
    GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION = 256,
    GUILD_RIGHT_COLLECT = 512,
    GUILD_RIGHT_USE_PADDOCKS = 4096,
    GUILD_RIGHT_ORGANIZE_PADDOCKS = 8192,
    GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS = 16384,
    GUILD_RIGHT_DEFENSE_PRIORITY = 32768,
    GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR = 65536,
    GUILD_RIGHT_SET_ALLIANCE_PRISM = 131072,
    GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN = 262144
}
declare class GameContextActorPositionInformations extends DofusType {
    static id: number;
    id: number;
    contextualId: number | undefined;
    disposition: EntityDispositionInformations | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextActorInformations extends GameContextActorPositionInformations {
    static id: number;
    id: number;
    look: EntityLook | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayActorInformations extends GameContextActorInformations {
    static id: number;
    id: number;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    lootShare: number | undefined;
    staticInfos: GroupMonsterStaticInformations | undefined;
    alignmentSide: number | undefined;
    keyRingBonus: boolean | undefined;
    hasHardcoreDrop: boolean | undefined;
    hasAVARewardToken: boolean | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, lootShare?: number | undefined, staticInfos?: GroupMonsterStaticInformations | undefined, alignmentSide?: number | undefined, keyRingBonus?: boolean | undefined, hasHardcoreDrop?: boolean | undefined, hasAVARewardToken?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagRoomPreviewInformation extends DofusType {
    static id: number;
    id: number;
    themeId: number | undefined;
    roomId: number | undefined;
    constructor(themeId?: number | undefined, roomId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveElement extends DofusType {
    static id: number;
    id: number;
    elementTypeId: number | undefined;
    elementId: number | undefined;
    disabledSkills: InteractiveElementSkill[] | undefined;
    enabledSkills: InteractiveElementSkill[] | undefined;
    onCurrentMap: boolean | undefined;
    constructor(elementTypeId?: number | undefined, elementId?: number | undefined, disabledSkills?: InteractiveElementSkill[] | undefined, enabledSkills?: InteractiveElementSkill[] | undefined, onCurrentMap?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterInformations extends GameContextActorInformations {
    static id: number;
    id: number;
    wave: number | undefined;
    spawnInfo: GameContextBasicSpawnInformation | undefined;
    previousPositions: number[] | undefined;
    stats: GameFightCharacteristics | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightEntityInformation extends GameFightFighterInformations {
    static id: number;
    id: number;
    entityModelId: number | undefined;
    masterId: number | undefined;
    level: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, entityModelId?: number | undefined, masterId?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPrismInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    prism: PrismInformation | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, prism?: PrismInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightAIInformations extends GameFightFighterInformations {
    static id: number;
    id: number;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightMonsterInformations extends GameFightAIInformations {
    static id: number;
    id: number;
    creatureLevel: number | undefined;
    creatureGenericId: number | undefined;
    creatureGrade: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, creatureLevel?: number | undefined, creatureGenericId?: number | undefined, creatureGrade?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations {
    static id: number;
    id: number;
    nbWaves: number | undefined;
    alternatives: GroupMonsterStaticInformations[] | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, lootShare?: number | undefined, staticInfos?: GroupMonsterStaticInformations | undefined, alignmentSide?: number | undefined, keyRingBonus?: boolean | undefined, hasHardcoreDrop?: boolean | undefined, hasAVARewardToken?: boolean | undefined, nbWaves?: number | undefined, alternatives?: GroupMonsterStaticInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    identification: TaxCollectorStaticInformations | undefined;
    taxCollectorAttack: number | undefined;
    guildLevel: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, identification?: TaxCollectorStaticInformations | undefined, taxCollectorAttack?: number | undefined, guildLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    name: string | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations {
    static id: number;
    id: number;
    level: number | undefined;
    ownerName: string | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, name?: string | undefined, level?: number | undefined, ownerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayNpcInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    specialArtworkId: number | undefined;
    npcId: number | undefined;
    sex: boolean | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, specialArtworkId?: number | undefined, npcId?: number | undefined, sex?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations {
    static id: number;
    id: number;
    questFlag: GameRolePlayNpcQuestFlag | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, specialArtworkId?: number | undefined, npcId?: number | undefined, sex?: boolean | undefined, questFlag?: GameRolePlayNpcQuestFlag | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations {
    static id: number;
    id: number;
    sellType: number | undefined;
    options: HumanOption[] | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, name?: string | undefined, sellType?: number | undefined, options?: HumanOption[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations {
    static id: number;
    id: number;
    humanoidInfo: HumanInformations | undefined;
    accountId: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, name?: string | undefined, humanoidInfo?: HumanInformations | undefined, accountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations {
    static id: number;
    id: number;
    alignmentInfos: ActorAlignmentInformations | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, name?: string | undefined, humanoidInfo?: HumanInformations | undefined, accountId?: number | undefined, alignmentInfos?: ActorAlignmentInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPortalInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    portal: PortalInformation | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, portal?: PortalInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations {
    static id: number;
    id: number;
    powerLevel: number | undefined;
    monsterId: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, name?: string | undefined, humanoidInfo?: HumanInformations | undefined, accountId?: number | undefined, powerLevel?: number | undefined, monsterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterNamedInformations extends GameFightFighterInformations {
    static id: number;
    id: number;
    status: PlayerStatus | undefined;
    name: string | undefined;
    hiddenInPrefight: boolean | undefined;
    leagueId: number | undefined;
    ladderPosition: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, status?: PlayerStatus | undefined, name?: string | undefined, hiddenInPrefight?: boolean | undefined, leagueId?: number | undefined, ladderPosition?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightCharacterInformations extends GameFightFighterNamedInformations {
    static id: number;
    id: number;
    sex: boolean | undefined;
    breed: number | undefined;
    level: number | undefined;
    alignmentInfos: ActorAlignmentInformations | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, status?: PlayerStatus | undefined, name?: string | undefined, hiddenInPrefight?: boolean | undefined, leagueId?: number | undefined, ladderPosition?: number | undefined, sex?: boolean | undefined, breed?: number | undefined, level?: number | undefined, alignmentInfos?: ActorAlignmentInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTaxCollectorInformations extends GameFightAIInformations {
    static id: number;
    id: number;
    level: number | undefined;
    firstNameId: number | undefined;
    lastNameId: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, level?: number | undefined, firstNameId?: number | undefined, lastNameId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntityLook extends DofusType {
    static id: number;
    id: number;
    skins: number[] | undefined;
    subentities: SubEntity[] | undefined;
    bonesId: number | undefined;
    indexedColors: number[] | undefined;
    scales: number[] | undefined;
    constructor(skins?: number[] | undefined, subentities?: SubEntity[] | undefined, bonesId?: number | undefined, indexedColors?: number[] | undefined, scales?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SubEntity extends DofusType {
    static id: number;
    id: number;
    subEntityLook: EntityLook | undefined;
    bindingPointCategory: number | undefined;
    bindingPointIndex: number | undefined;
    constructor(subEntityLook?: EntityLook | undefined, bindingPointCategory?: number | undefined, bindingPointIndex?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractFightDispellableEffect extends DofusType {
    static id: number;
    id: number;
    parentBoostUid: number | undefined;
    effectId: number | undefined;
    targetId: number | undefined;
    uid: number | undefined;
    turnDuration: number | undefined;
    spellId: number | undefined;
    dispelable: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextSummonsInformation extends DofusType {
    static id: number;
    id: number;
    wave: number | undefined;
    spawnInformation: SpawnInformation | undefined;
    summons: GameContextBasicSpawnInformation[] | undefined;
    look: EntityLook | undefined;
    stats: GameFightCharacteristics | undefined;
    constructor(wave?: number | undefined, spawnInformation?: SpawnInformation | undefined, summons?: GameContextBasicSpawnInformation[] | undefined, look?: EntityLook | undefined, stats?: GameFightCharacteristics | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTemporaryBoostEffect extends AbstractFightDispellableEffect {
    static id: number;
    id: number;
    delta: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined, delta?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpawnInformation extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpawnCompanionInformation extends SpawnInformation {
    static id: number;
    id: number;
    summonerId: number | undefined;
    modelId: number | undefined;
    ownerId: number | undefined;
    level: number | undefined;
    constructor(summonerId?: number | undefined, modelId?: number | undefined, ownerId?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BaseSpawnMonsterInformation extends SpawnInformation {
    static id: number;
    id: number;
    creatureGenericId: number | undefined;
    constructor(creatureGenericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpawnScaledMonsterInformation extends BaseSpawnMonsterInformation {
    static id: number;
    id: number;
    creatureLevel: number | undefined;
    constructor(creatureGenericId?: number | undefined, creatureLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextBasicSpawnInformation extends DofusType {
    static id: number;
    id: number;
    teamId: number | undefined;
    informations: GameContextActorPositionInformations | undefined;
    alive: boolean | undefined;
    constructor(teamId?: number | undefined, informations?: GameContextActorPositionInformations | undefined, alive?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightSpellCooldown extends DofusType {
    static id: number;
    id: number;
    cooldown: number | undefined;
    spellId: number | undefined;
    constructor(cooldown?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpawnCharacterInformation extends SpawnInformation {
    static id: number;
    id: number;
    level: number | undefined;
    name: string | undefined;
    constructor(level?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpawnMonsterInformation extends BaseSpawnMonsterInformation {
    static id: number;
    id: number;
    creatureGrade: number | undefined;
    constructor(creatureGenericId?: number | undefined, creatureGrade?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntityDispositionInformations extends DofusType {
    static id: number;
    id: number;
    direction: number | undefined;
    cellId: number | undefined;
    constructor(direction?: number | undefined, cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOption extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionAlliance extends HumanOption {
    static id: number;
    id: number;
    allianceInformations: AllianceInformations | undefined;
    aggressable: number | undefined;
    constructor(allianceInformations?: AllianceInformations | undefined, aggressable?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionFollowers extends HumanOption {
    static id: number;
    id: number;
    followingCharactersLook: IndexedEntityLook[] | undefined;
    constructor(followingCharactersLook?: IndexedEntityLook[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActorOrientation extends DofusType {
    static id: number;
    id: number;
    direction: number | undefined;
    id_: number | undefined;
    constructor(direction?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GroupMonsterStaticInformations extends DofusType {
    static id: number;
    id: number;
    mainCreatureLightInfos: MonsterInGroupLightInformations | undefined;
    underlings: MonsterInGroupInformations[] | undefined;
    constructor(mainCreatureLightInfos?: MonsterInGroupLightInformations | undefined, underlings?: MonsterInGroupInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanInformations extends DofusType {
    static id: number;
    id: number;
    restrictions: ActorRestrictionsInformations | undefined;
    options: HumanOption[] | undefined;
    sex: boolean | undefined;
    constructor(restrictions?: ActorRestrictionsInformations | undefined, options?: HumanOption[] | undefined, sex?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamMemberInformations extends DofusType {
    static id: number;
    id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseInformations extends DofusType {
    static id: number;
    id: number;
    modelId: number | undefined;
    houseId: number | undefined;
    constructor(modelId?: number | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseOnMapInformations extends HouseInformations {
    static id: number;
    id: number;
    doorsOnMap: number[] | undefined;
    houseInstances: HouseInstanceInformations[] | undefined;
    constructor(modelId?: number | undefined, houseId?: number | undefined, doorsOnMap?: number[] | undefined, houseInstances?: HouseInstanceInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionObjectUse extends HumanOption {
    static id: number;
    id: number;
    objectGID: number | undefined;
    delayTypeId: number | undefined;
    delayEndTime: number | undefined;
    constructor(objectGID?: number | undefined, delayTypeId?: number | undefined, delayEndTime?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseInstanceInformations extends DofusType {
    static id: number;
    id: number;
    price: number | undefined;
    instanceId: number | undefined;
    ownerTag: AccountTagInformation | undefined;
    secondHand: boolean | undefined;
    isLocked: boolean | undefined;
    hasOwner: boolean | undefined;
    isSaleLocked: boolean | undefined;
    constructor(price?: number | undefined, instanceId?: number | undefined, ownerTag?: AccountTagInformation | undefined, secondHand?: boolean | undefined, isLocked?: boolean | undefined, hasOwner?: boolean | undefined, isSaleLocked?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionEmote extends HumanOption {
    static id: number;
    id: number;
    emoteStartTime: number | undefined;
    emoteId: number | undefined;
    constructor(emoteStartTime?: number | undefined, emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemInRolePlay extends DofusType {
    static id: number;
    id: number;
    objectGID: number | undefined;
    cellId: number | undefined;
    constructor(objectGID?: number | undefined, cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockItem extends ObjectItemInRolePlay {
    static id: number;
    id: number;
    durability: ItemDurability | undefined;
    constructor(objectGID?: number | undefined, cellId?: number | undefined, durability?: ItemDurability | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractFightTeamInformations extends DofusType {
    static id: number;
    id: number;
    nbWaves: number | undefined;
    teamId: number | undefined;
    teamTypeId: number | undefined;
    teamSide: number | undefined;
    leaderId: number | undefined;
    constructor(nbWaves?: number | undefined, teamId?: number | undefined, teamTypeId?: number | undefined, teamSide?: number | undefined, leaderId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamInformations extends AbstractFightTeamInformations {
    static id: number;
    id: number;
    teamMembers: FightTeamMemberInformations[] | undefined;
    constructor(nbWaves?: number | undefined, teamId?: number | undefined, teamTypeId?: number | undefined, teamSide?: number | undefined, leaderId?: number | undefined, teamMembers?: FightTeamMemberInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IndexedEntityLook extends DofusType {
    static id: number;
    id: number;
    look: EntityLook | undefined;
    index: number | undefined;
    constructor(look?: EntityLook | undefined, index?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionSkillUse extends HumanOption {
    static id: number;
    id: number;
    elementId: number | undefined;
    skillEndTime: number | undefined;
    skillId: number | undefined;
    constructor(elementId?: number | undefined, skillEndTime?: number | undefined, skillId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlternativeMonstersInGroupLightInformations extends DofusType {
    static id: number;
    id: number;
    playerCount: number | undefined;
    monsters: MonsterInGroupLightInformations[] | undefined;
    constructor(playerCount?: number | undefined, monsters?: MonsterInGroupLightInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightCommonInformations extends DofusType {
    static id: number;
    id: number;
    fightType: number | undefined;
    fightId: number | undefined;
    fightTeams: FightTeamInformations[] | undefined;
    fightTeamsOptions: FightOptionsInformations[] | undefined;
    fightTeamsPositions: number[] | undefined;
    constructor(fightType?: number | undefined, fightId?: number | undefined, fightTeams?: FightTeamInformations[] | undefined, fightTeamsOptions?: FightOptionsInformations[] | undefined, fightTeamsPositions?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapNpcQuestInfo extends DofusType {
    static id: number;
    id: number;
    mapId: number | undefined;
    questFlags: GameRolePlayNpcQuestFlag[] | undefined;
    npcsIdsWithQuest: number[] | undefined;
    constructor(mapId?: number | undefined, questFlags?: GameRolePlayNpcQuestFlag[] | undefined, npcsIdsWithQuest?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MonsterInGroupLightInformations extends DofusType {
    static id: number;
    id: number;
    level: number | undefined;
    genericId: number | undefined;
    grade: number | undefined;
    constructor(level?: number | undefined, genericId?: number | undefined, grade?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MonsterInGroupInformations extends MonsterInGroupLightInformations {
    static id: number;
    id: number;
    look: EntityLook | undefined;
    constructor(level?: number | undefined, genericId?: number | undefined, grade?: number | undefined, look?: EntityLook | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapObstacle extends DofusType {
    static id: number;
    id: number;
    state: number | undefined;
    obstacleCellId: number | undefined;
    constructor(state?: number | undefined, obstacleCellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations {
    static id: number;
    id: number;
    alternatives: AlternativeMonstersInGroupLightInformations[] | undefined;
    constructor(mainCreatureLightInfos?: MonsterInGroupLightInformations | undefined, underlings?: MonsterInGroupInformations[] | undefined, alternatives?: AlternativeMonstersInGroupLightInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightEntityDispositionInformations extends EntityDispositionInformations {
    static id: number;
    id: number;
    carryingCharacterId: number | undefined;
    constructor(direction?: number | undefined, cellId?: number | undefined, carryingCharacterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachBranch extends DofusType {
    static id: number;
    id: number;
    monsters: MonsterInGroupLightInformations[] | undefined;
    relativeScore: number | undefined;
    room: number | undefined;
    bosses: MonsterInGroupLightInformations[] | undefined;
    map: number | undefined;
    element: number | undefined;
    score: number | undefined;
    constructor(monsters?: MonsterInGroupLightInformations[] | undefined, relativeScore?: number | undefined, room?: number | undefined, bosses?: MonsterInGroupLightInformations[] | undefined, map?: number | undefined, element?: number | undefined, score?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentifiedEntityDispositionInformations extends EntityDispositionInformations {
    static id: number;
    id: number;
    id_: number | undefined;
    constructor(direction?: number | undefined, cellId?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatedElement extends DofusType {
    static id: number;
    id: number;
    onCurrentMap: boolean | undefined;
    elementState: number | undefined;
    elementId: number | undefined;
    elementCellId: number | undefined;
    constructor(onCurrentMap?: boolean | undefined, elementState?: number | undefined, elementId?: number | undefined, elementCellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActorRestrictionsInformations extends DofusType {
    static id: number;
    id: number;
    cantBeAggressed: boolean | undefined;
    cantBeChallenged: boolean | undefined;
    cantTrade: boolean | undefined;
    cantBeAttackedByMutant: boolean | undefined;
    cantRun: boolean | undefined;
    forceSlowWalk: boolean | undefined;
    cantMinimize: boolean | undefined;
    cantMove: boolean | undefined;
    cantAggress: boolean | undefined;
    cantChallenge: boolean | undefined;
    cantExchange: boolean | undefined;
    cantAttack: boolean | undefined;
    cantChat: boolean | undefined;
    cantBeMerchant: boolean | undefined;
    cantUseObject: boolean | undefined;
    cantUseTaxCollector: boolean | undefined;
    cantUseInteractive: boolean | undefined;
    cantSpeakToNPC: boolean | undefined;
    cantChangeZone: boolean | undefined;
    cantAttackMonster: boolean | undefined;
    constructor(cantBeAggressed?: boolean | undefined, cantBeChallenged?: boolean | undefined, cantTrade?: boolean | undefined, cantBeAttackedByMutant?: boolean | undefined, cantRun?: boolean | undefined, forceSlowWalk?: boolean | undefined, cantMinimize?: boolean | undefined, cantMove?: boolean | undefined, cantAggress?: boolean | undefined, cantChallenge?: boolean | undefined, cantExchange?: boolean | undefined, cantAttack?: boolean | undefined, cantChat?: boolean | undefined, cantBeMerchant?: boolean | undefined, cantUseObject?: boolean | undefined, cantUseTaxCollector?: boolean | undefined, cantUseInteractive?: boolean | undefined, cantSpeakToNPC?: boolean | undefined, cantChangeZone?: boolean | undefined, cantAttackMonster?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCharacteristicsInformations extends DofusType {
    static id: number;
    id: number;
    kamas: number | undefined;
    experienceBonusLimit: number | undefined;
    experienceNextLevelFloor: number | undefined;
    criticalHitWeapon: number | undefined;
    experience: number | undefined;
    alignmentInfos: ActorExtendedAlignmentInformations | undefined;
    experienceLevelFloor: number | undefined;
    spellModifications: CharacterSpellModification[] | undefined;
    characteristics: CharacterCharacteristic[] | undefined;
    probationTime: number | undefined;
    constructor(kamas?: number | undefined, experienceBonusLimit?: number | undefined, experienceNextLevelFloor?: number | undefined, criticalHitWeapon?: number | undefined, experience?: number | undefined, alignmentInfos?: ActorExtendedAlignmentInformations | undefined, experienceLevelFloor?: number | undefined, spellModifications?: CharacterSpellModification[] | undefined, characteristics?: CharacterCharacteristic[] | undefined, probationTime?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildApplicationInformation extends DofusType {
    static id: number;
    id: number;
    creationDate: number | undefined;
    playerInfo: ApplicationPlayerInformation | undefined;
    applyText: string | undefined;
    constructor(creationDate?: number | undefined, playerInfo?: ApplicationPlayerInformation | undefined, applyText?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractSocialGroupInfos extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicGuildInformations extends AbstractSocialGroupInfos {
    static id: number;
    id: number;
    guildLevel: number | undefined;
    guildId: number | undefined;
    guildName: string | undefined;
    constructor(guildLevel?: number | undefined, guildId?: number | undefined, guildName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInformations extends BasicGuildInformations {
    static id: number;
    id: number;
    guildEmblem: GuildEmblem | undefined;
    constructor(guildLevel?: number | undefined, guildId?: number | undefined, guildName?: string | undefined, guildEmblem?: GuildEmblem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractCharacterInformation extends DofusType {
    static id: number;
    id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterBasicMinimalInformations extends AbstractCharacterInformation {
    static id: number;
    id: number;
    name: string | undefined;
    constructor(id_?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterMinimalInformations extends CharacterBasicMinimalInformations {
    static id: number;
    id: number;
    level: number | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations {
    static id: number;
    id: number;
    entityLook: EntityLook | undefined;
    breed: number | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterBaseInformations extends CharacterMinimalPlusLookInformations {
    static id: number;
    id: number;
    sex: boolean | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, sex?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightDispellableEffectExtendedInformations extends DofusType {
    static id: number;
    id: number;
    effect: AbstractFightDispellableEffect | undefined;
    actionId: number | undefined;
    sourceId: number | undefined;
    constructor(effect?: AbstractFightDispellableEffect | undefined, actionId?: number | undefined, sourceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionMarkedCell extends DofusType {
    static id: number;
    id: number;
    cellColor: number | undefined;
    cellsType: number | undefined;
    cellId: number | undefined;
    zoneSize: number | undefined;
    constructor(cellColor?: number | undefined, cellsType?: number | undefined, cellId?: number | undefined, zoneSize?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultListEntry extends DofusType {
    static id: number;
    id: number;
    rewards: FightLoot | undefined;
    outcome: number | undefined;
    wave: number | undefined;
    constructor(rewards?: FightLoot | undefined, outcome?: number | undefined, wave?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultFighterListEntry extends FightResultListEntry {
    static id: number;
    id: number;
    alive: boolean | undefined;
    id_: number | undefined;
    constructor(rewards?: FightLoot | undefined, outcome?: number | undefined, wave?: number | undefined, alive?: boolean | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightResumeSlaveInfo extends DofusType {
    static id: number;
    id: number;
    bombCount: number | undefined;
    summonCount: number | undefined;
    slaveId: number | undefined;
    spellCooldowns: GameFightSpellCooldown[] | undefined;
    constructor(bombCount?: number | undefined, summonCount?: number | undefined, slaveId?: number | undefined, spellCooldowns?: GameFightSpellCooldown[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NamedPartyTeamWithOutcome extends DofusType {
    static id: number;
    id: number;
    team: NamedPartyTeam | undefined;
    outcome: number | undefined;
    constructor(team?: NamedPartyTeam | undefined, outcome?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionMark extends DofusType {
    static id: number;
    id: number;
    markimpactCell: number | undefined;
    markTeamId: number | undefined;
    markId: number | undefined;
    cells: GameActionMarkedCell[] | undefined;
    markAuthorId: number | undefined;
    markType: number | undefined;
    markSpellId: number | undefined;
    active: boolean | undefined;
    markSpellLevel: number | undefined;
    constructor(markimpactCell?: number | undefined, markTeamId?: number | undefined, markId?: number | undefined, cells?: GameActionMarkedCell[] | undefined, markAuthorId?: number | undefined, markType?: number | undefined, markSpellId?: number | undefined, active?: boolean | undefined, markSpellLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NamedPartyTeam extends DofusType {
    static id: number;
    id: number;
    partyName: string | undefined;
    teamId: number | undefined;
    constructor(partyName?: string | undefined, teamId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class Idol extends DofusType {
    static id: number;
    id: number;
    dropBonusPercent: number | undefined;
    id_: number | undefined;
    xpBonusPercent: number | undefined;
    constructor(dropBonusPercent?: number | undefined, id_?: number | undefined, xpBonusPercent?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightMutantInformations extends GameFightFighterNamedInformations {
    static id: number;
    id: number;
    powerLevel: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, status?: PlayerStatus | undefined, name?: string | undefined, hiddenInPrefight?: boolean | undefined, leagueId?: number | undefined, ladderPosition?: number | undefined, powerLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultPlayerListEntry extends FightResultFighterListEntry {
    static id: number;
    id: number;
    level: number | undefined;
    additional: FightResultAdditionalData[] | undefined;
    constructor(rewards?: FightLoot | undefined, outcome?: number | undefined, wave?: number | undefined, alive?: boolean | undefined, id_?: number | undefined, level?: number | undefined, additional?: FightResultAdditionalData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultTaxCollectorListEntry extends FightResultFighterListEntry {
    static id: number;
    id: number;
    experienceForGuild: number | undefined;
    level: number | undefined;
    guildInfo: BasicGuildInformations | undefined;
    constructor(rewards?: FightLoot | undefined, outcome?: number | undefined, wave?: number | undefined, alive?: boolean | undefined, id_?: number | undefined, experienceForGuild?: number | undefined, level?: number | undefined, guildInfo?: BasicGuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightEffectTriggerCount extends DofusType {
    static id: number;
    id: number;
    count: number | undefined;
    effectId: number | undefined;
    targetId: number | undefined;
    constructor(count?: number | undefined, effectId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCharacteristic extends DofusType {
    static id: number;
    id: number;
    characteristicId: number | undefined;
    constructor(characteristicId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCharacteristicDetailed extends CharacterCharacteristic {
    static id: number;
    id: number;
    objectsAndMountBonus: number | undefined;
    alignGiftBonus: number | undefined;
    base: number | undefined;
    contextModif: number | undefined;
    additional: number | undefined;
    constructor(characteristicId?: number | undefined, objectsAndMountBonus?: number | undefined, alignGiftBonus?: number | undefined, base?: number | undefined, contextModif?: number | undefined, additional?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterUsableCharacteristicDetailed extends CharacterCharacteristicDetailed {
    static id: number;
    id: number;
    used: number | undefined;
    constructor(characteristicId?: number | undefined, objectsAndMountBonus?: number | undefined, alignGiftBonus?: number | undefined, base?: number | undefined, contextModif?: number | undefined, additional?: number | undefined, used?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCharacteristicValue extends CharacterCharacteristic {
    static id: number;
    id: number;
    total: number | undefined;
    constructor(characteristicId?: number | undefined, total?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class Item extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItem extends Item {
    static id: number;
    id: number;
    objectGID: number | undefined;
    position: number | undefined;
    objectUID: number | undefined;
    effects: ObjectEffect[] | undefined;
    quantity: number | undefined;
    constructor(objectGID?: number | undefined, position?: number | undefined, objectUID?: number | undefined, effects?: ObjectEffect[] | undefined, quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffect extends DofusType {
    static id: number;
    id: number;
    actionId: number | undefined;
    constructor(actionId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectInteger extends ObjectEffect {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(actionId?: number | undefined, value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TrustCertificate extends DofusType {
    static id: number;
    id: number;
    hash: string | undefined;
    id_: number | undefined;
    constructor(hash?: string | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSpellModification extends DofusType {
    static id: number;
    id: number;
    value: CharacterCharacteristicDetailed | undefined;
    modificationType: number | undefined;
    spellId: number | undefined;
    constructor(value?: CharacterCharacteristicDetailed | undefined, modificationType?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveElementSkill extends DofusType {
    static id: number;
    id: number;
    skillInstanceUid: number | undefined;
    skillId: number | undefined;
    constructor(skillInstanceUid?: number | undefined, skillId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestActiveInformations extends DofusType {
    static id: number;
    id: number;
    questId: number | undefined;
    constructor(questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightCharacteristics extends DofusType {
    static id: number;
    id: number;
    invisibilityState: number | undefined;
    characteristics: CharacterCharacteristics | undefined;
    summoned: boolean | undefined;
    summoner: number | undefined;
    constructor(invisibilityState?: number | undefined, characteristics?: CharacterCharacteristics | undefined, summoned?: boolean | undefined, summoner?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismInformation extends DofusType {
    static id: number;
    id: number;
    rewardTokenCount: number | undefined;
    placementDate: number | undefined;
    typeId: number | undefined;
    nextVulnerabilityDate: number | undefined;
    state: number | undefined;
    constructor(rewardTokenCount?: number | undefined, placementDate?: number | undefined, typeId?: number | undefined, nextVulnerabilityDate?: number | undefined, state?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorStaticInformations extends DofusType {
    static id: number;
    id: number;
    callerId: number | undefined;
    guildIdentity: GuildInformations | undefined;
    firstNameId: number | undefined;
    lastNameId: number | undefined;
    constructor(callerId?: number | undefined, guildIdentity?: GuildInformations | undefined, firstNameId?: number | undefined, lastNameId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SkillActionDescription extends DofusType {
    static id: number;
    id: number;
    skillId: number | undefined;
    constructor(skillId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SkillActionDescriptionCraft extends SkillActionDescription {
    static id: number;
    id: number;
    probability: number | undefined;
    constructor(skillId?: number | undefined, probability?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobDescription extends DofusType {
    static id: number;
    id: number;
    jobId: number | undefined;
    skills: SkillActionDescription[] | undefined;
    constructor(jobId?: number | undefined, skills?: SkillActionDescription[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SkillActionDescriptionTimed extends SkillActionDescription {
    static id: number;
    id: number;
    time: number | undefined;
    constructor(skillId?: number | undefined, time?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SkillActionDescriptionCollect extends SkillActionDescriptionTimed {
    static id: number;
    id: number;
    max: number | undefined;
    min: number | undefined;
    constructor(skillId?: number | undefined, time?: number | undefined, max?: number | undefined, min?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameServerInformations extends DofusType {
    static id: number;
    id: number;
    date: number | undefined;
    charactersCount: number | undefined;
    type: number | undefined;
    id_: number | undefined;
    status: number | undefined;
    completion: number | undefined;
    charactersSlots: number | undefined;
    isMonoAccount: boolean | undefined;
    isSelectable: boolean | undefined;
    constructor(date?: number | undefined, charactersCount?: number | undefined, type?: number | undefined, id_?: number | undefined, status?: number | undefined, completion?: number | undefined, charactersSlots?: number | undefined, isMonoAccount?: boolean | undefined, isSelectable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockInformations extends DofusType {
    static id: number;
    id: number;
    maxItems: number | undefined;
    maxOutdoorMount: number | undefined;
    constructor(maxItems?: number | undefined, maxOutdoorMount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockInstancesInformations extends PaddockInformations {
    static id: number;
    id: number;
    paddocks: PaddockBuyableInformations[] | undefined;
    constructor(maxItems?: number | undefined, maxOutdoorMount?: number | undefined, paddocks?: PaddockBuyableInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockBuyableInformations extends DofusType {
    static id: number;
    id: number;
    locked: boolean | undefined;
    price: number | undefined;
    constructor(locked?: boolean | undefined, price?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayNpcQuestFlag extends DofusType {
    static id: number;
    id: number;
    questsToValidId: number[] | undefined;
    questsToStartId: number[] | undefined;
    constructor(questsToValidId?: number[] | undefined, questsToStartId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ItemDurability extends DofusType {
    static id: number;
    id: number;
    durabilityMax: number | undefined;
    durability: number | undefined;
    constructor(durabilityMax?: number | undefined, durability?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementAchieved extends DofusType {
    static id: number;
    id: number;
    achievedBy: number | undefined;
    id_: number | undefined;
    constructor(achievedBy?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementAchievedRewardable extends AchievementAchieved {
    static id: number;
    id: number;
    finishedlevel: number | undefined;
    constructor(achievedBy?: number | undefined, id_?: number | undefined, finishedlevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionOrnament extends HumanOption {
    static id: number;
    id: number;
    leagueId: number | undefined;
    ornamentId: number | undefined;
    ladderPosition: number | undefined;
    level: number | undefined;
    constructor(leagueId?: number | undefined, ornamentId?: number | undefined, ladderPosition?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionTitle extends HumanOption {
    static id: number;
    id: number;
    titleParam: string | undefined;
    titleId: number | undefined;
    constructor(titleParam?: string | undefined, titleId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountHouseInformations extends HouseInformations {
    static id: number;
    id: number;
    worldX: number | undefined;
    houseInfos: HouseInstanceInformations | undefined;
    worldY: number | undefined;
    mapId: number | undefined;
    subAreaId: number | undefined;
    constructor(modelId?: number | undefined, houseId?: number | undefined, worldX?: number | undefined, houseInfos?: HouseInstanceInformations | undefined, worldY?: number | undefined, mapId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseInformationsInside extends HouseInformations {
    static id: number;
    id: number;
    worldY: number | undefined;
    houseInfos: HouseInstanceInformations | undefined;
    worldX: number | undefined;
    constructor(modelId?: number | undefined, houseId?: number | undefined, worldY?: number | undefined, houseInfos?: HouseInstanceInformations | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActorAlignmentInformations extends DofusType {
    static id: number;
    id: number;
    characterPower: number | undefined;
    alignmentGrade: number | undefined;
    alignmentSide: number | undefined;
    alignmentValue: number | undefined;
    constructor(characterPower?: number | undefined, alignmentGrade?: number | undefined, alignmentSide?: number | undefined, alignmentValue?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PortalInformation extends DofusType {
    static id: number;
    id: number;
    areaId: number | undefined;
    portalId: number | undefined;
    constructor(areaId?: number | undefined, portalId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlliancePrismInformation extends PrismInformation {
    static id: number;
    id: number;
    alliance: AllianceInformations | undefined;
    constructor(rewardTokenCount?: number | undefined, placementDate?: number | undefined, typeId?: number | undefined, nextVulnerabilityDate?: number | undefined, state?: number | undefined, alliance?: AllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInsiderPrismInformation extends PrismInformation {
    static id: number;
    id: number;
    lastTimeSlotModificationAuthorGuildId: number | undefined;
    lastTimeSlotModificationAuthorId: number | undefined;
    lastTimeSlotModificationDate: number | undefined;
    lastTimeSlotModificationAuthorName: string | undefined;
    modulesObjects: ObjectItem[] | undefined;
    constructor(rewardTokenCount?: number | undefined, placementDate?: number | undefined, typeId?: number | undefined, nextVulnerabilityDate?: number | undefined, state?: number | undefined, lastTimeSlotModificationAuthorGuildId?: number | undefined, lastTimeSlotModificationAuthorId?: number | undefined, lastTimeSlotModificationDate?: number | undefined, lastTimeSlotModificationAuthorName?: string | undefined, modulesObjects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockContentInformations extends PaddockInformations {
    static id: number;
    id: number;
    abandonned: boolean | undefined;
    worldX: number | undefined;
    mountsInformations: MountInformationsForPaddock[] | undefined;
    paddockId: number | undefined;
    worldY: number | undefined;
    mapId: number | undefined;
    subAreaId: number | undefined;
    constructor(maxItems?: number | undefined, maxOutdoorMount?: number | undefined, abandonned?: boolean | undefined, worldX?: number | undefined, mountsInformations?: MountInformationsForPaddock[] | undefined, paddockId?: number | undefined, worldY?: number | undefined, mapId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMember extends CharacterMinimalInformations {
    static id: number;
    id: number;
    status: PlayerStatus | undefined;
    achievementPoints: number | undefined;
    givenExperience: number | undefined;
    rank: number | undefined;
    experienceGivenPercent: number | undefined;
    moodSmileyId: number | undefined;
    accountId: number | undefined;
    alignmentSide: number | undefined;
    rights: number | undefined;
    breed: number | undefined;
    connected: number | undefined;
    hoursSinceLastConnection: number | undefined;
    sex: boolean | undefined;
    havenBagShared: boolean | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, status?: PlayerStatus | undefined, achievementPoints?: number | undefined, givenExperience?: number | undefined, rank?: number | undefined, experienceGivenPercent?: number | undefined, moodSmileyId?: number | undefined, accountId?: number | undefined, alignmentSide?: number | undefined, rights?: number | undefined, breed?: number | undefined, connected?: number | undefined, hoursSinceLastConnection?: number | undefined, sex?: boolean | undefined, havenBagShared?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpellItem extends Item {
    static id: number;
    id: number;
    spellLevel: number | undefined;
    spellId: number | undefined;
    constructor(spellLevel?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ForgettableSpellItem extends SpellItem {
    static id: number;
    id: number;
    available: boolean | undefined;
    constructor(spellLevel?: number | undefined, spellId?: number | undefined, available?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerStatus extends DofusType {
    static id: number;
    id: number;
    statusId: number | undefined;
    constructor(statusId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HumanOptionGuild extends HumanOption {
    static id: number;
    id: number;
    guildInformations: GuildInformations | undefined;
    constructor(guildInformations?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class Version extends DofusType {
    static id: number;
    id: number;
    buildType: number | undefined;
    build: number | undefined;
    code: number | undefined;
    major: number | undefined;
    minor: number | undefined;
    constructor(buildType?: number | undefined, build?: number | undefined, code?: number | undefined, major?: number | undefined, minor?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemToSell extends Item {
    static id: number;
    id: number;
    effects: ObjectEffect[] | undefined;
    quantity: number | undefined;
    objectGID: number | undefined;
    objectUID: number | undefined;
    objectPrice: number | undefined;
    constructor(effects?: ObjectEffect[] | undefined, quantity?: number | undefined, objectGID?: number | undefined, objectUID?: number | undefined, objectPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemToSellInBid extends ObjectItemToSell {
    static id: number;
    id: number;
    unsoldDelay: number | undefined;
    constructor(effects?: ObjectEffect[] | undefined, quantity?: number | undefined, objectGID?: number | undefined, objectUID?: number | undefined, objectPrice?: number | undefined, unsoldDelay?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SellerBuyerDescriptor extends DofusType {
    static id: number;
    id: number;
    npcContextualId: number | undefined;
    maxItemPerAccount: number | undefined;
    types: number[] | undefined;
    quantities: number[] | undefined;
    taxPercentage: number | undefined;
    taxModificationPercentage: number | undefined;
    unsoldDelay: number | undefined;
    maxItemLevel: number | undefined;
    constructor(npcContextualId?: number | undefined, maxItemPerAccount?: number | undefined, types?: number[] | undefined, quantities?: number[] | undefined, taxPercentage?: number | undefined, taxModificationPercentage?: number | undefined, unsoldDelay?: number | undefined, maxItemLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightExternalInformations extends DofusType {
    static id: number;
    id: number;
    fightType: number | undefined;
    fightId: number | undefined;
    fightTeamsOptions: FightOptionsInformations[] | undefined;
    fightSpectatorLocked: boolean | undefined;
    fightStart: number | undefined;
    fightTeams: FightTeamLightInformations[] | undefined;
    constructor(fightType?: number | undefined, fightId?: number | undefined, fightTeamsOptions?: FightOptionsInformations[] | undefined, fightSpectatorLocked?: boolean | undefined, fightStart?: number | undefined, fightTeams?: FightTeamLightInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractPlayerSearchInformation extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerSearchTagInformation extends AbstractPlayerSearchInformation {
    static id: number;
    id: number;
    tag: AccountTagInformation | undefined;
    constructor(tag?: AccountTagInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorMovement extends DofusType {
    static id: number;
    id: number;
    playerName: string | undefined;
    movementType: number | undefined;
    playerId: number | undefined;
    basicInfos: TaxCollectorBasicInformations | undefined;
    constructor(playerName?: string | undefined, movementType?: number | undefined, playerId?: number | undefined, basicInfos?: TaxCollectorBasicInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseInformationsForGuild extends HouseInformations {
    static id: number;
    id: number;
    subAreaId: number | undefined;
    guildshareParams: number | undefined;
    mapId: number | undefined;
    secondHand: boolean | undefined;
    skillListIds: number[] | undefined;
    instanceId: number | undefined;
    worldY: number | undefined;
    ownerTag: AccountTagInformation | undefined;
    worldX: number | undefined;
    constructor(modelId?: number | undefined, houseId?: number | undefined, subAreaId?: number | undefined, guildshareParams?: number | undefined, mapId?: number | undefined, secondHand?: boolean | undefined, skillListIds?: number[] | undefined, instanceId?: number | undefined, worldY?: number | undefined, ownerTag?: AccountTagInformation | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractContactInformations extends DofusType {
    static id: number;
    id: number;
    accountId: number | undefined;
    accountTag: AccountTagInformation | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendInformations extends AbstractContactInformations {
    static id: number;
    id: number;
    ladderPosition: number | undefined;
    leagueId: number | undefined;
    achievementPoints: number | undefined;
    playerState: number | undefined;
    lastConnection: number | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined, ladderPosition?: number | undefined, leagueId?: number | undefined, achievementPoints?: number | undefined, playerState?: number | undefined, lastConnection?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendOnlineInformations extends FriendInformations {
    static id: number;
    id: number;
    level: number | undefined;
    playerId: number | undefined;
    breed: number | undefined;
    moodSmileyId: number | undefined;
    playerName: string | undefined;
    alignmentSide: number | undefined;
    status: PlayerStatus | undefined;
    guildInfo: GuildInformations | undefined;
    sex: boolean | undefined;
    havenBagShared: boolean | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined, ladderPosition?: number | undefined, leagueId?: number | undefined, achievementPoints?: number | undefined, playerState?: number | undefined, lastConnection?: number | undefined, level?: number | undefined, playerId?: number | undefined, breed?: number | undefined, moodSmileyId?: number | undefined, playerName?: string | undefined, alignmentSide?: number | undefined, status?: PlayerStatus | undefined, guildInfo?: GuildInformations | undefined, sex?: boolean | undefined, havenBagShared?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerStatusExtended extends PlayerStatus {
    static id: number;
    id: number;
    message: string | undefined;
    constructor(statusId?: number | undefined, message?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintanceInformation extends AbstractContactInformations {
    static id: number;
    id: number;
    playerState: number | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined, playerState?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintanceOnlineInformation extends AcquaintanceInformation {
    static id: number;
    id: number;
    moodSmileyId: number | undefined;
    status: PlayerStatus | undefined;
    playerId: number | undefined;
    playerName: string | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined, playerState?: number | undefined, moodSmileyId?: number | undefined, status?: PlayerStatus | undefined, playerId?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemGenericQuantity extends Item {
    static id: number;
    id: number;
    quantity: number | undefined;
    objectGID: number | undefined;
    constructor(quantity?: number | undefined, objectGID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountTagInformation extends DofusType {
    static id: number;
    id: number;
    tagNumber: string | undefined;
    nickname: string | undefined;
    constructor(tagNumber?: string | undefined, nickname?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredInformations extends AbstractContactInformations {
    static id: number;
    id: number;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredOnlineInformations extends IgnoredInformations {
    static id: number;
    id: number;
    playerId: number | undefined;
    sex: boolean | undefined;
    breed: number | undefined;
    playerName: string | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined, playerId?: number | undefined, sex?: boolean | undefined, breed?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorInformations extends DofusType {
    static id: number;
    id: number;
    additionalInfos: AdditionalTaxCollectorInformations | undefined;
    lastNameId: number | undefined;
    uniqueId: number | undefined;
    complements: TaxCollectorComplementaryInformations[] | undefined;
    firtNameId: number | undefined;
    worldX: number | undefined;
    worldY: number | undefined;
    state: number | undefined;
    subAreaId: number | undefined;
    look: EntityLook | undefined;
    constructor(additionalInfos?: AdditionalTaxCollectorInformations | undefined, lastNameId?: number | undefined, uniqueId?: number | undefined, complements?: TaxCollectorComplementaryInformations[] | undefined, firtNameId?: number | undefined, worldX?: number | undefined, worldY?: number | undefined, state?: number | undefined, subAreaId?: number | undefined, look?: EntityLook | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerSearchCharacterNameInformation extends AbstractPlayerSearchInformation {
    static id: number;
    id: number;
    name: string | undefined;
    constructor(name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFactSheetInformations extends GuildInformations {
    static id: number;
    id: number;
    leaderId: number | undefined;
    lastActivityDay: number | undefined;
    recruitment: GuildRecruitmentInformation | undefined;
    nbMembers: number | undefined;
    nbPendingApply: number | undefined;
    constructor(guildLevel?: number | undefined, guildId?: number | undefined, guildName?: string | undefined, guildEmblem?: GuildEmblem | undefined, leaderId?: number | undefined, lastActivityDay?: number | undefined, recruitment?: GuildRecruitmentInformation | undefined, nbMembers?: number | undefined, nbPendingApply?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicAllianceInformations extends AbstractSocialGroupInfos {
    static id: number;
    id: number;
    allianceTag: string | undefined;
    allianceId: number | undefined;
    constructor(allianceTag?: string | undefined, allianceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemQuantityPriceDateEffects extends ObjectItemGenericQuantity {
    static id: number;
    id: number;
    date: number | undefined;
    price: number | undefined;
    effects: ObjectEffects | undefined;
    constructor(quantity?: number | undefined, objectGID?: number | undefined, date?: number | undefined, price?: number | undefined, effects?: ObjectEffects | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderPlayer extends DofusType {
    static id: number;
    id: number;
    level: number | undefined;
    playerId: number | undefined;
    sex: boolean | undefined;
    breed: number | undefined;
    playerName: string | undefined;
    constructor(level?: number | undefined, playerId?: number | undefined, sex?: boolean | undefined, breed?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberInformations extends CharacterBaseInformations {
    static id: number;
    id: number;
    prospecting: number | undefined;
    lifePoints: number | undefined;
    subAreaId: number | undefined;
    maxLifePoints: number | undefined;
    mapId: number | undefined;
    entities: PartyEntityBaseInformation[] | undefined;
    alignmentSide: number | undefined;
    worldX: number | undefined;
    regenRate: number | undefined;
    worldY: number | undefined;
    initiative: number | undefined;
    status: PlayerStatus | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, sex?: boolean | undefined, prospecting?: number | undefined, lifePoints?: number | undefined, subAreaId?: number | undefined, maxLifePoints?: number | undefined, mapId?: number | undefined, entities?: PartyEntityBaseInformation[] | undefined, alignmentSide?: number | undefined, worldX?: number | undefined, regenRate?: number | undefined, worldY?: number | undefined, initiative?: number | undefined, status?: PlayerStatus | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberArenaInformations extends PartyMemberInformations {
    static id: number;
    id: number;
    rank: number | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, sex?: boolean | undefined, prospecting?: number | undefined, lifePoints?: number | undefined, subAreaId?: number | undefined, maxLifePoints?: number | undefined, mapId?: number | undefined, entities?: PartyEntityBaseInformation[] | undefined, alignmentSide?: number | undefined, worldX?: number | undefined, regenRate?: number | undefined, worldY?: number | undefined, initiative?: number | undefined, status?: PlayerStatus | undefined, rank?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyEntityBaseInformation extends DofusType {
    static id: number;
    id: number;
    entityLook: EntityLook | undefined;
    indexId: number | undefined;
    entityModelId: number | undefined;
    constructor(entityLook?: EntityLook | undefined, indexId?: number | undefined, entityModelId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationMemberInformations extends CharacterBaseInformations {
    static id: number;
    id: number;
    mapId: number | undefined;
    worldX: number | undefined;
    subAreaId: number | undefined;
    worldY: number | undefined;
    entities: PartyEntityBaseInformation[] | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, sex?: boolean | undefined, mapId?: number | undefined, worldX?: number | undefined, subAreaId?: number | undefined, worldY?: number | undefined, entities?: PartyEntityBaseInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyGuestInformations extends DofusType {
    static id: number;
    id: number;
    entities: PartyEntityBaseInformation[] | undefined;
    status: PlayerStatus | undefined;
    sex: boolean | undefined;
    hostId: number | undefined;
    guestId: number | undefined;
    name: string | undefined;
    guestLook: EntityLook | undefined;
    breed: number | undefined;
    constructor(entities?: PartyEntityBaseInformation[] | undefined, status?: PlayerStatus | undefined, sex?: boolean | undefined, hostId?: number | undefined, guestId?: number | undefined, name?: string | undefined, guestLook?: EntityLook | undefined, breed?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyEntityMemberInformation extends PartyEntityBaseInformation {
    static id: number;
    id: number;
    prospecting: number | undefined;
    regenRate: number | undefined;
    maxLifePoints: number | undefined;
    initiative: number | undefined;
    lifePoints: number | undefined;
    constructor(entityLook?: EntityLook | undefined, indexId?: number | undefined, entityModelId?: number | undefined, prospecting?: number | undefined, regenRate?: number | undefined, maxLifePoints?: number | undefined, initiative?: number | undefined, lifePoints?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInAllianceInformations extends GuildInformations {
    static id: number;
    id: number;
    joinDate: number | undefined;
    nbMembers: number | undefined;
    constructor(guildLevel?: number | undefined, guildId?: number | undefined, guildName?: string | undefined, guildEmblem?: GuildEmblem | undefined, joinDate?: number | undefined, nbMembers?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismSubareaEmptyInfo extends DofusType {
    static id: number;
    id: number;
    allianceId: number | undefined;
    subAreaId: number | undefined;
    constructor(allianceId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismGeolocalizedInformation extends PrismSubareaEmptyInfo {
    static id: number;
    id: number;
    prism: PrismInformation | undefined;
    worldX: number | undefined;
    mapId: number | undefined;
    worldY: number | undefined;
    constructor(allianceId?: number | undefined, subAreaId?: number | undefined, prism?: PrismInformation | undefined, worldX?: number | undefined, mapId?: number | undefined, worldY?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInsiderFactSheetInformations extends GuildFactSheetInformations {
    static id: number;
    id: number;
    nbTaxCollectors: number | undefined;
    leaderName: string | undefined;
    nbConnectedMembers: number | undefined;
    constructor(guildLevel?: number | undefined, guildId?: number | undefined, guildName?: string | undefined, guildEmblem?: GuildEmblem | undefined, leaderId?: number | undefined, lastActivityDay?: number | undefined, recruitment?: GuildRecruitmentInformation | undefined, nbMembers?: number | undefined, nbPendingApply?: number | undefined, nbTaxCollectors?: number | undefined, leaderName?: string | undefined, nbConnectedMembers?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTriggeredEffect extends AbstractFightDispellableEffect {
    static id: number;
    id: number;
    delay: number | undefined;
    param3: number | undefined;
    param1: number | undefined;
    param2: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined, delay?: number | undefined, param3?: number | undefined, param1?: number | undefined, param2?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect {
    static id: number;
    id: number;
    immuneSpellId: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined, immuneSpellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect {
    static id: number;
    id: number;
    weaponTypeId: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined, delta?: number | undefined, weaponTypeId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect {
    static id: number;
    id: number;
    stateId: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined, delta?: number | undefined, stateId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect {
    static id: number;
    id: number;
    boostedSpellId: number | undefined;
    constructor(parentBoostUid?: number | undefined, effectId?: number | undefined, targetId?: number | undefined, uid?: number | undefined, turnDuration?: number | undefined, spellId?: number | undefined, dispelable?: number | undefined, delta?: number | undefined, boostedSpellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FinishMoveInformations extends DofusType {
    static id: number;
    id: number;
    finishMoveState: boolean | undefined;
    finishMoveId: number | undefined;
    constructor(finishMoveState?: boolean | undefined, finishMoveId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightStartingPositions extends DofusType {
    static id: number;
    id: number;
    positionsForChallengers: number[] | undefined;
    positionsForDefenders: number[] | undefined;
    constructor(positionsForChallengers?: number[] | undefined, positionsForDefenders?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicNamedAllianceInformations extends BasicAllianceInformations {
    static id: number;
    id: number;
    allianceName: string | undefined;
    constructor(allianceTag?: string | undefined, allianceId?: number | undefined, allianceName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInformations extends BasicNamedAllianceInformations {
    static id: number;
    id: number;
    allianceEmblem: GuildEmblem | undefined;
    constructor(allianceTag?: string | undefined, allianceId?: number | undefined, allianceName?: string | undefined, allianceEmblem?: GuildEmblem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamMemberCharacterInformations extends FightTeamMemberInformations {
    static id: number;
    id: number;
    level: number | undefined;
    name: string | undefined;
    constructor(id_?: number | undefined, level?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations {
    static id: number;
    id: number;
    allianceInfos: BasicAllianceInformations | undefined;
    constructor(id_?: number | undefined, level?: number | undefined, name?: string | undefined, allianceInfos?: BasicAllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExtendedBreachBranch extends BreachBranch {
    static id: number;
    id: number;
    prize: number | undefined;
    rewards: BreachReward[] | undefined;
    modifier: number | undefined;
    constructor(monsters?: MonsterInGroupLightInformations[] | undefined, relativeScore?: number | undefined, room?: number | undefined, bosses?: MonsterInGroupLightInformations[] | undefined, map?: number | undefined, element?: number | undefined, score?: number | undefined, prize?: number | undefined, rewards?: BreachReward[] | undefined, modifier?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachReward extends DofusType {
    static id: number;
    id: number;
    id_: number | undefined;
    buyCriterion: string | undefined;
    remainingQty: number | undefined;
    buyLocks: number[] | undefined;
    price: number | undefined;
    constructor(id_?: number | undefined, buyCriterion?: string | undefined, remainingQty?: number | undefined, buyLocks?: number[] | undefined, price?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseGuildedInformations extends HouseInstanceInformations {
    static id: number;
    id: number;
    guildInfo: GuildInformations | undefined;
    constructor(price?: number | undefined, instanceId?: number | undefined, ownerTag?: AccountTagInformation | undefined, secondHand?: boolean | undefined, isLocked?: boolean | undefined, hasOwner?: boolean | undefined, isSaleLocked?: boolean | undefined, guildInfo?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightOptionsInformations extends DofusType {
    static id: number;
    id: number;
    isSecret: boolean | undefined;
    isRestrictedToPartyOnly: boolean | undefined;
    isClosed: boolean | undefined;
    isAskingForHelp: boolean | undefined;
    constructor(isSecret?: boolean | undefined, isRestrictedToPartyOnly?: boolean | undefined, isClosed?: boolean | undefined, isAskingForHelp?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations {
    static id: number;
    id: number;
    guildId: number | undefined;
    level: number | undefined;
    uid: number | undefined;
    firstNameId: number | undefined;
    lastNameId: number | undefined;
    constructor(id_?: number | undefined, guildId?: number | undefined, level?: number | undefined, uid?: number | undefined, firstNameId?: number | undefined, lastNameId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorStaticExtendedInformations extends TaxCollectorStaticInformations {
    static id: number;
    id: number;
    allianceIdentity: AllianceInformations | undefined;
    constructor(callerId?: number | undefined, guildIdentity?: GuildInformations | undefined, firstNameId?: number | undefined, lastNameId?: number | undefined, allianceIdentity?: AllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations {
    static id: number;
    id: number;
    npcId: number | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, npcId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultMutantListEntry extends FightResultFighterListEntry {
    static id: number;
    id: number;
    level: number | undefined;
    constructor(rewards?: FightLoot | undefined, outcome?: number | undefined, wave?: number | undefined, alive?: boolean | undefined, id_?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntStep extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntStepFight extends TreasureHuntStep {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapCoordinates extends DofusType {
    static id: number;
    id: number;
    worldY: number | undefined;
    worldX: number | undefined;
    constructor(worldY?: number | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSpouseInformations extends DofusType {
    static id: number;
    id: number;
    alignmentSide: number | undefined;
    spouseEntityLook: EntityLook | undefined;
    sex: number | undefined;
    spouseId: number | undefined;
    guildInfo: GuildInformations | undefined;
    spouseName: string | undefined;
    spouseLevel: number | undefined;
    spouseAccountId: number | undefined;
    breed: number | undefined;
    constructor(alignmentSide?: number | undefined, spouseEntityLook?: EntityLook | undefined, sex?: number | undefined, spouseId?: number | undefined, guildInfo?: GuildInformations | undefined, spouseName?: string | undefined, spouseLevel?: number | undefined, spouseAccountId?: number | undefined, breed?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSpouseOnlineInformations extends FriendSpouseInformations {
    static id: number;
    id: number;
    mapId: number | undefined;
    subAreaId: number | undefined;
    inFight: boolean | undefined;
    followSpouse: boolean | undefined;
    constructor(alignmentSide?: number | undefined, spouseEntityLook?: EntityLook | undefined, sex?: number | undefined, spouseId?: number | undefined, guildInfo?: GuildInformations | undefined, spouseName?: string | undefined, spouseLevel?: number | undefined, spouseAccountId?: number | undefined, breed?: number | undefined, mapId?: number | undefined, subAreaId?: number | undefined, inFight?: boolean | undefined, followSpouse?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterMinimalPlusLookAndGradeInformations extends CharacterMinimalPlusLookInformations {
    static id: number;
    id: number;
    grade: number | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, grade?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatisticData extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatisticDataShort extends StatisticData {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultAdditionalData extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultExperienceData extends FightResultAdditionalData {
    static id: number;
    id: number;
    rerollExperienceMul: number | undefined;
    experienceLevelFloor: number | undefined;
    experienceNextLevelFloor: number | undefined;
    experience: number | undefined;
    experienceFightDelta: number | undefined;
    experienceForGuild: number | undefined;
    experienceForMount: number | undefined;
    showExperience: boolean | undefined;
    showExperienceLevelFloor: boolean | undefined;
    showExperienceNextLevelFloor: boolean | undefined;
    showExperienceFightDelta: boolean | undefined;
    showExperienceForGuild: boolean | undefined;
    showExperienceForMount: boolean | undefined;
    isIncarnationExperience: boolean | undefined;
    constructor(rerollExperienceMul?: number | undefined, experienceLevelFloor?: number | undefined, experienceNextLevelFloor?: number | undefined, experience?: number | undefined, experienceFightDelta?: number | undefined, experienceForGuild?: number | undefined, experienceForMount?: number | undefined, showExperience?: boolean | undefined, showExperienceLevelFloor?: boolean | undefined, showExperienceNextLevelFloor?: boolean | undefined, showExperienceFightDelta?: boolean | undefined, showExperienceForGuild?: boolean | undefined, showExperienceForMount?: boolean | undefined, isIncarnationExperience?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectString extends ObjectEffect {
    static id: number;
    id: number;
    value: string | undefined;
    constructor(actionId?: number | undefined, value?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class Preset extends DofusType {
    static id: number;
    id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolsPreset extends Preset {
    static id: number;
    id: number;
    iconId: number | undefined;
    idolIds: number[] | undefined;
    constructor(id_?: number | undefined, iconId?: number | undefined, idolIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlliancedGuildFactSheetInformations extends GuildInformations {
    static id: number;
    id: number;
    allianceInfos: BasicNamedAllianceInformations | undefined;
    constructor(guildLevel?: number | undefined, guildId?: number | undefined, guildName?: string | undefined, guildEmblem?: GuildEmblem | undefined, allianceInfos?: BasicNamedAllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ForgettableSpellsPreset extends Preset {
    static id: number;
    id: number;
    baseSpellsPreset: SpellsPreset | undefined;
    forgettableSpells: SpellForPreset[] | undefined;
    constructor(id_?: number | undefined, baseSpellsPreset?: SpellsPreset | undefined, forgettableSpells?: SpellForPreset[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class Shortcut extends DofusType {
    static id: number;
    id: number;
    slot: number | undefined;
    constructor(slot?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutSpell extends Shortcut {
    static id: number;
    id: number;
    spellId: number | undefined;
    constructor(slot?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatisticDataByte extends StatisticData {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntStepDig extends TreasureHuntStep {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FullStatsPreset extends Preset {
    static id: number;
    id: number;
    stats: CharacterCharacteristicForPreset[] | undefined;
    constructor(id_?: number | undefined, stats?: CharacterCharacteristicForPreset[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveElementNamedSkill extends InteractiveElementSkill {
    static id: number;
    id: number;
    nameId: number | undefined;
    constructor(skillInstanceUid?: number | undefined, skillId?: number | undefined, nameId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightResultPvpData extends FightResultAdditionalData {
    static id: number;
    id: number;
    honorDelta: number | undefined;
    honor: number | undefined;
    maxHonorForGrade: number | undefined;
    grade: number | undefined;
    minHonorForGrade: number | undefined;
    constructor(honorDelta?: number | undefined, honor?: number | undefined, maxHonorForGrade?: number | undefined, grade?: number | undefined, minHonorForGrade?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep {
    static id: number;
    id: number;
    npcId: number | undefined;
    direction: number | undefined;
    constructor(npcId?: number | undefined, direction?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildVersatileInformations extends DofusType {
    static id: number;
    id: number;
    nbMembers: number | undefined;
    guildLevel: number | undefined;
    guildId: number | undefined;
    leaderId: number | undefined;
    constructor(nbMembers?: number | undefined, guildLevel?: number | undefined, guildId?: number | undefined, leaderId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInAllianceVersatileInformations extends GuildVersatileInformations {
    static id: number;
    id: number;
    allianceId: number | undefined;
    constructor(nbMembers?: number | undefined, guildLevel?: number | undefined, guildId?: number | undefined, leaderId?: number | undefined, allianceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutObject extends Shortcut {
    static id: number;
    id: number;
    constructor(slot?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectDice extends ObjectEffect {
    static id: number;
    id: number;
    diceConst: number | undefined;
    diceNum: number | undefined;
    diceSide: number | undefined;
    constructor(actionId?: number | undefined, diceConst?: number | undefined, diceNum?: number | undefined, diceSide?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectDate extends ObjectEffect {
    static id: number;
    id: number;
    hour: number | undefined;
    year: number | undefined;
    minute: number | undefined;
    day: number | undefined;
    month: number | undefined;
    constructor(actionId?: number | undefined, hour?: number | undefined, year?: number | undefined, minute?: number | undefined, day?: number | undefined, month?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateMountCharacteristic extends DofusType {
    static id: number;
    id: number;
    type: number | undefined;
    constructor(type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateMountIntegerCharacteristic extends UpdateMountCharacteristic {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(type?: number | undefined, value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutObjectItem extends ShortcutObject {
    static id: number;
    id: number;
    itemGID: number | undefined;
    itemUID: number | undefined;
    constructor(slot?: number | undefined, itemGID?: number | undefined, itemUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestObjectiveInformations extends DofusType {
    static id: number;
    id: number;
    dialogParams: string[] | undefined;
    objectiveId: number | undefined;
    objectiveStatus: boolean | undefined;
    constructor(dialogParams?: string[] | undefined, objectiveId?: number | undefined, objectiveStatus?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations {
    static id: number;
    id: number;
    maxCompletion: number | undefined;
    curCompletion: number | undefined;
    constructor(dialogParams?: string[] | undefined, objectiveId?: number | undefined, objectiveStatus?: boolean | undefined, maxCompletion?: number | undefined, curCompletion?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamMemberEntityInformation extends FightTeamMemberInformations {
    static id: number;
    id: number;
    entityModelId: number | undefined;
    masterId: number | undefined;
    level: number | undefined;
    constructor(id_?: number | undefined, entityModelId?: number | undefined, masterId?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateMountBooleanCharacteristic extends UpdateMountCharacteristic {
    static id: number;
    id: number;
    value: boolean | undefined;
    constructor(type?: number | undefined, value?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations {
    static id: number;
    id: number;
    guild: BasicGuildInformations | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, guild?: BasicGuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterMinimalAllianceInformations extends CharacterMinimalGuildInformations {
    static id: number;
    id: number;
    alliance: BasicAllianceInformations | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, guild?: BasicGuildInformations | undefined, alliance?: BasicAllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ItemsPreset extends Preset {
    static id: number;
    id: number;
    look: EntityLook | undefined;
    items: ItemForPreset[] | undefined;
    mountEquipped: boolean | undefined;
    constructor(id_?: number | undefined, look?: EntityLook | undefined, items?: ItemForPreset[] | undefined, mountEquipped?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSessionConstant extends DofusType {
    static id: number;
    id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSessionConstantInteger extends ServerSessionConstant {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(id_?: number | undefined, value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutEmote extends Shortcut {
    static id: number;
    id: number;
    emoteId: number | undefined;
    constructor(slot?: number | undefined, emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorComplementaryInformations extends DofusType {
    static id: number;
    id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations {
    static id: number;
    id: number;
    itemsValue: number | undefined;
    pods: number | undefined;
    kamas: number | undefined;
    experience: number | undefined;
    constructor(itemsValue?: number | undefined, pods?: number | undefined, kamas?: number | undefined, experience?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapCoordinatesAndId extends MapCoordinates {
    static id: number;
    id: number;
    mapId: number | undefined;
    constructor(worldY?: number | undefined, worldX?: number | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntitiesPreset extends Preset {
    static id: number;
    id: number;
    iconId: number | undefined;
    entityIds: number[] | undefined;
    constructor(id_?: number | undefined, iconId?: number | undefined, entityIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DebtInformation extends DofusType {
    static id: number;
    id: number;
    timestamp: number | undefined;
    id_: number | undefined;
    constructor(timestamp?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockGuildedInformations extends PaddockBuyableInformations {
    static id: number;
    id: number;
    deserted: boolean | undefined;
    guildInfo: GuildInformations | undefined;
    constructor(locked?: boolean | undefined, price?: number | undefined, deserted?: boolean | undefined, guildInfo?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class KamaDebtInformation extends DebtInformation {
    static id: number;
    id: number;
    kamas: number | undefined;
    constructor(timestamp?: number | undefined, id_?: number | undefined, kamas?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatisticDataString extends StatisticData {
    static id: number;
    id: number;
    value: string | undefined;
    constructor(value?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetsContainerPreset extends Preset {
    static id: number;
    id: number;
    presets: Preset[] | undefined;
    constructor(id_?: number | undefined, presets?: Preset[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IconNamedPreset extends PresetsContainerPreset {
    static id: number;
    id: number;
    name: string | undefined;
    iconId: number | undefined;
    constructor(id_?: number | undefined, presets?: Preset[] | undefined, name?: string | undefined, iconId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSessionConstantString extends ServerSessionConstant {
    static id: number;
    id: number;
    value: string | undefined;
    constructor(id_?: number | undefined, value?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestActiveDetailedInformations extends QuestActiveInformations {
    static id: number;
    id: number;
    stepId: number | undefined;
    objectives: QuestObjectiveInformations[] | undefined;
    constructor(questId?: number | undefined, stepId?: number | undefined, objectives?: QuestObjectiveInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutEntitiesPreset extends Shortcut {
    static id: number;
    id: number;
    presetId: number | undefined;
    constructor(slot?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectCreature extends ObjectEffect {
    static id: number;
    id: number;
    monsterFamilyId: number | undefined;
    constructor(actionId?: number | undefined, monsterFamilyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectLadder extends ObjectEffectCreature {
    static id: number;
    id: number;
    monsterCount: number | undefined;
    constructor(actionId?: number | undefined, monsterFamilyId?: number | undefined, monsterCount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamMemberMonsterInformations extends FightTeamMemberInformations {
    static id: number;
    id: number;
    grade: number | undefined;
    monsterId: number | undefined;
    constructor(id_?: number | undefined, grade?: number | undefined, monsterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutObjectIdolsPreset extends ShortcutObject {
    static id: number;
    id: number;
    presetId: number | undefined;
    constructor(slot?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutObjectPreset extends ShortcutObject {
    static id: number;
    id: number;
    presetId: number | undefined;
    constructor(slot?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorGuildInformations extends TaxCollectorComplementaryInformations {
    static id: number;
    id: number;
    guild: BasicGuildInformations | undefined;
    constructor(guild?: BasicGuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations {
    static id: number;
    id: number;
    waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo | undefined;
    constructor(waitingForHelpInfo?: ProtectedEntityWaitingForHelpInfo | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatsPreset extends Preset {
    static id: number;
    id: number;
    stats: SimpleCharacterCharacteristicForPreset[] | undefined;
    constructor(id_?: number | undefined, stats?: SimpleCharacterCharacteristicForPreset[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectDuration extends ObjectEffect {
    static id: number;
    id: number;
    minutes: number | undefined;
    days: number | undefined;
    hours: number | undefined;
    constructor(actionId?: number | undefined, minutes?: number | undefined, days?: number | undefined, hours?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterLightInformations extends DofusType {
    static id: number;
    id: number;
    wave: number | undefined;
    id_: number | undefined;
    level: number | undefined;
    breed: number | undefined;
    sex: boolean | undefined;
    alive: boolean | undefined;
    constructor(wave?: number | undefined, id_?: number | undefined, level?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, alive?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations {
    static id: number;
    id: number;
    creatureGenericId: number | undefined;
    constructor(wave?: number | undefined, id_?: number | undefined, level?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, alive?: boolean | undefined, creatureGenericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterTaxCollectorLightInformations extends GameFightFighterLightInformations {
    static id: number;
    id: number;
    lastNameId: number | undefined;
    firstNameId: number | undefined;
    constructor(wave?: number | undefined, id_?: number | undefined, level?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, alive?: boolean | undefined, lastNameId?: number | undefined, firstNameId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightAllianceTeamInformations extends FightTeamInformations {
    static id: number;
    id: number;
    relation: number | undefined;
    constructor(nbWaves?: number | undefined, teamId?: number | undefined, teamTypeId?: number | undefined, teamSide?: number | undefined, leaderId?: number | undefined, teamMembers?: FightTeamMemberInformations[] | undefined, relation?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterHardcoreOrEpicInformations extends CharacterBaseInformations {
    static id: number;
    id: number;
    deathMaxLevel: number | undefined;
    deathState: number | undefined;
    deathCount: number | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, entityLook?: EntityLook | undefined, breed?: number | undefined, sex?: boolean | undefined, deathMaxLevel?: number | undefined, deathState?: number | undefined, deathCount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterEntityLightInformation extends GameFightFighterLightInformations {
    static id: number;
    id: number;
    masterId: number | undefined;
    entityModelId: number | undefined;
    constructor(wave?: number | undefined, id_?: number | undefined, level?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, alive?: boolean | undefined, masterId?: number | undefined, entityModelId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSessionConstantLong extends ServerSessionConstant {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(id_?: number | undefined, value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveElementWithAgeBonus extends InteractiveElement {
    static id: number;
    id: number;
    ageBonus: number | undefined;
    constructor(elementTypeId?: number | undefined, elementId?: number | undefined, disabledSkills?: InteractiveElementSkill[] | undefined, enabledSkills?: InteractiveElementSkill[] | undefined, onCurrentMap?: boolean | undefined, ageBonus?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatisticDataInt extends StatisticData {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceFactSheetInformations extends AllianceInformations {
    static id: number;
    id: number;
    creationDate: number | undefined;
    constructor(allianceTag?: string | undefined, allianceId?: number | undefined, allianceName?: string | undefined, allianceEmblem?: GuildEmblem | undefined, creationDate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations {
    static id: number;
    id: number;
    name: string | undefined;
    constructor(wave?: number | undefined, id_?: number | undefined, level?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, alive?: boolean | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep {
    static id: number;
    id: number;
    poiLabelId: number | undefined;
    direction: number | undefined;
    constructor(poiLabelId?: number | undefined, direction?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatisticDataBoolean extends StatisticData {
    static id: number;
    id: number;
    value: boolean | undefined;
    constructor(value?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExtendedLockedBreachBranch extends ExtendedBreachBranch {
    static id: number;
    id: number;
    unlockPrice: number | undefined;
    constructor(monsters?: MonsterInGroupLightInformations[] | undefined, relativeScore?: number | undefined, room?: number | undefined, bosses?: MonsterInGroupLightInformations[] | undefined, map?: number | undefined, element?: number | undefined, score?: number | undefined, prize?: number | undefined, rewards?: BreachReward[] | undefined, modifier?: number | undefined, unlockPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyIdol extends Idol {
    static id: number;
    id: number;
    ownersIds: number[] | undefined;
    constructor(dropBonusPercent?: number | undefined, id_?: number | undefined, xpBonusPercent?: number | undefined, ownersIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations {
    static id: number;
    id: number;
    alignmentInfos: ActorAlignmentInformations | undefined;
    constructor(contextualId?: number | undefined, disposition?: EntityDispositionInformations | undefined, look?: EntityLook | undefined, wave?: number | undefined, spawnInfo?: GameContextBasicSpawnInformation | undefined, previousPositions?: number[] | undefined, stats?: GameFightCharacteristics | undefined, creatureLevel?: number | undefined, creatureGenericId?: number | undefined, creatureGrade?: number | undefined, alignmentInfos?: ActorAlignmentInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapCoordinatesExtended extends MapCoordinatesAndId {
    static id: number;
    id: number;
    subAreaId: number | undefined;
    constructor(worldY?: number | undefined, worldX?: number | undefined, mapId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntStepFollowDirection extends TreasureHuntStep {
    static id: number;
    id: number;
    mapCount: number | undefined;
    direction: number | undefined;
    constructor(mapCount?: number | undefined, direction?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutSmiley extends Shortcut {
    static id: number;
    id: number;
    smileyId: number | undefined;
    constructor(slot?: number | undefined, smileyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectMinMax extends ObjectEffect {
    static id: number;
    id: number;
    max: number | undefined;
    min: number | undefined;
    constructor(actionId?: number | undefined, max?: number | undefined, min?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpellsPreset extends Preset {
    static id: number;
    id: number;
    spells: SpellForPreset[] | undefined;
    constructor(id_?: number | undefined, spells?: SpellForPreset[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffectMount extends ObjectEffect {
    static id: number;
    id: number;
    owner: string | undefined;
    id_: number | undefined;
    capacities: number[] | undefined;
    expirationDate: number | undefined;
    name: string | undefined;
    model: number | undefined;
    level: number | undefined;
    effects: ObjectEffectInteger[] | undefined;
    reproductionCountMax: number | undefined;
    reproductionCount: number | undefined;
    sex: boolean | undefined;
    isRideable: boolean | undefined;
    isFeconded: boolean | undefined;
    isFecondationReady: boolean | undefined;
    constructor(actionId?: number | undefined, owner?: string | undefined, id_?: number | undefined, capacities?: number[] | undefined, expirationDate?: number | undefined, name?: string | undefined, model?: number | undefined, level?: number | undefined, effects?: ObjectEffectInteger[] | undefined, reproductionCountMax?: number | undefined, reproductionCount?: number | undefined, sex?: boolean | undefined, isRideable?: boolean | undefined, isFeconded?: boolean | undefined, isFecondationReady?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ItemForPreset extends DofusType {
    static id: number;
    id: number;
    position: number | undefined;
    objUid: number | undefined;
    objGid: number | undefined;
    constructor(position?: number | undefined, objUid?: number | undefined, objGid?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActorExtendedAlignmentInformations extends ActorAlignmentInformations {
    static id: number;
    id: number;
    aggressable: number | undefined;
    honorNextGradeFloor: number | undefined;
    honor: number | undefined;
    honorGradeFloor: number | undefined;
    constructor(characterPower?: number | undefined, alignmentGrade?: number | undefined, alignmentSide?: number | undefined, alignmentValue?: number | undefined, aggressable?: number | undefined, honorNextGradeFloor?: number | undefined, honor?: number | undefined, honorGradeFloor?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ApplicationPlayerInformation extends DofusType {
    static id: number;
    id: number;
    accountTag: string | undefined;
    playerName: string | undefined;
    accountId: number | undefined;
    breed: number | undefined;
    status: PlayerStatus | undefined;
    sex: boolean | undefined;
    accountNickname: string | undefined;
    playerId: number | undefined;
    level: number | undefined;
    constructor(accountTag?: string | undefined, playerName?: string | undefined, accountId?: number | undefined, breed?: number | undefined, status?: PlayerStatus | undefined, sex?: boolean | undefined, accountNickname?: string | undefined, playerId?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildEmblem extends DofusType {
    static id: number;
    id: number;
    backgroundColor: number | undefined;
    backgroundShape: number | undefined;
    symbolShape: number | undefined;
    symbolColor: number | undefined;
    constructor(backgroundColor?: number | undefined, backgroundShape?: number | undefined, symbolShape?: number | undefined, symbolColor?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountClientData extends DofusType {
    static id: number;
    id: number;
    effectList: ObjectEffectInteger[] | undefined;
    boostLimiter: number | undefined;
    fecondationTime: number | undefined;
    loveMax: number | undefined;
    level: number | undefined;
    experienceForNextLevel: number | undefined;
    harnessGID: number | undefined;
    reproductionCountMax: number | undefined;
    model: number | undefined;
    maxPods: number | undefined;
    boostMax: number | undefined;
    serenity: number | undefined;
    energy: number | undefined;
    name: string | undefined;
    id_: number | undefined;
    ancestor: number[] | undefined;
    experienceForLevel: number | undefined;
    ownerId: number | undefined;
    stamina: number | undefined;
    love: number | undefined;
    experience: number | undefined;
    staminaMax: number | undefined;
    behaviors: number[] | undefined;
    maturity: number | undefined;
    reproductionCount: number | undefined;
    maturityForAdult: number | undefined;
    energyMax: number | undefined;
    aggressivityMax: number | undefined;
    serenityMax: number | undefined;
    sex: boolean | undefined;
    isRideable: boolean | undefined;
    isWild: boolean | undefined;
    isFecondationReady: boolean | undefined;
    useHarnessColors: boolean | undefined;
    constructor(effectList?: ObjectEffectInteger[] | undefined, boostLimiter?: number | undefined, fecondationTime?: number | undefined, loveMax?: number | undefined, level?: number | undefined, experienceForNextLevel?: number | undefined, harnessGID?: number | undefined, reproductionCountMax?: number | undefined, model?: number | undefined, maxPods?: number | undefined, boostMax?: number | undefined, serenity?: number | undefined, energy?: number | undefined, name?: string | undefined, id_?: number | undefined, ancestor?: number[] | undefined, experienceForLevel?: number | undefined, ownerId?: number | undefined, stamina?: number | undefined, love?: number | undefined, experience?: number | undefined, staminaMax?: number | undefined, behaviors?: number[] | undefined, maturity?: number | undefined, reproductionCount?: number | undefined, maturityForAdult?: number | undefined, energyMax?: number | undefined, aggressivityMax?: number | undefined, serenityMax?: number | undefined, sex?: boolean | undefined, isRideable?: boolean | undefined, isWild?: boolean | undefined, isFecondationReady?: boolean | undefined, useHarnessColors?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightLoot extends DofusType {
    static id: number;
    id: number;
    objects: number[] | undefined;
    kamas: number | undefined;
    constructor(objects?: number[] | undefined, kamas?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntFlag extends DofusType {
    static id: number;
    id: number;
    state: number | undefined;
    mapId: number | undefined;
    constructor(state?: number | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemMinimalInformation extends Item {
    static id: number;
    id: number;
    objectGID: number | undefined;
    effects: ObjectEffect[] | undefined;
    constructor(objectGID?: number | undefined, effects?: ObjectEffect[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemInformationWithQuantity extends ObjectItemMinimalInformation {
    static id: number;
    id: number;
    quantity: number | undefined;
    constructor(objectGID?: number | undefined, effects?: ObjectEffect[] | undefined, quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionAddObject extends DofusType {
    static id: number;
    id: number;
    items: ObjectItemInformationWithQuantity[] | undefined;
    title: string | undefined;
    uid: number | undefined;
    text: string | undefined;
    pictureUrl: string | undefined;
    descUrl: string | undefined;
    constructor(items?: ObjectItemInformationWithQuantity[] | undefined, title?: string | undefined, uid?: number | undefined, text?: string | undefined, pictureUrl?: string | undefined, descUrl?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterRemodelingInformation extends AbstractCharacterInformation {
    static id: number;
    id: number;
    breed: number | undefined;
    sex: boolean | undefined;
    cosmeticId: number | undefined;
    name: string | undefined;
    colors: number[] | undefined;
    constructor(id_?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, cosmeticId?: number | undefined, name?: string | undefined, colors?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterToRemodelInformations extends CharacterRemodelingInformation {
    static id: number;
    id: number;
    mandatoryChangeMask: number | undefined;
    possibleChangeMask: number | undefined;
    constructor(id_?: number | undefined, breed?: number | undefined, sex?: boolean | undefined, cosmeticId?: number | undefined, name?: string | undefined, colors?: number[] | undefined, mandatoryChangeMask?: number | undefined, possibleChangeMask?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RemodelingInformation extends DofusType {
    static id: number;
    id: number;
    breed: number | undefined;
    sex: boolean | undefined;
    cosmeticId: number | undefined;
    name: string | undefined;
    colors: number[] | undefined;
    constructor(breed?: number | undefined, sex?: boolean | undefined, cosmeticId?: number | undefined, name?: string | undefined, colors?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCharacteristics extends DofusType {
    static id: number;
    id: number;
    characteristics: CharacterCharacteristic[] | undefined;
    constructor(characteristics?: CharacterCharacteristic[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SimpleCharacterCharacteristicForPreset extends DofusType {
    static id: number;
    id: number;
    additionnal: number | undefined;
    keyword: string | undefined;
    base: number | undefined;
    constructor(additionnal?: number | undefined, keyword?: string | undefined, base?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCharacteristicForPreset extends SimpleCharacterCharacteristicForPreset {
    static id: number;
    id: number;
    stuff: number | undefined;
    constructor(additionnal?: number | undefined, keyword?: string | undefined, base?: number | undefined, stuff?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpellForPreset extends DofusType {
    static id: number;
    id: number;
    spellId: number | undefined;
    shortcuts: number[] | undefined;
    constructor(spellId?: number | undefined, shortcuts?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class Achievement extends DofusType {
    static id: number;
    id: number;
    startedObjectives: AchievementStartedObjective[] | undefined;
    id_: number | undefined;
    finishedObjective: AchievementObjective[] | undefined;
    constructor(startedObjectives?: AchievementStartedObjective[] | undefined, id_?: number | undefined, finishedObjective?: AchievementObjective[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemNotInContainer extends Item {
    static id: number;
    id: number;
    objectUID: number | undefined;
    objectGID: number | undefined;
    quantity: number | undefined;
    effects: ObjectEffect[] | undefined;
    constructor(objectUID?: number | undefined, objectGID?: number | undefined, quantity?: number | undefined, effects?: ObjectEffect[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorFightersInformation extends DofusType {
    static id: number;
    id: number;
    enemyCharactersInformations: CharacterMinimalPlusLookInformations[] | undefined;
    collectorId: number | undefined;
    allyCharactersInformations: CharacterMinimalPlusLookInformations[] | undefined;
    constructor(enemyCharactersInformations?: CharacterMinimalPlusLookInformations[] | undefined, collectorId?: number | undefined, allyCharactersInformations?: CharacterMinimalPlusLookInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportDestination extends DofusType {
    static id: number;
    id: number;
    cost: number | undefined;
    level: number | undefined;
    subAreaId: number | undefined;
    type: number | undefined;
    mapId: number | undefined;
    constructor(cost?: number | undefined, level?: number | undefined, subAreaId?: number | undefined, type?: number | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MonsterBoosts extends DofusType {
    static id: number;
    id: number;
    dropBoost: number | undefined;
    id_: number | undefined;
    xpBoost: number | undefined;
    constructor(dropBoost?: number | undefined, id_?: number | undefined, xpBoost?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DecraftedItemStackInfo extends DofusType {
    static id: number;
    id: number;
    bonusMin: number | undefined;
    runesQty: number[] | undefined;
    objectUID: number | undefined;
    bonusMax: number | undefined;
    runesId: number[] | undefined;
    constructor(bonusMin?: number | undefined, runesQty?: number[] | undefined, objectUID?: number | undefined, bonusMax?: number | undefined, runesId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorBasicInformations extends DofusType {
    static id: number;
    id: number;
    subAreaId: number | undefined;
    lastNameId: number | undefined;
    worldY: number | undefined;
    firstNameId: number | undefined;
    mapId: number | undefined;
    worldX: number | undefined;
    constructor(subAreaId?: number | undefined, lastNameId?: number | undefined, worldY?: number | undefined, firstNameId?: number | undefined, mapId?: number | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberGeoPosition extends DofusType {
    static id: number;
    id: number;
    mapId: number | undefined;
    worldY: number | undefined;
    subAreaId: number | undefined;
    memberId: number | undefined;
    worldX: number | undefined;
    constructor(mapId?: number | undefined, worldY?: number | undefined, subAreaId?: number | undefined, memberId?: number | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation {
    static id: number;
    id: number;
    buyCriterion: string | undefined;
    objectPrice: number | undefined;
    constructor(objectGID?: number | undefined, effects?: ObjectEffect[] | undefined, buyCriterion?: string | undefined, objectPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryEntryPlayerInfo extends DofusType {
    static id: number;
    id: number;
    status: PlayerStatus | undefined;
    playerId: number | undefined;
    isInWorkshop: boolean | undefined;
    canCraftLegendary: boolean | undefined;
    subAreaId: number | undefined;
    sex: boolean | undefined;
    alignmentSide: number | undefined;
    playerName: string | undefined;
    worldX: number | undefined;
    worldY: number | undefined;
    breed: number | undefined;
    mapId: number | undefined;
    constructor(status?: PlayerStatus | undefined, playerId?: number | undefined, isInWorkshop?: boolean | undefined, canCraftLegendary?: boolean | undefined, subAreaId?: number | undefined, sex?: boolean | undefined, alignmentSide?: number | undefined, playerName?: string | undefined, worldX?: number | undefined, worldY?: number | undefined, breed?: number | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryEntryJobInfo extends DofusType {
    static id: number;
    id: number;
    minLevel: number | undefined;
    free: boolean | undefined;
    jobId: number | undefined;
    jobLevel: number | undefined;
    constructor(minLevel?: number | undefined, free?: boolean | undefined, jobId?: number | undefined, jobLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryListEntry extends DofusType {
    static id: number;
    id: number;
    playerInfo: JobCrafterDirectoryEntryPlayerInfo | undefined;
    jobInfo: JobCrafterDirectoryEntryJobInfo | undefined;
    constructor(playerInfo?: JobCrafterDirectoryEntryPlayerInfo | undefined, jobInfo?: JobCrafterDirectoryEntryJobInfo | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectorySettings extends DofusType {
    static id: number;
    id: number;
    free: boolean | undefined;
    jobId: number | undefined;
    minLevel: number | undefined;
    constructor(free?: boolean | undefined, jobId?: number | undefined, minLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LeagueFriendInformations extends AbstractContactInformations {
    static id: number;
    id: number;
    totalLeaguePoints: number | undefined;
    leagueId: number | undefined;
    ladderPosition: number | undefined;
    playerName: string | undefined;
    breed: number | undefined;
    sex: boolean | undefined;
    playerId: number | undefined;
    level: number | undefined;
    constructor(accountId?: number | undefined, accountTag?: AccountTagInformation | undefined, totalLeaguePoints?: number | undefined, leagueId?: number | undefined, ladderPosition?: number | undefined, playerName?: string | undefined, breed?: number | undefined, sex?: boolean | undefined, playerId?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ArenaRankInfos extends DofusType {
    static id: number;
    id: number;
    leagueRanking: ArenaLeagueRanking | undefined;
    ranking: ArenaRanking | undefined;
    victoryCount: number | undefined;
    fightcount: number | undefined;
    numFightNeededForLadder: number | undefined;
    constructor(leagueRanking?: ArenaLeagueRanking | undefined, ranking?: ArenaRanking | undefined, victoryCount?: number | undefined, fightcount?: number | undefined, numFightNeededForLadder?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobExperience extends DofusType {
    static id: number;
    id: number;
    jobXpNextLevelFloor: number | undefined;
    jobId: number | undefined;
    jobXpLevelFloor: number | undefined;
    jobXP: number | undefined;
    jobLevel: number | undefined;
    constructor(jobXpNextLevelFloor?: number | undefined, jobId?: number | undefined, jobXpLevelFloor?: number | undefined, jobXP?: number | undefined, jobLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceVersatileInformations extends DofusType {
    static id: number;
    id: number;
    nbSubarea: number | undefined;
    nbMembers: number | undefined;
    allianceId: number | undefined;
    nbGuilds: number | undefined;
    constructor(nbSubarea?: number | undefined, nbMembers?: number | undefined, allianceId?: number | undefined, nbGuilds?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightersInformation extends DofusType {
    static id: number;
    id: number;
    allyCharactersInformations: CharacterMinimalPlusLookInformations[] | undefined;
    enemyCharactersInformations: CharacterMinimalPlusLookInformations[] | undefined;
    waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo | undefined;
    subAreaId: number | undefined;
    constructor(allyCharactersInformations?: CharacterMinimalPlusLookInformations[] | undefined, enemyCharactersInformations?: CharacterMinimalPlusLookInformations[] | undefined, waitingForHelpInfo?: ProtectedEntityWaitingForHelpInfo | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagFurnitureInformation extends DofusType {
    static id: number;
    id: number;
    cellId: number | undefined;
    orientation: number | undefined;
    funitureId: number | undefined;
    constructor(cellId?: number | undefined, orientation?: number | undefined, funitureId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BufferInformation extends DofusType {
    static id: number;
    id: number;
    amount: number | undefined;
    id_: number | undefined;
    constructor(amount?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AnomalySubareaInformation extends DofusType {
    static id: number;
    id: number;
    anomalyClosingTime: number | undefined;
    hasAnomaly: boolean | undefined;
    subAreaId: number | undefined;
    rewardRate: number | undefined;
    constructor(anomalyClosingTime?: number | undefined, hasAnomaly?: boolean | undefined, subAreaId?: number | undefined, rewardRate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockInformationsForSell extends DofusType {
    static id: number;
    id: number;
    nbObject: number | undefined;
    worldX: number | undefined;
    worldY: number | undefined;
    price: number | undefined;
    guildOwner: string | undefined;
    nbMount: number | undefined;
    subAreaId: number | undefined;
    constructor(nbObject?: number | undefined, worldX?: number | undefined, worldY?: number | undefined, price?: number | undefined, guildOwner?: string | undefined, nbMount?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterMinimalGuildPublicInformations extends CharacterMinimalInformations {
    static id: number;
    id: number;
    rank: number | undefined;
    constructor(id_?: number | undefined, name?: string | undefined, level?: number | undefined, rank?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntityInformation extends DofusType {
    static id: number;
    id: number;
    status: boolean | undefined;
    id_: number | undefined;
    experience: number | undefined;
    constructor(status?: boolean | undefined, id_?: number | undefined, experience?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentWarEffortInformation extends DofusType {
    static id: number;
    id: number;
    alignmentWarEffort: number | undefined;
    alignmentSide: number | undefined;
    constructor(alignmentWarEffort?: number | undefined, alignmentSide?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RecycledItem extends DofusType {
    static id: number;
    id: number;
    qty: number | undefined;
    id_: number | undefined;
    constructor(qty?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseInformationsForSell extends DofusType {
    static id: number;
    id: number;
    skillListIds: number[] | undefined;
    ownerTag: AccountTagInformation | undefined;
    price: number | undefined;
    isLocked: boolean | undefined;
    modelId: number | undefined;
    nbRoom: number | undefined;
    secondHand: boolean | undefined;
    worldX: number | undefined;
    ownerCharacterName: string | undefined;
    worldY: number | undefined;
    hasOwner: boolean | undefined;
    instanceId: number | undefined;
    nbChest: number | undefined;
    subAreaId: number | undefined;
    constructor(skillListIds?: number[] | undefined, ownerTag?: AccountTagInformation | undefined, price?: number | undefined, isLocked?: boolean | undefined, modelId?: number | undefined, nbRoom?: number | undefined, secondHand?: boolean | undefined, worldX?: number | undefined, ownerCharacterName?: string | undefined, worldY?: number | undefined, hasOwner?: boolean | undefined, instanceId?: number | undefined, nbChest?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobBookSubscription extends DofusType {
    static id: number;
    id: number;
    subscribed: boolean | undefined;
    jobId: number | undefined;
    constructor(subscribed?: boolean | undefined, jobId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GoldItem extends Item {
    static id: number;
    id: number;
    sum: number | undefined;
    constructor(sum?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildRecruitmentInformation extends DofusType {
    static id: number;
    id: number;
    lastEditDate: number | undefined;
    lastEditPlayerName: string | undefined;
    recruitmentText: string | undefined;
    guildId: number | undefined;
    recruitmentType: number | undefined;
    recruitmentTitle: string | undefined;
    selectedCriterion: number[] | undefined;
    minLevel: number | undefined;
    minSuccess: number | undefined;
    selectedLanguages: number[] | undefined;
    minLevelFacultative: boolean | undefined;
    minSuccessFacultative: boolean | undefined;
    invalidatedByModeration: boolean | undefined;
    recruitmentAutoLocked: boolean | undefined;
    constructor(lastEditDate?: number | undefined, lastEditPlayerName?: string | undefined, recruitmentText?: string | undefined, guildId?: number | undefined, recruitmentType?: number | undefined, recruitmentTitle?: string | undefined, selectedCriterion?: number[] | undefined, minLevel?: number | undefined, minSuccess?: number | undefined, selectedLanguages?: number[] | undefined, minLevelFacultative?: boolean | undefined, minSuccessFacultative?: boolean | undefined, invalidatedByModeration?: boolean | undefined, recruitmentAutoLocked?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemToSellInHumanVendorShop extends Item {
    static id: number;
    id: number;
    publicPrice: number | undefined;
    effects: ObjectEffect[] | undefined;
    quantity: number | undefined;
    objectGID: number | undefined;
    objectUID: number | undefined;
    objectPrice: number | undefined;
    constructor(publicPrice?: number | undefined, effects?: ObjectEffect[] | undefined, quantity?: number | undefined, objectGID?: number | undefined, objectUID?: number | undefined, objectPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectItemQuantity extends Item {
    static id: number;
    id: number;
    quantity: number | undefined;
    objectUID: number | undefined;
    constructor(quantity?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntityMovementInformations extends DofusType {
    static id: number;
    id: number;
    id_: number | undefined;
    steps: number[] | undefined;
    constructor(id_?: number | undefined, steps?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BidExchangerObjectInfo extends DofusType {
    static id: number;
    id: number;
    objectGID: number | undefined;
    prices: number[] | undefined;
    objectType: number | undefined;
    objectUID: number | undefined;
    effects: ObjectEffect[] | undefined;
    constructor(objectGID?: number | undefined, prices?: number[] | undefined, objectType?: number | undefined, objectUID?: number | undefined, effects?: ObjectEffect[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AtlasPointsInformations extends DofusType {
    static id: number;
    id: number;
    type: number | undefined;
    coords: MapCoordinatesExtended[] | undefined;
    constructor(type?: number | undefined, coords?: MapCoordinatesExtended[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AdditionalTaxCollectorInformations extends DofusType {
    static id: number;
    id: number;
    date: number | undefined;
    collectorCallerName: string | undefined;
    constructor(date?: number | undefined, collectorCallerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ProtectedEntityWaitingForHelpInfo extends DofusType {
    static id: number;
    id: number;
    timeLeftBeforeFight: number | undefined;
    nbPositionForDefensors: number | undefined;
    waitTimeForPlacement: number | undefined;
    constructor(timeLeftBeforeFight?: number | undefined, nbPositionForDefensors?: number | undefined, waitTimeForPlacement?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountInformationsForPaddock extends DofusType {
    static id: number;
    id: number;
    ownerName: string | undefined;
    modelId: number | undefined;
    name: string | undefined;
    constructor(ownerName?: string | undefined, modelId?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FightTeamLightInformations extends AbstractFightTeamInformations {
    static id: number;
    id: number;
    meanLevel: number | undefined;
    teamMembersCount: number | undefined;
    hasFriend: boolean | undefined;
    hasGuildMember: boolean | undefined;
    hasAllianceMember: boolean | undefined;
    hasGroupMember: boolean | undefined;
    hasMyTaxCollector: boolean | undefined;
    constructor(nbWaves?: number | undefined, teamId?: number | undefined, teamTypeId?: number | undefined, teamSide?: number | undefined, leaderId?: number | undefined, meanLevel?: number | undefined, teamMembersCount?: number | undefined, hasFriend?: boolean | undefined, hasGuildMember?: boolean | undefined, hasAllianceMember?: boolean | undefined, hasGroupMember?: boolean | undefined, hasMyTaxCollector?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectEffects extends DofusType {
    static id: number;
    id: number;
    effects: ObjectEffect[] | undefined;
    constructor(effects?: ObjectEffect[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementObjective extends DofusType {
    static id: number;
    id: number;
    maxValue: number | undefined;
    id_: number | undefined;
    constructor(maxValue?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementStartedObjective extends AchievementObjective {
    static id: number;
    id: number;
    value: number | undefined;
    constructor(maxValue?: number | undefined, id_?: number | undefined, value?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ArenaRanking extends DofusType {
    static id: number;
    id: number;
    bestRank: number | undefined;
    rank: number | undefined;
    constructor(bestRank?: number | undefined, rank?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ArenaLeagueRanking extends DofusType {
    static id: number;
    id: number;
    leaguePoints: number | undefined;
    ladderPosition: number | undefined;
    totalLeaguePoints: number | undefined;
    rank: number | undefined;
    leagueId: number | undefined;
    constructor(leaguePoints?: number | undefined, ladderPosition?: number | undefined, totalLeaguePoints?: number | undefined, rank?: number | undefined, leagueId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicPingMessage extends DofusMessage {
    static id: number;
    quiet: boolean | undefined;
    constructor(quiet?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractGameActionMessage extends DofusMessage {
    static id: number;
    sourceId: number | undefined;
    actionId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractGameActionFightTargetedAbilityMessage extends AbstractGameActionMessage {
    static id: number;
    destinationCellId: number | undefined;
    targetId: number | undefined;
    critical: number | undefined;
    silentCast: boolean | undefined;
    verboseCast: boolean | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, destinationCellId?: number | undefined, targetId?: number | undefined, critical?: number | undefined, silentCast?: boolean | undefined, verboseCast?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightCloseCombatMessage extends AbstractGameActionFightTargetedAbilityMessage {
    static id: number;
    weaponGenericId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, destinationCellId?: number | undefined, targetId?: number | undefined, critical?: number | undefined, silentCast?: boolean | undefined, verboseCast?: boolean | undefined, weaponGenericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightReduceDamagesMessage extends AbstractGameActionMessage {
    static id: number;
    amount: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, amount?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightLifePointsGainMessage extends AbstractGameActionMessage {
    static id: number;
    delta: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, delta?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightModifyEffectsDurationMessage extends AbstractGameActionMessage {
    static id: number;
    delta: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, delta?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightInvisibleDetectedMessage extends AbstractGameActionMessage {
    static id: number;
    cellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, cellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDispellMessage extends AbstractGameActionMessage {
    static id: number;
    verboseCast: boolean | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, verboseCast?: boolean | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDispellEffectMessage extends GameActionFightDispellMessage {
    static id: number;
    boostUID: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, verboseCast?: boolean | undefined, targetId?: number | undefined, boostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnListMessage extends DofusMessage {
    static id: number;
    deadsIds: number[] | undefined;
    ids: number[] | undefined;
    constructor(deadsIds?: number[] | undefined, ids?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SequenceStartMessage extends DofusMessage {
    static id: number;
    authorId: number | undefined;
    sequenceType: number | undefined;
    constructor(authorId?: number | undefined, sequenceType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightVanishMessage extends AbstractGameActionMessage {
    static id: number;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightMultipleSummonMessage extends AbstractGameActionMessage {
    static id: number;
    summons: GameContextSummonsInformation[] | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, summons?: GameContextSummonsInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightSlideMessage extends AbstractGameActionMessage {
    static id: number;
    endCellId: number | undefined;
    startCellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, endCellId?: number | undefined, startCellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightKillMessage extends AbstractGameActionMessage {
    static id: number;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightSpellCooldownVariationMessage extends AbstractGameActionMessage {
    static id: number;
    value: number | undefined;
    spellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, value?: number | undefined, spellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FighterStatsListMessage extends DofusMessage {
    static id: number;
    stats: CharacterCharacteristicsInformations | undefined;
    constructor(stats?: CharacterCharacteristicsInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapMovementMessage extends DofusMessage {
    static id: number;
    forcedDirection: number | undefined;
    actorId: number | undefined;
    keyMovements: number[] | undefined;
    constructor(forcedDirection?: number | undefined, actorId?: number | undefined, keyMovements?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDropCharacterMessage extends AbstractGameActionMessage {
    static id: number;
    cellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, cellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightTriggerGlyphTrapMessage extends AbstractGameActionMessage {
    static id: number;
    triggeredSpellId: number | undefined;
    triggeringCharacterId: number | undefined;
    markImpactCell: number | undefined;
    markId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, triggeredSpellId?: number | undefined, triggeringCharacterId?: number | undefined, markImpactCell?: number | undefined, markId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightPointsVariationMessage extends AbstractGameActionMessage {
    static id: number;
    delta: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, delta?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightReflectSpellMessage extends AbstractGameActionMessage {
    static id: number;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDeathMessage extends AbstractGameActionMessage {
    static id: number;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightActivateGlyphTrapMessage extends AbstractGameActionMessage {
    static id: number;
    active: boolean | undefined;
    markId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, active?: boolean | undefined, markId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightSynchronizeMessage extends DofusMessage {
    static id: number;
    fighters: GameFightFighterInformations[] | undefined;
    constructor(fighters?: GameFightFighterInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightSpellCastMessage extends AbstractGameActionFightTargetedAbilityMessage {
    static id: number;
    portalsIds: number[] | undefined;
    spellLevel: number | undefined;
    spellId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, destinationCellId?: number | undefined, targetId?: number | undefined, critical?: number | undefined, silentCast?: boolean | undefined, verboseCast?: boolean | undefined, portalsIds?: number[] | undefined, spellLevel?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightTriggerEffectMessage extends GameActionFightDispellEffectMessage {
    static id: number;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, verboseCast?: boolean | undefined, targetId?: number | undefined, boostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightTackledMessage extends AbstractGameActionMessage {
    static id: number;
    tacklersIds: number[] | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, tacklersIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightInvisibilityMessage extends AbstractGameActionMessage {
    static id: number;
    state: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, state?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightShowFighterMessage extends DofusMessage {
    static id: number;
    informations: GameFightFighterInformations | undefined;
    constructor(informations?: GameFightFighterInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightShowFighterRandomStaticPoseMessage extends GameFightShowFighterMessage {
    static id: number;
    constructor(informations?: GameFightFighterInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightTeleportOnSameMapMessage extends AbstractGameActionMessage {
    static id: number;
    cellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, cellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDispellSpellMessage extends GameActionFightDispellMessage {
    static id: number;
    spellId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, verboseCast?: boolean | undefined, targetId?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightChangeLookMessage extends AbstractGameActionMessage {
    static id: number;
    entityLook: EntityLook | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, entityLook?: EntityLook | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDodgePointLossMessage extends AbstractGameActionMessage {
    static id: number;
    amount: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, amount?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightSpellImmunityMessage extends AbstractGameActionMessage {
    static id: number;
    spellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, spellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RefreshCharacterStatsMessage extends DofusMessage {
    static id: number;
    stats: GameFightCharacteristics | undefined;
    fighterId: number | undefined;
    constructor(stats?: GameFightCharacteristics | undefined, fighterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightDispellableEffectMessage extends AbstractGameActionMessage {
    static id: number;
    effect: AbstractFightDispellableEffect | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, effect?: AbstractFightDispellableEffect | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightThrowCharacterMessage extends AbstractGameActionMessage {
    static id: number;
    cellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, cellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightRefreshFighterMessage extends DofusMessage {
    static id: number;
    informations: GameContextActorInformations | undefined;
    constructor(informations?: GameContextActorInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightMarkCellsMessage extends AbstractGameActionMessage {
    static id: number;
    mark: GameActionMark | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, mark?: GameActionMark | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightSummonMessage extends AbstractGameActionMessage {
    static id: number;
    summons: GameFightFighterInformations[] | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, summons?: GameFightFighterInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightStealKamaMessage extends AbstractGameActionMessage {
    static id: number;
    amount: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, amount?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SequenceEndMessage extends DofusMessage {
    static id: number;
    sequenceType: number | undefined;
    authorId: number | undefined;
    actionId: number | undefined;
    constructor(sequenceType?: number | undefined, authorId?: number | undefined, actionId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightLifePointsLostMessage extends AbstractGameActionMessage {
    static id: number;
    permanentDamages: number | undefined;
    elementId: number | undefined;
    loss: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, permanentDamages?: number | undefined, elementId?: number | undefined, loss?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightLifeAndShieldPointsLostMessage extends GameActionFightLifePointsLostMessage {
    static id: number;
    shieldLoss: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, permanentDamages?: number | undefined, elementId?: number | undefined, loss?: number | undefined, targetId?: number | undefined, shieldLoss?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightCarryCharacterMessage extends AbstractGameActionMessage {
    static id: number;
    cellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, cellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightUnmarkCellsMessage extends AbstractGameActionMessage {
    static id: number;
    markId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, markId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightReflectDamagesMessage extends AbstractGameActionMessage {
    static id: number;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightExchangePositionsMessage extends AbstractGameActionMessage {
    static id: number;
    targetCellId: number | undefined;
    casterCellId: number | undefined;
    targetId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, targetCellId?: number | undefined, casterCellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapComplementaryInformationsDataMessage extends DofusMessage {
    static id: number;
    actors: GameRolePlayActorInformations[] | undefined;
    houses: HouseInformations[] | undefined;
    mapId: number | undefined;
    obstacles: MapObstacle[] | undefined;
    subAreaId: number | undefined;
    interactiveElements: InteractiveElement[] | undefined;
    statedElements: StatedElement[] | undefined;
    hasAggressiveMonsters: boolean | undefined;
    fightStartPositions: FightStartingPositions | undefined;
    fights: FightCommonInformations[] | undefined;
    constructor(actors?: GameRolePlayActorInformations[] | undefined, houses?: HouseInformations[] | undefined, mapId?: number | undefined, obstacles?: MapObstacle[] | undefined, subAreaId?: number | undefined, interactiveElements?: InteractiveElement[] | undefined, statedElements?: StatedElement[] | undefined, hasAggressiveMonsters?: boolean | undefined, fightStartPositions?: FightStartingPositions | undefined, fights?: FightCommonInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapComplementaryInformationsAnomalyMessage extends MapComplementaryInformationsDataMessage {
    static id: number;
    closingTime: number | undefined;
    level: number | undefined;
    constructor(actors?: GameRolePlayActorInformations[] | undefined, houses?: HouseInformations[] | undefined, mapId?: number | undefined, obstacles?: MapObstacle[] | undefined, subAreaId?: number | undefined, interactiveElements?: InteractiveElement[] | undefined, statedElements?: StatedElement[] | undefined, hasAggressiveMonsters?: boolean | undefined, fightStartPositions?: FightStartingPositions | undefined, fights?: FightCommonInformations[] | undefined, closingTime?: number | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightUpdateTeamMessage extends DofusMessage {
    static id: number;
    team: FightTeamInformations | undefined;
    fightId: number | undefined;
    constructor(team?: FightTeamInformations | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameDataPaddockObjectRemoveMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    constructor(cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectGroundRemovedMultipleMessage extends DofusMessage {
    static id: number;
    cells: number[] | undefined;
    constructor(cells?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightRemoveTeamMemberMessage extends DofusMessage {
    static id: number;
    charId: number | undefined;
    teamId: number | undefined;
    fightId: number | undefined;
    constructor(charId?: number | undefined, teamId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmotePlayRequestMessage extends DofusMessage {
    static id: number;
    emoteId: number | undefined;
    constructor(emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateMapPlayersAgressableStatusMessage extends DofusMessage {
    static id: number;
    enable: number[] | undefined;
    playerIds: number[] | undefined;
    constructor(enable?: number[] | undefined, playerIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockMoveItemRequestMessage extends DofusMessage {
    static id: number;
    newCellId: number | undefined;
    oldCellId: number | undefined;
    constructor(newCellId?: number | undefined, oldCellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectGroundListAddedMessage extends DofusMessage {
    static id: number;
    referenceIds: number[] | undefined;
    cells: number[] | undefined;
    constructor(referenceIds?: number[] | undefined, cells?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateSelfAgressableStatusMessage extends DofusMessage {
    static id: number;
    probationTime: number | undefined;
    status: number | undefined;
    constructor(probationTime?: number | undefined, status?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapComplementaryInformationsWithCoordsMessage extends MapComplementaryInformationsDataMessage {
    static id: number;
    worldY: number | undefined;
    worldX: number | undefined;
    constructor(actors?: GameRolePlayActorInformations[] | undefined, houses?: HouseInformations[] | undefined, mapId?: number | undefined, obstacles?: MapObstacle[] | undefined, subAreaId?: number | undefined, interactiveElements?: InteractiveElement[] | undefined, statedElements?: StatedElement[] | undefined, hasAggressiveMonsters?: boolean | undefined, fightStartPositions?: FightStartingPositions | undefined, fights?: FightCommonInformations[] | undefined, worldY?: number | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextRefreshEntityLookMessage extends DofusMessage {
    static id: number;
    look: EntityLook | undefined;
    id_: number | undefined;
    constructor(look?: EntityLook | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ListMapNpcsQuestStatusUpdateMessage extends DofusMessage {
    static id: number;
    mapInfo: MapNpcQuestInfo[] | undefined;
    constructor(mapInfo?: MapNpcQuestInfo[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapComplementaryInformationsDataInHavenBagMessage extends MapComplementaryInformationsDataMessage {
    static id: number;
    ownerInformations: CharacterMinimalInformations | undefined;
    roomId: number | undefined;
    theme: number | undefined;
    maxRoomId: number | undefined;
    constructor(actors?: GameRolePlayActorInformations[] | undefined, houses?: HouseInformations[] | undefined, mapId?: number | undefined, obstacles?: MapObstacle[] | undefined, subAreaId?: number | undefined, interactiveElements?: InteractiveElement[] | undefined, statedElements?: StatedElement[] | undefined, hasAggressiveMonsters?: boolean | undefined, fightStartPositions?: FightStartingPositions | undefined, fights?: FightCommonInformations[] | undefined, ownerInformations?: CharacterMinimalInformations | undefined, roomId?: number | undefined, theme?: number | undefined, maxRoomId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachExitResponseMessage extends DofusMessage {
    static id: number;
    exited: boolean | undefined;
    constructor(exited?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockRemoveItemRequestMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    constructor(cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapChangeOrientationMessage extends DofusMessage {
    static id: number;
    orientation: ActorOrientation | undefined;
    constructor(orientation?: ActorOrientation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectGroundAddedMessage extends DofusMessage {
    static id: number;
    objectGID: number | undefined;
    cellId: number | undefined;
    constructor(objectGID?: number | undefined, cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachEnterMessage extends DofusMessage {
    static id: number;
    owner: number | undefined;
    constructor(owner?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayShowActorMessage extends DofusMessage {
    static id: number;
    informations: GameRolePlayActorInformations | undefined;
    constructor(informations?: GameRolePlayActorInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameDataPlayFarmObjectAnimationMessage extends DofusMessage {
    static id: number;
    cellId: number[] | undefined;
    constructor(cellId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayShowChallengeMessage extends DofusMessage {
    static id: number;
    commonsInfos: FightCommonInformations | undefined;
    constructor(commonsInfos?: FightCommonInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayRemoveChallengeMessage extends DofusMessage {
    static id: number;
    fightId: number | undefined;
    constructor(fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapRewardRateMessage extends DofusMessage {
    static id: number;
    subAreaRate: number | undefined;
    totalRate: number | undefined;
    mapRate: number | undefined;
    constructor(subAreaRate?: number | undefined, totalRate?: number | undefined, mapRate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayMonsterAngryAtPlayerMessage extends DofusMessage {
    static id: number;
    attackTime: number | undefined;
    angryStartTime: number | undefined;
    monsterGroupId: number | undefined;
    playerId: number | undefined;
    constructor(attackTime?: number | undefined, angryStartTime?: number | undefined, monsterGroupId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameDataPaddockObjectAddMessage extends DofusMessage {
    static id: number;
    paddockItemDescription: PaddockItem | undefined;
    constructor(paddockItemDescription?: PaddockItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapComplementaryInformationsDataInHouseMessage extends MapComplementaryInformationsDataMessage {
    static id: number;
    currentHouse: HouseInformationsInside | undefined;
    constructor(actors?: GameRolePlayActorInformations[] | undefined, houses?: HouseInformations[] | undefined, mapId?: number | undefined, obstacles?: MapObstacle[] | undefined, subAreaId?: number | undefined, interactiveElements?: InteractiveElement[] | undefined, statedElements?: StatedElement[] | undefined, hasAggressiveMonsters?: boolean | undefined, fightStartPositions?: FightStartingPositions | undefined, fights?: FightCommonInformations[] | undefined, currentHouse?: HouseInformationsInside | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatedMapUpdateMessage extends DofusMessage {
    static id: number;
    statedElements: StatedElement[] | undefined;
    constructor(statedElements?: StatedElement[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapChangeOrientationsMessage extends DofusMessage {
    static id: number;
    orientations: ActorOrientation[] | undefined;
    constructor(orientations?: ActorOrientation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShowCellMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    sourceId: number | undefined;
    constructor(cellId?: number | undefined, sourceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HousePropertiesMessage extends DofusMessage {
    static id: number;
    houseId: number | undefined;
    properties: HouseInstanceInformations | undefined;
    doorsOnMap: number[] | undefined;
    constructor(houseId?: number | undefined, properties?: HouseInstanceInformations | undefined, doorsOnMap?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayMonsterNotAngryAtPlayerMessage extends DofusMessage {
    static id: number;
    monsterGroupId: number | undefined;
    playerId: number | undefined;
    constructor(monsterGroupId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachTeleportResponseMessage extends DofusMessage {
    static id: number;
    teleported: boolean | undefined;
    constructor(teleported?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextRemoveMultipleElementsMessage extends DofusMessage {
    static id: number;
    elementsIds: number[] | undefined;
    constructor(elementsIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayShowMultipleActorsMessage extends DofusMessage {
    static id: number;
    informationsList: GameRolePlayActorInformations[] | undefined;
    constructor(informationsList?: GameRolePlayActorInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectGroundRemovedMessage extends DofusMessage {
    static id: number;
    cell: number | undefined;
    constructor(cell?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameDataPaddockObjectListAddMessage extends DofusMessage {
    static id: number;
    paddockItemDescription: PaddockItem[] | undefined;
    constructor(paddockItemDescription?: PaddockItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AnomalyStateMessage extends DofusMessage {
    static id: number;
    closingTime: number | undefined;
    open: boolean | undefined;
    subAreaId: number | undefined;
    constructor(closingTime?: number | undefined, open?: boolean | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapInformationsRequestMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    constructor(mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveUsedMessage extends DofusMessage {
    static id: number;
    entityId: number | undefined;
    canMove: boolean | undefined;
    skillId: number | undefined;
    elemId: number | undefined;
    duration: number | undefined;
    constructor(entityId?: number | undefined, canMove?: boolean | undefined, skillId?: number | undefined, elemId?: number | undefined, duration?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapFightCountMessage extends DofusMessage {
    static id: number;
    fightCount: number | undefined;
    constructor(fightCount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveMapUpdateMessage extends DofusMessage {
    static id: number;
    interactiveElements: InteractiveElement[] | undefined;
    constructor(interactiveElements?: InteractiveElement[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextRemoveElementMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightOptionStateUpdateMessage extends DofusMessage {
    static id: number;
    state: boolean | undefined;
    option: number | undefined;
    teamId: number | undefined;
    fightId: number | undefined;
    constructor(state?: boolean | undefined, option?: number | undefined, teamId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachTeleportRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapComplementaryInformationsBreachMessage extends MapComplementaryInformationsDataMessage {
    static id: number;
    floor: number | undefined;
    room: number | undefined;
    infinityMode: number | undefined;
    branches: BreachBranch[] | undefined;
    constructor(actors?: GameRolePlayActorInformations[] | undefined, houses?: HouseInformations[] | undefined, mapId?: number | undefined, obstacles?: MapObstacle[] | undefined, subAreaId?: number | undefined, interactiveElements?: InteractiveElement[] | undefined, statedElements?: StatedElement[] | undefined, hasAggressiveMonsters?: boolean | undefined, fightStartPositions?: FightStartingPositions | undefined, fights?: FightCommonInformations[] | undefined, floor?: number | undefined, room?: number | undefined, infinityMode?: number | undefined, branches?: BreachBranch[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameEntitiesDispositionMessage extends DofusMessage {
    static id: number;
    dispositions: IdentifiedEntityDispositionInformations[] | undefined;
    constructor(dispositions?: IdentifiedEntityDispositionInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShowCellSpectatorMessage extends ShowCellMessage {
    static id: number;
    playerName: string | undefined;
    constructor(cellId?: number | undefined, sourceId?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsMessage extends DofusMessage {
    static id: number;
    dispositions: IdentifiedEntityDispositionInformations[] | undefined;
    constructor(dispositions?: IdentifiedEntityDispositionInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameEntityDispositionMessage extends DofusMessage {
    static id: number;
    disposition: IdentifiedEntityDispositionInformations | undefined;
    constructor(disposition?: IdentifiedEntityDispositionInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightHumanReadyStateMessage extends DofusMessage {
    static id: number;
    isReady: boolean | undefined;
    characterId: number | undefined;
    constructor(isReady?: boolean | undefined, characterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerStatusUpdateMessage extends DofusMessage {
    static id: number;
    status: PlayerStatus | undefined;
    playerId: number | undefined;
    accountId: number | undefined;
    constructor(status?: PlayerStatus | undefined, playerId?: number | undefined, accountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightEndMessage extends DofusMessage {
    static id: number;
    duration: number | undefined;
    namedPartyTeamsOutcomes: NamedPartyTeamWithOutcome[] | undefined;
    results: FightResultListEntry[] | undefined;
    rewardRate: number | undefined;
    lootShareLimitMalus: number | undefined;
    constructor(duration?: number | undefined, namedPartyTeamsOutcomes?: NamedPartyTeamWithOutcome[] | undefined, results?: FightResultListEntry[] | undefined, rewardRate?: number | undefined, lootShareLimitMalus?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachGameFightEndMessage extends GameFightEndMessage {
    static id: number;
    budget: number | undefined;
    constructor(duration?: number | undefined, namedPartyTeamsOutcomes?: NamedPartyTeamWithOutcome[] | undefined, results?: FightResultListEntry[] | undefined, rewardRate?: number | undefined, lootShareLimitMalus?: number | undefined, budget?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChallengeTargetUpdateMessage extends DofusMessage {
    static id: number;
    targetId: number | undefined;
    challengeId: number | undefined;
    constructor(targetId?: number | undefined, challengeId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightLeaveMessage extends DofusMessage {
    static id: number;
    charId: number | undefined;
    constructor(charId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightSpectateMessage extends DofusMessage {
    static id: number;
    idols: Idol[] | undefined;
    effects: FightDispellableEffectExtendedInformations[] | undefined;
    fxTriggerCounts: GameFightEffectTriggerCount[] | undefined;
    gameTurn: number | undefined;
    marks: GameActionMark[] | undefined;
    fightStart: number | undefined;
    constructor(idols?: Idol[] | undefined, effects?: FightDispellableEffectExtendedInformations[] | undefined, fxTriggerCounts?: GameFightEffectTriggerCount[] | undefined, gameTurn?: number | undefined, marks?: GameActionMark[] | undefined, fightStart?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightResumeMessage extends GameFightSpectateMessage {
    static id: number;
    bombCount: number | undefined;
    summonCount: number | undefined;
    spellCooldowns: GameFightSpellCooldown[] | undefined;
    constructor(idols?: Idol[] | undefined, effects?: FightDispellableEffectExtendedInformations[] | undefined, fxTriggerCounts?: GameFightEffectTriggerCount[] | undefined, gameTurn?: number | undefined, marks?: GameActionMark[] | undefined, fightStart?: number | undefined, bombCount?: number | undefined, summonCount?: number | undefined, spellCooldowns?: GameFightSpellCooldown[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightResumeWithSlavesMessage extends GameFightResumeMessage {
    static id: number;
    slavesInfo: GameFightResumeSlaveInfo[] | undefined;
    constructor(idols?: Idol[] | undefined, effects?: FightDispellableEffectExtendedInformations[] | undefined, fxTriggerCounts?: GameFightEffectTriggerCount[] | undefined, gameTurn?: number | undefined, marks?: GameActionMark[] | undefined, fightStart?: number | undefined, bombCount?: number | undefined, summonCount?: number | undefined, spellCooldowns?: GameFightSpellCooldown[] | undefined, slavesInfo?: GameFightResumeSlaveInfo[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CurrentMapMessage extends DofusMessage {
    static id: number;
    mapKey: string | undefined;
    mapId: number | undefined;
    constructor(mapKey?: string | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CurrentMapInstanceMessage extends CurrentMapMessage {
    static id: number;
    instantiatedMapId: number | undefined;
    constructor(mapKey?: string | undefined, mapId?: number | undefined, instantiatedMapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightStartingMessage extends DofusMessage {
    static id: number;
    containsBoss: boolean | undefined;
    fightType: number | undefined;
    fightId: number | undefined;
    attackerId: number | undefined;
    defenderId: number | undefined;
    constructor(containsBoss?: boolean | undefined, fightType?: number | undefined, fightId?: number | undefined, attackerId?: number | undefined, defenderId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightJoinMessage extends DofusMessage {
    static id: number;
    timeMaxBeforeFightStart: number | undefined;
    fightType: number | undefined;
    isTeamPhase: boolean | undefined;
    canBeCancelled: boolean | undefined;
    canSayReady: boolean | undefined;
    isFightStarted: boolean | undefined;
    constructor(timeMaxBeforeFightStart?: number | undefined, fightType?: number | undefined, isTeamPhase?: boolean | undefined, canBeCancelled?: boolean | undefined, canSayReady?: boolean | undefined, isFightStarted?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ArenaFighterIdleMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChallengeTargetsListRequestMessage extends DofusMessage {
    static id: number;
    challengeId: number | undefined;
    constructor(challengeId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightStartMessage extends DofusMessage {
    static id: number;
    idols: Idol[] | undefined;
    constructor(idols?: Idol[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightNoSpellCastMessage extends DofusMessage {
    static id: number;
    spellLevelId: number | undefined;
    constructor(spellLevelId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextDestroyMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightSpectatorJoinMessage extends GameFightJoinMessage {
    static id: number;
    namedPartyTeams: NamedPartyTeam[] | undefined;
    constructor(timeMaxBeforeFightStart?: number | undefined, fightType?: number | undefined, isTeamPhase?: boolean | undefined, canBeCancelled?: boolean | undefined, canSayReady?: boolean | undefined, isFightStarted?: boolean | undefined, namedPartyTeams?: NamedPartyTeam[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChallengeInfoMessage extends DofusMessage {
    static id: number;
    dropBonus: number | undefined;
    xpBonus: number | undefined;
    targetId: number | undefined;
    challengeId: number | undefined;
    constructor(dropBonus?: number | undefined, xpBonus?: number | undefined, targetId?: number | undefined, challengeId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChallengeTargetsListMessage extends DofusMessage {
    static id: number;
    targetCells: number[] | undefined;
    targetIds: number[] | undefined;
    constructor(targetCells?: number[] | undefined, targetIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapObstacleUpdateMessage extends DofusMessage {
    static id: number;
    obstacles: MapObstacle[] | undefined;
    constructor(obstacles?: MapObstacle[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ArenaFighterLeaveMessage extends DofusMessage {
    static id: number;
    leaver: CharacterBasicMinimalInformations | undefined;
    constructor(leaver?: CharacterBasicMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextReadyMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    constructor(mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChallengeResultMessage extends DofusMessage {
    static id: number;
    success: boolean | undefined;
    challengeId: number | undefined;
    constructor(success?: boolean | undefined, challengeId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightNewWaveMessage extends DofusMessage {
    static id: number;
    nbTurnBeforeNextWave: number | undefined;
    teamId: number | undefined;
    id_: number | undefined;
    constructor(nbTurnBeforeNextWave?: number | undefined, teamId?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPauseMessage extends DofusMessage {
    static id: number;
    isPaused: boolean | undefined;
    constructor(isPaused?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateSpellModifierMessage extends DofusMessage {
    static id: number;
    spellModifier: CharacterSpellModification | undefined;
    actorId: number | undefined;
    constructor(spellModifier?: CharacterSpellModification | undefined, actorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnStartMessage extends DofusMessage {
    static id: number;
    waitTime: number | undefined;
    id_: number | undefined;
    constructor(waitTime?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnReadyRequestMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnEndMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightNewRoundMessage extends DofusMessage {
    static id: number;
    roundNumber: number | undefined;
    constructor(roundNumber?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SlaveSwitchContextMessage extends DofusMessage {
    static id: number;
    shortcuts: Shortcut[] | undefined;
    slaveStats: CharacterCharacteristicsInformations | undefined;
    masterId: number | undefined;
    slaveId: number | undefined;
    slaveTurn: number | undefined;
    slaveSpells: SpellItem[] | undefined;
    constructor(shortcuts?: Shortcut[] | undefined, slaveStats?: CharacterCharacteristicsInformations | undefined, masterId?: number | undefined, slaveId?: number | undefined, slaveTurn?: number | undefined, slaveSpells?: SpellItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnStartPlayingMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SlaveNoLongerControledMessage extends DofusMessage {
    static id: number;
    slaveId: number | undefined;
    masterId: number | undefined;
    constructor(slaveId?: number | undefined, masterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterStatsListMessage extends DofusMessage {
    static id: number;
    stats: CharacterCharacteristicsInformations | undefined;
    constructor(stats?: CharacterCharacteristicsInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionAcknowledgementMessage extends DofusMessage {
    static id: number;
    actionId: number | undefined;
    valid: boolean | undefined;
    constructor(actionId?: number | undefined, valid?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnResumeMessage extends GameFightTurnStartMessage {
    static id: number;
    remainingTime: number | undefined;
    constructor(waitTime?: number | undefined, id_?: number | undefined, remainingTime?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnReadyMessage extends DofusMessage {
    static id: number;
    isReady: boolean | undefined;
    constructor(isReady?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionUpdateEffectTriggerCountMessage extends DofusMessage {
    static id: number;
    targetIds: GameFightEffectTriggerCount[] | undefined;
    constructor(targetIds?: GameFightEffectTriggerCount[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiApiKeyRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DebugClearHighlightCellsMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DebugHighlightCellsMessage extends DofusMessage {
    static id: number;
    cells: number[] | undefined;
    color: number | undefined;
    constructor(cells?: number[] | undefined, color?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DumpedEntityStatsMessage extends DofusMessage {
    static id: number;
    stats: CharacterCharacteristics | undefined;
    actorId: number | undefined;
    constructor(stats?: CharacterCharacteristics | undefined, actorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DebugInClientMessage extends DofusMessage {
    static id: number;
    message: string | undefined;
    level: number | undefined;
    constructor(message?: string | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationMessage extends DofusMessage {
    static id: number;
    sessionOptionalSalt: number | undefined;
    credentials: number[] | undefined;
    lang: string | undefined;
    serverId: number | undefined;
    version: Version | undefined;
    failedAttempts: number[] | undefined;
    autoconnect: boolean | undefined;
    useCertificate: boolean | undefined;
    useLoginToken: boolean | undefined;
    constructor(sessionOptionalSalt?: number | undefined, credentials?: number[] | undefined, lang?: string | undefined, serverId?: number | undefined, version?: Version | undefined, failedAttempts?: number[] | undefined, autoconnect?: boolean | undefined, useCertificate?: boolean | undefined, useLoginToken?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationAccountForceMessage extends IdentificationMessage {
    static id: number;
    forcedAccountLogin: string | undefined;
    constructor(sessionOptionalSalt?: number | undefined, credentials?: number[] | undefined, lang?: string | undefined, serverId?: number | undefined, version?: Version | undefined, failedAttempts?: number[] | undefined, autoconnect?: boolean | undefined, useCertificate?: boolean | undefined, useLoginToken?: boolean | undefined, forcedAccountLogin?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicAckMessage extends DofusMessage {
    static id: number;
    lastPacketId: number | undefined;
    seq: number | undefined;
    constructor(lastPacketId?: number | undefined, seq?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicNoOperationMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CredentialsAcknowledgementMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OnConnectionEventMessage extends DofusMessage {
    static id: number;
    eventType: number | undefined;
    constructor(eventType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectJobAddedMessage extends DofusMessage {
    static id: number;
    jobId: number | undefined;
    constructor(jobId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LivingObjectMessageRequestMessage extends DofusMessage {
    static id: number;
    livingObject: number | undefined;
    parameters: string[] | undefined;
    msgId: number | undefined;
    constructor(livingObject?: number | undefined, parameters?: string[] | undefined, msgId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationSuccessMessage extends DofusMessage {
    static id: number;
    havenbagAvailableRoom: number | undefined;
    subscriptionElapsedDuration: number | undefined;
    communityId: number | undefined;
    accountTag: AccountTagInformation | undefined;
    accountId: number | undefined;
    login: string | undefined;
    secretQuestion: string | undefined;
    subscriptionEndDate: number | undefined;
    accountCreation: number | undefined;
    hasRights: boolean | undefined;
    hasConsoleRight: boolean | undefined;
    wasAlreadyConnected: boolean | undefined;
    constructor(havenbagAvailableRoom?: number | undefined, subscriptionElapsedDuration?: number | undefined, communityId?: number | undefined, accountTag?: AccountTagInformation | undefined, accountId?: number | undefined, login?: string | undefined, secretQuestion?: string | undefined, subscriptionEndDate?: number | undefined, accountCreation?: number | undefined, hasRights?: boolean | undefined, hasConsoleRight?: boolean | undefined, wasAlreadyConnected?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RawDataMessage extends DofusMessage {
    static id: number;
    content: number | undefined;
    constructor(content?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TrustStatusMessage extends DofusMessage {
    static id: number;
    trusted: boolean | undefined;
    certified: boolean | undefined;
    constructor(trusted?: boolean | undefined, certified?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServersListMessage extends DofusMessage {
    static id: number;
    canCreateNewCharacter: boolean | undefined;
    alreadyConnectedToServerId: number | undefined;
    servers: GameServerInformations[] | undefined;
    constructor(canCreateNewCharacter?: boolean | undefined, alreadyConnectedToServerId?: number | undefined, servers?: GameServerInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicPongMessage extends DofusMessage {
    static id: number;
    quiet: boolean | undefined;
    constructor(quiet?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicLatencyStatsRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicLatencyStatsMessage extends DofusMessage {
    static id: number;
    sampleCount: number | undefined;
    max: number | undefined;
    latency: number | undefined;
    constructor(sampleCount?: number | undefined, max?: number | undefined, latency?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CheckIntegrityMessage extends DofusMessage {
    static id: number;
    data: number[] | undefined;
    constructor(data?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AdminCommandMessage extends DofusMessage {
    static id: number;
    content: string | undefined;
    constructor(content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ConsoleMessage extends DofusMessage {
    static id: number;
    content: string | undefined;
    type: number | undefined;
    constructor(content?: string | undefined, type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestListMessage extends DofusMessage {
    static id: number;
    finishedQuestsIds: number[] | undefined;
    finishedQuestsCounts: number[] | undefined;
    activeQuests: QuestActiveInformations[] | undefined;
    reinitDoneQuestsIds: number[] | undefined;
    constructor(finishedQuestsIds?: number[] | undefined, finishedQuestsCounts?: number[] | undefined, activeQuests?: QuestActiveInformations[] | undefined, reinitDoneQuestsIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestValidatedMessage extends DofusMessage {
    static id: number;
    questId: number | undefined;
    constructor(questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCreationResultMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    constructor(result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NicknameRefusedMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NicknameAcceptedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HelloGameMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFactsErrorMessage extends DofusMessage {
    static id: number;
    guildId: number | undefined;
    constructor(guildId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementDetailedListMessage extends DofusMessage {
    static id: number;
    finishedAchievements: Achievement[] | undefined;
    startedAchievements: Achievement[] | undefined;
    constructor(finishedAchievements?: Achievement[] | undefined, startedAchievements?: Achievement[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AuthenticationTicketAcceptedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInvitationStateRecrutedMessage extends DofusMessage {
    static id: number;
    invitationState: number | undefined;
    constructor(invitationState?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatAbstractServerMessage extends DofusMessage {
    static id: number;
    fingerprint: string | undefined;
    timestamp: number | undefined;
    content: string | undefined;
    channel: number | undefined;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatServerMessage extends ChatAbstractServerMessage {
    static id: number;
    senderAccountId: number | undefined;
    prefix: string | undefined;
    senderName: string | undefined;
    senderId: number | undefined;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined, senderAccountId?: number | undefined, prefix?: string | undefined, senderName?: string | undefined, senderId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatKolizeumServerMessage extends ChatServerMessage {
    static id: number;
    originServerId: number | undefined;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined, senderAccountId?: number | undefined, prefix?: string | undefined, senderName?: string | undefined, senderId?: number | undefined, originServerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class KnownZaapListMessage extends DofusMessage {
    static id: number;
    destinations: number[] | undefined;
    constructor(destinations?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class KamasUpdateMessage extends DofusMessage {
    static id: number;
    kamasTotal: number | undefined;
    constructor(kamasTotal?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StorageObjectsUpdateMessage extends DofusMessage {
    static id: number;
    objectList: ObjectItem[] | undefined;
    constructor(objectList?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInvitedMessage extends DofusMessage {
    static id: number;
    guildInfo: BasicGuildInformations | undefined;
    recruterName: string | undefined;
    recruterId: number | undefined;
    constructor(guildInfo?: BasicGuildInformations | undefined, recruterName?: string | undefined, recruterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActivitySuggestionsMessage extends DofusMessage {
    static id: number;
    unlockedActivitiesIds: number[] | undefined;
    lockedActivitiesIds: number[] | undefined;
    constructor(unlockedActivitiesIds?: number[] | undefined, lockedActivitiesIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarContentMessage extends DofusMessage {
    static id: number;
    shortcuts: Shortcut[] | undefined;
    barType: number | undefined;
    constructor(shortcuts?: Shortcut[] | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectsAddedMessage extends DofusMessage {
    static id: number;
    object_: ObjectItem[] | undefined;
    constructor(object_?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSelectedSuccessMessage extends DofusMessage {
    static id: number;
    isCollectingStats: boolean | undefined;
    infos: CharacterBaseInformations | undefined;
    constructor(isCollectingStats?: boolean | undefined, infos?: CharacterBaseInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftResultMessage extends DofusMessage {
    static id: number;
    craftResult: number | undefined;
    constructor(craftResult?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftResultWithObjectDescMessage extends ExchangeCraftResultMessage {
    static id: number;
    objectInfo: ObjectItemNotInContainer | undefined;
    constructor(craftResult?: number | undefined, objectInfo?: ObjectItemNotInContainer | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractPartyMessage extends DofusMessage {
    static id: number;
    partyId: number | undefined;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractPartyEventMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberRemoveMessage extends AbstractPartyEventMessage {
    static id: number;
    leavingPlayerId: number | undefined;
    constructor(partyId?: number | undefined, leavingPlayerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPlayerFightFriendlyAnsweredMessage extends DofusMessage {
    static id: number;
    sourceId: number | undefined;
    accept: boolean | undefined;
    targetId: number | undefined;
    fightId: number | undefined;
    constructor(sourceId?: number | undefined, accept?: boolean | undefined, targetId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicWhoIsNoMatchMessage extends DofusMessage {
    static id: number;
    target: AbstractPlayerSearchInformation | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveUseErrorMessage extends DofusMessage {
    static id: number;
    skillInstanceUid: number | undefined;
    elemId: number | undefined;
    constructor(skillInstanceUid?: number | undefined, elemId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayGameOverMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NotificationByServerMessage extends DofusMessage {
    static id: number;
    forceOpen: boolean | undefined;
    parameters: string[] | undefined;
    id_: number | undefined;
    constructor(forceOpen?: boolean | undefined, parameters?: string[] | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMemberOnlineStatusMessage extends DofusMessage {
    static id: number;
    online: boolean | undefined;
    memberId: number | undefined;
    constructor(online?: boolean | undefined, memberId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountsPaddockRemoveMessage extends DofusMessage {
    static id: number;
    mountsId: number[] | undefined;
    constructor(mountsId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SocialNoticeMessage extends DofusMessage {
    static id: number;
    memberName: string | undefined;
    memberId: number | undefined;
    timestamp: number | undefined;
    content: string | undefined;
    constructor(memberName?: string | undefined, memberId?: number | undefined, timestamp?: number | undefined, content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlaySpellAnimMessage extends DofusMessage {
    static id: number;
    targetCellId: number | undefined;
    spellLevel: number | undefined;
    spellId: number | undefined;
    casterId: number | undefined;
    constructor(targetCellId?: number | undefined, spellLevel?: number | undefined, spellId?: number | undefined, casterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmotePlayAbstractMessage extends DofusMessage {
    static id: number;
    emoteStartTime: number | undefined;
    emoteId: number | undefined;
    constructor(emoteStartTime?: number | undefined, emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OrnamentGainedMessage extends DofusMessage {
    static id: number;
    ornamentId: number | undefined;
    constructor(ornamentId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseUnsoldItemsMessage extends DofusMessage {
    static id: number;
    items: ObjectItemGenericQuantity[] | undefined;
    constructor(items?: ObjectItemGenericQuantity[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeShopStockMovementRemovedMessage extends DofusMessage {
    static id: number;
    objectId: number | undefined;
    constructor(objectId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolSelectErrorMessage extends DofusMessage {
    static id: number;
    idolId: number | undefined;
    reason: number | undefined;
    activate: boolean | undefined;
    party: boolean | undefined;
    constructor(idolId?: number | undefined, reason?: number | undefined, activate?: boolean | undefined, party?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SymbioticObjectAssociatedMessage extends DofusMessage {
    static id: number;
    hostUID: number | undefined;
    constructor(hostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MimicryObjectAssociatedMessage extends SymbioticObjectAssociatedMessage {
    static id: number;
    constructor(hostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicCharactersListMessage extends DofusMessage {
    static id: number;
    characters: CharacterBaseInformations[] | undefined;
    constructor(characters?: CharacterBaseInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntAvailableRetryCountUpdateMessage extends DofusMessage {
    static id: number;
    availableRetryCount: number | undefined;
    questType: number | undefined;
    constructor(availableRetryCount?: number | undefined, questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LoginQueueStatusMessage extends DofusMessage {
    static id: number;
    total: number | undefined;
    position: number | undefined;
    constructor(total?: number | undefined, position?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyCancelInvitationNotificationMessage extends AbstractPartyEventMessage {
    static id: number;
    guestId: number | undefined;
    cancelerId: number | undefined;
    constructor(partyId?: number | undefined, guestId?: number | undefined, cancelerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaginationAnswerAbstractMessage extends DofusMessage {
    static id: number;
    count: number | undefined;
    total: number | undefined;
    offset: number | undefined;
    constructor(count?: number | undefined, total?: number | undefined, offset?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderListenErrorMessage extends DofusMessage {
    static id: number;
    dungeonId: number | undefined;
    constructor(dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectMessage extends DofusMessage {
    static id: number;
    remote: boolean | undefined;
    constructor(remote?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectsRemovedMessage extends ExchangeObjectMessage {
    static id: number;
    objectUID: number[] | undefined;
    constructor(remote?: boolean | undefined, objectUID?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TextInformationMessage extends DofusMessage {
    static id: number;
    parameters: string[] | undefined;
    msgId: number | undefined;
    msgType: number | undefined;
    constructor(parameters?: string[] | undefined, msgId?: number | undefined, msgType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WarnOnPermaDeathStateMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeOfflineSoldItemsMessage extends DofusMessage {
    static id: number;
    merchantItems: ObjectItemQuantityPriceDateEffects[] | undefined;
    bidHouseItems: ObjectItemQuantityPriceDateEffects[] | undefined;
    constructor(merchantItems?: ObjectItemQuantityPriceDateEffects[] | undefined, bidHouseItems?: ObjectItemQuantityPriceDateEffects[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyLeaveMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QueueStatusMessage extends DofusMessage {
    static id: number;
    total: number | undefined;
    position: number | undefined;
    constructor(total?: number | undefined, position?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectAddedMessage extends ExchangeObjectMessage {
    static id: number;
    object_: ObjectItem | undefined;
    constructor(remote?: boolean | undefined, object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeShopStockMovementUpdatedMessage extends DofusMessage {
    static id: number;
    objectInfo: ObjectItemToSell | undefined;
    constructor(objectInfo?: ObjectItemToSell | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractTaxCollectorListMessage extends DofusMessage {
    static id: number;
    informations: TaxCollectorInformations[] | undefined;
    constructor(informations?: TaxCollectorInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorListMessage extends AbstractTaxCollectorListMessage {
    static id: number;
    fightersInformations: TaxCollectorFightersInformation[] | undefined;
    infoType: number | undefined;
    nbcollectorMax: number | undefined;
    constructor(informations?: TaxCollectorInformations[] | undefined, fightersInformations?: TaxCollectorFightersInformation[] | undefined, infoType?: number | undefined, nbcollectorMax?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayDelayedActionMessage extends DofusMessage {
    static id: number;
    delayTypeId: number | undefined;
    delayEndTime: number | undefined;
    delayedCharacterId: number | undefined;
    constructor(delayTypeId?: number | undefined, delayEndTime?: number | undefined, delayedCharacterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PauseDialogMessage extends DofusMessage {
    static id: number;
    dialogType: number | undefined;
    constructor(dialogType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportDestinationsMessage extends DofusMessage {
    static id: number;
    destinations: TeleportDestination[] | undefined;
    type: number | undefined;
    constructor(destinations?: TeleportDestination[] | undefined, type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LifePointsRegenBeginMessage extends DofusMessage {
    static id: number;
    regenRate: number | undefined;
    constructor(regenRate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachBranchesMessage extends DofusMessage {
    static id: number;
    branches: ExtendedBreachBranch[] | undefined;
    constructor(branches?: ExtendedBreachBranch[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildApplicationDeletedMessage extends DofusMessage {
    static id: number;
    deleted: boolean | undefined;
    constructor(deleted?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CheckFileRequestMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    filename: string | undefined;
    constructor(type?: number | undefined, filename?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ForgettableSpellListUpdateMessage extends DofusMessage {
    static id: number;
    spells: ForgettableSpellItem[] | undefined;
    action: number | undefined;
    constructor(spells?: ForgettableSpellItem[] | undefined, action?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharactersListMessage extends BasicCharactersListMessage {
    static id: number;
    hasStartupActions: boolean | undefined;
    constructor(characters?: CharacterBaseInformations[] | undefined, hasStartupActions?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharactersListWithRemodelingMessage extends CharactersListMessage {
    static id: number;
    charactersToRemodel: CharacterToRemodelInformations[] | undefined;
    constructor(characters?: CharacterBaseInformations[] | undefined, hasStartupActions?: boolean | undefined, charactersToRemodel?: CharacterToRemodelInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveElementUpdatedMessage extends DofusMessage {
    static id: number;
    interactiveElement: InteractiveElement | undefined;
    constructor(interactiveElement?: InteractiveElement | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayFightRequestCanceledMessage extends DofusMessage {
    static id: number;
    sourceId: number | undefined;
    targetId: number | undefined;
    fightId: number | undefined;
    constructor(sourceId?: number | undefined, targetId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachSavedMessage extends DofusMessage {
    static id: number;
    saved: boolean | undefined;
    constructor(saved?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightPlayersHelpersLeaveMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    fightId: number | undefined;
    constructor(playerId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiApiKeyMessage extends DofusMessage {
    static id: number;
    token: string | undefined;
    constructor(token?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TopTaxCollectorListMessage extends AbstractTaxCollectorListMessage {
    static id: number;
    isDungeon: boolean | undefined;
    constructor(informations?: TaxCollectorInformations[] | undefined, isDungeon?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaFighterStatusMessage extends DofusMessage {
    static id: number;
    accepted: boolean | undefined;
    playerId: number | undefined;
    fightId: number | undefined;
    constructor(accepted?: boolean | undefined, playerId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatServerCopyMessage extends ChatAbstractServerMessage {
    static id: number;
    receiverName: string | undefined;
    receiverId: number | undefined;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined, receiverName?: string | undefined, receiverId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatSmileyMessage extends DofusMessage {
    static id: number;
    accountId: number | undefined;
    smileyId: number | undefined;
    entityId: number | undefined;
    constructor(accountId?: number | undefined, smileyId?: number | undefined, entityId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LocalizedChatSmileyMessage extends ChatSmileyMessage {
    static id: number;
    cellId: number | undefined;
    constructor(accountId?: number | undefined, smileyId?: number | undefined, entityId?: number | undefined, cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaSwitchToFightServerMessage extends DofusMessage {
    static id: number;
    address: string | undefined;
    ports: number[] | undefined;
    ticket: number[] | undefined;
    constructor(address?: string | undefined, ports?: number[] | undefined, ticket?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ProtocolRequired extends DofusMessage {
    static id: number;
    version: string | undefined;
    constructor(version?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CompassUpdateMessage extends DofusMessage {
    static id: number;
    coords: MapCoordinates | undefined;
    type: number | undefined;
    constructor(coords?: MapCoordinates | undefined, type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRefreshMonsterBoostsMessage extends DofusMessage {
    static id: number;
    familyBoosts: MonsterBoosts[] | undefined;
    monsterBoosts: MonsterBoosts[] | undefined;
    constructor(familyBoosts?: MonsterBoosts[] | undefined, monsterBoosts?: MonsterBoosts[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildPlayerApplicationAbstractMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildPlayerApplicationInformationMessage extends GuildPlayerApplicationAbstractMessage {
    static id: number;
    apply: GuildApplicationInformation | undefined;
    guildInformation: GuildInformations | undefined;
    constructor(apply?: GuildApplicationInformation | undefined, guildInformation?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderRegisterSuccessMessage extends DofusMessage {
    static id: number;
    dungeonIds: number[] | undefined;
    constructor(dungeonIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpellVariantActivationMessage extends DofusMessage {
    static id: number;
    result: boolean | undefined;
    spellId: number | undefined;
    constructor(result?: boolean | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StorageObjectsRemoveMessage extends DofusMessage {
    static id: number;
    objectUIDList: number[] | undefined;
    constructor(objectUIDList?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountReleasedMessage extends DofusMessage {
    static id: number;
    mountId: number | undefined;
    constructor(mountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DecraftResultMessage extends DofusMessage {
    static id: number;
    results: DecraftedItemStackInfo[] | undefined;
    constructor(results?: DecraftedItemStackInfo[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapFightStartPositionsUpdateMessage extends DofusMessage {
    static id: number;
    fightStartPositions: FightStartingPositions | undefined;
    mapId: number | undefined;
    constructor(fightStartPositions?: FightStartingPositions | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OrnamentLostMessage extends DofusMessage {
    static id: number;
    ornamentId: number | undefined;
    constructor(ornamentId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NetworkDataContainerMessage extends DofusMessage {
    static id: number;
    constructor();
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildPaddockBoughtMessage extends DofusMessage {
    static id: number;
    paddockInfo: PaddockContentInformations | undefined;
    constructor(paddockInfo?: PaddockContentInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractPartyMemberInFightMessage extends AbstractPartyMessage {
    static id: number;
    timeBeforeFightStart: number | undefined;
    reason: number | undefined;
    memberAccountId: number | undefined;
    fightId: number | undefined;
    memberId: number | undefined;
    memberName: string | undefined;
    constructor(partyId?: number | undefined, timeBeforeFightStart?: number | undefined, reason?: number | undefined, memberAccountId?: number | undefined, fightId?: number | undefined, memberId?: number | undefined, memberName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberInStandardFightMessage extends AbstractPartyMemberInFightMessage {
    static id: number;
    fightMap: MapCoordinatesExtended | undefined;
    constructor(partyId?: number | undefined, timeBeforeFightStart?: number | undefined, reason?: number | undefined, memberAccountId?: number | undefined, fightId?: number | undefined, memberId?: number | undefined, memberName?: string | undefined, fightMap?: MapCoordinatesExtended | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedMessage extends DofusMessage {
    static id: number;
    exchangeType: number | undefined;
    constructor(exchangeType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpouseStatusMessage extends DofusMessage {
    static id: number;
    hasSpouse: boolean | undefined;
    constructor(hasSpouse?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SubscriptionLimitationMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidPriceMessage extends DofusMessage {
    static id: number;
    averagePrice: number | undefined;
    genericId: number | undefined;
    constructor(averagePrice?: number | undefined, genericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidPriceForSellerMessage extends ExchangeBidPriceMessage {
    static id: number;
    minimalPrices: number[] | undefined;
    allIdentical: boolean | undefined;
    constructor(averagePrice?: number | undefined, genericId?: number | undefined, minimalPrices?: number[] | undefined, allIdentical?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableShowCodeDialogMessage extends DofusMessage {
    static id: number;
    codeSize: number | undefined;
    changeOrUse: boolean | undefined;
    constructor(codeSize?: number | undefined, changeOrUse?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightPlayersHelpersJoinMessage extends DofusMessage {
    static id: number;
    playerInfo: CharacterMinimalPlusLookInformations | undefined;
    fightId: number | undefined;
    constructor(playerInfo?: CharacterMinimalPlusLookInformations | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorMovementsOfflineMessage extends DofusMessage {
    static id: number;
    movements: TaxCollectorMovement[] | undefined;
    constructor(movements?: TaxCollectorMovement[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateLifePointsMessage extends DofusMessage {
    static id: number;
    maxLifePoints: number | undefined;
    lifePoints: number | undefined;
    constructor(maxLifePoints?: number | undefined, lifePoints?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ReloginTokenStatusMessage extends DofusMessage {
    static id: number;
    ticket: number[] | undefined;
    validToken: boolean | undefined;
    constructor(ticket?: number[] | undefined, validToken?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitleGainedMessage extends DofusMessage {
    static id: number;
    titleId: number | undefined;
    constructor(titleId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InventoryContentMessage extends DofusMessage {
    static id: number;
    kamas: number | undefined;
    objects: ObjectItem[] | undefined;
    constructor(kamas?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StorageInventoryContentMessage extends InventoryContentMessage {
    static id: number;
    constructor(kamas?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeShopStockMultiMovementRemovedMessage extends DofusMessage {
    static id: number;
    objectIdList: number[] | undefined;
    constructor(objectIdList?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorAttackedResultMessage extends DofusMessage {
    static id: number;
    deadOrAlive: boolean | undefined;
    guild: BasicGuildInformations | undefined;
    basicInfos: TaxCollectorBasicInformations | undefined;
    constructor(deadOrAlive?: boolean | undefined, guild?: BasicGuildInformations | undefined, basicInfos?: TaxCollectorBasicInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectRemovedMessage extends ExchangeObjectMessage {
    static id: number;
    objectUID: number | undefined;
    constructor(remote?: boolean | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightAttackerAddMessage extends DofusMessage {
    static id: number;
    attacker: CharacterMinimalPlusLookInformations | undefined;
    fightId: number | undefined;
    subAreaId: number | undefined;
    constructor(attacker?: CharacterMinimalPlusLookInformations | undefined, fightId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LivingObjectMessageMessage extends DofusMessage {
    static id: number;
    objectGenericId: number | undefined;
    owner: string | undefined;
    timeStamp: number | undefined;
    msgId: number | undefined;
    constructor(objectGenericId?: number | undefined, owner?: string | undefined, timeStamp?: number | undefined, msgId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationMessage extends AbstractPartyMessage {
    static id: number;
    toId: number | undefined;
    fromName: string | undefined;
    partyType: number | undefined;
    partyName: string | undefined;
    maxParticipants: number | undefined;
    fromId: number | undefined;
    constructor(partyId?: number | undefined, toId?: number | undefined, fromName?: string | undefined, partyType?: number | undefined, partyName?: string | undefined, maxParticipants?: number | undefined, fromId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntRequestAnswerMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    questType: number | undefined;
    constructor(result?: number | undefined, questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterLoadingCompleteMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaPlayerBehavioursMessage extends DofusMessage {
    static id: number;
    flags: string[] | undefined;
    sanctions: string[] | undefined;
    banDuration: number | undefined;
    constructor(flags?: string[] | undefined, sanctions?: string[] | undefined, banDuration?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntFlagRequestAnswerMessage extends DofusMessage {
    static id: number;
    index: number | undefined;
    result: number | undefined;
    questType: number | undefined;
    constructor(index?: number | undefined, result?: number | undefined, questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeIsReadyMessage extends DofusMessage {
    static id: number;
    ready: boolean | undefined;
    id_: number | undefined;
    constructor(ready?: boolean | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementAlmostFinishedDetailedListMessage extends DofusMessage {
    static id: number;
    almostFinishedAchievements: Achievement[] | undefined;
    constructor(almostFinishedAchievements?: Achievement[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceFactsErrorMessage extends DofusMessage {
    static id: number;
    allianceId: number | undefined;
    constructor(allianceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveUseEndedMessage extends DofusMessage {
    static id: number;
    skillId: number | undefined;
    elemId: number | undefined;
    constructor(skillId?: number | undefined, elemId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInvitedMessage extends DofusMessage {
    static id: number;
    recruterName: string | undefined;
    allianceInfo: BasicNamedAllianceInformations | undefined;
    recruterId: number | undefined;
    constructor(recruterName?: string | undefined, allianceInfo?: BasicNamedAllianceInformations | undefined, recruterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkCraftMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyLocateMembersMessage extends AbstractPartyMessage {
    static id: number;
    geopositions: PartyMemberGeoPosition[] | undefined;
    constructor(partyId?: number | undefined, geopositions?: PartyMemberGeoPosition[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectsDeletedMessage extends DofusMessage {
    static id: number;
    objectUID: number[] | undefined;
    constructor(objectUID?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockPropertiesMessage extends DofusMessage {
    static id: number;
    properties: PaddockInstancesInformations | undefined;
    constructor(properties?: PaddockInstancesInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextRemoveMultipleElementsWithEventsMessage extends GameContextRemoveMultipleElementsMessage {
    static id: number;
    elementEventIds: number[] | undefined;
    constructor(elementsIds?: number[] | undefined, elementEventIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkMulticraftCustomerMessage extends DofusMessage {
    static id: number;
    crafterJobLevel: number | undefined;
    skillId: number | undefined;
    constructor(crafterJobLevel?: number | undefined, skillId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SocialNoticeSetErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildBulletinSetErrorMessage extends SocialNoticeSetErrorMessage {
    static id: number;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccessoryPreviewMessage extends DofusMessage {
    static id: number;
    look: EntityLook | undefined;
    constructor(look?: EntityLook | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkNpcShopMessage extends DofusMessage {
    static id: number;
    objectsInfos: ObjectItemToSellInNpcShop[] | undefined;
    tokenId: number | undefined;
    npcSellerId: number | undefined;
    constructor(objectsInfos?: ObjectItemToSellInNpcShop[] | undefined, tokenId?: number | undefined, npcSellerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyUpdateMessage extends AbstractPartyEventMessage {
    static id: number;
    memberInformations: PartyMemberInformations | undefined;
    constructor(partyId?: number | undefined, memberInformations?: PartyMemberInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyNewMemberMessage extends PartyUpdateMessage {
    static id: number;
    constructor(partyId?: number | undefined, memberInformations?: PartyMemberInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InviteInHavenBagMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    guestInformations: CharacterMinimalInformations | undefined;
    constructor(accept?: boolean | undefined, guestInformations?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInvitationStateRecruterMessage extends DofusMessage {
    static id: number;
    invitationState: number | undefined;
    recrutedName: string | undefined;
    constructor(invitationState?: number | undefined, recrutedName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCrafterJobLevelupMessage extends DofusMessage {
    static id: number;
    crafterJobLevel: number | undefined;
    constructor(crafterJobLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredAddFailureMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedBidSellerMessage extends DofusMessage {
    static id: number;
    objectsInfos: ObjectItemToSellInBid[] | undefined;
    sellerDescriptor: SellerBuyerDescriptor | undefined;
    constructor(objectsInfos?: ObjectItemToSellInBid[] | undefined, sellerDescriptor?: SellerBuyerDescriptor | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmotePlayMassiveMessage extends EmotePlayAbstractMessage {
    static id: number;
    actorIds: number[] | undefined;
    constructor(emoteStartTime?: number | undefined, emoteId?: number | undefined, actorIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiValidationMessage extends DofusMessage {
    static id: number;
    code: number | undefined;
    action: number | undefined;
    constructor(code?: number | undefined, action?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredDeleteResultMessage extends DofusMessage {
    static id: number;
    tag: AccountTagInformation | undefined;
    success: boolean | undefined;
    session: boolean | undefined;
    constructor(tag?: AccountTagInformation | undefined, success?: boolean | undefined, session?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CompassUpdatePartyMemberMessage extends CompassUpdateMessage {
    static id: number;
    active: boolean | undefined;
    memberId: number | undefined;
    constructor(coords?: MapCoordinates | undefined, type?: number | undefined, active?: boolean | undefined, memberId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectPutInBagMessage extends ExchangeObjectMessage {
    static id: number;
    object_: ObjectItem | undefined;
    constructor(remote?: boolean | undefined, object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightPlayersEnemiesListMessage extends DofusMessage {
    static id: number;
    playerInfo: CharacterMinimalPlusLookInformations[] | undefined;
    fightId: number | undefined;
    constructor(playerInfo?: CharacterMinimalPlusLookInformations[] | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameCautiousMapMovementMessage extends GameMapMovementMessage {
    static id: number;
    constructor(forcedDirection?: number | undefined, actorId?: number | undefined, keyMovements?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementFinishedMessage extends DofusMessage {
    static id: number;
    achievement: AchievementAchievedRewardable | undefined;
    constructor(achievement?: AchievementAchievedRewardable | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementFinishedInformationMessage extends AchievementFinishedMessage {
    static id: number;
    playerId: number | undefined;
    name: string | undefined;
    constructor(achievement?: AchievementAchievedRewardable | undefined, playerId?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntityTalkMessage extends DofusMessage {
    static id: number;
    parameters: string[] | undefined;
    textId: number | undefined;
    entityId: number | undefined;
    constructor(parameters?: string[] | undefined, textId?: number | undefined, entityId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableStateUpdateAbstractMessage extends DofusMessage {
    static id: number;
    locked: boolean | undefined;
    constructor(locked?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableStateUpdateStorageMessage extends LockableStateUpdateAbstractMessage {
    static id: number;
    elementId: number | undefined;
    mapId: number | undefined;
    constructor(locked?: boolean | undefined, elementId?: number | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedBidBuyerMessage extends DofusMessage {
    static id: number;
    buyerDescriptor: SellerBuyerDescriptor | undefined;
    constructor(buyerDescriptor?: SellerBuyerDescriptor | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceListMessage extends DofusMessage {
    static id: number;
    alliances: AllianceFactSheetInformations[] | undefined;
    constructor(alliances?: AllianceFactSheetInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryEntryMessage extends DofusMessage {
    static id: number;
    playerInfo: JobCrafterDirectoryEntryPlayerInfo | undefined;
    playerLook: EntityLook | undefined;
    jobInfoList: JobCrafterDirectoryEntryJobInfo[] | undefined;
    constructor(playerInfo?: JobCrafterDirectoryEntryPlayerInfo | undefined, playerLook?: EntityLook | undefined, jobInfoList?: JobCrafterDirectoryEntryJobInfo[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObtainedItemMessage extends DofusMessage {
    static id: number;
    baseQuantity: number | undefined;
    genericId: number | undefined;
    constructor(baseQuantity?: number | undefined, genericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObtainedItemWithBonusMessage extends ObtainedItemMessage {
    static id: number;
    bonusQuantity: number | undefined;
    constructor(baseQuantity?: number | undefined, genericId?: number | undefined, bonusQuantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpellListMessage extends DofusMessage {
    static id: number;
    spells: SpellItem[] | undefined;
    spellPrevisualization: boolean | undefined;
    constructor(spells?: SpellItem[] | undefined, spellPrevisualization?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildPaddockRemovedMessage extends DofusMessage {
    static id: number;
    paddockId: number | undefined;
    constructor(paddockId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachInvitationResponseMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    guest: CharacterMinimalInformations | undefined;
    constructor(accept?: boolean | undefined, guest?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildLeftMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EditHavenBagStartMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyRefuseInvitationNotificationMessage extends AbstractPartyEventMessage {
    static id: number;
    guestId: number | undefined;
    constructor(partyId?: number | undefined, guestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterNameSuggestionFailureMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SelectedServerRefusedMessage extends DofusMessage {
    static id: number;
    serverStatus: number | undefined;
    error: number | undefined;
    serverId: number | undefined;
    constructor(serverStatus?: number | undefined, error?: number | undefined, serverId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismInfoInValidMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseBuyResultMessage extends DofusMessage {
    static id: number;
    bought: boolean | undefined;
    uid: number | undefined;
    constructor(bought?: boolean | undefined, uid?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatCommunityChannelCommunityMessage extends DofusMessage {
    static id: number;
    communityId: number | undefined;
    constructor(communityId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolPartyLostMessage extends DofusMessage {
    static id: number;
    idolId: number | undefined;
    constructor(idolId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangePodsModifiedMessage extends ExchangeObjectMessage {
    static id: number;
    maxWeight: number | undefined;
    currentWeight: number | undefined;
    constructor(remote?: boolean | undefined, maxWeight?: number | undefined, currentWeight?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorDialogQuestionBasicMessage extends DofusMessage {
    static id: number;
    guildInfo: BasicGuildInformations | undefined;
    constructor(guildInfo?: BasicGuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionBasicMessage {
    static id: number;
    pods: number | undefined;
    experience: number | undefined;
    kamas: number | undefined;
    maxPods: number | undefined;
    taxCollectorAttack: number | undefined;
    wisdom: number | undefined;
    itemsValue: number | undefined;
    prospecting: number | undefined;
    taxCollectorsCount: number | undefined;
    constructor(guildInfo?: BasicGuildInformations | undefined, pods?: number | undefined, experience?: number | undefined, kamas?: number | undefined, maxPods?: number | undefined, taxCollectorAttack?: number | undefined, wisdom?: number | undefined, itemsValue?: number | undefined, prospecting?: number | undefined, taxCollectorsCount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceTaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionExtendedMessage {
    static id: number;
    alliance: BasicNamedAllianceInformations | undefined;
    constructor(guildInfo?: BasicGuildInformations | undefined, pods?: number | undefined, experience?: number | undefined, kamas?: number | undefined, maxPods?: number | undefined, taxCollectorAttack?: number | undefined, wisdom?: number | undefined, itemsValue?: number | undefined, prospecting?: number | undefined, taxCollectorsCount?: number | undefined, alliance?: BasicNamedAllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorStateUpdateMessage extends DofusMessage {
    static id: number;
    state: number | undefined;
    uniqueId: number | undefined;
    constructor(state?: number | undefined, uniqueId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseGenericItemRemovedMessage extends DofusMessage {
    static id: number;
    objGenericId: number | undefined;
    constructor(objGenericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestStepInfoMessage extends DofusMessage {
    static id: number;
    infos: QuestActiveInformations | undefined;
    constructor(infos?: QuestActiveInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerOptionalFeaturesMessage extends DofusMessage {
    static id: number;
    features: number[] | undefined;
    constructor(features?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachRoomUnlockResultMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    roomId: number | undefined;
    constructor(result?: number | undefined, roomId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderRoomContentUpdateMessage extends DofusMessage {
    static id: number;
    addedPlayers: DungeonPartyFinderPlayer[] | undefined;
    dungeonId: number | undefined;
    removedPlayersIds: number[] | undefined;
    constructor(addedPlayers?: DungeonPartyFinderPlayer[] | undefined, dungeonId?: number | undefined, removedPlayersIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestStepValidatedMessage extends DofusMessage {
    static id: number;
    stepId: number | undefined;
    questId: number | undefined;
    constructor(stepId?: number | undefined, questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CompassUpdatePvpSeekMessage extends CompassUpdateMessage {
    static id: number;
    memberName: string | undefined;
    memberId: number | undefined;
    constructor(coords?: MapCoordinates | undefined, type?: number | undefined, memberName?: string | undefined, memberId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceFactsMessage extends DofusMessage {
    static id: number;
    leaderCharacterName: string | undefined;
    infos: AllianceFactSheetInformations | undefined;
    guilds: GuildInAllianceInformations[] | undefined;
    controlledSubareaIds: number[] | undefined;
    leaderCharacterId: number | undefined;
    constructor(leaderCharacterName?: string | undefined, infos?: AllianceFactSheetInformations | undefined, guilds?: GuildInAllianceInformations[] | undefined, controlledSubareaIds?: number[] | undefined, leaderCharacterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightDefenderAddMessage extends DofusMessage {
    static id: number;
    fightId: number | undefined;
    defender: CharacterMinimalPlusLookInformations | undefined;
    subAreaId: number | undefined;
    constructor(fightId?: number | undefined, defender?: CharacterMinimalPlusLookInformations | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryAddMessage extends DofusMessage {
    static id: number;
    listEntry: JobCrafterDirectoryListEntry | undefined;
    constructor(listEntry?: JobCrafterDirectoryListEntry | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarSwapErrorMessage extends DofusMessage {
    static id: number;
    error: number | undefined;
    constructor(error?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationDungeonMessage extends PartyInvitationMessage {
    static id: number;
    dungeonId: number | undefined;
    constructor(partyId?: number | undefined, toId?: number | undefined, fromName?: string | undefined, partyType?: number | undefined, partyName?: string | undefined, maxParticipants?: number | undefined, fromId?: number | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachBudgetMessage extends DofusMessage {
    static id: number;
    bugdet: number | undefined;
    constructor(bugdet?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobAllowMultiCraftRequestMessage extends DofusMessage {
    static id: number;
    enabled: boolean | undefined;
    constructor(enabled?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobMultiCraftAvailableSkillsMessage extends JobAllowMultiCraftRequestMessage {
    static id: number;
    skills: number[] | undefined;
    playerId: number | undefined;
    constructor(enabled?: boolean | undefined, skills?: number[] | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountsStableAddMessage extends DofusMessage {
    static id: number;
    mountDescription: MountClientData[] | undefined;
    constructor(mountDescription?: MountClientData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendAddedMessage extends DofusMessage {
    static id: number;
    friendAdded: FriendInformations | undefined;
    constructor(friendAdded?: FriendInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCanBeCreatedResultMessage extends DofusMessage {
    static id: number;
    yesYouCan: boolean | undefined;
    constructor(yesYouCan?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NpcGenericActionFailureMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountHouseMessage extends DofusMessage {
    static id: number;
    houses: AccountHouseInformations[] | undefined;
    constructor(houses?: AccountHouseInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintanceSearchErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkRecycleTradeMessage extends DofusMessage {
    static id: number;
    percentToPlayer: number | undefined;
    percentToPrism: number | undefined;
    constructor(percentToPlayer?: number | undefined, percentToPrism?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatsUpgradeResultMessage extends DofusMessage {
    static id: number;
    nbCharacBoost: number | undefined;
    result: number | undefined;
    constructor(nbCharacBoost?: number | undefined, result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapRunningFightListMessage extends DofusMessage {
    static id: number;
    fights: FightExternalInformations[] | undefined;
    constructor(fights?: FightExternalInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SequenceNumberRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationDetailsMessage extends AbstractPartyMessage {
    static id: number;
    guests: PartyGuestInformations[] | undefined;
    partyType: number | undefined;
    leaderId: number | undefined;
    members: PartyInvitationMemberInformations[] | undefined;
    partyName: string | undefined;
    fromId: number | undefined;
    fromName: string | undefined;
    constructor(partyId?: number | undefined, guests?: PartyGuestInformations[] | undefined, partyType?: number | undefined, leaderId?: number | undefined, members?: PartyInvitationMemberInformations[] | undefined, partyName?: string | undefined, fromId?: number | undefined, fromName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationDungeonDetailsMessage extends PartyInvitationDetailsMessage {
    static id: number;
    playersDungeonReady: boolean[] | undefined;
    dungeonId: number | undefined;
    constructor(partyId?: number | undefined, guests?: PartyGuestInformations[] | undefined, partyType?: number | undefined, leaderId?: number | undefined, members?: PartyInvitationMemberInformations[] | undefined, partyName?: string | undefined, fromId?: number | undefined, fromName?: string | undefined, playersDungeonReady?: boolean[] | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeTypesExchangerDescriptionForUserMessage extends DofusMessage {
    static id: number;
    typeDescription: number[] | undefined;
    objectType: number | undefined;
    constructor(typeDescription?: number[] | undefined, objectType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectorySettingsMessage extends DofusMessage {
    static id: number;
    craftersSettings: JobCrafterDirectorySettings[] | undefined;
    constructor(craftersSettings?: JobCrafterDirectorySettings[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MoodSmileyUpdateMessage extends DofusMessage {
    static id: number;
    smileyId: number | undefined;
    playerId: number | undefined;
    accountId: number | undefined;
    constructor(smileyId?: number | undefined, playerId?: number | undefined, accountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaInvitationCandidatesAnswerMessage extends DofusMessage {
    static id: number;
    candidates: LeagueFriendInformations[] | undefined;
    constructor(candidates?: LeagueFriendInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmotePlayMessage extends EmotePlayAbstractMessage {
    static id: number;
    accountId: number | undefined;
    actorId: number | undefined;
    constructor(emoteStartTime?: number | undefined, emoteId?: number | undefined, accountId?: number | undefined, actorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SelectedServerDataMessage extends DofusMessage {
    static id: number;
    serverId: number | undefined;
    address: string | undefined;
    ports: number[] | undefined;
    ticket: number[] | undefined;
    canCreateNewCharacter: boolean | undefined;
    constructor(serverId?: number | undefined, address?: string | undefined, ports?: number[] | undefined, ticket?: number[] | undefined, canCreateNewCharacter?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SelectedServerDataExtendedMessage extends SelectedServerDataMessage {
    static id: number;
    servers: GameServerInformations[] | undefined;
    constructor(serverId?: number | undefined, address?: string | undefined, ports?: number[] | undefined, ticket?: number[] | undefined, canCreateNewCharacter?: boolean | undefined, servers?: GameServerInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendWarnOnConnectionStateMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderRoomContentMessage extends DofusMessage {
    static id: number;
    players: DungeonPartyFinderPlayer[] | undefined;
    dungeonId: number | undefined;
    constructor(players?: DungeonPartyFinderPlayer[] | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicDateMessage extends DofusMessage {
    static id: number;
    year: number | undefined;
    month: number | undefined;
    day: number | undefined;
    constructor(year?: number | undefined, month?: number | undefined, day?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildApplicationReceivedMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    playerName: string | undefined;
    constructor(playerId?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountsStableBornAddMessage extends ExchangeMountsStableAddMessage {
    static id: number;
    constructor(mountDescription?: MountClientData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobDescriptionMessage extends DofusMessage {
    static id: number;
    jobsDescription: JobDescription[] | undefined;
    constructor(jobsDescription?: JobDescription[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountLoggingKickedMessage extends DofusMessage {
    static id: number;
    minutes: number | undefined;
    hours: number | undefined;
    days: number | undefined;
    constructor(minutes?: number | undefined, hours?: number | undefined, days?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectModifiedInBagMessage extends ExchangeObjectMessage {
    static id: number;
    object_: ObjectItem | undefined;
    constructor(remote?: boolean | undefined, object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DebtsUpdateMessage extends DofusMessage {
    static id: number;
    debts: DebtInformation[] | undefined;
    action: number | undefined;
    constructor(debts?: DebtInformation[] | undefined, action?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaUpdatePlayerInfosMessage extends DofusMessage {
    static id: number;
    solo: ArenaRankInfos | undefined;
    constructor(solo?: ArenaRankInfos | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaUpdatePlayerInfosAllQueuesMessage extends GameRolePlayArenaUpdatePlayerInfosMessage {
    static id: number;
    duel: ArenaRankInfos | undefined;
    team: ArenaRankInfos | undefined;
    constructor(solo?: ArenaRankInfos | undefined, duel?: ArenaRankInfos | undefined, team?: ArenaRankInfos | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildCreationResultMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    constructor(result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStoppedMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeShopStockMultiMovementUpdatedMessage extends DofusMessage {
    static id: number;
    objectInfoList: ObjectItemToSell[] | undefined;
    constructor(objectInfoList?: ObjectItemToSell[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountInformationsUpdateMessage extends DofusMessage {
    static id: number;
    subscriptionEndDate: number | undefined;
    constructor(subscriptionEndDate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitleSelectErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountCapabilitiesMessage extends DofusMessage {
    static id: number;
    status: number | undefined;
    breedsVisible: number | undefined;
    accountId: number | undefined;
    breedsAvailable: number | undefined;
    tutorialAvailable: boolean | undefined;
    canCreateNewCharacter: boolean | undefined;
    constructor(status?: number | undefined, breedsVisible?: number | undefined, accountId?: number | undefined, breedsAvailable?: number | undefined, tutorialAvailable?: boolean | undefined, canCreateNewCharacter?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntDigRequestAnswerMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    questType: number | undefined;
    constructor(result?: number | undefined, questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntDigRequestAnswerFailedMessage extends TreasureHuntDigRequestAnswerMessage {
    static id: number;
    wrongFlagCount: number | undefined;
    constructor(result?: number | undefined, questType?: number | undefined, wrongFlagCount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameEntityDispositionErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmoteAddMessage extends DofusMessage {
    static id: number;
    emoteId: number | undefined;
    constructor(emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMotdMessage extends SocialNoticeMessage {
    static id: number;
    constructor(memberName?: string | undefined, memberId?: number | undefined, timestamp?: number | undefined, content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyLeaderUpdateMessage extends AbstractPartyEventMessage {
    static id: number;
    partyLeaderId: number | undefined;
    constructor(partyId?: number | undefined, partyLeaderId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatAdminServerMessage extends ChatServerMessage {
    static id: number;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined, senderAccountId?: number | undefined, prefix?: string | undefined, senderName?: string | undefined, senderId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountSterilizedMessage extends DofusMessage {
    static id: number;
    mountId: number | undefined;
    constructor(mountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicWhoIsMessage extends DofusMessage {
    static id: number;
    playerState: number | undefined;
    accountId: number | undefined;
    playerName: string | undefined;
    position: number | undefined;
    socialGroups: AbstractSocialGroupInfos[] | undefined;
    accountTag: AccountTagInformation | undefined;
    areaId: number | undefined;
    serverId: number | undefined;
    playerId: number | undefined;
    originServerId: number | undefined;
    self: boolean | undefined;
    verbose: boolean | undefined;
    constructor(playerState?: number | undefined, accountId?: number | undefined, playerName?: string | undefined, position?: number | undefined, socialGroups?: AbstractSocialGroupInfos[] | undefined, accountTag?: AccountTagInformation | undefined, areaId?: number | undefined, serverId?: number | undefined, playerId?: number | undefined, originServerId?: number | undefined, self?: boolean | undefined, verbose?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectAddedMessage extends DofusMessage {
    static id: number;
    origin: number | undefined;
    object_: ObjectItem | undefined;
    constructor(origin?: number | undefined, object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionNoopMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PopupWarningMessage extends DofusMessage {
    static id: number;
    content: string | undefined;
    author: string | undefined;
    lockDuration: number | undefined;
    constructor(content?: string | undefined, author?: string | undefined, lockDuration?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobExperienceUpdateMessage extends DofusMessage {
    static id: number;
    experiencesUpdate: JobExperience | undefined;
    constructor(experiencesUpdate?: JobExperience | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInformationsPaddocksMessage extends DofusMessage {
    static id: number;
    paddocksInformations: PaddockContentInformations[] | undefined;
    nbPaddockMax: number | undefined;
    constructor(paddocksInformations?: PaddockContentInformations[] | undefined, nbPaddockMax?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildVersatileInfoListMessage extends DofusMessage {
    static id: number;
    guilds: GuildVersatileInformations[] | undefined;
    constructor(guilds?: GuildVersatileInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationFailedMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage {
    static id: number;
    requiredVersion: Version | undefined;
    constructor(reason?: number | undefined, requiredVersion?: Version | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobLevelUpMessage extends DofusMessage {
    static id: number;
    jobsDescription: JobDescription | undefined;
    newLevel: number | undefined;
    constructor(jobsDescription?: JobDescription | undefined, newLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseInListAddedMessage extends DofusMessage {
    static id: number;
    prices: number[] | undefined;
    objectGID: number | undefined;
    objectType: number | undefined;
    itemUID: number | undefined;
    effects: ObjectEffect[] | undefined;
    constructor(prices?: number[] | undefined, objectGID?: number | undefined, objectType?: number | undefined, itemUID?: number | undefined, effects?: ObjectEffect[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedMountStockMessage extends DofusMessage {
    static id: number;
    objectsInfos: ObjectItem[] | undefined;
    constructor(objectsInfos?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachCharactersMessage extends DofusMessage {
    static id: number;
    characters: number[] | undefined;
    constructor(characters?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceVersatileInfoListMessage extends DofusMessage {
    static id: number;
    alliances: AllianceVersatileInformations[] | undefined;
    constructor(alliances?: AllianceVersatileInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiShopApiKeyMessage extends DofusMessage {
    static id: number;
    token: string | undefined;
    constructor(token?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SymbioticObjectErrorMessage extends ObjectErrorMessage {
    static id: number;
    errorCode: number | undefined;
    constructor(reason?: number | undefined, errorCode?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MimicryObjectErrorMessage extends SymbioticObjectErrorMessage {
    static id: number;
    preview: boolean | undefined;
    constructor(reason?: number | undefined, errorCode?: number | undefined, preview?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class KohUpdateMessage extends DofusMessage {
    static id: number;
    allianceMatchScore: number[] | undefined;
    allianceNbMembers: number[] | undefined;
    allianceMapMyAllianceScore: number | undefined;
    alliances: AllianceInformations[] | undefined;
    allianceMapWinners: BasicAllianceInformations[] | undefined;
    allianceMapWinnerScore: number | undefined;
    allianceRoundWeigth: number[] | undefined;
    nextTickTime: number | undefined;
    constructor(allianceMatchScore?: number[] | undefined, allianceNbMembers?: number[] | undefined, allianceMapMyAllianceScore?: number | undefined, alliances?: AllianceInformations[] | undefined, allianceMapWinners?: BasicAllianceInformations[] | undefined, allianceMapWinnerScore?: number | undefined, allianceRoundWeigth?: number[] | undefined, nextTickTime?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ClientUIOpenedMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    constructor(type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ClientUIOpenedByObjectMessage extends ClientUIOpenedMessage {
    static id: number;
    uid: number | undefined;
    constructor(type?: number | undefined, uid?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportBuddiesRequestedMessage extends DofusMessage {
    static id: number;
    invalidBuddiesIds: number[] | undefined;
    inviterId: number | undefined;
    dungeonId: number | undefined;
    constructor(invalidBuddiesIds?: number[] | undefined, inviterId?: number | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkEvolutiveObjectRecycleTradeMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftPaymentModifiedMessage extends DofusMessage {
    static id: number;
    goldSum: number | undefined;
    constructor(goldSum?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceMotdSetErrorMessage extends SocialNoticeSetErrorMessage {
    static id: number;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LeaveDialogMessage extends DofusMessage {
    static id: number;
    dialogType: number | undefined;
    constructor(dialogType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeLeaveMessage extends LeaveDialogMessage {
    static id: number;
    success: boolean | undefined;
    constructor(dialogType?: number | undefined, success?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachRoomLockedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolListMessage extends DofusMessage {
    static id: number;
    chosenIdols: number[] | undefined;
    partyChosenIdols: number[] | undefined;
    partyIdols: PartyIdol[] | undefined;
    constructor(chosenIdols?: number[] | undefined, partyChosenIdols?: number[] | undefined, partyIdols?: PartyIdol[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmoteRemoveMessage extends DofusMessage {
    static id: number;
    emoteId: number | undefined;
    constructor(emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeGuildTaxCollectorGetMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    worldY: number | undefined;
    worldX: number | undefined;
    collectorName: string | undefined;
    callerId: number | undefined;
    userName: string | undefined;
    objectsInfos: ObjectItemGenericQuantity[] | undefined;
    experience: number | undefined;
    subAreaId: number | undefined;
    callerName: string | undefined;
    pods: number | undefined;
    constructor(mapId?: number | undefined, worldY?: number | undefined, worldX?: number | undefined, collectorName?: string | undefined, callerId?: number | undefined, userName?: string | undefined, objectsInfos?: ObjectItemGenericQuantity[] | undefined, experience?: number | undefined, subAreaId?: number | undefined, callerName?: string | undefined, pods?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMotdSetErrorMessage extends SocialNoticeSetErrorMessage {
    static id: number;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaSwitchToGameServerMessage extends DofusMessage {
    static id: number;
    ticket: number[] | undefined;
    homeServerId: number | undefined;
    validToken: boolean | undefined;
    constructor(ticket?: number[] | undefined, homeServerId?: number | undefined, validToken?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ContactLookMessage extends DofusMessage {
    static id: number;
    requestId: number | undefined;
    playerName: string | undefined;
    look: EntityLook | undefined;
    playerId: number | undefined;
    constructor(requestId?: number | undefined, playerName?: string | undefined, look?: EntityLook | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlliancePartialListMessage extends AllianceListMessage {
    static id: number;
    constructor(alliances?: AllianceFactSheetInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapRunningFightDetailsMessage extends DofusMessage {
    static id: number;
    defenders: GameFightFighterLightInformations[] | undefined;
    fightId: number | undefined;
    attackers: GameFightFighterLightInformations[] | undefined;
    constructor(defenders?: GameFightFighterLightInformations[] | undefined, fightId?: number | undefined, attackers?: GameFightFighterLightInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapRunningFightDetailsExtendedMessage extends MapRunningFightDetailsMessage {
    static id: number;
    namedPartyTeams: NamedPartyTeam[] | undefined;
    constructor(defenders?: GameFightFighterLightInformations[] | undefined, fightId?: number | undefined, attackers?: GameFightFighterLightInformations[] | undefined, namedPartyTeams?: NamedPartyTeam[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintanceServerListMessage extends DofusMessage {
    static id: number;
    servers: number[] | undefined;
    constructor(servers?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderRegisterErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmoteListMessage extends DofusMessage {
    static id: number;
    emoteIds: number[] | undefined;
    constructor(emoteIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitlesAndOrnamentsListMessage extends DofusMessage {
    static id: number;
    ornaments: number[] | undefined;
    titles: number[] | undefined;
    activeTitle: number | undefined;
    activeOrnament: number | undefined;
    constructor(ornaments?: number[] | undefined, titles?: number[] | undefined, activeTitle?: number | undefined, activeOrnament?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiConfirmationMessage extends DofusMessage {
    static id: number;
    kamas: number | undefined;
    transaction: string | undefined;
    amount: number | undefined;
    action: number | undefined;
    rate: number | undefined;
    constructor(kamas?: number | undefined, transaction?: string | undefined, amount?: number | undefined, action?: number | undefined, rate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismsInfoValidMessage extends DofusMessage {
    static id: number;
    fights: PrismFightersInformation[] | undefined;
    constructor(fights?: PrismFightersInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InviteInHavenBagOfferMessage extends DofusMessage {
    static id: number;
    timeLeftBeforeCancel: number | undefined;
    hostInformations: CharacterMinimalInformations | undefined;
    constructor(timeLeftBeforeCancel?: number | undefined, hostInformations?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagPackListMessage extends DofusMessage {
    static id: number;
    packIds: number[] | undefined;
    constructor(packIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterDeletionErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagFurnituresMessage extends DofusMessage {
    static id: number;
    furnituresInfos: HavenBagFurnitureInformation[] | undefined;
    constructor(furnituresInfos?: HavenBagFurnitureInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintancesListMessage extends DofusMessage {
    static id: number;
    acquaintanceList: AcquaintanceInformation[] | undefined;
    constructor(acquaintanceList?: AcquaintanceInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedTaxCollectorShopMessage extends DofusMessage {
    static id: number;
    kamas: number | undefined;
    objects: ObjectItem[] | undefined;
    constructor(kamas?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildHouseRemoveMessage extends DofusMessage {
    static id: number;
    instanceId: number | undefined;
    secondHand: boolean | undefined;
    houseId: number | undefined;
    constructor(instanceId?: number | undefined, secondHand?: boolean | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntFinishedMessage extends DofusMessage {
    static id: number;
    questType: number | undefined;
    constructor(questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiBufferListMessage extends DofusMessage {
    static id: number;
    buffers: BufferInformation[] | undefined;
    constructor(buffers?: BufferInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WrapperObjectAssociatedMessage extends SymbioticObjectAssociatedMessage {
    static id: number;
    constructor(hostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectDeletedMessage extends DofusMessage {
    static id: number;
    objectUID: number | undefined;
    constructor(objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberEjectedMessage extends PartyMemberRemoveMessage {
    static id: number;
    kickerId: number | undefined;
    constructor(partyId?: number | undefined, leavingPlayerId?: number | undefined, kickerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountsStableRemoveMessage extends DofusMessage {
    static id: number;
    mountsId: number[] | undefined;
    constructor(mountsId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceCreationStartedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InventoryWeightMessage extends DofusMessage {
    static id: number;
    weightMax: number | undefined;
    shopWeight: number | undefined;
    inventoryWeight: number | undefined;
    constructor(weightMax?: number | undefined, shopWeight?: number | undefined, inventoryWeight?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountDataErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMoneyMovementInformationMessage extends DofusMessage {
    static id: number;
    limit: number | undefined;
    constructor(limit?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ZaapRespawnUpdatedMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    constructor(mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMultiCraftCrafterCanUseHisRessourcesMessage extends DofusMessage {
    static id: number;
    allowed: boolean | undefined;
    constructor(allowed?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InvalidPresetsMessage extends DofusMessage {
    static id: number;
    presetIds: number[] | undefined;
    constructor(presetIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetSaveErrorMessage extends DofusMessage {
    static id: number;
    code: number | undefined;
    presetId: number | undefined;
    constructor(code?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInformationsMemberUpdateMessage extends DofusMessage {
    static id: number;
    member: GuildMember | undefined;
    constructor(member?: GuildMember | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedWithStorageMessage extends ExchangeStartedMessage {
    static id: number;
    storageMaxSlot: number | undefined;
    constructor(exchangeType?: number | undefined, storageMaxSlot?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportToBuddyOfferMessage extends DofusMessage {
    static id: number;
    timeLeft: number | undefined;
    buddyId: number | undefined;
    dungeonId: number | undefined;
    constructor(timeLeft?: number | undefined, buddyId?: number | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyLoyaltyStatusMessage extends AbstractPartyMessage {
    static id: number;
    loyal: boolean | undefined;
    constructor(partyId?: number | undefined, loyal?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PopupWarningClosedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryRemoveMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    jobId: number | undefined;
    constructor(playerId?: number | undefined, jobId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectModifiedMessage extends ExchangeObjectMessage {
    static id: number;
    object_: ObjectItem | undefined;
    constructor(remote?: boolean | undefined, object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AnomalySubareaInformationResponseMessage extends DofusMessage {
    static id: number;
    subareas: AnomalySubareaInformation[] | undefined;
    constructor(subareas?: AnomalySubareaInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendAddFailureMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildListApplicationModifiedMessage extends DofusMessage {
    static id: number;
    state: number | undefined;
    playerId: number | undefined;
    apply: GuildApplicationInformation | undefined;
    constructor(state?: number | undefined, playerId?: number | undefined, apply?: GuildApplicationInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagRoomUpdateMessage extends DofusMessage {
    static id: number;
    roomsPreview: HavenBagRoomPreviewInformation[] | undefined;
    action: number | undefined;
    constructor(roomsPreview?: HavenBagRoomPreviewInformation[] | undefined, action?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BulletinMessage extends SocialNoticeMessage {
    static id: number;
    lastNotifiedTimestamp: number | undefined;
    constructor(memberName?: string | undefined, memberId?: number | undefined, timestamp?: number | undefined, content?: string | undefined, lastNotifiedTimestamp?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildBulletinMessage extends BulletinMessage {
    static id: number;
    constructor(memberName?: string | undefined, memberId?: number | undefined, timestamp?: number | undefined, content?: string | undefined, lastNotifiedTimestamp?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyUpdateLightMessage extends AbstractPartyEventMessage {
    static id: number;
    id_: number | undefined;
    regenRate: number | undefined;
    maxLifePoints: number | undefined;
    lifePoints: number | undefined;
    prospecting: number | undefined;
    constructor(partyId?: number | undefined, id_?: number | undefined, regenRate?: number | undefined, maxLifePoints?: number | undefined, lifePoints?: number | undefined, prospecting?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachInvitationOfferMessage extends DofusMessage {
    static id: number;
    timeLeftBeforeCancel: number | undefined;
    host: CharacterMinimalInformations | undefined;
    constructor(timeLeftBeforeCancel?: number | undefined, host?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildJoinedMessage extends DofusMessage {
    static id: number;
    memberRights: number | undefined;
    guildInfo: GuildInformations | undefined;
    constructor(memberRights?: number | undefined, guildInfo?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMembershipMessage extends GuildJoinedMessage {
    static id: number;
    constructor(memberRights?: number | undefined, guildInfo?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SubscriptionZoneMessage extends DofusMessage {
    static id: number;
    active: boolean | undefined;
    constructor(active?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeReplyTaxVendorMessage extends DofusMessage {
    static id: number;
    totalTaxValue: number | undefined;
    objectValue: number | undefined;
    constructor(totalTaxValue?: number | undefined, objectValue?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetUseResultMessage extends DofusMessage {
    static id: number;
    code: number | undefined;
    presetId: number | undefined;
    constructor(code?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationFailedBannedMessage extends IdentificationFailedMessage {
    static id: number;
    banEndDate: number | undefined;
    constructor(reason?: number | undefined, banEndDate?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachRewardsMessage extends DofusMessage {
    static id: number;
    rewards: BreachReward[] | undefined;
    constructor(rewards?: BreachReward[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectAveragePricesMessage extends DofusMessage {
    static id: number;
    avgPrices: number[] | undefined;
    ids: number[] | undefined;
    constructor(avgPrices?: number[] | undefined, ids?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildHousesInformationMessage extends DofusMessage {
    static id: number;
    housesInformations: HouseInformationsForGuild[] | undefined;
    constructor(housesInformations?: HouseInformationsForGuild[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DisplayNumericalValuePaddockMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    value: number | undefined;
    rideId: number | undefined;
    constructor(type?: number | undefined, value?: number | undefined, rideId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountEquipedErrorMessage extends DofusMessage {
    static id: number;
    errorType: number | undefined;
    constructor(errorType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementRewardErrorMessage extends DofusMessage {
    static id: number;
    achievementId: number | undefined;
    constructor(achievementId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChallengeFightJoinRefusedMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    playerId: number | undefined;
    constructor(reason?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMemberLeavingMessage extends DofusMessage {
    static id: number;
    memberId: number | undefined;
    kicked: boolean | undefined;
    constructor(memberId?: number | undefined, kicked?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ForgettableSpellEquipmentSlotsMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    constructor(quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionSpamMessage extends DofusMessage {
    static id: number;
    cells: number[] | undefined;
    constructor(cells?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildLevelUpMessage extends DofusMessage {
    static id: number;
    newLevel: number | undefined;
    constructor(newLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceJoinedMessage extends DofusMessage {
    static id: number;
    enabled: boolean | undefined;
    leadingGuildId: number | undefined;
    allianceInfo: AllianceInformations | undefined;
    constructor(enabled?: boolean | undefined, leadingGuildId?: number | undefined, allianceInfo?: AllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NumericWhoIsMessage extends DofusMessage {
    static id: number;
    accountId: number | undefined;
    playerId: number | undefined;
    constructor(accountId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidSearchOkMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockToSellListMessage extends DofusMessage {
    static id: number;
    totalPage: number | undefined;
    paddockList: PaddockInformationsForSell[] | undefined;
    pageIndex: number | undefined;
    constructor(totalPage?: number | undefined, paddockList?: PaddockInformationsForSell[] | undefined, pageIndex?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagDailyLoteryMessage extends DofusMessage {
    static id: number;
    gameActionId: string | undefined;
    returnType: number | undefined;
    constructor(gameActionId?: string | undefined, returnType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildRecruitmentInvalidateMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PurchasableDialogMessage extends DofusMessage {
    static id: number;
    price: number | undefined;
    purchasableId: number | undefined;
    purchasableInstanceId: number | undefined;
    buyOrSell: boolean | undefined;
    secondHand: boolean | undefined;
    constructor(price?: number | undefined, purchasableId?: number | undefined, purchasableInstanceId?: number | undefined, buyOrSell?: boolean | undefined, secondHand?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentWarEffortDonationResultMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    constructor(result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceMotdMessage extends SocialNoticeMessage {
    static id: number;
    constructor(memberName?: string | undefined, memberId?: number | undefined, timestamp?: number | undefined, content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaLeagueRewardsMessage extends DofusMessage {
    static id: number;
    endSeasonReward: boolean | undefined;
    leagueId: number | undefined;
    ladderPosition: number | undefined;
    seasonId: number | undefined;
    constructor(endSeasonReward?: boolean | undefined, leagueId?: number | undefined, ladderPosition?: number | undefined, seasonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayShowActorWithEventMessage extends GameRolePlayShowActorMessage {
    static id: number;
    actorEventId: number | undefined;
    constructor(informations?: GameRolePlayActorInformations | undefined, actorEventId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiAuthErrorMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    constructor(type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyDeletedMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFactsMessage extends DofusMessage {
    static id: number;
    infos: GuildFactSheetInformations | undefined;
    nbTaxCollectors: number | undefined;
    creationDate: number | undefined;
    members: CharacterMinimalGuildPublicInformations[] | undefined;
    constructor(infos?: GuildFactSheetInformations | undefined, nbTaxCollectors?: number | undefined, creationDate?: number | undefined, members?: CharacterMinimalGuildPublicInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInAllianceFactsMessage extends GuildFactsMessage {
    static id: number;
    allianceInfos: BasicNamedAllianceInformations | undefined;
    constructor(infos?: GuildFactSheetInformations | undefined, nbTaxCollectors?: number | undefined, creationDate?: number | undefined, members?: CharacterMinimalGuildPublicInformations[] | undefined, allianceInfos?: BasicNamedAllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseBuyResultMessage extends DofusMessage {
    static id: number;
    houseId: number | undefined;
    realPrice: number | undefined;
    instanceId: number | undefined;
    secondHand: boolean | undefined;
    bought: boolean | undefined;
    constructor(houseId?: number | undefined, realPrice?: number | undefined, instanceId?: number | undefined, secondHand?: boolean | undefined, bought?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SystemMessageDisplayMessage extends DofusMessage {
    static id: number;
    parameters: string[] | undefined;
    msgId: number | undefined;
    hangUp: boolean | undefined;
    constructor(parameters?: string[] | undefined, msgId?: number | undefined, hangUp?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapSpeedMovementMessage extends DofusMessage {
    static id: number;
    speedMultiplier: number | undefined;
    constructor(speedMultiplier?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseInListUpdatedMessage extends ExchangeBidHouseInListAddedMessage {
    static id: number;
    constructor(prices?: number[] | undefined, objectGID?: number | undefined, objectType?: number | undefined, itemUID?: number | undefined, effects?: ObjectEffect[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceModificationStartedMessage extends DofusMessage {
    static id: number;
    canChangeName: boolean | undefined;
    canChangeTag: boolean | undefined;
    canChangeEmblem: boolean | undefined;
    constructor(canChangeName?: boolean | undefined, canChangeTag?: boolean | undefined, canChangeEmblem?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaRegistrationWarningMessage extends DofusMessage {
    static id: number;
    battleMode: number | undefined;
    constructor(battleMode?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountsTakenFromPaddockMessage extends DofusMessage {
    static id: number;
    worldY: number | undefined;
    ownername: string | undefined;
    worldX: number | undefined;
    name: string | undefined;
    constructor(worldY?: number | undefined, ownername?: string | undefined, worldX?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RecycleResultMessage extends DofusMessage {
    static id: number;
    nuggetsForPlayer: number | undefined;
    nuggetsForPrism: number | undefined;
    constructor(nuggetsForPlayer?: number | undefined, nuggetsForPrism?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiTokenMessage extends DofusMessage {
    static id: number;
    token: string | undefined;
    constructor(token?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CurrentServerStatusUpdateMessage extends DofusMessage {
    static id: number;
    status: number | undefined;
    constructor(status?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyCannotJoinErrorMessage extends AbstractPartyMessage {
    static id: number;
    reason: number | undefined;
    constructor(partyId?: number | undefined, reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceGuildLeavingMessage extends DofusMessage {
    static id: number;
    guildId: number | undefined;
    kicked: boolean | undefined;
    constructor(guildId?: number | undefined, kicked?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInvitationStateRecruterMessage extends DofusMessage {
    static id: number;
    invitationState: number | undefined;
    recrutedName: string | undefined;
    constructor(invitationState?: number | undefined, recrutedName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredListMessage extends DofusMessage {
    static id: number;
    ignoredList: IgnoredInformations[] | undefined;
    constructor(ignoredList?: IgnoredInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredAddedMessage extends DofusMessage {
    static id: number;
    session: boolean | undefined;
    ignoreAdded: IgnoredInformations | undefined;
    constructor(session?: boolean | undefined, ignoreAdded?: IgnoredInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntityInformationMessage extends DofusMessage {
    static id: number;
    entity: EntityInformation | undefined;
    constructor(entity?: EntityInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementListMessage extends DofusMessage {
    static id: number;
    finishedAchievements: AchievementAchieved[] | undefined;
    constructor(finishedAchievements?: AchievementAchieved[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentWarEffortProgressionMessage extends DofusMessage {
    static id: number;
    effortProgressions: AlignmentWarEffortInformation[] | undefined;
    constructor(effortProgressions?: AlignmentWarEffortInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildHouseUpdateInformationMessage extends DofusMessage {
    static id: number;
    housesInformations: HouseInformationsForGuild | undefined;
    constructor(housesInformations?: HouseInformationsForGuild | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountDataMessage extends DofusMessage {
    static id: number;
    mountData: MountClientData | undefined;
    constructor(mountData?: MountClientData | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NpcDialogCreationMessage extends DofusMessage {
    static id: number;
    npcId: number | undefined;
    mapId: number | undefined;
    constructor(npcId?: number | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PortalDialogCreationMessage extends NpcDialogCreationMessage {
    static id: number;
    type: number | undefined;
    constructor(npcId?: number | undefined, mapId?: number | undefined, type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismSetSabotagedRefusedMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    subAreaId: number | undefined;
    constructor(reason?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountSetMessage extends DofusMessage {
    static id: number;
    mountData: MountClientData | undefined;
    constructor(mountData?: MountClientData | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationCancelledForGuestMessage extends AbstractPartyMessage {
    static id: number;
    cancelerId: number | undefined;
    constructor(partyId?: number | undefined, cancelerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftCountModifiedMessage extends DofusMessage {
    static id: number;
    count: number | undefined;
    constructor(count?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeSellOkMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildCreationStartedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MimicryObjectPreviewMessage extends DofusMessage {
    static id: number;
    result: ObjectItem | undefined;
    constructor(result?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NotificationListMessage extends DofusMessage {
    static id: number;
    flags: number[] | undefined;
    constructor(flags?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StorageObjectUpdateMessage extends DofusMessage {
    static id: number;
    object_: ObjectItem | undefined;
    constructor(object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharactersListErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryListMessage extends DofusMessage {
    static id: number;
    listEntries: JobCrafterDirectoryListEntry[] | undefined;
    constructor(listEntries?: JobCrafterDirectoryListEntry[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EditHavenBagFinishedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatedElementUpdatedMessage extends DofusMessage {
    static id: number;
    statedElement: StatedElement | undefined;
    constructor(statedElement?: StatedElement | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolPartyRefreshMessage extends DofusMessage {
    static id: number;
    partyIdol: PartyIdol | undefined;
    constructor(partyIdol?: PartyIdol | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ClientYouAreDrunkMessage extends DebugInClientMessage {
    static id: number;
    constructor(message?: string | undefined, level?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextCreateErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectQuantityMessage extends DofusMessage {
    static id: number;
    origin: number | undefined;
    quantity: number | undefined;
    objectUID: number | undefined;
    constructor(origin?: number | undefined, quantity?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterLevelUpMessage extends DofusMessage {
    static id: number;
    newLevel: number | undefined;
    constructor(newLevel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterLevelUpInformationMessage extends CharacterLevelUpMessage {
    static id: number;
    id_: number | undefined;
    name: string | undefined;
    constructor(newLevel?: number | undefined, id_?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMemberWarnOnConnectionStateMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendUpdateMessage extends DofusMessage {
    static id: number;
    friendUpdated: FriendInformations | undefined;
    constructor(friendUpdated?: FriendInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagPermissionsUpdateMessage extends DofusMessage {
    static id: number;
    permissions: number | undefined;
    constructor(permissions?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AuthenticationTicketRefusedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementDetailsMessage extends DofusMessage {
    static id: number;
    achievement: Achievement | undefined;
    constructor(achievement?: Achievement | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorMovementMessage extends DofusMessage {
    static id: number;
    movementType: number | undefined;
    basicInfos: TaxCollectorBasicInformations | undefined;
    playerId: number | undefined;
    playerName: string | undefined;
    constructor(movementType?: number | undefined, basicInfos?: TaxCollectorBasicInformations | undefined, playerId?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlliancePrismDialogQuestionMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkMountWithOutPaddockMessage extends DofusMessage {
    static id: number;
    stabledMountsDescription: MountClientData[] | undefined;
    constructor(stabledMountsDescription?: MountClientData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntMessage extends DofusMessage {
    static id: number;
    availableRetryCount: number | undefined;
    checkPointTotal: number | undefined;
    checkPointCurrent: number | undefined;
    questType: number | undefined;
    flags: TreasureHuntFlag[] | undefined;
    knownStepsList: TreasureHuntStep[] | undefined;
    startMapId: number | undefined;
    totalStepCount: number | undefined;
    constructor(availableRetryCount?: number | undefined, checkPointTotal?: number | undefined, checkPointCurrent?: number | undefined, questType?: number | undefined, flags?: TreasureHuntFlag[] | undefined, knownStepsList?: TreasureHuntStep[] | undefined, startMapId?: number | undefined, totalStepCount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartedWithPodsMessage extends ExchangeStartedMessage {
    static id: number;
    secondCharacterMaxWeight: number | undefined;
    secondCharacterCurrentWeight: number | undefined;
    firstCharacterCurrentWeight: number | undefined;
    firstCharacterMaxWeight: number | undefined;
    firstCharacterId: number | undefined;
    secondCharacterId: number | undefined;
    constructor(exchangeType?: number | undefined, secondCharacterMaxWeight?: number | undefined, secondCharacterCurrentWeight?: number | undefined, firstCharacterCurrentWeight?: number | undefined, firstCharacterMaxWeight?: number | undefined, firstCharacterId?: number | undefined, secondCharacterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaFightPropositionMessage extends DofusMessage {
    static id: number;
    alliesId: number[] | undefined;
    duration: number | undefined;
    fightId: number | undefined;
    constructor(alliesId?: number[] | undefined, duration?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionAddMessage extends DofusMessage {
    static id: number;
    newAction: StartupActionAddObject | undefined;
    constructor(newAction?: StartupActionAddObject | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightRemovedMessage extends DofusMessage {
    static id: number;
    subAreaId: number | undefined;
    constructor(subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ItemNoMoreAvailableMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatServerWithObjectMessage extends ChatServerMessage {
    static id: number;
    objects: ObjectItem[] | undefined;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined, senderAccountId?: number | undefined, prefix?: string | undefined, senderName?: string | undefined, senderId?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorMovementAddMessage extends DofusMessage {
    static id: number;
    informations: TaxCollectorInformations | undefined;
    constructor(informations?: TaxCollectorInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EvolutiveObjectRecycleResultMessage extends DofusMessage {
    static id: number;
    recycledItems: RecycledItem[] | undefined;
    constructor(recycledItems?: RecycledItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MoodSmileyResultMessage extends DofusMessage {
    static id: number;
    smileyId: number | undefined;
    resultCode: number | undefined;
    constructor(smileyId?: number | undefined, resultCode?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiSessionMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    key: string | undefined;
    constructor(type?: number | undefined, key?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkMountMessage extends ExchangeStartOkMountWithOutPaddockMessage {
    static id: number;
    paddockedMountsDescription: MountClientData[] | undefined;
    constructor(stabledMountsDescription?: MountClientData[] | undefined, paddockedMountsDescription?: MountClientData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DocumentReadingBeginMessage extends DofusMessage {
    static id: number;
    documentId: number | undefined;
    constructor(documentId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerExperienceModificatorMessage extends DofusMessage {
    static id: number;
    experiencePercent: number | undefined;
    constructor(experiencePercent?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeKamaModifiedMessage extends ExchangeObjectMessage {
    static id: number;
    quantity: number | undefined;
    constructor(remote?: boolean | undefined, quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage {
    static id: number;
    loginToken: string | undefined;
    constructor(havenbagAvailableRoom?: number | undefined, subscriptionElapsedDuration?: number | undefined, communityId?: number | undefined, accountTag?: AccountTagInformation | undefined, accountId?: number | undefined, login?: string | undefined, secretQuestion?: string | undefined, subscriptionEndDate?: number | undefined, accountCreation?: number | undefined, hasRights?: boolean | undefined, hasConsoleRight?: boolean | undefined, wasAlreadyConnected?: boolean | undefined, loginToken?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayDelayedObjectUseMessage extends GameRolePlayDelayedActionMessage {
    static id: number;
    objectGID: number | undefined;
    constructor(delayTypeId?: number | undefined, delayEndTime?: number | undefined, delayedCharacterId?: number | undefined, objectGID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCapabilitiesMessage extends DofusMessage {
    static id: number;
    guildEmblemSymbolCategories: number | undefined;
    constructor(guildEmblemSymbolCategories?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockBuyResultMessage extends DofusMessage {
    static id: number;
    realPrice: number | undefined;
    bought: boolean | undefined;
    paddockId: number | undefined;
    constructor(realPrice?: number | undefined, bought?: boolean | undefined, paddockId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceCreationResultMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    constructor(result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyMemberInBreachFightMessage extends AbstractPartyMemberInFightMessage {
    static id: number;
    room: number | undefined;
    floor: number | undefined;
    constructor(partyId?: number | undefined, timeBeforeFightStart?: number | undefined, reason?: number | undefined, memberAccountId?: number | undefined, fightId?: number | undefined, memberId?: number | undefined, memberName?: string | undefined, room?: number | undefined, floor?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyNameUpdateMessage extends AbstractPartyMessage {
    static id: number;
    partyName: string | undefined;
    constructor(partyId?: number | undefined, partyName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionFinishedMessage extends DofusMessage {
    static id: number;
    actionId: number | undefined;
    success: boolean | undefined;
    automaticAction: boolean | undefined;
    constructor(actionId?: number | undefined, success?: boolean | undefined, automaticAction?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkNpcTradeMessage extends DofusMessage {
    static id: number;
    npcId: number | undefined;
    constructor(npcId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseGuildRightsMessage extends DofusMessage {
    static id: number;
    houseId: number | undefined;
    secondHand: boolean | undefined;
    rights: number | undefined;
    instanceId: number | undefined;
    guildInfo: GuildInformations | undefined;
    constructor(houseId?: number | undefined, secondHand?: boolean | undefined, rights?: number | undefined, instanceId?: number | undefined, guildInfo?: GuildInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonKeyRingUpdateMessage extends DofusMessage {
    static id: number;
    available: boolean | undefined;
    dungeonId: number | undefined;
    constructor(available?: boolean | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightAttackerRemoveMessage extends DofusMessage {
    static id: number;
    fighterToRemoveId: number | undefined;
    fightId: number | undefined;
    subAreaId: number | undefined;
    constructor(fighterToRemoveId?: number | undefined, fightId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceLeftMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInvitationStateRecrutedMessage extends DofusMessage {
    static id: number;
    invitationState: number | undefined;
    constructor(invitationState?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkCraftWithInformationMessage extends ExchangeStartOkCraftMessage {
    static id: number;
    skillId: number | undefined;
    constructor(skillId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountUnSetMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountXpRatioMessage extends DofusMessage {
    static id: number;
    ratio: number | undefined;
    constructor(ratio?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobExperienceMultiUpdateMessage extends DofusMessage {
    static id: number;
    experiencesUpdate: JobExperience[] | undefined;
    constructor(experiencesUpdate?: JobExperience[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlmanachCalendarDateMessage extends DofusMessage {
    static id: number;
    date: number | undefined;
    constructor(date?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ContactLookErrorMessage extends DofusMessage {
    static id: number;
    requestId: number | undefined;
    constructor(requestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectModifiedMessage extends DofusMessage {
    static id: number;
    object_: ObjectItem | undefined;
    constructor(object_?: ObjectItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeWeightMessage extends DofusMessage {
    static id: number;
    maxWeight: number | undefined;
    currentWeight: number | undefined;
    constructor(maxWeight?: number | undefined, currentWeight?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyNewGuestMessage extends AbstractPartyEventMessage {
    static id: number;
    guest: PartyGuestInformations | undefined;
    constructor(partyId?: number | undefined, guest?: PartyGuestInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HelloConnectMessage extends DofusMessage {
    static id: number;
    key: number[] | undefined;
    salt: string | undefined;
    constructor(key?: number[] | undefined, salt?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendStatusShareStateMessage extends DofusMessage {
    static id: number;
    share: boolean | undefined;
    constructor(share?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseGuildNoneMessage extends DofusMessage {
    static id: number;
    instanceId: number | undefined;
    secondHand: boolean | undefined;
    houseId: number | undefined;
    constructor(instanceId?: number | undefined, secondHand?: boolean | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatServerCopyWithObjectMessage extends ChatServerCopyMessage {
    static id: number;
    objects: ObjectItem[] | undefined;
    constructor(fingerprint?: string | undefined, timestamp?: number | undefined, content?: string | undefined, channel?: number | undefined, receiverName?: string | undefined, receiverId?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountRidingMessage extends DofusMessage {
    static id: number;
    isRiding: boolean | undefined;
    isAutopilot: boolean | undefined;
    constructor(isRiding?: boolean | undefined, isAutopilot?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarRemoveErrorMessage extends DofusMessage {
    static id: number;
    error: number | undefined;
    constructor(error?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChannelEnablingChangeMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    channel: number | undefined;
    constructor(enable?: boolean | undefined, channel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyNameSetErrorMessage extends AbstractPartyMessage {
    static id: number;
    result: number | undefined;
    constructor(partyId?: number | undefined, result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsOfferMessage extends DofusMessage {
    static id: number;
    requestId: number | undefined;
    requestedCellId: number | undefined;
    requestedId: number | undefined;
    requesterId: number | undefined;
    requesterCellId: number | undefined;
    constructor(requestId?: number | undefined, requestedCellId?: number | undefined, requestedId?: number | undefined, requesterId?: number | undefined, requesterCellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInsiderInfoMessage extends DofusMessage {
    static id: number;
    allianceInfos: AllianceFactSheetInformations | undefined;
    prisms: PrismSubareaEmptyInfo[] | undefined;
    guilds: GuildInsiderFactSheetInformations[] | undefined;
    constructor(allianceInfos?: AllianceFactSheetInformations | undefined, prisms?: PrismSubareaEmptyInfo[] | undefined, guilds?: GuildInsiderFactSheetInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseToSellListMessage extends DofusMessage {
    static id: number;
    houseList: HouseInformationsForSell[] | undefined;
    totalPage: number | undefined;
    pageIndex: number | undefined;
    constructor(houseList?: HouseInformationsForSell[] | undefined, totalPage?: number | undefined, pageIndex?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachRewardBoughtMessage extends DofusMessage {
    static id: number;
    bought: boolean | undefined;
    id_: number | undefined;
    constructor(bought?: boolean | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountFreeFromPaddockMessage extends DofusMessage {
    static id: number;
    liberator: string | undefined;
    worldY: number | undefined;
    worldX: number | undefined;
    name: string | undefined;
    constructor(liberator?: string | undefined, worldY?: number | undefined, worldX?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EnabledChannelsMessage extends DofusMessage {
    static id: number;
    disallowed: number[] | undefined;
    channels: number[] | undefined;
    constructor(disallowed?: number[] | undefined, channels?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CinematicMessage extends DofusMessage {
    static id: number;
    cinematicId: number | undefined;
    constructor(cinematicId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkJobIndexMessage extends DofusMessage {
    static id: number;
    jobs: number[] | undefined;
    constructor(jobs?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementPossiblePositionsMessage extends DofusMessage {
    static id: number;
    positionsForChallengers: number[] | undefined;
    teamNumber: number | undefined;
    positionsForDefenders: number[] | undefined;
    constructor(positionsForChallengers?: number[] | undefined, teamNumber?: number | undefined, positionsForDefenders?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSelectedErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccountLinkRequiredMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementRewardSuccessMessage extends DofusMessage {
    static id: number;
    achievementId: number | undefined;
    constructor(achievementId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MigratedServerListMessage extends DofusMessage {
    static id: number;
    migratedServerIds: number[] | undefined;
    constructor(migratedServerIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CompassResetMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    constructor(type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectRemovedFromBagMessage extends ExchangeObjectMessage {
    static id: number;
    objectUID: number | undefined;
    constructor(remote?: boolean | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyJoinMessage extends AbstractPartyMessage {
    static id: number;
    restricted: boolean | undefined;
    guests: PartyGuestInformations[] | undefined;
    partyType: number | undefined;
    partyName: string | undefined;
    members: PartyMemberInformations[] | undefined;
    partyLeaderId: number | undefined;
    maxParticipants: number | undefined;
    constructor(partyId?: number | undefined, restricted?: boolean | undefined, guests?: PartyGuestInformations[] | undefined, partyType?: number | undefined, partyName?: string | undefined, members?: PartyMemberInformations[] | undefined, partyLeaderId?: number | undefined, maxParticipants?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WatchInventoryContentMessage extends InventoryContentMessage {
    static id: number;
    constructor(kamas?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StorageKamasUpdateMessage extends DofusMessage {
    static id: number;
    kamasTotal: number | undefined;
    constructor(kamasTotal?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseSellingUpdateMessage extends DofusMessage {
    static id: number;
    buyerTag: AccountTagInformation | undefined;
    houseId: number | undefined;
    instanceId: number | undefined;
    secondHand: boolean | undefined;
    realPrice: number | undefined;
    constructor(buyerTag?: AccountTagInformation | undefined, houseId?: number | undefined, instanceId?: number | undefined, secondHand?: boolean | undefined, realPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarReplacedMessage extends DofusMessage {
    static id: number;
    shortcut: Shortcut | undefined;
    barType: number | undefined;
    constructor(shortcut?: Shortcut | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobBookSubscriptionMessage extends DofusMessage {
    static id: number;
    subscriptions: JobBookSubscription[] | undefined;
    constructor(subscriptions?: JobBookSubscription[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismSettingsErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftResultWithObjectIdMessage extends ExchangeCraftResultMessage {
    static id: number;
    objectGenericId: number | undefined;
    constructor(craftResult?: number | undefined, objectGenericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachKickResponseMessage extends DofusMessage {
    static id: number;
    kicked: boolean | undefined;
    target: CharacterMinimalInformations | undefined;
    constructor(kicked?: boolean | undefined, target?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpouseInformationsMessage extends DofusMessage {
    static id: number;
    spouse: FriendSpouseInformations | undefined;
    constructor(spouse?: FriendSpouseInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiBuyValidationMessage extends HaapiValidationMessage {
    static id: number;
    email: string | undefined;
    amount: number | undefined;
    constructor(code?: number | undefined, action?: number | undefined, email?: string | undefined, amount?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitleLostMessage extends DofusMessage {
    static id: number;
    titleId: number | undefined;
    constructor(titleId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetSavedMessage extends DofusMessage {
    static id: number;
    preset: Preset | undefined;
    presetId: number | undefined;
    constructor(preset?: Preset | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkRunesTradeMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarRefreshMessage extends DofusMessage {
    static id: number;
    shortcut: Shortcut | undefined;
    barType: number | undefined;
    constructor(shortcut?: Shortcut | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonKeyRingMessage extends DofusMessage {
    static id: number;
    unavailables: number[] | undefined;
    availables: number[] | undefined;
    constructor(unavailables?: number[] | undefined, availables?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportOnSameMapMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    targetId: number | undefined;
    constructor(cellId?: number | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildPlayerNoApplicationInformationMessage extends GuildPlayerApplicationAbstractMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntShowLegendaryUIMessage extends DofusMessage {
    static id: number;
    availableLegendaryIds: number[] | undefined;
    constructor(availableLegendaryIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatSmileyExtraPackListMessage extends DofusMessage {
    static id: number;
    packIds: number[] | undefined;
    constructor(packIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerStatusUpdateMessage extends DofusMessage {
    static id: number;
    server: GameServerInformations | undefined;
    constructor(server?: GameServerInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportBuddiesMessage extends DofusMessage {
    static id: number;
    dungeonId: number | undefined;
    constructor(dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentWarEffortDonatePreviewMessage extends DofusMessage {
    static id: number;
    xp: number | undefined;
    constructor(xp?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GoldAddedMessage extends DofusMessage {
    static id: number;
    gold: GoldItem | undefined;
    constructor(gold?: GoldItem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendWarnOnLevelGainStateMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildListMessage extends DofusMessage {
    static id: number;
    guilds: GuildInformations[] | undefined;
    constructor(guilds?: GuildInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RecruitmentInformationMessage extends DofusMessage {
    static id: number;
    recruitmentData: GuildRecruitmentInformation | undefined;
    constructor(recruitmentData?: GuildRecruitmentInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetDeleteResultMessage extends DofusMessage {
    static id: number;
    code: number | undefined;
    presetId: number | undefined;
    constructor(code?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeItemAutoCraftStopedMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeErrorMessage extends DofusMessage {
    static id: number;
    errorType: number | undefined;
    constructor(errorType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightStateUpdateMessage extends DofusMessage {
    static id: number;
    state: number | undefined;
    constructor(state?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountSterilizeFromPaddockMessage extends DofusMessage {
    static id: number;
    sterilizator: string | undefined;
    worldY: number | undefined;
    worldX: number | undefined;
    name: string | undefined;
    constructor(sterilizator?: string | undefined, worldY?: number | undefined, worldX?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorAttackedMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    firstNameId: number | undefined;
    guild: BasicGuildInformations | undefined;
    subAreaId: number | undefined;
    lastNameId: number | undefined;
    worldY: number | undefined;
    worldX: number | undefined;
    constructor(mapId?: number | undefined, firstNameId?: number | undefined, guild?: BasicGuildInformations | undefined, subAreaId?: number | undefined, lastNameId?: number | undefined, worldY?: number | undefined, worldX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSettingsMessage extends DofusMessage {
    static id: number;
    lang: string | undefined;
    itemMaxLevel: number | undefined;
    arenaLeaveBanTime: number | undefined;
    gameType: number | undefined;
    community: number | undefined;
    isMonoAccount: boolean | undefined;
    hasFreeAutopilot: boolean | undefined;
    constructor(lang?: string | undefined, itemMaxLevel?: number | undefined, arenaLeaveBanTime?: number | undefined, gameType?: number | undefined, community?: number | undefined, isMonoAccount?: boolean | undefined, hasFreeAutopilot?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintanceAddedMessage extends DofusMessage {
    static id: number;
    acquaintanceAdded: AcquaintanceInformation | undefined;
    constructor(acquaintanceAdded?: AcquaintanceInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StorageObjectRemoveMessage extends DofusMessage {
    static id: number;
    objectUID: number | undefined;
    constructor(objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FollowedQuestsMessage extends DofusMessage {
    static id: number;
    quests: QuestActiveDetailedInformations[] | undefined;
    constructor(quests?: QuestActiveDetailedInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSessionConstantsMessage extends DofusMessage {
    static id: number;
    variables: ServerSessionConstant[] | undefined;
    constructor(variables?: ServerSessionConstant[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderAvailableDungeonsMessage extends DofusMessage {
    static id: number;
    dungeonIds: number[] | undefined;
    constructor(dungeonIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterNameSuggestionSuccessMessage extends DofusMessage {
    static id: number;
    suggestion: string | undefined;
    constructor(suggestion?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapNoMovementMessage extends DofusMessage {
    static id: number;
    cellY: number | undefined;
    cellX: number | undefined;
    constructor(cellY?: number | undefined, cellX?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountEmoteIconUsedOkMessage extends DofusMessage {
    static id: number;
    reactionType: number | undefined;
    mountId: number | undefined;
    constructor(reactionType?: number | undefined, mountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestStartedMessage extends DofusMessage {
    static id: number;
    questId: number | undefined;
    constructor(questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountRenamedMessage extends DofusMessage {
    static id: number;
    name: string | undefined;
    mountId: number | undefined;
    constructor(name?: string | undefined, mountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectsAddedMessage extends ExchangeObjectMessage {
    static id: number;
    object_: ObjectItem[] | undefined;
    constructor(remote?: boolean | undefined, object_?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuestLimitationMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectsModifiedMessage extends ExchangeObjectMessage {
    static id: number;
    object_: ObjectItem[] | undefined;
    constructor(remote?: boolean | undefined, object_?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WrapperObjectErrorMessage extends SymbioticObjectErrorMessage {
    static id: number;
    constructor(reason?: number | undefined, errorCode?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeRequestedMessage extends DofusMessage {
    static id: number;
    exchangeType: number | undefined;
    constructor(exchangeType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeRequestedTradeMessage extends ExchangeRequestedMessage {
    static id: number;
    target: number | undefined;
    source: number | undefined;
    constructor(exchangeType?: number | undefined, target?: number | undefined, source?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolFightPreparationUpdateMessage extends DofusMessage {
    static id: number;
    idols: Idol[] | undefined;
    idolSource: number | undefined;
    constructor(idols?: Idol[] | undefined, idolSource?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarAddErrorMessage extends DofusMessage {
    static id: number;
    error: number | undefined;
    constructor(error?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolSelectedMessage extends DofusMessage {
    static id: number;
    idolId: number | undefined;
    activate: boolean | undefined;
    party: boolean | undefined;
    constructor(idolId?: number | undefined, activate?: boolean | undefined, party?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkHumanVendorMessage extends DofusMessage {
    static id: number;
    objectsInfos: ObjectItemToSellInHumanVendorShop[] | undefined;
    sellerId: number | undefined;
    constructor(objectsInfos?: ObjectItemToSellInHumanVendorShop[] | undefined, sellerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendDeleteResultMessage extends DofusMessage {
    static id: number;
    tag: AccountTagInformation | undefined;
    success: boolean | undefined;
    constructor(tag?: AccountTagInformation | undefined, success?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetsMessage extends DofusMessage {
    static id: number;
    presets: Preset[] | undefined;
    constructor(presets?: Preset[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectsQuantityMessage extends DofusMessage {
    static id: number;
    objectsUIDAndQty: ObjectItemQuantity[] | undefined;
    constructor(objectsUIDAndQty?: ObjectItemQuantity[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestObjectiveValidatedMessage extends DofusMessage {
    static id: number;
    objectiveId: number | undefined;
    questId: number | undefined;
    constructor(objectiveId?: number | undefined, questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayAggressionMessage extends DofusMessage {
    static id: number;
    defenderId: number | undefined;
    attackerId: number | undefined;
    constructor(defenderId?: number | undefined, attackerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInformationsMembersMessage extends DofusMessage {
    static id: number;
    members: GuildMember[] | undefined;
    constructor(members?: GuildMember[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SetUpdateMessage extends DofusMessage {
    static id: number;
    setId: number | undefined;
    setEffects: ObjectEffect[] | undefined;
    setObjects: number[] | undefined;
    constructor(setId?: number | undefined, setEffects?: ObjectEffect[] | undefined, setObjects?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountsPaddockAddMessage extends DofusMessage {
    static id: number;
    mountDescription: MountClientData[] | undefined;
    constructor(mountDescription?: MountClientData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterExperienceGainMessage extends DofusMessage {
    static id: number;
    experienceIncarnation: number | undefined;
    experienceMount: number | undefined;
    experienceGuild: number | undefined;
    experienceCharacter: number | undefined;
    constructor(experienceIncarnation?: number | undefined, experienceMount?: number | undefined, experienceGuild?: number | undefined, experienceCharacter?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismsListMessage extends DofusMessage {
    static id: number;
    prisms: PrismSubareaEmptyInfo[] | undefined;
    constructor(prisms?: PrismSubareaEmptyInfo[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismsListUpdateMessage extends PrismsListMessage {
    static id: number;
    constructor(prisms?: PrismSubareaEmptyInfo[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EntitiesInformationMessage extends DofusMessage {
    static id: number;
    entities: EntityInformation[] | undefined;
    constructor(entities?: EntityInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FinishMoveListMessage extends DofusMessage {
    static id: number;
    finishMoves: FinishMoveInformations[] | undefined;
    constructor(finishMoves?: FinishMoveInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyModifiableStatusMessage extends AbstractPartyMessage {
    static id: number;
    enabled: boolean | undefined;
    constructor(partyId?: number | undefined, enabled?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobExperienceOtherPlayerUpdateMessage extends JobExperienceUpdateMessage {
    static id: number;
    playerId: number | undefined;
    constructor(experiencesUpdate?: JobExperience | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildModificationStartedMessage extends DofusMessage {
    static id: number;
    canChangeName: boolean | undefined;
    canChangeEmblem: boolean | undefined;
    constructor(canChangeName?: boolean | undefined, canChangeEmblem?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyRestrictedMessage extends AbstractPartyMessage {
    static id: number;
    restricted: boolean | undefined;
    constructor(partyId?: number | undefined, restricted?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NicknameRegistrationMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildListApplicationAnswerMessage extends PaginationAnswerAbstractMessage {
    static id: number;
    applies: GuildApplicationInformation[] | undefined;
    constructor(count?: number | undefined, total?: number | undefined, offset?: number | undefined, applies?: GuildApplicationInformation[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextRemoveElementWithEventMessage extends GameContextRemoveElementMessage {
    static id: number;
    elementEventId: number | undefined;
    constructor(id_?: number | undefined, elementEventId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPlayerFightFriendlyRequestedMessage extends DofusMessage {
    static id: number;
    sourceId: number | undefined;
    targetId: number | undefined;
    fightId: number | undefined;
    constructor(sourceId?: number | undefined, targetId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateMountCharacteristicsMessage extends DofusMessage {
    static id: number;
    boostToUpdateList: UpdateMountCharacteristic[] | undefined;
    rideId: number | undefined;
    constructor(boostToUpdateList?: UpdateMountCharacteristic[] | undefined, rideId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarRemovedMessage extends DofusMessage {
    static id: number;
    slot: number | undefined;
    barType: number | undefined;
    constructor(slot?: number | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBuyOkMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LifePointsRegenEndMessage extends UpdateLifePointsMessage {
    static id: number;
    lifePointsGained: number | undefined;
    constructor(maxLifePoints?: number | undefined, lifePoints?: number | undefined, lifePointsGained?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextCreateMessage extends DofusMessage {
    static id: number;
    context: number | undefined;
    constructor(context?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerStatusUpdateErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsCancelledMessage extends DofusMessage {
    static id: number;
    cancellerId: number | undefined;
    requestId: number | undefined;
    constructor(cancellerId?: number | undefined, requestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ConsoleCommandsListMessage extends DofusMessage {
    static id: number;
    aliases: string[] | undefined;
    descriptions: string[] | undefined;
    args: string[] | undefined;
    constructor(aliases?: string[] | undefined, descriptions?: string[] | undefined, args?: string[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionsListMessage extends DofusMessage {
    static id: number;
    actions: StartupActionAddObject[] | undefined;
    constructor(actions?: StartupActionAddObject[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TaxCollectorMovementRemoveMessage extends DofusMessage {
    static id: number;
    collectorId: number | undefined;
    constructor(collectorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AreaFightModificatorUpdateMessage extends DofusMessage {
    static id: number;
    spellPairId: number | undefined;
    constructor(spellPairId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseInListRemovedMessage extends DofusMessage {
    static id: number;
    objectType: number | undefined;
    objectGID: number | undefined;
    itemUID: number | undefined;
    constructor(objectType?: number | undefined, objectGID?: number | undefined, itemUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceBulletinSetErrorMessage extends SocialNoticeSetErrorMessage {
    static id: number;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ForgettableSpellDeleteMessage extends DofusMessage {
    static id: number;
    spells: number[] | undefined;
    reason: number | undefined;
    constructor(spells?: number[] | undefined, reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DebtsDeleteMessage extends DofusMessage {
    static id: number;
    debts: number[] | undefined;
    reason: number | undefined;
    constructor(debts?: number[] | undefined, reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftResultMagicWithObjectDescMessage extends ExchangeCraftResultWithObjectDescMessage {
    static id: number;
    magicPoolStatus: number | undefined;
    constructor(craftResult?: number | undefined, objectInfo?: ObjectItemNotInContainer | undefined, magicPoolStatus?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitleSelectedMessage extends DofusMessage {
    static id: number;
    titleId: number | undefined;
    constructor(titleId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AbstractGameActionWithAckMessage extends AbstractGameActionMessage {
    static id: number;
    waitAckId: number | undefined;
    constructor(sourceId?: number | undefined, actionId?: number | undefined, waitAckId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseItemRemoveOkMessage extends DofusMessage {
    static id: number;
    sellerId: number | undefined;
    constructor(sellerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WatchQuestListMessage extends QuestListMessage {
    static id: number;
    playerId: number | undefined;
    constructor(finishedQuestsIds?: number[] | undefined, finishedQuestsCounts?: number[] | undefined, activeQuests?: QuestActiveInformations[] | undefined, reinitDoneQuestsIds?: number[] | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OrnamentSelectedMessage extends DofusMessage {
    static id: number;
    ornamentId: number | undefined;
    constructor(ornamentId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildSummaryMessage extends PaginationAnswerAbstractMessage {
    static id: number;
    guilds: GuildFactSheetInformations[] | undefined;
    constructor(count?: number | undefined, total?: number | undefined, offset?: number | undefined, guilds?: GuildFactSheetInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceBulletinMessage extends BulletinMessage {
    static id: number;
    constructor(memberName?: string | undefined, memberId?: number | undefined, timestamp?: number | undefined, content?: string | undefined, lastNotifiedTimestamp?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectAveragePricesErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetUseResultWithMissingIdsMessage extends PresetUseResultMessage {
    static id: number;
    missingIds: number[] | undefined;
    constructor(code?: number | undefined, presetId?: number | undefined, missingIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OrnamentSelectErrorMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextMoveElementMessage extends DofusMessage {
    static id: number;
    movement: EntityMovementInformations | undefined;
    constructor(movement?: EntityMovementInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeTypesItemsExchangerDescriptionForUserMessage extends DofusMessage {
    static id: number;
    itemTypeDescriptions: BidExchangerObjectInfo[] | undefined;
    objectType: number | undefined;
    constructor(itemTypeDescriptions?: BidExchangerObjectInfo[] | undefined, objectType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendsListMessage extends DofusMessage {
    static id: number;
    friendsList: FriendInformations[] | undefined;
    constructor(friendsList?: FriendInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismInfoCloseMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightDefenderLeaveMessage extends DofusMessage {
    static id: number;
    fighterToRemoveId: number | undefined;
    fightId: number | undefined;
    subAreaId: number | undefined;
    constructor(fighterToRemoveId?: number | undefined, fightId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPlayerLifeStatusMessage extends DofusMessage {
    static id: number;
    phenixMapId: number | undefined;
    state: number | undefined;
    constructor(phenixMapId?: number | undefined, state?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendGuildWarnOnAchievementCompleteStateMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WatchQuestStepInfoMessage extends QuestStepInfoMessage {
    static id: number;
    playerId: number | undefined;
    constructor(infos?: QuestActiveInformations | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachInvitationCloseMessage extends DofusMessage {
    static id: number;
    host: CharacterMinimalInformations | undefined;
    constructor(host?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableStateUpdateHouseDoorMessage extends LockableStateUpdateAbstractMessage {
    static id: number;
    instanceId: number | undefined;
    secondHand: boolean | undefined;
    houseId: number | undefined;
    constructor(locked?: boolean | undefined, instanceId?: number | undefined, secondHand?: boolean | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockSellBuyDialogMessage extends DofusMessage {
    static id: number;
    ownerId: number | undefined;
    price: number | undefined;
    bsell: boolean | undefined;
    constructor(ownerId?: number | undefined, price?: number | undefined, bsell?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeOkMultiCraftMessage extends DofusMessage {
    static id: number;
    role: number | undefined;
    otherId: number | undefined;
    initiatorId: number | undefined;
    constructor(role?: number | undefined, otherId?: number | undefined, initiatorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeWaitingResultMessage extends DofusMessage {
    static id: number;
    bwait: boolean | undefined;
    constructor(bwait?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildApplicationIsAnsweredMessage extends DofusMessage {
    static id: number;
    guildInformation: GuildInformations | undefined;
    accepted: boolean | undefined;
    constructor(guildInformation?: GuildInformations | undefined, accepted?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlreadyConnectedMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NpcDialogQuestionMessage extends DofusMessage {
    static id: number;
    messageId: number | undefined;
    dialogParams: string[] | undefined;
    visibleReplies: number[] | undefined;
    constructor(messageId?: number | undefined, dialogParams?: string[] | undefined, visibleReplies?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EmotePlayErrorMessage extends DofusMessage {
    static id: number;
    emoteId: number | undefined;
    constructor(emoteId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayDelayedActionFinishedMessage extends DofusMessage {
    static id: number;
    delayTypeId: number | undefined;
    delayedCharacterId: number | undefined;
    constructor(delayTypeId?: number | undefined, delayedCharacterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ContactAddFailureMessage extends DofusMessage {
    static id: number;
    reason: number | undefined;
    constructor(reason?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterAlignmentWarEffortProgressionMessage extends DofusMessage {
    static id: number;
    alignmentWarEffortPersonalDonation: number | undefined;
    alignmentWarEffortDailyDonation: number | undefined;
    alignmentWarEffortDailyLimit: number | undefined;
    constructor(alignmentWarEffortPersonalDonation?: number | undefined, alignmentWarEffortDailyDonation?: number | undefined, alignmentWarEffortDailyLimit?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AtlasPointInformationsMessage extends DofusMessage {
    static id: number;
    type: AtlasPointsInformations | undefined;
    constructor(type?: AtlasPointsInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuestModeMessage extends DofusMessage {
    static id: number;
    active: boolean | undefined;
    constructor(active?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectMovementMessage extends DofusMessage {
    static id: number;
    position: number | undefined;
    objectUID: number | undefined;
    constructor(position?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableCodeResultMessage extends DofusMessage {
    static id: number;
    result: number | undefined;
    constructor(result?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMountStableErrorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightPlayersEnemyRemoveMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    fightId: number | undefined;
    constructor(playerId?: number | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachStateMessage extends DofusMessage {
    static id: number;
    owner: CharacterMinimalInformations | undefined;
    saved: boolean | undefined;
    bonuses: ObjectEffectInteger[] | undefined;
    bugdet: number | undefined;
    constructor(owner?: CharacterMinimalInformations | undefined, saved?: boolean | undefined, bonuses?: ObjectEffectInteger[] | undefined, bugdet?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInformationsGeneralMessage extends DofusMessage {
    static id: number;
    nbConnectedMembers: number | undefined;
    nbTotalMembers: number | undefined;
    creationDate: number | undefined;
    expNextLevelFloor: number | undefined;
    experience: number | undefined;
    abandonnedPaddock: boolean | undefined;
    level: number | undefined;
    expLevelFloor: number | undefined;
    constructor(nbConnectedMembers?: number | undefined, nbTotalMembers?: number | undefined, creationDate?: number | undefined, expNextLevelFloor?: number | undefined, experience?: number | undefined, abandonnedPaddock?: boolean | undefined, level?: number | undefined, expLevelFloor?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportToBuddyCloseMessage extends DofusMessage {
    static id: number;
    buddyId: number | undefined;
    dungeonId: number | undefined;
    constructor(buddyId?: number | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachBonusMessage extends DofusMessage {
    static id: number;
    bonus: ObjectEffectInteger | undefined;
    constructor(bonus?: ObjectEffectInteger | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartOkMulticraftCrafterMessage extends DofusMessage {
    static id: number;
    skillId: number | undefined;
    constructor(skillId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeShopStockStartedMessage extends DofusMessage {
    static id: number;
    objectsInfos: ObjectItemToSell[] | undefined;
    constructor(objectsInfos?: ObjectItemToSell[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicTimeMessage extends DofusMessage {
    static id: number;
    timezoneOffset: number | undefined;
    timestamp: number | undefined;
    constructor(timezoneOffset?: number | undefined, timestamp?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ZaapDestinationsMessage extends TeleportDestinationsMessage {
    static id: number;
    spawnMapId: number | undefined;
    constructor(destinations?: TeleportDestination[] | undefined, type?: number | undefined, spawnMapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInfosUpgradeMessage extends DofusMessage {
    static id: number;
    taxCollectorPods: number | undefined;
    spellLevel: number[] | undefined;
    taxCollectorDamagesBonuses: number | undefined;
    taxCollectorLifePoints: number | undefined;
    boostPoints: number | undefined;
    taxCollectorsCount: number | undefined;
    maxTaxCollectorsCount: number | undefined;
    taxCollectorProspecting: number | undefined;
    taxCollectorWisdom: number | undefined;
    spellId: number[] | undefined;
    constructor(taxCollectorPods?: number | undefined, spellLevel?: number[] | undefined, taxCollectorDamagesBonuses?: number | undefined, taxCollectorLifePoints?: number | undefined, boostPoints?: number | undefined, taxCollectorsCount?: number | undefined, maxTaxCollectorsCount?: number | undefined, taxCollectorProspecting?: number | undefined, taxCollectorWisdom?: number | undefined, spellId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseItemAddOkMessage extends DofusMessage {
    static id: number;
    itemInfo: ObjectItemToSellInBid | undefined;
    constructor(itemInfo?: ObjectItemToSellInBid | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaRegistrationStatusMessage extends DofusMessage {
    static id: number;
    battleMode: number | undefined;
    step: number | undefined;
    registered: boolean | undefined;
    constructor(battleMode?: number | undefined, step?: number | undefined, registered?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyEntityUpdateLightMessage extends PartyUpdateLightMessage {
    static id: number;
    indexId: number | undefined;
    constructor(partyId?: number | undefined, id_?: number | undefined, regenRate?: number | undefined, maxLifePoints?: number | undefined, lifePoints?: number | undefined, prospecting?: number | undefined, indexId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextMoveMultipleElementsMessage extends DofusMessage {
    static id: number;
    movements: EntityMovementInformations[] | undefined;
    constructor(movements?: EntityMovementInformations[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyFollowStatusUpdateMessage extends AbstractPartyMessage {
    static id: number;
    followedId: number | undefined;
    success: boolean | undefined;
    isFollowed: boolean | undefined;
    constructor(partyId?: number | undefined, followedId?: number | undefined, success?: boolean | undefined, isFollowed?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightAddedMessage extends DofusMessage {
    static id: number;
    fight: PrismFightersInformation | undefined;
    constructor(fight?: PrismFightersInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ItemForPresetUpdateMessage extends DofusMessage {
    static id: number;
    presetItem: ItemForPreset | undefined;
    presetId: number | undefined;
    constructor(presetItem?: ItemForPreset | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SetCharacterRestrictionsMessage extends DofusMessage {
    static id: number;
    restrictions: ActorRestrictionsInformations | undefined;
    actorId: number | undefined;
    constructor(restrictions?: ActorRestrictionsInformations | undefined, actorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyKickedByMessage extends AbstractPartyMessage {
    static id: number;
    kickerId: number | undefined;
    constructor(partyId?: number | undefined, kickerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestStepStartedMessage extends DofusMessage {
    static id: number;
    stepId: number | undefined;
    questId: number | undefined;
    constructor(stepId?: number | undefined, questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceMembershipMessage extends AllianceJoinedMessage {
    static id: number;
    constructor(enabled?: boolean | undefined, leadingGuildId?: number | undefined, allianceInfo?: AllianceInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InviteInHavenBagClosedMessage extends DofusMessage {
    static id: number;
    hostInformations: CharacterMinimalInformations | undefined;
    constructor(hostInformations?: CharacterMinimalInformations | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseGenericItemAddedMessage extends DofusMessage {
    static id: number;
    objGenericId: number | undefined;
    constructor(objGenericId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentRankUpdateMessage extends DofusMessage {
    static id: number;
    verbose: boolean | undefined;
    alignmentRank: number | undefined;
    constructor(verbose?: boolean | undefined, alignmentRank?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccessoryPreviewErrorMessage extends DofusMessage {
    static id: number;
    error: number | undefined;
    constructor(error?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSelectedForceMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFactsRequestMessage extends DofusMessage {
    static id: number;
    guildId: number | undefined;
    constructor(guildId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ClientKeyMessage extends DofusMessage {
    static id: number;
    key: string | undefined;
    constructor(key?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NicknameChoiceRequestMessage extends DofusMessage {
    static id: number;
    nickname: string | undefined;
    constructor(nickname?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceFactsRequestMessage extends DofusMessage {
    static id: number;
    allianceId: number | undefined;
    constructor(allianceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportHavenBagRequestMessage extends DofusMessage {
    static id: number;
    guestId: number | undefined;
    constructor(guestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapChangeOrientationRequestMessage extends DofusMessage {
    static id: number;
    direction: number | undefined;
    constructor(direction?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeRequestOnTaxCollectorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeOnHumanVendorRequestMessage extends DofusMessage {
    static id: number;
    humanVendorCell: number | undefined;
    humanVendorId: number | undefined;
    constructor(humanVendorCell?: number | undefined, humanVendorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBuyMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    objectToBuyId: number | undefined;
    constructor(quantity?: number | undefined, objectToBuyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EnterHavenBagRequestMessage extends DofusMessage {
    static id: number;
    havenBagOwner: number | undefined;
    constructor(havenBagOwner?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ErrorMapNotFoundMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    constructor(mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeRequestMessage extends DofusMessage {
    static id: number;
    exchangeType: number | undefined;
    constructor(exchangeType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangePlayerRequestMessage extends ExchangeRequestMessage {
    static id: number;
    target: number | undefined;
    constructor(exchangeType?: number | undefined, target?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPlayerFightRequestMessage extends DofusMessage {
    static id: number;
    targetCellId: number | undefined;
    friendly: boolean | undefined;
    targetId: number | undefined;
    constructor(targetCellId?: number | undefined, friendly?: boolean | undefined, targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangePlayerMultiCraftRequestMessage extends ExchangeRequestMessage {
    static id: number;
    skillId: number | undefined;
    target: number | undefined;
    constructor(exchangeType?: number | undefined, skillId?: number | undefined, target?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectMoveMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    objectUID: number | undefined;
    constructor(quantity?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectMovePricedMessage extends ExchangeObjectMoveMessage {
    static id: number;
    price: number | undefined;
    constructor(quantity?: number | undefined, objectUID?: number | undefined, price?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeStartAsVendorMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PortalUseRequestMessage extends DofusMessage {
    static id: number;
    portalId: number | undefined;
    constructor(portalId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeSellMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    objectToSellId: number | undefined;
    constructor(quantity?: number | undefined, objectToSellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayFreeSoulRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LeaveDialogRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportHavenBagAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    constructor(accept?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class KickHavenBagRequestMessage extends DofusMessage {
    static id: number;
    guestId: number | undefined;
    constructor(guestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NpcGenericActionRequestMessage extends DofusMessage {
    static id: number;
    npcMapId: number | undefined;
    npcActionId: number | undefined;
    npcId: number | undefined;
    constructor(npcMapId?: number | undefined, npcActionId?: number | undefined, npcId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayTaxCollectorFightRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayPlayerFightFriendlyAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    fightId: number | undefined;
    constructor(accept?: boolean | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeShowVendorTaxMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeRequestOnShopStockMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseTeleportRequestMessage extends DofusMessage {
    static id: number;
    houseInstanceId: number | undefined;
    houseId: number | undefined;
    constructor(houseInstanceId?: number | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendJoinRequestMessage extends DofusMessage {
    static id: number;
    target: AbstractPlayerSearchInformation | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSpouseFollowWithCompassRequestMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SocialNoticeSetRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildBulletinSetRequestMessage extends SocialNoticeSetRequestMessage {
    static id: number;
    notifyMembers: boolean | undefined;
    content: string | undefined;
    constructor(notifyMembers?: boolean | undefined, content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildSpellUpgradeRequestMessage extends DofusMessage {
    static id: number;
    spellId: number | undefined;
    constructor(spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildCharacsUpgradeRequestMessage extends DofusMessage {
    static id: number;
    charaTypeTarget: number | undefined;
    constructor(charaTypeTarget?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpouseGetInformationsMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WarnOnPermaDeathMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildGetInformationsMessage extends DofusMessage {
    static id: number;
    infoType: number | undefined;
    constructor(infoType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSetWarnOnConnectionMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredGetListMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaginationRequestAbstractMessage extends DofusMessage {
    static id: number;
    count: number | undefined;
    offset: number | undefined;
    constructor(count?: number | undefined, offset?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildListApplicationRequestMessage extends PaginationRequestAbstractMessage {
    static id: number;
    constructor(count?: number | undefined, offset?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMotdSetRequestMessage extends SocialNoticeSetRequestMessage {
    static id: number;
    content: string | undefined;
    constructor(content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildMemberSetWarnOnConnectionMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildApplicationAnswerMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    accepted: boolean | undefined;
    constructor(playerId?: number | undefined, accepted?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredDeleteRequestMessage extends DofusMessage {
    static id: number;
    session: boolean | undefined;
    accountId: number | undefined;
    constructor(session?: boolean | undefined, accountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildChangeMemberParametersMessage extends DofusMessage {
    static id: number;
    experienceGivenPercent: number | undefined;
    rights: number | undefined;
    rank: number | undefined;
    memberId: number | undefined;
    constructor(experienceGivenPercent?: number | undefined, rights?: number | undefined, rank?: number | undefined, memberId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UpdateRecruitmentInformationMessage extends DofusMessage {
    static id: number;
    recruitmentData: GuildRecruitmentInformation | undefined;
    constructor(recruitmentData?: GuildRecruitmentInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightJoinRequestMessage extends DofusMessage {
    static id: number;
    taxCollectorId: number | undefined;
    constructor(taxCollectorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendDeleteRequestMessage extends DofusMessage {
    static id: number;
    accountId: number | undefined;
    constructor(accountId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ContactLookRequestMessage extends DofusMessage {
    static id: number;
    contactType: number | undefined;
    requestId: number | undefined;
    constructor(contactType?: number | undefined, requestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ContactLookRequestByIdMessage extends ContactLookRequestMessage {
    static id: number;
    playerId: number | undefined;
    constructor(contactType?: number | undefined, requestId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendAddRequestMessage extends DofusMessage {
    static id: number;
    target: AbstractPlayerSearchInformation | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PlayerStatusUpdateRequestMessage extends DofusMessage {
    static id: number;
    status: PlayerStatus | undefined;
    constructor(status?: PlayerStatus | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildPaddockTeleportRequestMessage extends DofusMessage {
    static id: number;
    paddockId: number | undefined;
    constructor(paddockId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IgnoredAddRequestMessage extends DofusMessage {
    static id: number;
    session: boolean | undefined;
    target: AbstractPlayerSearchInformation | undefined;
    constructor(session?: boolean | undefined, target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildDeleteApplicationRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildUpdateApplicationMessage extends DofusMessage {
    static id: number;
    guildId: number | undefined;
    applyText: string | undefined;
    constructor(guildId?: number | undefined, applyText?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSetStatusShareMessage extends DofusMessage {
    static id: number;
    share: boolean | undefined;
    constructor(share?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildKickRequestMessage extends DofusMessage {
    static id: number;
    kickedId: number | undefined;
    constructor(kickedId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildApplicationListenMessage extends DofusMessage {
    static id: number;
    listen: boolean | undefined;
    constructor(listen?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildJoinAutomaticallyRequestMessage extends DofusMessage {
    static id: number;
    guildId: number | undefined;
    constructor(guildId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInvitationSearchMessage extends DofusMessage {
    static id: number;
    target: AbstractPlayerSearchInformation | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendGuildSetWarnOnAchievementCompleteMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildSummaryRequestMessage extends PaginationRequestAbstractMessage {
    static id: number;
    sortType: number | undefined;
    maxSuccessFilter: number | undefined;
    maxPlayerLevelFilter: number | undefined;
    criterionFilter: number[] | undefined;
    nameFilter: string | undefined;
    languagesFilter: number[] | undefined;
    minPlayerLevelFilter: number | undefined;
    minLevelFilter: number | undefined;
    recruitmentTypeFilter: number[] | undefined;
    maxLevelFilter: number | undefined;
    minSuccessFilter: number | undefined;
    hideFullFilter: boolean | undefined;
    sortDescending: boolean | undefined;
    constructor(count?: number | undefined, offset?: number | undefined, sortType?: number | undefined, maxSuccessFilter?: number | undefined, maxPlayerLevelFilter?: number | undefined, criterionFilter?: number[] | undefined, nameFilter?: string | undefined, languagesFilter?: number[] | undefined, minPlayerLevelFilter?: number | undefined, minLevelFilter?: number | undefined, recruitmentTypeFilter?: number[] | undefined, maxLevelFilter?: number | undefined, minSuccessFilter?: number | undefined, hideFullFilter?: boolean | undefined, sortDescending?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInvitationMessage extends DofusMessage {
    static id: number;
    targetId: number | undefined;
    constructor(targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildGetPlayerApplicationMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightLeaveRequestMessage extends DofusMessage {
    static id: number;
    characterId: number | undefined;
    taxCollectorId: number | undefined;
    constructor(characterId?: number | undefined, taxCollectorId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintancesGetListMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSpouseJoinRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendSetWarnOnLevelGainMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildSubmitApplicationMessage extends DofusMessage {
    static id: number;
    filterSearchName: string | undefined;
    timeSpent: number | undefined;
    filterLastSort: string | undefined;
    guildId: number | undefined;
    filterMinMaxAchievement: string | undefined;
    applyText: string | undefined;
    filterAmbiance: string | undefined;
    filterMinMaxCharacterLevel: string | undefined;
    filterPlaytime: string | undefined;
    filterInterest: string | undefined;
    filterMinMaxGuildLevel: string | undefined;
    filterLanguage: string | undefined;
    filterRecruitmentType: string | undefined;
    constructor(filterSearchName?: string | undefined, timeSpent?: number | undefined, filterLastSort?: string | undefined, guildId?: number | undefined, filterMinMaxAchievement?: string | undefined, applyText?: string | undefined, filterAmbiance?: string | undefined, filterMinMaxCharacterLevel?: string | undefined, filterPlaytime?: string | undefined, filterInterest?: string | undefined, filterMinMaxGuildLevel?: string | undefined, filterLanguage?: string | undefined, filterRecruitmentType?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FriendsGetListMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildFightTakePlaceRequestMessage extends GuildFightJoinRequestMessage {
    static id: number;
    replacedCharacterId: number | undefined;
    constructor(taxCollectorId?: number | undefined, replacedCharacterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PopupWarningCloseRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatAbstractClientMessage extends DofusMessage {
    static id: number;
    content: string | undefined;
    constructor(content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatClientPrivateMessage extends ChatAbstractClientMessage {
    static id: number;
    receiver: AbstractPlayerSearchInformation | undefined;
    constructor(content?: string | undefined, receiver?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatClientPrivateWithObjectMessage extends ChatClientPrivateMessage {
    static id: number;
    objects: ObjectItem[] | undefined;
    constructor(content?: string | undefined, receiver?: AbstractPlayerSearchInformation | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MoodSmileyRequestMessage extends DofusMessage {
    static id: number;
    smileyId: number | undefined;
    constructor(smileyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatSmileyRequestMessage extends DofusMessage {
    static id: number;
    smileyId: number | undefined;
    constructor(smileyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatCommunityChannelSetCommunityRequestMessage extends DofusMessage {
    static id: number;
    communityId: number | undefined;
    constructor(communityId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicWhoIsRequestMessage extends DofusMessage {
    static id: number;
    target: AbstractPlayerSearchInformation | undefined;
    verbose: boolean | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined, verbose?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatClientMultiMessage extends ChatAbstractClientMessage {
    static id: number;
    channel: number | undefined;
    constructor(content?: string | undefined, channel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChatClientMultiWithObjectMessage extends ChatClientMultiMessage {
    static id: number;
    objects: ObjectItem[] | undefined;
    constructor(content?: string | undefined, channel?: number | undefined, objects?: ObjectItem[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChannelEnablingMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    channel: number | undefined;
    constructor(enable?: boolean | undefined, channel?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NumericWhoIsRequestMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    constructor(playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyPledgeLoyaltyRequestMessage extends AbstractPartyMessage {
    static id: number;
    loyal: boolean | undefined;
    constructor(partyId?: number | undefined, loyal?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyFollowMemberRequestMessage extends AbstractPartyMessage {
    static id: number;
    playerId: number | undefined;
    constructor(partyId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyFollowThisMemberRequestMessage extends PartyFollowMemberRequestMessage {
    static id: number;
    enabled: boolean | undefined;
    constructor(partyId?: number | undefined, playerId?: number | undefined, enabled?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderAvailableDungeonsRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyRefuseInvitationMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyNameSetRequestMessage extends AbstractPartyMessage {
    static id: number;
    partyName: string | undefined;
    constructor(partyId?: number | undefined, partyName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyLeaveRequestMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportToBuddyAnswerMessage extends DofusMessage {
    static id: number;
    buddyId: number | undefined;
    accept: boolean | undefined;
    dungeonId: number | undefined;
    constructor(buddyId?: number | undefined, accept?: boolean | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaFightAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    fightId: number | undefined;
    constructor(accept?: boolean | undefined, fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyAbdicateThroneMessage extends AbstractPartyMessage {
    static id: number;
    playerId: number | undefined;
    constructor(partyId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachInvitationAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    constructor(accept?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaRegisterMessage extends DofusMessage {
    static id: number;
    battleMode: number | undefined;
    constructor(battleMode?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationRequestMessage extends DofusMessage {
    static id: number;
    target: AbstractPlayerSearchInformation | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationArenaRequestMessage extends PartyInvitationRequestMessage {
    static id: number;
    constructor(target?: AbstractPlayerSearchInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderListenRequestMessage extends DofusMessage {
    static id: number;
    dungeonId: number | undefined;
    constructor(dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationDetailsRequestMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyCancelInvitationMessage extends AbstractPartyMessage {
    static id: number;
    guestId: number | undefined;
    constructor(partyId?: number | undefined, guestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyInvitationDungeonRequestMessage extends PartyInvitationRequestMessage {
    static id: number;
    dungeonId: number | undefined;
    constructor(target?: AbstractPlayerSearchInformation | undefined, dungeonId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DungeonPartyFinderRegisterRequestMessage extends DofusMessage {
    static id: number;
    dungeonIds: number[] | undefined;
    constructor(dungeonIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayArenaUnregisterMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyAcceptInvitationMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyStopFollowRequestMessage extends AbstractPartyMessage {
    static id: number;
    playerId: number | undefined;
    constructor(partyId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyKickRequestMessage extends AbstractPartyMessage {
    static id: number;
    playerId: number | undefined;
    constructor(partyId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightJoinLeaveRequestMessage extends DofusMessage {
    static id: number;
    join: boolean | undefined;
    subAreaId: number | undefined;
    constructor(join?: boolean | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismSettingsRequestMessage extends DofusMessage {
    static id: number;
    startDefenseTime: number | undefined;
    subAreaId: number | undefined;
    constructor(startDefenseTime?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceKickRequestMessage extends DofusMessage {
    static id: number;
    kickedId: number | undefined;
    constructor(kickedId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismInfoJoinLeaveRequestMessage extends DofusMessage {
    static id: number;
    join: boolean | undefined;
    constructor(join?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismFightSwapRequestMessage extends DofusMessage {
    static id: number;
    targetId: number | undefined;
    subAreaId: number | undefined;
    constructor(targetId?: number | undefined, subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismSetSabotagedRequestMessage extends DofusMessage {
    static id: number;
    subAreaId: number | undefined;
    constructor(subAreaId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismUseRequestMessage extends DofusMessage {
    static id: number;
    moduleToUse: number | undefined;
    constructor(moduleToUse?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismModuleExchangeRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SetEnableAVARequestMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismsListRegisterMessage extends DofusMessage {
    static id: number;
    listen: number | undefined;
    constructor(listen?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceMotdSetRequestMessage extends SocialNoticeSetRequestMessage {
    static id: number;
    content: string | undefined;
    constructor(content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PrismAttackRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceChangeGuildRightsMessage extends DofusMessage {
    static id: number;
    rights: number | undefined;
    guildId: number | undefined;
    constructor(rights?: number | undefined, guildId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceBulletinSetRequestMessage extends SocialNoticeSetRequestMessage {
    static id: number;
    notifyMembers: boolean | undefined;
    content: string | undefined;
    constructor(notifyMembers?: boolean | undefined, content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInsiderInfoRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInvitationMessage extends DofusMessage {
    static id: number;
    targetId: number | undefined;
    constructor(targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShowCellRequestMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    constructor(cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightTurnFinishMessage extends DofusMessage {
    static id: number;
    isAfk: boolean | undefined;
    constructor(isAfk?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapMovementRequestMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    keyMovements: number[] | undefined;
    constructor(mapId?: number | undefined, keyMovements?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightCastOnTargetRequestMessage extends DofusMessage {
    static id: number;
    targetId: number | undefined;
    spellId: number | undefined;
    constructor(targetId?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameActionFightCastRequestMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    spellId: number | undefined;
    constructor(cellId?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FinishMoveSetRequestMessage extends DofusMessage {
    static id: number;
    finishMoveState: boolean | undefined;
    finishMoveId: number | undefined;
    constructor(finishMoveState?: boolean | undefined, finishMoveId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FinishMoveListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SpellVariantActivationRequestMessage extends DofusMessage {
    static id: number;
    spellId: number | undefined;
    constructor(spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextQuitMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachRoomUnlockRequestMessage extends DofusMessage {
    static id: number;
    roomId: number | undefined;
    constructor(roomId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachRewardBuyMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachExitRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachKickRequestMessage extends DofusMessage {
    static id: number;
    target: number | undefined;
    constructor(target?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BreachInvitationRequestMessage extends DofusMessage {
    static id: number;
    guests: number[] | undefined;
    constructor(guests?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EditHavenBagRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChangeHavenBagRoomRequestMessage extends DofusMessage {
    static id: number;
    roomId: number | undefined;
    constructor(roomId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class EditHavenBagCancelRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagFurnituresRequestMessage extends DofusMessage {
    static id: number;
    cellIds: number[] | undefined;
    funitureIds: number[] | undefined;
    orientations: number[] | undefined;
    constructor(cellIds?: number[] | undefined, funitureIds?: number[] | undefined, orientations?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HavenBagPermissionsUpdateRequestMessage extends DofusMessage {
    static id: number;
    permissions: number | undefined;
    constructor(permissions?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OpenHavenBagFurnitureSequenceRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CloseHavenBagFurnitureSequenceRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChangeThemeRequestMessage extends DofusMessage {
    static id: number;
    theme: number | undefined;
    constructor(theme?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExitHavenBagRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseKickIndoorMerchantRequestMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    constructor(cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightJoinRequestMessage extends DofusMessage {
    static id: number;
    fightId: number | undefined;
    fighterId: number | undefined;
    constructor(fightId?: number | undefined, fighterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementPositionRequestMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    constructor(cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsRequestMessage extends GameFightPlacementPositionRequestMessage {
    static id: number;
    requestedId: number | undefined;
    constructor(cellId?: number | undefined, requestedId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextKickMessage extends DofusMessage {
    static id: number;
    targetId: number | undefined;
    constructor(targetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsCancelMessage extends DofusMessage {
    static id: number;
    requestId: number | undefined;
    constructor(requestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightReadyMessage extends DofusMessage {
    static id: number;
    isReady: boolean | undefined;
    constructor(isReady?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightPlacementSwapPositionsAcceptMessage extends DofusMessage {
    static id: number;
    requestId: number | undefined;
    constructor(requestId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NotificationResetMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestStepInfoRequestMessage extends DofusMessage {
    static id: number;
    questId: number | undefined;
    constructor(questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WatchQuestStepInfoRequestMessage extends QuestStepInfoRequestMessage {
    static id: number;
    playerId: number | undefined;
    constructor(questId?: number | undefined, playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class UnfollowQuestObjectiveRequestMessage extends DofusMessage {
    static id: number;
    objectiveId: number | undefined;
    questId: number | undefined;
    constructor(objectiveId?: number | undefined, questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntFlagRemoveRequestMessage extends DofusMessage {
    static id: number;
    index: number | undefined;
    questType: number | undefined;
    constructor(index?: number | undefined, questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntFlagRequestMessage extends DofusMessage {
    static id: number;
    index: number | undefined;
    questType: number | undefined;
    constructor(index?: number | undefined, questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuidedModeReturnRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntLegendaryRequestMessage extends DofusMessage {
    static id: number;
    legendaryId: number | undefined;
    constructor(legendaryId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuidedModeQuitRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntGiveUpRequestMessage extends DofusMessage {
    static id: number;
    questType: number | undefined;
    constructor(questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FollowQuestObjectiveRequestMessage extends DofusMessage {
    static id: number;
    objectiveId: number | undefined;
    questId: number | undefined;
    constructor(objectiveId?: number | undefined, questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementRewardRequestMessage extends DofusMessage {
    static id: number;
    achievementId: number | undefined;
    constructor(achievementId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NotificationUpdateFlagMessage extends DofusMessage {
    static id: number;
    index: number | undefined;
    constructor(index?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestObjectiveValidationMessage extends DofusMessage {
    static id: number;
    objectiveId: number | undefined;
    questId: number | undefined;
    constructor(objectiveId?: number | undefined, questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementDetailsRequestMessage extends DofusMessage {
    static id: number;
    achievementId: number | undefined;
    constructor(achievementId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class RefreshFollowedQuestsOrderRequestMessage extends DofusMessage {
    static id: number;
    quests: number[] | undefined;
    constructor(quests?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class QuestStartRequestMessage extends DofusMessage {
    static id: number;
    questId: number | undefined;
    constructor(questId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementDetailedListRequestMessage extends DofusMessage {
    static id: number;
    categoryId: number | undefined;
    constructor(categoryId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AchievementAlmostFinishedDetailedListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TreasureHuntDigRequestMessage extends DofusMessage {
    static id: number;
    questType: number | undefined;
    constructor(questType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AuthenticationTicketMessage extends DofusMessage {
    static id: number;
    ticket: string | undefined;
    lang: string | undefined;
    constructor(ticket?: string | undefined, lang?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSelectionMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSelectionWithRemodelMessage extends CharacterSelectionMessage {
    static id: number;
    remodel: RemodelingInformation | undefined;
    constructor(id_?: number | undefined, remodel?: RemodelingInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterNameSuggestionRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterSelectedForceReadyMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharactersListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCreationRequestMessage extends DofusMessage {
    static id: number;
    cosmeticId: number | undefined;
    name: string | undefined;
    colors: number[] | undefined;
    breed: number | undefined;
    sex: boolean | undefined;
    constructor(cosmeticId?: number | undefined, name?: string | undefined, colors?: number[] | undefined, breed?: number | undefined, sex?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterCanBeCreatedRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterReplayRequestMessage extends DofusMessage {
    static id: number;
    characterId: number | undefined;
    constructor(characterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterReplayWithRemodelRequestMessage extends CharacterReplayRequestMessage {
    static id: number;
    remodel: RemodelingInformation | undefined;
    constructor(characterId?: number | undefined, remodel?: RemodelingInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionsObjetAttributionMessage extends DofusMessage {
    static id: number;
    characterId: number | undefined;
    actionId: number | undefined;
    constructor(characterId?: number | undefined, actionId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionsExecuteMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterFirstSelectionMessage extends CharacterSelectionMessage {
    static id: number;
    doTutorial: boolean | undefined;
    constructor(id_?: number | undefined, doTutorial?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameContextCreateRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterDeletionRequestMessage extends DofusMessage {
    static id: number;
    secretAnswerHash: string | undefined;
    characterId: number | undefined;
    constructor(secretAnswerHash?: string | undefined, characterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AcquaintanceSearchMessage extends DofusMessage {
    static id: number;
    tag: AccountTagInformation | undefined;
    constructor(tag?: AccountTagInformation | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ServerSelectionMessage extends DofusMessage {
    static id: number;
    serverId: number | undefined;
    constructor(serverId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CheckFileMessage extends DofusMessage {
    static id: number;
    value: string | undefined;
    type: number | undefined;
    filenameHash: string | undefined;
    constructor(value?: string | undefined, type?: number | undefined, filenameHash?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ResetCharacterStatsRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StatsUpgradeRequestMessage extends DofusMessage {
    static id: number;
    statId: number | undefined;
    boostPoint: number | undefined;
    useAdditionnal: boolean | undefined;
    constructor(statId?: number | undefined, boostPoint?: number | undefined, useAdditionnal?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StartupActionsAllAttributionMessage extends DofusMessage {
    static id: number;
    characterId: number | undefined;
    constructor(characterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockToSellListRequestMessage extends DofusMessage {
    static id: number;
    pageIndex: number | undefined;
    constructor(pageIndex?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockToSellFilterMessage extends DofusMessage {
    static id: number;
    orderBy: number | undefined;
    areaId: number | undefined;
    atLeastNbMount: number | undefined;
    maxPrice: number | undefined;
    atLeastNbMachine: number | undefined;
    constructor(orderBy?: number | undefined, areaId?: number | undefined, atLeastNbMount?: number | undefined, maxPrice?: number | undefined, atLeastNbMachine?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseToSellListRequestMessage extends DofusMessage {
    static id: number;
    pageIndex: number | undefined;
    constructor(pageIndex?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseToSellFilterMessage extends DofusMessage {
    static id: number;
    orderBy: number | undefined;
    maxPrice: number | undefined;
    areaId: number | undefined;
    atLeastNbChest: number | undefined;
    atLeastNbRoom: number | undefined;
    skillRequested: number | undefined;
    constructor(orderBy?: number | undefined, maxPrice?: number | undefined, areaId?: number | undefined, atLeastNbChest?: number | undefined, atLeastNbRoom?: number | undefined, skillRequested?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AdminQuietCommandMessage extends AdminCommandMessage {
    static id: number;
    constructor(content?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SetEnablePVPRequestMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    constructor(enable?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class CharacterAlignmentWarEffortProgressionRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentWarEffortDonateRequestMessage extends DofusMessage {
    static id: number;
    donation: number | undefined;
    constructor(donation?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AlignmentWarEffortProgressionRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectAveragePricesGetMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ReloginTokenRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AnomalySubareaInformationRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ZaapRespawnSaveRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportRequestMessage extends DofusMessage {
    static id: number;
    mapId: number | undefined;
    destinationType: number | undefined;
    sourceType: number | undefined;
    constructor(mapId?: number | undefined, destinationType?: number | undefined, sourceType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryDefineSettingsMessage extends DofusMessage {
    static id: number;
    settings: JobCrafterDirectorySettings | undefined;
    constructor(settings?: JobCrafterDirectorySettings | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobBookSubscribeRequestMessage extends DofusMessage {
    static id: number;
    jobIds: number[] | undefined;
    constructor(jobIds?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryListRequestMessage extends DofusMessage {
    static id: number;
    jobId: number | undefined;
    constructor(jobId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectUseInWorkshopMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    objectUID: number | undefined;
    constructor(quantity?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeReplayStopMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftCountRequestMessage extends DofusMessage {
    static id: number;
    count: number | undefined;
    constructor(count?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage extends DofusMessage {
    static id: number;
    allow: boolean | undefined;
    constructor(allow?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeCraftPaymentModificationRequestMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    constructor(quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeSetCraftRecipeMessage extends DofusMessage {
    static id: number;
    objectGID: number | undefined;
    constructor(objectGID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountSetXpRatioRequestMessage extends DofusMessage {
    static id: number;
    xpRatio: number | undefined;
    constructor(xpRatio?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountHarnessDissociateRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountInformationInPaddockRequestMessage extends DofusMessage {
    static id: number;
    mapRideId: number | undefined;
    constructor(mapRideId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountReleaseRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountHarnessColorsUpdateRequestMessage extends DofusMessage {
    static id: number;
    useHarnessColors: boolean | undefined;
    constructor(useHarnessColors?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountRenameRequestMessage extends DofusMessage {
    static id: number;
    mountId: number | undefined;
    name: string | undefined;
    constructor(mountId?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountFeedRequestMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    mountFoodUid: number | undefined;
    mountLocation: number | undefined;
    mountUid: number | undefined;
    constructor(quantity?: number | undefined, mountFoodUid?: number | undefined, mountLocation?: number | undefined, mountUid?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeHandleMountsMessage extends DofusMessage {
    static id: number;
    ridesId: number[] | undefined;
    actionType: number | undefined;
    constructor(ridesId?: number[] | undefined, actionType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeRequestOnMountStockMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountInformationRequestMessage extends DofusMessage {
    static id: number;
    time: number | undefined;
    id_: number | undefined;
    constructor(time?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountToggleRidingRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MountSterilizeRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseGuildShareRequestMessage extends DofusMessage {
    static id: number;
    enable: boolean | undefined;
    instanceId: number | undefined;
    rights: number | undefined;
    houseId: number | undefined;
    constructor(enable?: boolean | undefined, instanceId?: number | undefined, rights?: number | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseKickRequestMessage extends DofusMessage {
    static id: number;
    id_: number | undefined;
    constructor(id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseSellRequestMessage extends DofusMessage {
    static id: number;
    amount: number | undefined;
    forSale: boolean | undefined;
    instanceId: number | undefined;
    constructor(amount?: number | undefined, forSale?: boolean | undefined, instanceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableChangeCodeMessage extends DofusMessage {
    static id: number;
    code: string | undefined;
    constructor(code?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseLockFromInsideRequestMessage extends LockableChangeCodeMessage {
    static id: number;
    constructor(code?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseBuyRequestMessage extends DofusMessage {
    static id: number;
    proposedPrice: number | undefined;
    constructor(proposedPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseSellFromInsideRequestMessage extends HouseSellRequestMessage {
    static id: number;
    constructor(amount?: number | undefined, forSale?: boolean | undefined, instanceId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HouseGuildRightsViewMessage extends DofusMessage {
    static id: number;
    instanceId: number | undefined;
    houseId: number | undefined;
    constructor(instanceId?: number | undefined, houseId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class OrnamentSelectRequestMessage extends DofusMessage {
    static id: number;
    ornamentId: number | undefined;
    constructor(ornamentId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitlesAndOrnamentsListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TitleSelectRequestMessage extends DofusMessage {
    static id: number;
    titleId: number | undefined;
    constructor(titleId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetDeleteRequestMessage extends DofusMessage {
    static id: number;
    presetId: number | undefined;
    constructor(presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectUseMessage extends DofusMessage {
    static id: number;
    objectUID: number | undefined;
    constructor(objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectUseMultipleMessage extends ObjectUseMessage {
    static id: number;
    quantity: number | undefined;
    constructor(objectUID?: number | undefined, quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectDropMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    objectUID: number | undefined;
    constructor(quantity?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IconPresetSaveRequestMessage extends DofusMessage {
    static id: number;
    updateData: boolean | undefined;
    symbolId: number | undefined;
    presetId: number | undefined;
    constructor(updateData?: boolean | undefined, symbolId?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IconNamedPresetSaveRequestMessage extends IconPresetSaveRequestMessage {
    static id: number;
    type: number | undefined;
    name: string | undefined;
    constructor(updateData?: boolean | undefined, symbolId?: number | undefined, presetId?: number | undefined, type?: number | undefined, name?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectDeleteMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    objectUID: number | undefined;
    constructor(quantity?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AccessoryPreviewRequestMessage extends DofusMessage {
    static id: number;
    genericId: number[] | undefined;
    constructor(genericId?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarRemoveRequestMessage extends DofusMessage {
    static id: number;
    slot: number | undefined;
    barType: number | undefined;
    constructor(slot?: number | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectUseOnCharacterMessage extends ObjectUseMessage {
    static id: number;
    characterId: number | undefined;
    constructor(objectUID?: number | undefined, characterId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarSwapRequestMessage extends DofusMessage {
    static id: number;
    secondSlot: number | undefined;
    firstSlot: number | undefined;
    barType: number | undefined;
    constructor(secondSlot?: number | undefined, firstSlot?: number | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectUseOnCellMessage extends ObjectUseMessage {
    static id: number;
    cells: number | undefined;
    constructor(objectUID?: number | undefined, cells?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ShortcutBarAddRequestMessage extends DofusMessage {
    static id: number;
    shortcut: Shortcut | undefined;
    barType: number | undefined;
    constructor(shortcut?: Shortcut | undefined, barType?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolsPresetSaveRequestMessage extends IconPresetSaveRequestMessage {
    static id: number;
    constructor(updateData?: boolean | undefined, symbolId?: number | undefined, presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PresetUseRequestMessage extends DofusMessage {
    static id: number;
    presetId: number | undefined;
    constructor(presetId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectSetPositionMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    position: number | undefined;
    objectUID: number | undefined;
    constructor(quantity?: number | undefined, position?: number | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseBuyMessage extends DofusMessage {
    static id: number;
    price: number | undefined;
    qty: number | undefined;
    uid: number | undefined;
    constructor(price?: number | undefined, qty?: number | undefined, uid?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHousePriceMessage extends DofusMessage {
    static id: number;
    genId: number | undefined;
    constructor(genId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseSearchMessage extends DofusMessage {
    static id: number;
    follow: boolean | undefined;
    genId: number | undefined;
    constructor(follow?: boolean | undefined, genId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseListMessage extends DofusMessage {
    static id: number;
    follow: boolean | undefined;
    id_: number | undefined;
    constructor(follow?: boolean | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeBidHouseTypeMessage extends DofusMessage {
    static id: number;
    follow: boolean | undefined;
    type: number | undefined;
    constructor(follow?: boolean | undefined, type?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectModifyPricedMessage extends ExchangeObjectMovePricedMessage {
    static id: number;
    constructor(quantity?: number | undefined, objectUID?: number | undefined, price?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class StopToListenRunningFightRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightSpectatePlayerRequestMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    constructor(playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapRunningFightDetailsRequestMessage extends DofusMessage {
    static id: number;
    fightId: number | undefined;
    constructor(fightId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MapRunningFightListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeAcceptMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeReadyMessage extends DofusMessage {
    static id: number;
    step: number | undefined;
    ready: boolean | undefined;
    constructor(step?: number | undefined, ready?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class FocusedExchangeReadyMessage extends ExchangeReadyMessage {
    static id: number;
    focusActionId: number | undefined;
    constructor(step?: number | undefined, ready?: boolean | undefined, focusActionId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapMovementCancelMessage extends DofusMessage {
    static id: number;
    cellId: number | undefined;
    constructor(cellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ChangeMapMessage extends DofusMessage {
    static id: number;
    autopilot: boolean | undefined;
    mapId: number | undefined;
    constructor(autopilot?: boolean | undefined, mapId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameCautiousMapMovementRequestMessage extends GameMapMovementRequestMessage {
    static id: number;
    constructor(mapId?: number | undefined, keyMovements?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveUseRequestMessage extends DofusMessage {
    static id: number;
    skillInstanceUid: number | undefined;
    elemId: number | undefined;
    constructor(skillInstanceUid?: number | undefined, elemId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class InteractiveUseWithParamRequestMessage extends InteractiveUseRequestMessage {
    static id: number;
    id_: number | undefined;
    constructor(skillInstanceUid?: number | undefined, elemId?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameRolePlayAttackMonsterRequestMessage extends DofusMessage {
    static id: number;
    monsterGroupId: number | undefined;
    constructor(monsterGroupId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameMapMovementConfirmMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectMoveKamaMessage extends DofusMessage {
    static id: number;
    quantity: number | undefined;
    constructor(quantity?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertExistingToInvMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertListFromInvMessage extends DofusMessage {
    static id: number;
    ids: number[] | undefined;
    constructor(ids?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertAllToInvMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertListToInvMessage extends DofusMessage {
    static id: number;
    ids: number[] | undefined;
    constructor(ids?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertListWithQuantityToInvMessage extends DofusMessage {
    static id: number;
    qtys: number[] | undefined;
    ids: number[] | undefined;
    constructor(qtys?: number[] | undefined, ids?: number[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertAllFromInvMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ExchangeObjectTransfertExistingFromInvMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class NpcDialogReplyMessage extends DofusMessage {
    static id: number;
    replyId: number | undefined;
    constructor(replyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockBuyRequestMessage extends DofusMessage {
    static id: number;
    proposedPrice: number | undefined;
    constructor(proposedPrice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PaddockSellRequestMessage extends DofusMessage {
    static id: number;
    forSale: boolean | undefined;
    price: number | undefined;
    constructor(forSale?: boolean | undefined, price?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildInvitationAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    constructor(accept?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildModificationEmblemValidMessage extends DofusMessage {
    static id: number;
    guildEmblem: GuildEmblem | undefined;
    constructor(guildEmblem?: GuildEmblem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildModificationValidMessage extends DofusMessage {
    static id: number;
    guildEmblem: GuildEmblem | undefined;
    guildName: string | undefined;
    constructor(guildEmblem?: GuildEmblem | undefined, guildName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildModificationNameValidMessage extends DofusMessage {
    static id: number;
    guildName: string | undefined;
    constructor(guildName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GuildCreationValidMessage extends DofusMessage {
    static id: number;
    guildEmblem: GuildEmblem | undefined;
    guildName: string | undefined;
    constructor(guildEmblem?: GuildEmblem | undefined, guildName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class DiceRollRequestMessage extends DofusMessage {
    static id: number;
    channel: number | undefined;
    faces: number | undefined;
    dice: number | undefined;
    constructor(channel?: number | undefined, faces?: number | undefined, dice?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class TeleportBuddiesAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    constructor(accept?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceInvitationAnswerMessage extends DofusMessage {
    static id: number;
    accept: boolean | undefined;
    constructor(accept?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceModificationNameAndTagValidMessage extends DofusMessage {
    static id: number;
    allianceTag: string | undefined;
    allianceName: string | undefined;
    constructor(allianceTag?: string | undefined, allianceName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceCreationValidMessage extends DofusMessage {
    static id: number;
    allianceEmblem: GuildEmblem | undefined;
    allianceTag: string | undefined;
    allianceName: string | undefined;
    constructor(allianceEmblem?: GuildEmblem | undefined, allianceTag?: string | undefined, allianceName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceModificationValidMessage extends DofusMessage {
    static id: number;
    Alliancemblem: GuildEmblem | undefined;
    allianceTag: string | undefined;
    allianceName: string | undefined;
    constructor(Alliancemblem?: GuildEmblem | undefined, allianceTag?: string | undefined, allianceName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class AllianceModificationEmblemValidMessage extends DofusMessage {
    static id: number;
    Alliancemblem: GuildEmblem | undefined;
    constructor(Alliancemblem?: GuildEmblem | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolSelectRequestMessage extends DofusMessage {
    static id: number;
    idolId: number | undefined;
    activate: boolean | undefined;
    party: boolean | undefined;
    constructor(idolId?: number | undefined, activate?: boolean | undefined, party?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class IdolPartyRegisterRequestMessage extends DofusMessage {
    static id: number;
    register: boolean | undefined;
    constructor(register?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ForgettableSpellClientActionMessage extends DofusMessage {
    static id: number;
    action: number | undefined;
    spellId: number | undefined;
    constructor(action?: number | undefined, spellId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActivityHideRequestMessage extends DofusMessage {
    static id: number;
    activityId: number | undefined;
    constructor(activityId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActivitySuggestionsRequestMessage extends DofusMessage {
    static id: number;
    nbCards: number | undefined;
    minLevel: number | undefined;
    maxLevel: number | undefined;
    areaId: number | undefined;
    activityCategoryId: number | undefined;
    constructor(nbCards?: number | undefined, minLevel?: number | undefined, maxLevel?: number | undefined, areaId?: number | undefined, activityCategoryId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ActivityLockRequestMessage extends DofusMessage {
    static id: number;
    lock: boolean | undefined;
    activityId: number | undefined;
    constructor(lock?: boolean | undefined, activityId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiBufferListRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiConfirmationRequestMessage extends DofusMessage {
    static id: number;
    action: number | undefined;
    rate: number | undefined;
    ogrines: number | undefined;
    kamas: number | undefined;
    constructor(action?: number | undefined, rate?: number | undefined, ogrines?: number | undefined, kamas?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiCancelBidRequestMessage extends DofusMessage {
    static id: number;
    type: number | undefined;
    id_: number | undefined;
    constructor(type?: number | undefined, id_?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiShopApiKeyRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiValidationRequestMessage extends DofusMessage {
    static id: number;
    transaction: string | undefined;
    constructor(transaction?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiTokenRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class HaapiConsumeBufferRequestMessage extends DofusMessage {
    static id: number;
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SequenceNumberMessage extends DofusMessage {
    static id: number;
    number: number | undefined;
    constructor(number?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LivingObjectChangeSkinRequestMessage extends DofusMessage {
    static id: number;
    skinId: number | undefined;
    livingPosition: number | undefined;
    livingUID: number | undefined;
    constructor(skinId?: number | undefined, livingPosition?: number | undefined, livingUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class SymbioticObjectAssociateRequestMessage extends DofusMessage {
    static id: number;
    hostPos: number | undefined;
    hostUID: number | undefined;
    symbiotePos: number | undefined;
    symbioteUID: number | undefined;
    constructor(hostPos?: number | undefined, hostUID?: number | undefined, symbiotePos?: number | undefined, symbioteUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MimicryObjectFeedAndAssociateRequestMessage extends SymbioticObjectAssociateRequestMessage {
    static id: number;
    foodPos: number | undefined;
    preview: boolean | undefined;
    foodUID: number | undefined;
    constructor(hostPos?: number | undefined, hostUID?: number | undefined, symbiotePos?: number | undefined, symbioteUID?: number | undefined, foodPos?: number | undefined, preview?: boolean | undefined, foodUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class WrapperObjectDissociateRequestMessage extends DofusMessage {
    static id: number;
    hostPos: number | undefined;
    hostUID: number | undefined;
    constructor(hostPos?: number | undefined, hostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class MimicryObjectEraseRequestMessage extends DofusMessage {
    static id: number;
    hostPos: number | undefined;
    hostUID: number | undefined;
    constructor(hostPos?: number | undefined, hostUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LivingObjectDissociateMessage extends DofusMessage {
    static id: number;
    livingPosition: number | undefined;
    livingUID: number | undefined;
    constructor(livingPosition?: number | undefined, livingUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ObjectFeedMessage extends DofusMessage {
    static id: number;
    meal: ObjectItemQuantity[] | undefined;
    objectUID: number | undefined;
    constructor(meal?: ObjectItemQuantity[] | undefined, objectUID?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class GameFightOptionToggleMessage extends DofusMessage {
    static id: number;
    option: number | undefined;
    constructor(option?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class LockableUseCodeMessage extends DofusMessage {
    static id: number;
    code: string | undefined;
    constructor(code?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicWhoAmIRequestMessage extends DofusMessage {
    static id: number;
    verbose: boolean | undefined;
    constructor(verbose?: boolean | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicStatMessage extends DofusMessage {
    static id: number;
    statId: number | undefined;
    timeSpent: number | undefined;
    constructor(statId?: number | undefined, timeSpent?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class BasicStatWithDataMessage extends BasicStatMessage {
    static id: number;
    datas: StatisticData[] | undefined;
    constructor(statId?: number | undefined, timeSpent?: number | undefined, datas?: StatisticData[] | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class PartyLocateMembersRequestMessage extends AbstractPartyMessage {
    static id: number;
    constructor(partyId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class ContactLookRequestByNameMessage extends ContactLookRequestMessage {
    static id: number;
    playerName: string | undefined;
    constructor(contactType?: number | undefined, requestId?: number | undefined, playerName?: string | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare class JobCrafterDirectoryEntryRequestMessage extends DofusMessage {
    static id: number;
    playerId: number | undefined;
    constructor(playerId?: number | undefined);
    serialize(writer: BinaryDataWriter): void;
    deserialize(reader: BinaryDataReader): void;
}
declare const types: {
    [key: number]: typeof DofusType;
};
declare const messages: {
    [key: number]: typeof DofusMessage;
};

export { AbstractCharacterInformation, AbstractContactInformations, AbstractFightDispellableEffect, AbstractFightTeamInformations, AbstractGameActionFightTargetedAbilityMessage, AbstractGameActionMessage, AbstractGameActionWithAckMessage, AbstractPartyEventMessage, AbstractPartyMemberInFightMessage, AbstractPartyMessage, AbstractPlayerSearchInformation, AbstractSocialGroupInfos, AbstractTaxCollectorListMessage, AccessoryPreviewErrorEnum, AccessoryPreviewErrorMessage, AccessoryPreviewMessage, AccessoryPreviewRequestMessage, AccountCapabilitiesMessage, AccountHouseInformations, AccountHouseMessage, AccountInformationsUpdateMessage, AccountLinkRequiredMessage, AccountLoggingKickedMessage, AccountTagInformation, Achievement, AchievementAchieved, AchievementAchievedRewardable, AchievementAlmostFinishedDetailedListMessage, AchievementAlmostFinishedDetailedListRequestMessage, AchievementDetailedListMessage, AchievementDetailedListRequestMessage, AchievementDetailsMessage, AchievementDetailsRequestMessage, AchievementFinishedInformationMessage, AchievementFinishedMessage, AchievementListMessage, AchievementObjective, AchievementRewardErrorMessage, AchievementRewardRequestMessage, AchievementRewardSuccessMessage, AchievementStartedObjective, AcquaintanceAddedMessage, AcquaintanceInformation, AcquaintanceOnlineInformation, AcquaintanceSearchErrorMessage, AcquaintanceSearchMessage, AcquaintanceServerListMessage, AcquaintancesGetListMessage, AcquaintancesListMessage, ActivityHideRequestMessage, ActivityLockRequestMessage, ActivitySuggestionsMessage, ActivitySuggestionsRequestMessage, ActorAlignmentInformations, ActorExtendedAlignmentInformations, ActorOrientation, ActorRestrictionsInformations, AdditionalTaxCollectorInformations, AdminCommandMessage, AdminQuietCommandMessage, AggressableStatusEnum, AlignmentRankUpdateMessage, AlignmentSideEnum, AlignmentWarEffortDonatePreviewMessage, AlignmentWarEffortDonateRequestMessage, AlignmentWarEffortDonationResultEnum, AlignmentWarEffortDonationResultMessage, AlignmentWarEffortInformation, AlignmentWarEffortProgressionMessage, AlignmentWarEffortProgressionRequestMessage, AllianceBulletinMessage, AllianceBulletinSetErrorMessage, AllianceBulletinSetRequestMessage, AllianceChangeGuildRightsMessage, AllianceCreationResultMessage, AllianceCreationStartedMessage, AllianceCreationValidMessage, AllianceFactSheetInformations, AllianceFactsErrorMessage, AllianceFactsMessage, AllianceFactsRequestMessage, AllianceGuildLeavingMessage, AllianceInformations, AllianceInsiderInfoMessage, AllianceInsiderInfoRequestMessage, AllianceInsiderPrismInformation, AllianceInvitationAnswerMessage, AllianceInvitationMessage, AllianceInvitationStateRecrutedMessage, AllianceInvitationStateRecruterMessage, AllianceInvitedMessage, AllianceJoinedMessage, AllianceKickRequestMessage, AllianceLeftMessage, AllianceListMessage, AllianceMembershipMessage, AllianceModificationEmblemValidMessage, AllianceModificationNameAndTagValidMessage, AllianceModificationStartedMessage, AllianceModificationValidMessage, AllianceMotdMessage, AllianceMotdSetErrorMessage, AllianceMotdSetRequestMessage, AlliancePartialListMessage, AlliancePrismDialogQuestionMessage, AlliancePrismInformation, AlliancePrismModuleTypeEnum, AllianceRightsBitEnum, AllianceTaxCollectorDialogQuestionExtendedMessage, AllianceVersatileInfoListMessage, AllianceVersatileInformations, AlliancedGuildFactSheetInformations, AlmanachCalendarDateMessage, AlreadyConnectedMessage, AlternativeMonstersInGroupLightInformations, AnomalyStateMessage, AnomalySubareaInformation, AnomalySubareaInformationRequestMessage, AnomalySubareaInformationResponseMessage, ApplicationPlayerInformation, AreaFightModificatorUpdateMessage, ArenaFighterIdleMessage, ArenaFighterLeaveMessage, ArenaLeagueRanking, ArenaRankInfos, ArenaRanking, AtlasPointInformationsMessage, AtlasPointsInformations, AuthenticationTicketAcceptedMessage, AuthenticationTicketMessage, AuthenticationTicketRefusedMessage, BaseSpawnMonsterInformation, BasicAckMessage, BasicAllianceInformations, BasicCharactersListMessage, BasicDateMessage, BasicGuildInformations, BasicLatencyStatsMessage, BasicLatencyStatsRequestMessage, BasicNamedAllianceInformations, BasicNoOperationMessage, BasicPingMessage, BasicPongMessage, BasicStatMessage, BasicStatWithDataMessage, BasicTimeMessage, BasicWhoAmIRequestMessage, BasicWhoIsMessage, BasicWhoIsNoMatchMessage, BasicWhoIsRequestMessage, BidActionEnum, BidCancellationEnum, BidExchangerObjectInfo, BidValidationEnum, BoostableCharacteristicEnum, BreachBonusMessage, BreachBranch, BreachBranchesMessage, BreachBudgetMessage, BreachCharactersMessage, BreachEnterMessage, BreachExitRequestMessage, BreachExitResponseMessage, BreachGameFightEndMessage, BreachInvitationAnswerMessage, BreachInvitationCloseMessage, BreachInvitationOfferMessage, BreachInvitationRequestMessage, BreachInvitationResponseMessage, BreachKickRequestMessage, BreachKickResponseMessage, BreachReward, BreachRewardBoughtMessage, BreachRewardBuyMessage, BreachRewardLockEnum, BreachRewardsMessage, BreachRoomLockedMessage, BreachRoomUnlockEnum, BreachRoomUnlockRequestMessage, BreachRoomUnlockResultMessage, BreachSavedMessage, BreachStateMessage, BreachTeleportRequestMessage, BreachTeleportResponseMessage, BreedEnum, BufferInformation, BuildTypeEnum, BulletinMessage, ChallengeFightJoinRefusedMessage, ChallengeInfoMessage, ChallengeResultMessage, ChallengeTargetUpdateMessage, ChallengeTargetsListMessage, ChallengeTargetsListRequestMessage, ChangeHavenBagRoomRequestMessage, ChangeMapMessage, ChangeThemeRequestMessage, ChannelEnablingChangeMessage, ChannelEnablingMessage, CharacterAlignmentWarEffortProgressionMessage, CharacterAlignmentWarEffortProgressionRequestMessage, CharacterBaseInformations, CharacterBasicMinimalInformations, CharacterCanBeCreatedRequestMessage, CharacterCanBeCreatedResultMessage, CharacterCapabilitiesMessage, CharacterCharacteristic, CharacterCharacteristicDetailed, CharacterCharacteristicForPreset, CharacterCharacteristicValue, CharacterCharacteristics, CharacterCharacteristicsInformations, CharacterCreationRequestMessage, CharacterCreationResultEnum, CharacterCreationResultMessage, CharacterDeletionErrorEnum, CharacterDeletionErrorMessage, CharacterDeletionRequestMessage, CharacterExperienceGainMessage, CharacterFirstSelectionMessage, CharacterHardcoreOrEpicInformations, CharacterInventoryPositionEnum, CharacterLevelUpInformationMessage, CharacterLevelUpMessage, CharacterLoadingCompleteMessage, CharacterMinimalAllianceInformations, CharacterMinimalGuildInformations, CharacterMinimalGuildPublicInformations, CharacterMinimalInformations, CharacterMinimalPlusLookAndGradeInformations, CharacterMinimalPlusLookInformations, CharacterNameSuggestionFailureMessage, CharacterNameSuggestionRequestMessage, CharacterNameSuggestionSuccessMessage, CharacterRemodelingEnum, CharacterRemodelingInformation, CharacterReplayRequestMessage, CharacterReplayWithRemodelRequestMessage, CharacterSelectedErrorMessage, CharacterSelectedForceMessage, CharacterSelectedForceReadyMessage, CharacterSelectedSuccessMessage, CharacterSelectionMessage, CharacterSelectionWithRemodelMessage, CharacterSpellModification, CharacterSpellModificationTypeEnum, CharacterStatsListMessage, CharacterToRemodelInformations, CharacterUsableCharacteristicDetailed, CharactersListErrorMessage, CharactersListMessage, CharactersListRequestMessage, CharactersListWithRemodelingMessage, ChatAbstractClientMessage, ChatAbstractServerMessage, ChatActivableChannelsEnum, ChatAdminServerMessage, ChatChannelsMultiEnum, ChatClientMultiMessage, ChatClientMultiWithObjectMessage, ChatClientPrivateMessage, ChatClientPrivateWithObjectMessage, ChatCommunityChannelCommunityMessage, ChatCommunityChannelSetCommunityRequestMessage, ChatErrorEnum, ChatErrorMessage, ChatKolizeumServerMessage, ChatServerCopyMessage, ChatServerCopyWithObjectMessage, ChatServerMessage, ChatServerWithObjectMessage, ChatSmileyExtraPackListMessage, ChatSmileyMessage, ChatSmileyRequestMessage, CheckFileMessage, CheckFileRequestMessage, CheckIntegrityMessage, CinematicMessage, ClientKeyMessage, ClientUIOpenedByObjectMessage, ClientUIOpenedMessage, ClientUITypeEnum, ClientYouAreDrunkMessage, CloseHavenBagFurnitureSequenceRequestMessage, CompassResetMessage, CompassTypeEnum, CompassUpdateMessage, CompassUpdatePartyMemberMessage, CompassUpdatePvpSeekMessage, ConsoleCommandsListMessage, ConsoleMessage, ConsoleMessageTypeEnum, ContactAddFailureMessage, ContactLookErrorMessage, ContactLookMessage, ContactLookRequestByIdMessage, ContactLookRequestByNameMessage, ContactLookRequestMessage, CraftResultEnum, CredentialsAcknowledgementMessage, CurrentMapInstanceMessage, CurrentMapMessage, CurrentServerStatusUpdateMessage, DebtInformation, DebtsDeleteMessage, DebtsUpdateMessage, DebugClearHighlightCellsMessage, DebugHighlightCellsMessage, DebugInClientMessage, DebugLevelEnum, DecraftResultMessage, DecraftedItemStackInfo, DelayedActionTypeEnum, DialogTypeEnum, DiceRollRequestMessage, DisplayNumericalValuePaddockMessage, DocumentReadingBeginMessage, DofusMessage, DofusType, DumpedEntityStatsMessage, DungeonKeyRingMessage, DungeonKeyRingUpdateMessage, DungeonPartyFinderAvailableDungeonsMessage, DungeonPartyFinderAvailableDungeonsRequestMessage, DungeonPartyFinderListenErrorMessage, DungeonPartyFinderListenRequestMessage, DungeonPartyFinderPlayer, DungeonPartyFinderRegisterErrorMessage, DungeonPartyFinderRegisterRequestMessage, DungeonPartyFinderRegisterSuccessMessage, DungeonPartyFinderRoomContentMessage, DungeonPartyFinderRoomContentUpdateMessage, EditHavenBagCancelRequestMessage, EditHavenBagFinishedMessage, EditHavenBagRequestMessage, EditHavenBagStartMessage, EmoteAddMessage, EmoteListMessage, EmotePlayAbstractMessage, EmotePlayErrorMessage, EmotePlayMassiveMessage, EmotePlayMessage, EmotePlayRequestMessage, EmoteRemoveMessage, EnabledChannelsMessage, EnterHavenBagRequestMessage, EntitiesInformationMessage, EntitiesPreset, EntityDispositionInformations, EntityInformation, EntityInformationMessage, EntityLook, EntityMovementInformations, EntityTalkMessage, ErrorMapNotFoundMessage, EvolutiveObjectRecycleResultMessage, ExchangeAcceptMessage, ExchangeBidHouseBuyMessage, ExchangeBidHouseBuyResultMessage, ExchangeBidHouseGenericItemAddedMessage, ExchangeBidHouseGenericItemRemovedMessage, ExchangeBidHouseInListAddedMessage, ExchangeBidHouseInListRemovedMessage, ExchangeBidHouseInListUpdatedMessage, ExchangeBidHouseItemAddOkMessage, ExchangeBidHouseItemRemoveOkMessage, ExchangeBidHouseListMessage, ExchangeBidHousePriceMessage, ExchangeBidHouseSearchMessage, ExchangeBidHouseTypeMessage, ExchangeBidHouseUnsoldItemsMessage, ExchangeBidPriceForSellerMessage, ExchangeBidPriceMessage, ExchangeBidSearchOkMessage, ExchangeBuyMessage, ExchangeBuyOkMessage, ExchangeCraftCountModifiedMessage, ExchangeCraftCountRequestMessage, ExchangeCraftPaymentModificationRequestMessage, ExchangeCraftPaymentModifiedMessage, ExchangeCraftResultMagicWithObjectDescMessage, ExchangeCraftResultMessage, ExchangeCraftResultWithObjectDescMessage, ExchangeCraftResultWithObjectIdMessage, ExchangeCrafterJobLevelupMessage, ExchangeErrorEnum, ExchangeErrorMessage, ExchangeGuildTaxCollectorGetMessage, ExchangeHandleMountStableTypeEnum, ExchangeHandleMountsMessage, ExchangeIsReadyMessage, ExchangeItemAutoCraftStopedMessage, ExchangeKamaModifiedMessage, ExchangeLeaveMessage, ExchangeMoneyMovementInformationMessage, ExchangeMountFreeFromPaddockMessage, ExchangeMountStableErrorMessage, ExchangeMountSterilizeFromPaddockMessage, ExchangeMountsPaddockAddMessage, ExchangeMountsPaddockRemoveMessage, ExchangeMountsStableAddMessage, ExchangeMountsStableBornAddMessage, ExchangeMountsStableRemoveMessage, ExchangeMountsTakenFromPaddockMessage, ExchangeMultiCraftCrafterCanUseHisRessourcesMessage, ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage, ExchangeObjectAddedMessage, ExchangeObjectMessage, ExchangeObjectModifiedInBagMessage, ExchangeObjectModifiedMessage, ExchangeObjectModifyPricedMessage, ExchangeObjectMoveKamaMessage, ExchangeObjectMoveMessage, ExchangeObjectMovePricedMessage, ExchangeObjectPutInBagMessage, ExchangeObjectRemovedFromBagMessage, ExchangeObjectRemovedMessage, ExchangeObjectTransfertAllFromInvMessage, ExchangeObjectTransfertAllToInvMessage, ExchangeObjectTransfertExistingFromInvMessage, ExchangeObjectTransfertExistingToInvMessage, ExchangeObjectTransfertListFromInvMessage, ExchangeObjectTransfertListToInvMessage, ExchangeObjectTransfertListWithQuantityToInvMessage, ExchangeObjectUseInWorkshopMessage, ExchangeObjectsAddedMessage, ExchangeObjectsModifiedMessage, ExchangeObjectsRemovedMessage, ExchangeOfflineSoldItemsMessage, ExchangeOkMultiCraftMessage, ExchangeOnHumanVendorRequestMessage, ExchangePlayerMultiCraftRequestMessage, ExchangePlayerRequestMessage, ExchangePodsModifiedMessage, ExchangeReadyMessage, ExchangeReplayStopMessage, ExchangeReplayStopReasonEnum, ExchangeReplyTaxVendorMessage, ExchangeRequestMessage, ExchangeRequestOnMountStockMessage, ExchangeRequestOnShopStockMessage, ExchangeRequestOnTaxCollectorMessage, ExchangeRequestedMessage, ExchangeRequestedTradeMessage, ExchangeSellMessage, ExchangeSellOkMessage, ExchangeSetCraftRecipeMessage, ExchangeShopStockMovementRemovedMessage, ExchangeShopStockMovementUpdatedMessage, ExchangeShopStockMultiMovementRemovedMessage, ExchangeShopStockMultiMovementUpdatedMessage, ExchangeShopStockStartedMessage, ExchangeShowVendorTaxMessage, ExchangeStartAsVendorMessage, ExchangeStartOkCraftMessage, ExchangeStartOkCraftWithInformationMessage, ExchangeStartOkEvolutiveObjectRecycleTradeMessage, ExchangeStartOkHumanVendorMessage, ExchangeStartOkJobIndexMessage, ExchangeStartOkMountMessage, ExchangeStartOkMountWithOutPaddockMessage, ExchangeStartOkMulticraftCrafterMessage, ExchangeStartOkMulticraftCustomerMessage, ExchangeStartOkNpcShopMessage, ExchangeStartOkNpcTradeMessage, ExchangeStartOkRecycleTradeMessage, ExchangeStartOkRunesTradeMessage, ExchangeStartedBidBuyerMessage, ExchangeStartedBidSellerMessage, ExchangeStartedMessage, ExchangeStartedMountStockMessage, ExchangeStartedTaxCollectorShopMessage, ExchangeStartedWithPodsMessage, ExchangeStartedWithStorageMessage, ExchangeStoppedMessage, ExchangeTypeEnum, ExchangeTypesExchangerDescriptionForUserMessage, ExchangeTypesItemsExchangerDescriptionForUserMessage, ExchangeWaitingResultMessage, ExchangeWeightMessage, ExitHavenBagRequestMessage, ExtendedBreachBranch, ExtendedLockedBreachBranch, FightAllianceTeamInformations, FightCommonInformations, FightDispellableEffectExtendedInformations, FightDispellableEnum, FightEntityDispositionInformations, FightExternalInformations, FightLoot, FightOptionsEnum, FightOptionsInformations, FightOutcomeEnum, FightResultAdditionalData, FightResultExperienceData, FightResultFighterListEntry, FightResultListEntry, FightResultMutantListEntry, FightResultPlayerListEntry, FightResultPvpData, FightResultTaxCollectorListEntry, FightSpellCastCriticalEnum, FightStartingPositions, FightTeamInformations, FightTeamLightInformations, FightTeamMemberCharacterInformations, FightTeamMemberEntityInformation, FightTeamMemberInformations, FightTeamMemberMonsterInformations, FightTeamMemberTaxCollectorInformations, FightTeamMemberWithAllianceCharacterInformations, FightTemporaryBoostEffect, FightTemporaryBoostStateEffect, FightTemporaryBoostWeaponDamagesEffect, FightTemporarySpellBoostEffect, FightTemporarySpellImmunityEffect, FightTriggeredEffect, FightTypeEnum, FighterRefusedReasonEnum, FighterStatsListMessage, FinishMoveInformations, FinishMoveListMessage, FinishMoveListRequestMessage, FinishMoveSetRequestMessage, FocusedExchangeReadyMessage, FollowQuestObjectiveRequestMessage, FollowedQuestsMessage, ForgettableSpellClientActionEnum, ForgettableSpellClientActionMessage, ForgettableSpellDeleteMessage, ForgettableSpellEquipmentSlotsMessage, ForgettableSpellItem, ForgettableSpellListActionEnum, ForgettableSpellListUpdateMessage, ForgettableSpellsPreset, FriendAddFailureMessage, FriendAddRequestMessage, FriendAddedMessage, FriendDeleteRequestMessage, FriendDeleteResultMessage, FriendGuildSetWarnOnAchievementCompleteMessage, FriendGuildWarnOnAchievementCompleteStateMessage, FriendInformations, FriendJoinRequestMessage, FriendOnlineInformations, FriendSetStatusShareMessage, FriendSetWarnOnConnectionMessage, FriendSetWarnOnLevelGainMessage, FriendSpouseFollowWithCompassRequestMessage, FriendSpouseInformations, FriendSpouseJoinRequestMessage, FriendSpouseOnlineInformations, FriendStatusShareStateMessage, FriendUpdateMessage, FriendWarnOnConnectionStateMessage, FriendWarnOnLevelGainStateMessage, FriendsGetListMessage, FriendsListMessage, FullStatsPreset, GameActionAcknowledgementMessage, GameActionFightActivateGlyphTrapMessage, GameActionFightCarryCharacterMessage, GameActionFightCastOnTargetRequestMessage, GameActionFightCastRequestMessage, GameActionFightChangeLookMessage, GameActionFightCloseCombatMessage, GameActionFightDeathMessage, GameActionFightDispellEffectMessage, GameActionFightDispellMessage, GameActionFightDispellSpellMessage, GameActionFightDispellableEffectMessage, GameActionFightDodgePointLossMessage, GameActionFightDropCharacterMessage, GameActionFightExchangePositionsMessage, GameActionFightInvisibilityMessage, GameActionFightInvisibilityStateEnum, GameActionFightInvisibleDetectedMessage, GameActionFightKillMessage, GameActionFightLifeAndShieldPointsLostMessage, GameActionFightLifePointsGainMessage, GameActionFightLifePointsLostMessage, GameActionFightMarkCellsMessage, GameActionFightModifyEffectsDurationMessage, GameActionFightMultipleSummonMessage, GameActionFightNoSpellCastMessage, GameActionFightPointsVariationMessage, GameActionFightReduceDamagesMessage, GameActionFightReflectDamagesMessage, GameActionFightReflectSpellMessage, GameActionFightSlideMessage, GameActionFightSpellCastMessage, GameActionFightSpellCooldownVariationMessage, GameActionFightSpellImmunityMessage, GameActionFightStealKamaMessage, GameActionFightSummonMessage, GameActionFightTackledMessage, GameActionFightTeleportOnSameMapMessage, GameActionFightThrowCharacterMessage, GameActionFightTriggerEffectMessage, GameActionFightTriggerGlyphTrapMessage, GameActionFightUnmarkCellsMessage, GameActionFightVanishMessage, GameActionMark, GameActionMarkCellsTypeEnum, GameActionMarkedCell, GameActionNoopMessage, GameActionSpamMessage, GameActionUpdateEffectTriggerCountMessage, GameCautiousMapMovementMessage, GameCautiousMapMovementRequestMessage, GameContextActorInformations, GameContextActorPositionInformations, GameContextBasicSpawnInformation, GameContextCreateErrorMessage, GameContextCreateMessage, GameContextCreateRequestMessage, GameContextDestroyMessage, GameContextEnum, GameContextKickMessage, GameContextMoveElementMessage, GameContextMoveMultipleElementsMessage, GameContextQuitMessage, GameContextReadyMessage, GameContextRefreshEntityLookMessage, GameContextRemoveElementMessage, GameContextRemoveElementWithEventMessage, GameContextRemoveMultipleElementsMessage, GameContextRemoveMultipleElementsWithEventsMessage, GameContextSummonsInformation, GameDataPaddockObjectAddMessage, GameDataPaddockObjectListAddMessage, GameDataPaddockObjectRemoveMessage, GameDataPlayFarmObjectAnimationMessage, GameEntitiesDispositionMessage, GameEntityDispositionErrorMessage, GameEntityDispositionMessage, GameFightAIInformations, GameFightCharacterInformations, GameFightCharacteristics, GameFightEffectTriggerCount, GameFightEndMessage, GameFightEntityInformation, GameFightFighterEntityLightInformation, GameFightFighterInformations, GameFightFighterLightInformations, GameFightFighterMonsterLightInformations, GameFightFighterNamedInformations, GameFightFighterNamedLightInformations, GameFightFighterTaxCollectorLightInformations, GameFightHumanReadyStateMessage, GameFightJoinMessage, GameFightJoinRequestMessage, GameFightLeaveMessage, GameFightMonsterInformations, GameFightMonsterWithAlignmentInformations, GameFightMutantInformations, GameFightNewRoundMessage, GameFightNewWaveMessage, GameFightOptionStateUpdateMessage, GameFightOptionToggleMessage, GameFightPauseMessage, GameFightPlacementPositionRequestMessage, GameFightPlacementPossiblePositionsMessage, GameFightPlacementSwapPositionsAcceptMessage, GameFightPlacementSwapPositionsCancelMessage, GameFightPlacementSwapPositionsCancelledMessage, GameFightPlacementSwapPositionsErrorMessage, GameFightPlacementSwapPositionsMessage, GameFightPlacementSwapPositionsOfferMessage, GameFightPlacementSwapPositionsRequestMessage, GameFightReadyMessage, GameFightRefreshFighterMessage, GameFightRemoveTeamMemberMessage, GameFightResumeMessage, GameFightResumeSlaveInfo, GameFightResumeWithSlavesMessage, GameFightShowFighterMessage, GameFightShowFighterRandomStaticPoseMessage, GameFightSpectateMessage, GameFightSpectatePlayerRequestMessage, GameFightSpectatorJoinMessage, GameFightSpellCooldown, GameFightStartMessage, GameFightStartingMessage, GameFightSynchronizeMessage, GameFightTaxCollectorInformations, GameFightTurnEndMessage, GameFightTurnFinishMessage, GameFightTurnListMessage, GameFightTurnReadyMessage, GameFightTurnReadyRequestMessage, GameFightTurnResumeMessage, GameFightTurnStartMessage, GameFightTurnStartPlayingMessage, GameFightUpdateTeamMessage, GameHierarchyEnum, GameMapChangeOrientationMessage, GameMapChangeOrientationRequestMessage, GameMapChangeOrientationsMessage, GameMapMovementCancelMessage, GameMapMovementConfirmMessage, GameMapMovementMessage, GameMapMovementRequestMessage, GameMapNoMovementMessage, GameMapSpeedMovementMessage, GameRefreshMonsterBoostsMessage, GameRolePlayActorInformations, GameRolePlayAggressionMessage, GameRolePlayArenaFightAnswerMessage, GameRolePlayArenaFightPropositionMessage, GameRolePlayArenaFighterStatusMessage, GameRolePlayArenaInvitationCandidatesAnswerMessage, GameRolePlayArenaLeagueRewardsMessage, GameRolePlayArenaPlayerBehavioursMessage, GameRolePlayArenaRegisterMessage, GameRolePlayArenaRegistrationStatusMessage, GameRolePlayArenaRegistrationWarningMessage, GameRolePlayArenaSwitchToFightServerMessage, GameRolePlayArenaSwitchToGameServerMessage, GameRolePlayArenaUnregisterMessage, GameRolePlayArenaUpdatePlayerInfosAllQueuesMessage, GameRolePlayArenaUpdatePlayerInfosMessage, GameRolePlayAttackMonsterRequestMessage, GameRolePlayCharacterInformations, GameRolePlayDelayedActionFinishedMessage, GameRolePlayDelayedActionMessage, GameRolePlayDelayedObjectUseMessage, GameRolePlayFightRequestCanceledMessage, GameRolePlayFreeSoulRequestMessage, GameRolePlayGameOverMessage, GameRolePlayGroupMonsterInformations, GameRolePlayGroupMonsterWaveInformations, GameRolePlayHumanoidInformations, GameRolePlayMerchantInformations, GameRolePlayMonsterAngryAtPlayerMessage, GameRolePlayMonsterNotAngryAtPlayerMessage, GameRolePlayMountInformations, GameRolePlayMutantInformations, GameRolePlayNamedActorInformations, GameRolePlayNpcInformations, GameRolePlayNpcQuestFlag, GameRolePlayNpcWithQuestInformations, GameRolePlayPlayerFightFriendlyAnswerMessage, GameRolePlayPlayerFightFriendlyAnsweredMessage, GameRolePlayPlayerFightFriendlyRequestedMessage, GameRolePlayPlayerFightRequestMessage, GameRolePlayPlayerLifeStatusMessage, GameRolePlayPortalInformations, GameRolePlayPrismInformations, GameRolePlayRemoveChallengeMessage, GameRolePlayShowActorMessage, GameRolePlayShowActorWithEventMessage, GameRolePlayShowChallengeMessage, GameRolePlayShowMultipleActorsMessage, GameRolePlaySpellAnimMessage, GameRolePlayTaxCollectorFightRequestMessage, GameRolePlayTaxCollectorInformations, GameRolePlayTreasureHintInformations, GameServerInformations, GameServerTypeEnum, GoldAddedMessage, GoldItem, GroupMonsterStaticInformations, GroupMonsterStaticInformationsWithAlternatives, GuestLimitationMessage, GuestModeMessage, GuidedModeQuitRequestMessage, GuidedModeReturnRequestMessage, GuildApplicationAnswerMessage, GuildApplicationDeletedMessage, GuildApplicationInformation, GuildApplicationIsAnsweredMessage, GuildApplicationListenMessage, GuildApplicationReceivedMessage, GuildApplicationStateEnum, GuildBulletinMessage, GuildBulletinSetErrorMessage, GuildBulletinSetRequestMessage, GuildChangeMemberParametersMessage, GuildCharacsUpgradeRequestMessage, GuildCreationResultMessage, GuildCreationStartedMessage, GuildCreationValidMessage, GuildDeleteApplicationRequestMessage, GuildEmblem, GuildFactSheetInformations, GuildFactsErrorMessage, GuildFactsMessage, GuildFactsRequestMessage, GuildFightJoinRequestMessage, GuildFightLeaveRequestMessage, GuildFightPlayersEnemiesListMessage, GuildFightPlayersEnemyRemoveMessage, GuildFightPlayersHelpersJoinMessage, GuildFightPlayersHelpersLeaveMessage, GuildFightTakePlaceRequestMessage, GuildGetInformationsMessage, GuildGetPlayerApplicationMessage, GuildHouseRemoveMessage, GuildHouseUpdateInformationMessage, GuildHousesInformationMessage, GuildInAllianceFactsMessage, GuildInAllianceInformations, GuildInAllianceVersatileInformations, GuildInformations, GuildInformationsGeneralMessage, GuildInformationsMemberUpdateMessage, GuildInformationsMembersMessage, GuildInformationsPaddocksMessage, GuildInformationsTypeEnum, GuildInfosUpgradeMessage, GuildInsiderFactSheetInformations, GuildInvitationAnswerMessage, GuildInvitationMessage, GuildInvitationSearchMessage, GuildInvitationStateRecrutedMessage, GuildInvitationStateRecruterMessage, GuildInvitedMessage, GuildJoinAutomaticallyRequestMessage, GuildJoinedMessage, GuildKickRequestMessage, GuildLeftMessage, GuildLevelUpMessage, GuildListApplicationAnswerMessage, GuildListApplicationModifiedMessage, GuildListApplicationRequestMessage, GuildListMessage, GuildMember, GuildMemberLeavingMessage, GuildMemberOnlineStatusMessage, GuildMemberSetWarnOnConnectionMessage, GuildMemberWarnOnConnectionStateMessage, GuildMembershipMessage, GuildModificationEmblemValidMessage, GuildModificationNameValidMessage, GuildModificationStartedMessage, GuildModificationValidMessage, GuildMotdMessage, GuildMotdSetErrorMessage, GuildMotdSetRequestMessage, GuildPaddockBoughtMessage, GuildPaddockRemovedMessage, GuildPaddockTeleportRequestMessage, GuildPlayerApplicationAbstractMessage, GuildPlayerApplicationInformationMessage, GuildPlayerNoApplicationInformationMessage, GuildRecruitmentInformation, GuildRecruitmentInvalidateMessage, GuildRecruitmentTypeEnum, GuildRightsBitEnum, GuildSpellUpgradeRequestMessage, GuildSubmitApplicationMessage, GuildSummaryMessage, GuildSummaryRequestMessage, GuildSummarySortEnum, GuildUpdateApplicationMessage, GuildVersatileInfoListMessage, GuildVersatileInformations, HaapiApiKeyMessage, HaapiApiKeyRequestMessage, HaapiAuthErrorMessage, HaapiAuthTypeEnum, HaapiBufferListMessage, HaapiBufferListRequestMessage, HaapiBuyValidationMessage, HaapiCancelBidRequestMessage, HaapiConfirmationMessage, HaapiConfirmationRequestMessage, HaapiConsumeBufferRequestMessage, HaapiSessionMessage, HaapiSessionTypeEnum, HaapiShopApiKeyMessage, HaapiShopApiKeyRequestMessage, HaapiTokenMessage, HaapiTokenRequestMessage, HaapiValidationMessage, HaapiValidationRequestMessage, HavenBagDailyLoteryErrorEnum, HavenBagDailyLoteryMessage, HavenBagFurnitureInformation, HavenBagFurnituresMessage, HavenBagFurnituresRequestMessage, HavenBagPackListMessage, HavenBagPermissionsUpdateMessage, HavenBagPermissionsUpdateRequestMessage, HavenBagRoomActionEnum, HavenBagRoomPreviewInformation, HavenBagRoomUpdateMessage, HavenBagShareBitEnum, HelloConnectMessage, HelloGameMessage, HouseBuyRequestMessage, HouseBuyResultMessage, HouseGuildNoneMessage, HouseGuildRightsMessage, HouseGuildRightsViewMessage, HouseGuildShareRequestMessage, HouseGuildedInformations, HouseInformations, HouseInformationsForGuild, HouseInformationsForSell, HouseInformationsInside, HouseInstanceInformations, HouseKickIndoorMerchantRequestMessage, HouseKickRequestMessage, HouseLockFromInsideRequestMessage, HouseOnMapInformations, HousePropertiesMessage, HouseSellFromInsideRequestMessage, HouseSellRequestMessage, HouseSellingUpdateMessage, HouseTeleportRequestMessage, HouseToSellFilterMessage, HouseToSellListMessage, HouseToSellListRequestMessage, HumanInformations, HumanOption, HumanOptionAlliance, HumanOptionEmote, HumanOptionFollowers, HumanOptionGuild, HumanOptionObjectUse, HumanOptionOrnament, HumanOptionSkillUse, HumanOptionTitle, IconNamedPreset, IconNamedPresetSaveRequestMessage, IconPresetSaveRequestMessage, IdentificationAccountForceMessage, IdentificationFailedBannedMessage, IdentificationFailedForBadVersionMessage, IdentificationFailedMessage, IdentificationFailureReasonEnum, IdentificationMessage, IdentificationSuccessMessage, IdentificationSuccessWithLoginTokenMessage, IdentifiedEntityDispositionInformations, Idol, IdolFightPreparationUpdateMessage, IdolListMessage, IdolPartyLostMessage, IdolPartyRefreshMessage, IdolPartyRegisterRequestMessage, IdolSelectErrorMessage, IdolSelectRequestMessage, IdolSelectedMessage, IdolsPreset, IdolsPresetSaveRequestMessage, IgnoredAddFailureMessage, IgnoredAddRequestMessage, IgnoredAddedMessage, IgnoredDeleteRequestMessage, IgnoredDeleteResultMessage, IgnoredGetListMessage, IgnoredInformations, IgnoredListMessage, IgnoredOnlineInformations, IndexedEntityLook, InteractiveElement, InteractiveElementNamedSkill, InteractiveElementSkill, InteractiveElementUpdatedMessage, InteractiveElementWithAgeBonus, InteractiveMapUpdateMessage, InteractiveUseEndedMessage, InteractiveUseErrorMessage, InteractiveUseRequestMessage, InteractiveUseWithParamRequestMessage, InteractiveUsedMessage, InvalidPresetsMessage, InventoryContentMessage, InventoryWeightMessage, InviteInHavenBagClosedMessage, InviteInHavenBagMessage, InviteInHavenBagOfferMessage, Item, ItemDurability, ItemForPreset, ItemForPresetUpdateMessage, ItemNoMoreAvailableMessage, ItemsPreset, JobAllowMultiCraftRequestMessage, JobBookSubscribeRequestMessage, JobBookSubscription, JobBookSubscriptionMessage, JobCrafterDirectoryAddMessage, JobCrafterDirectoryDefineSettingsMessage, JobCrafterDirectoryEntryJobInfo, JobCrafterDirectoryEntryMessage, JobCrafterDirectoryEntryPlayerInfo, JobCrafterDirectoryEntryRequestMessage, JobCrafterDirectoryListEntry, JobCrafterDirectoryListMessage, JobCrafterDirectoryListRequestMessage, JobCrafterDirectoryRemoveMessage, JobCrafterDirectorySettings, JobCrafterDirectorySettingsMessage, JobDescription, JobDescriptionMessage, JobExperience, JobExperienceMultiUpdateMessage, JobExperienceOtherPlayerUpdateMessage, JobExperienceUpdateMessage, JobLevelUpMessage, JobMultiCraftAvailableSkillsMessage, KamaDebtInformation, KamasUpdateMessage, KickHavenBagRequestMessage, KnownZaapListMessage, KohUpdateMessage, LeagueFriendInformations, LeaveDialogMessage, LeaveDialogRequestMessage, LifePointsRegenBeginMessage, LifePointsRegenEndMessage, ListAddFailureEnum, ListMapNpcsQuestStatusUpdateMessage, LivingObjectChangeSkinRequestMessage, LivingObjectDissociateMessage, LivingObjectMessageMessage, LivingObjectMessageRequestMessage, LocalizedChatSmileyMessage, LockableChangeCodeMessage, LockableCodeResultMessage, LockableResultEnum, LockableShowCodeDialogMessage, LockableStateUpdateAbstractMessage, LockableStateUpdateHouseDoorMessage, LockableStateUpdateStorageMessage, LockableUseCodeMessage, LoginQueueStatusMessage, MapComplementaryInformationsAnomalyMessage, MapComplementaryInformationsBreachMessage, MapComplementaryInformationsDataInHavenBagMessage, MapComplementaryInformationsDataInHouseMessage, MapComplementaryInformationsDataMessage, MapComplementaryInformationsWithCoordsMessage, MapCoordinates, MapCoordinatesAndId, MapCoordinatesExtended, MapFightCountMessage, MapFightStartPositionsUpdateMessage, MapInformationsRequestMessage, MapNpcQuestInfo, MapObstacle, MapObstacleStateEnum, MapObstacleUpdateMessage, MapRewardRateMessage, MapRunningFightDetailsExtendedMessage, MapRunningFightDetailsMessage, MapRunningFightDetailsRequestMessage, MapRunningFightListMessage, MapRunningFightListRequestMessage, MigratedServerListMessage, MimicryObjectAssociatedMessage, MimicryObjectEraseRequestMessage, MimicryObjectErrorMessage, MimicryObjectFeedAndAssociateRequestMessage, MimicryObjectPreviewMessage, MonsterBoosts, MonsterInGroupInformations, MonsterInGroupLightInformations, MoodSmileyRequestMessage, MoodSmileyResultMessage, MoodSmileyUpdateMessage, MountCharacteristicEnum, MountClientData, MountDataErrorMessage, MountDataMessage, MountEmoteIconUsedOkMessage, MountEquipedErrorEnum, MountEquipedErrorMessage, MountFeedRequestMessage, MountHarnessColorsUpdateRequestMessage, MountHarnessDissociateRequestMessage, MountInformationInPaddockRequestMessage, MountInformationRequestMessage, MountInformationsForPaddock, MountReleaseRequestMessage, MountReleasedMessage, MountRenameRequestMessage, MountRenamedMessage, MountRidingMessage, MountSetMessage, MountSetXpRatioRequestMessage, MountSterilizeRequestMessage, MountSterilizedMessage, MountToggleRidingRequestMessage, MountUnSetMessage, MountXpRatioMessage, NamedPartyTeam, NamedPartyTeamWithOutcome, NetworkDataContainerMessage, NetworkMessage, NicknameAcceptedMessage, NicknameChoiceRequestMessage, NicknameErrorEnum, NicknameRefusedMessage, NicknameRegistrationMessage, NotificationByServerMessage, NotificationListMessage, NotificationResetMessage, NotificationUpdateFlagMessage, NpcDialogCreationMessage, NpcDialogQuestionMessage, NpcDialogReplyMessage, NpcGenericActionFailureMessage, NpcGenericActionRequestMessage, NumericWhoIsMessage, NumericWhoIsRequestMessage, ObjectAddedMessage, ObjectAveragePricesErrorMessage, ObjectAveragePricesGetMessage, ObjectAveragePricesMessage, ObjectDeleteMessage, ObjectDeletedMessage, ObjectDropMessage, ObjectEffect, ObjectEffectCreature, ObjectEffectDate, ObjectEffectDice, ObjectEffectDuration, ObjectEffectInteger, ObjectEffectLadder, ObjectEffectMinMax, ObjectEffectMount, ObjectEffectString, ObjectEffects, ObjectErrorEnum, ObjectErrorMessage, ObjectFeedMessage, ObjectGroundAddedMessage, ObjectGroundListAddedMessage, ObjectGroundRemovedMessage, ObjectGroundRemovedMultipleMessage, ObjectItem, ObjectItemGenericQuantity, ObjectItemInRolePlay, ObjectItemInformationWithQuantity, ObjectItemMinimalInformation, ObjectItemNotInContainer, ObjectItemQuantity, ObjectItemQuantityPriceDateEffects, ObjectItemToSell, ObjectItemToSellInBid, ObjectItemToSellInHumanVendorShop, ObjectItemToSellInNpcShop, ObjectJobAddedMessage, ObjectModifiedMessage, ObjectMovementMessage, ObjectQuantityMessage, ObjectSetPositionMessage, ObjectUseMessage, ObjectUseMultipleMessage, ObjectUseOnCellMessage, ObjectUseOnCharacterMessage, ObjectsAddedMessage, ObjectsDeletedMessage, ObjectsQuantityMessage, ObtainedItemMessage, ObtainedItemWithBonusMessage, OnConnectionEventMessage, OpenHavenBagFurnitureSequenceRequestMessage, OrnamentGainedMessage, OrnamentLostMessage, OrnamentSelectErrorMessage, OrnamentSelectRequestMessage, OrnamentSelectedMessage, PaddockBuyRequestMessage, PaddockBuyResultMessage, PaddockBuyableInformations, PaddockContentInformations, PaddockGuildedInformations, PaddockInformations, PaddockInformationsForSell, PaddockInstancesInformations, PaddockItem, PaddockMoveItemRequestMessage, PaddockPropertiesMessage, PaddockRemoveItemRequestMessage, PaddockSellBuyDialogMessage, PaddockSellRequestMessage, PaddockToSellFilterMessage, PaddockToSellListMessage, PaddockToSellListRequestMessage, PaginationAnswerAbstractMessage, PaginationRequestAbstractMessage, PartyAbdicateThroneMessage, PartyAcceptInvitationMessage, PartyCancelInvitationMessage, PartyCancelInvitationNotificationMessage, PartyCannotJoinErrorMessage, PartyDeletedMessage, PartyEntityBaseInformation, PartyEntityMemberInformation, PartyEntityUpdateLightMessage, PartyFollowMemberRequestMessage, PartyFollowStatusUpdateMessage, PartyFollowThisMemberRequestMessage, PartyGuestInformations, PartyIdol, PartyInvitationArenaRequestMessage, PartyInvitationCancelledForGuestMessage, PartyInvitationDetailsMessage, PartyInvitationDetailsRequestMessage, PartyInvitationDungeonDetailsMessage, PartyInvitationDungeonMessage, PartyInvitationDungeonRequestMessage, PartyInvitationMemberInformations, PartyInvitationMessage, PartyInvitationRequestMessage, PartyJoinErrorEnum, PartyJoinMessage, PartyKickRequestMessage, PartyKickedByMessage, PartyLeaderUpdateMessage, PartyLeaveMessage, PartyLeaveRequestMessage, PartyLocateMembersMessage, PartyLocateMembersRequestMessage, PartyLoyaltyStatusMessage, PartyMemberArenaInformations, PartyMemberEjectedMessage, PartyMemberGeoPosition, PartyMemberInBreachFightMessage, PartyMemberInStandardFightMessage, PartyMemberInformations, PartyMemberRemoveMessage, PartyModifiableStatusMessage, PartyNameErrorEnum, PartyNameSetErrorMessage, PartyNameSetRequestMessage, PartyNameUpdateMessage, PartyNewGuestMessage, PartyNewMemberMessage, PartyPledgeLoyaltyRequestMessage, PartyRefuseInvitationMessage, PartyRefuseInvitationNotificationMessage, PartyRestrictedMessage, PartyStopFollowRequestMessage, PartyTypeEnum, PartyUpdateLightMessage, PartyUpdateMessage, PauseDialogMessage, PlayableBreedEnum, PlayerLifeStatusEnum, PlayerSearchCharacterNameInformation, PlayerSearchTagInformation, PlayerStateEnum, PlayerStatus, PlayerStatusEnum, PlayerStatusExtended, PlayerStatusUpdateErrorMessage, PlayerStatusUpdateMessage, PlayerStatusUpdateRequestMessage, PopupWarningCloseRequestMessage, PopupWarningClosedMessage, PopupWarningMessage, PortalDialogCreationMessage, PortalInformation, PortalUseRequestMessage, Preset, PresetDeleteRequestMessage, PresetDeleteResultEnum, PresetDeleteResultMessage, PresetSaveErrorMessage, PresetSaveResultEnum, PresetSavedMessage, PresetUseRequestMessage, PresetUseResultEnum, PresetUseResultMessage, PresetUseResultWithMissingIdsMessage, PresetsContainerPreset, PresetsMessage, PrismAttackRequestMessage, PrismFightAddedMessage, PrismFightAttackerAddMessage, PrismFightAttackerRemoveMessage, PrismFightDefenderAddMessage, PrismFightDefenderLeaveMessage, PrismFightJoinLeaveRequestMessage, PrismFightRemovedMessage, PrismFightStateUpdateMessage, PrismFightSwapRequestMessage, PrismFightersInformation, PrismGeolocalizedInformation, PrismInfoCloseMessage, PrismInfoInValidMessage, PrismInfoJoinLeaveRequestMessage, PrismInformation, PrismListenEnum, PrismModuleExchangeRequestMessage, PrismSetSabotagedRefusedMessage, PrismSetSabotagedRefusedReasonEnum, PrismSetSabotagedRequestMessage, PrismSettingsErrorMessage, PrismSettingsRequestMessage, PrismStateEnum, PrismSubareaEmptyInfo, PrismUseRequestMessage, PrismsInfoValidMessage, PrismsListMessage, PrismsListRegisterMessage, PrismsListUpdateMessage, ProtectedEntityWaitingForHelpInfo, ProtocolRequired, PurchasableDialogMessage, PvpArenaStepEnum, PvpArenaTypeEnum, QuestActiveDetailedInformations, QuestActiveInformations, QuestListMessage, QuestListRequestMessage, QuestObjectiveInformations, QuestObjectiveInformationsWithCompletion, QuestObjectiveValidatedMessage, QuestObjectiveValidationMessage, QuestStartRequestMessage, QuestStartedMessage, QuestStepInfoMessage, QuestStepInfoRequestMessage, QuestStepStartedMessage, QuestStepValidatedMessage, QuestValidatedMessage, QueueStatusMessage, RawDataMessage, RecruitmentInformationMessage, RecycleResultMessage, RecycledItem, RefreshCharacterStatsMessage, RefreshFollowedQuestsOrderRequestMessage, ReloginTokenRequestMessage, ReloginTokenStatusMessage, RemodelingInformation, ResetCharacterStatsRequestMessage, SavablePresetTypeEnum, SelectedServerDataExtendedMessage, SelectedServerDataMessage, SelectedServerRefusedMessage, SellerBuyerDescriptor, SequenceEndMessage, SequenceNumberMessage, SequenceNumberRequestMessage, SequenceStartMessage, ServerCompletionEnum, ServerConnectionErrorEnum, ServerExperienceModificatorMessage, ServerOptionalFeaturesMessage, ServerSelectionMessage, ServerSessionConstant, ServerSessionConstantInteger, ServerSessionConstantLong, ServerSessionConstantString, ServerSessionConstantsMessage, ServerSettingsMessage, ServerStatusEnum, ServerStatusUpdateMessage, ServersListMessage, SetCharacterRestrictionsMessage, SetEnableAVARequestMessage, SetEnablePVPRequestMessage, SetUpdateMessage, Shortcut, ShortcutBarAddErrorMessage, ShortcutBarAddRequestMessage, ShortcutBarContentMessage, ShortcutBarEnum, ShortcutBarRefreshMessage, ShortcutBarRemoveErrorMessage, ShortcutBarRemoveRequestMessage, ShortcutBarRemovedMessage, ShortcutBarReplacedMessage, ShortcutBarSwapErrorMessage, ShortcutBarSwapRequestMessage, ShortcutEmote, ShortcutEntitiesPreset, ShortcutObject, ShortcutObjectIdolsPreset, ShortcutObjectItem, ShortcutObjectPreset, ShortcutSmiley, ShortcutSpell, ShowCellMessage, ShowCellRequestMessage, ShowCellSpectatorMessage, SimpleCharacterCharacteristicForPreset, SkillActionDescription, SkillActionDescriptionCollect, SkillActionDescriptionCraft, SkillActionDescriptionTimed, SlaveNoLongerControledMessage, SlaveSwitchContextMessage, SocialContactCategoryEnum, SocialGroupCreationResultEnum, SocialGroupInvitationStateEnum, SocialNoticeErrorEnum, SocialNoticeMessage, SocialNoticeSetErrorMessage, SocialNoticeSetRequestMessage, SpawnCharacterInformation, SpawnCompanionInformation, SpawnInformation, SpawnMonsterInformation, SpawnScaledMonsterInformation, SpellForPreset, SpellItem, SpellListMessage, SpellVariantActivationMessage, SpellVariantActivationRequestMessage, SpellsPreset, SpouseGetInformationsMessage, SpouseInformationsMessage, SpouseStatusMessage, StartupActionAddMessage, StartupActionAddObject, StartupActionFinishedMessage, StartupActionsAllAttributionMessage, StartupActionsExecuteMessage, StartupActionsListMessage, StartupActionsObjetAttributionMessage, StatedElement, StatedElementUpdatedMessage, StatedMapUpdateMessage, StatisticData, StatisticDataBoolean, StatisticDataByte, StatisticDataInt, StatisticDataShort, StatisticDataString, StatsPreset, StatsUpgradeRequestMessage, StatsUpgradeResultEnum, StatsUpgradeResultMessage, StopToListenRunningFightRequestMessage, StorageInventoryContentMessage, StorageKamasUpdateMessage, StorageObjectRemoveMessage, StorageObjectUpdateMessage, StorageObjectsRemoveMessage, StorageObjectsUpdateMessage, SubEntity, SubEntityBindingPointCategoryEnum, SubscriptionLimitationMessage, SubscriptionRequiredEnum, SubscriptionZoneMessage, SymbioticObjectAssociateRequestMessage, SymbioticObjectAssociatedMessage, SymbioticObjectErrorMessage, SystemMessageDisplayMessage, TaxCollectorAttackedMessage, TaxCollectorAttackedResultMessage, TaxCollectorBasicInformations, TaxCollectorComplementaryInformations, TaxCollectorDialogQuestionBasicMessage, TaxCollectorDialogQuestionExtendedMessage, TaxCollectorErrorMessage, TaxCollectorErrorReasonEnum, TaxCollectorFightersInformation, TaxCollectorGuildInformations, TaxCollectorInformations, TaxCollectorListMessage, TaxCollectorLootInformations, TaxCollectorMovement, TaxCollectorMovementAddMessage, TaxCollectorMovementMessage, TaxCollectorMovementRemoveMessage, TaxCollectorMovementTypeEnum, TaxCollectorMovementsOfflineMessage, TaxCollectorStateEnum, TaxCollectorStateUpdateMessage, TaxCollectorStaticExtendedInformations, TaxCollectorStaticInformations, TaxCollectorWaitingForHelpInformations, TeamEnum, TeamTypeEnum, TeleportBuddiesAnswerMessage, TeleportBuddiesMessage, TeleportBuddiesRequestedMessage, TeleportDestination, TeleportDestinationsMessage, TeleportHavenBagAnswerMessage, TeleportHavenBagRequestMessage, TeleportOnSameMapMessage, TeleportRequestMessage, TeleportToBuddyAnswerMessage, TeleportToBuddyCloseMessage, TeleportToBuddyOfferMessage, TeleporterTypeEnum, TextInformationMessage, TextInformationTypeEnum, TitleGainedMessage, TitleLostMessage, TitleSelectErrorMessage, TitleSelectRequestMessage, TitleSelectedMessage, TitlesAndOrnamentsListMessage, TitlesAndOrnamentsListRequestMessage, TopTaxCollectorListMessage, TreasureHuntAvailableRetryCountUpdateMessage, TreasureHuntDigRequestAnswerFailedMessage, TreasureHuntDigRequestAnswerMessage, TreasureHuntDigRequestEnum, TreasureHuntDigRequestMessage, TreasureHuntFinishedMessage, TreasureHuntFlag, TreasureHuntFlagRemoveRequestMessage, TreasureHuntFlagRequestAnswerMessage, TreasureHuntFlagRequestEnum, TreasureHuntFlagRequestMessage, TreasureHuntFlagStateEnum, TreasureHuntGiveUpRequestMessage, TreasureHuntLegendaryRequestMessage, TreasureHuntMessage, TreasureHuntRequestAnswerMessage, TreasureHuntRequestEnum, TreasureHuntShowLegendaryUIMessage, TreasureHuntStep, TreasureHuntStepDig, TreasureHuntStepFight, TreasureHuntStepFollowDirection, TreasureHuntStepFollowDirectionToHint, TreasureHuntStepFollowDirectionToPOI, TreasureHuntTypeEnum, TrustCertificate, TrustStatusMessage, UnfollowQuestObjectiveRequestMessage, UpdateLifePointsMessage, UpdateMapPlayersAgressableStatusMessage, UpdateMountBooleanCharacteristic, UpdateMountCharacteristic, UpdateMountCharacteristicsMessage, UpdateMountIntegerCharacteristic, UpdateRecruitmentInformationMessage, UpdateSelfAgressableStatusMessage, UpdateSpellModifierMessage, Version, WarnOnPermaDeathMessage, WarnOnPermaDeathStateMessage, WatchInventoryContentMessage, WatchQuestListMessage, WatchQuestStepInfoMessage, WatchQuestStepInfoRequestMessage, WrapperObjectAssociatedMessage, WrapperObjectDissociateRequestMessage, WrapperObjectErrorMessage, ZaapDestinationsMessage, ZaapRespawnSaveRequestMessage, ZaapRespawnUpdatedMessage, messages, types };
