import { SHOULD_CHANGE } from "@/constants/information";

interface IContactList {
    title: string;
    name: string;
    number: string;
}
export interface IAccountList {
    title: string;
    name: string;
    number: string;
    kakaoLink?: string;
}

export const contactList: IContactList[] = [
    {
        title: "신랑",
        name: "위대승",
        number: "01039444101",
    },
    {
        title: "신부",
        name: "강나래",
        number: "01043655089",
    },

    {
        title: "신랑 아버지",
        name: "위재민",
        number: "01055030525",
    },
    {
        title: "신부 아버지",
        name: "강인용",
        number: "01037157985",
    },
    {
        title: "신랑 어머니",
        name: "하선영",
        number: "01037636699",
    },
    {
        title: "신부 어머니",
        name: SHOULD_CHANGE.NAME,
        number: SHOULD_CHANGE.PHONE,
    },
];

export const groomAccountList: IAccountList[] = [
    {
        title: "신랑",
        name: "위대승",
        number: "신한은행 57402027951",
        kakaoLink: "https://qr.kakaopay.com/FRcBCKcwa",
    },
    {
        title: "신랑 아버지",
        name: "위재민",
        number: "신한은행 110359175542",
    },
];

export const brideAccountList: IAccountList[] = [
    {
        title: "신부",
        name: "강나래",
        number: "카카오뱅크 3333037981815",
        kakaoLink: "https://qr.kakaopay.com/FDHhSmzkJ",
    },
    {
        title: "신부 아버지",
        name: "강인용",
        number: "카카오뱅크 3333146122965",
    },
    {
        title: "신부 어머니",
        name: SHOULD_CHANGE.NAME,
        number: SHOULD_CHANGE.ACCOUNT,
    },
];
