export const MENU = {
    HOME: "home",
    INVITE: "invite",
    CALENDAR: "calendar",
    GALLERY: "gallery",
    MAP: "map",
    ACCOUNT: "account",
    GUEST: "guest",
} as const;

export const MENU_LIST = [
    {
        id: MENU.HOME,
        title: "메인",
    },
    {
        id: MENU.INVITE,
        title: "초대합니다",
    },
    {
        id: MENU.CALENDAR,
        title: "캘린더",
    },
    {
        id: MENU.GALLERY,
        title: "갤러리",
    },
    {
        id: MENU.MAP,
        title: "오시는 길",
    },
    {
        id: MENU.ACCOUNT,
        title: "계좌 정보",
    },
    {
        id: MENU.GUEST,
        title: "방명록",
    },
];
