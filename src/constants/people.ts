import {
    BRIDE_NAME,
    GROOM_NAME,
    BRIDE_FATHER,
    BRIDE_MOTHER,
    GROOM_FATHER,
    GROOM_MOTHER,
    KAKAO_PAY_LINK,
    BANK_KAKAO,
    BANK_SHINHAN,
    BANK_KB,
} from "./info";

export interface IPerson {
    title: string;
    name: string;
    phone?: string;
    account?: string;
    kakaoLink?: string;
    description?: string[];
    img?: string;
}

export interface IFamilyMember {
    self: IPerson;
    father: IPerson;
    mother: IPerson;
}

export interface PeopleType {
    bride: IFamilyMember;
    groom: IFamilyMember;
}

export const PEOPLE: PeopleType = {
    bride: {
        self: {
            title: "신부",
            name: BRIDE_NAME,
            description: [
                "Frontend Developer",
                "UI/UX 관심 많음",
                "소통을 즐김",
                "꾸준히 배우는 사람",
            ],
            img: "people_bride.webp",
            account: BANK_KAKAO,
            kakaoLink: KAKAO_PAY_LINK,
            phone: "01012345678",
        },
        father: {
            title: "신부 아버지",
            name: BRIDE_FATHER,
            phone: "01012345678",
            account: BANK_SHINHAN,
        },
        mother: {
            title: "신부 어머니",
            name: BRIDE_MOTHER,
            phone: "01012345678",
            account: BANK_KB,
        },
    },
    groom: {
        self: {
            title: "신랑",
            name: GROOM_NAME,
            description: [
                "대한민국 직장인",
                "책임감 있는 사람",
                "잘 들어주는 동료",
                "꾸준히 나아가는 타입",
            ],
            img: "people_groom.webp",
            account: BANK_KAKAO,
            kakaoLink: KAKAO_PAY_LINK,
            phone: "01012345678",
        },
        father: {
            title: "신랑 아버지",
            name: GROOM_FATHER,
            phone: "01012345678",
            account: BANK_SHINHAN,
        },
        mother: {
            title: "신랑 어머니",
            name: GROOM_MOTHER,
            phone: "01012345678",
        },
    },
};
