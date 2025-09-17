import { Header, Main, Footer } from "@/components/sections";
import { Metadata } from "next";
import {
    SITE_URL,
    WEDDING_DATE,
    WEDDING_TITLE,
    WEDDING_VENUE,
} from "@/constants/info";
import AppScript from "./AppScript";

export const metadata: Metadata = {
    title: WEDDING_TITLE,
    description: `${WEDDING_DATE} / ${WEDDING_VENUE}`,
    openGraph: {
        title: WEDDING_TITLE,
        description: `${WEDDING_DATE} / ${WEDDING_VENUE}`,
        url: SITE_URL,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/og_img.jpg`,
                width: 800,
                height: 400,
                alt: WEDDING_TITLE,
            },
        ],
    },
};

export default function Home() {
    return (
        <>
            <Header />
            <AppScript />
            <Main />
            <Footer />
        </>
    );
}
