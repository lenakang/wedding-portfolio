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
    number: process.env.NEXT_PUBLIC_GROOM_PHONE || "",
  },
  {
    title: "신부",
    name: "강나래",
    number: process.env.NEXT_PUBLIC_BRIDE_PHONE || "",
  },

  {
    title: "신랑 아버지",
    name: "위재민",
    number: process.env.NEXT_PUBLIC_GROOM_DAD_PHONE || "",
  },
  {
    title: "신부 아버지",
    name: "강인용",
    number: process.env.NEXT_PUBLIC_BRIDE_DAD_PHONE || "",
  },
  {
    title: "신랑 어머니",
    name: "하선영",
    number: process.env.NEXT_PUBLIC_GROOM_MOM_PHONE || "",
  },
  {
    title: "신부 어머니",
    name: "오미경",
    number: process.env.NEXT_PUBLIC_BRIDE_MOM_PHONE || "",
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
    name: "오미경",
    number: "KB국민 223210553487",
  },
];
