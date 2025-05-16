import { Main } from "@/components/sections";
import { Metadata } from "next";
import AppScript from "./AppScript";
import InitKakao from "./InitKakao";

export const metadata: Metadata = {
    title: "나래❤️대승 결혼합니다.",
    description: "6월 28일 (토) 오전 11시 / 더컨벤션 신사",
    openGraph: {
        title: "나래❤️대승 결혼합니다.",
        description: "6월 28일 (토) 오전 11시 / 더컨벤션 신사",
        url: "https://wedding-iota-seven.vercel.app/",
        type: "website",
        images: [
            {
                url: "https://wedding-iota-seven.vercel.app/og_img.jpg",
                width: 800,
                height: 400,
                alt: "나래와 대승의 결혼식 초대",
            },
        ],
    },
};

export default function Home() {
    return (
        <>
            <AppScript />
            <InitKakao />
            <Main />
        </>
    );
}
