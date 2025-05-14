"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import "./styles.scss";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    (img) => `/gallery_more_${img}.jpg`
);

export default function Page() {
    const router = useRouter();
    return (
        <div className="gallery_more">
            <h3 className="gallery_more__nav">
                <button onClick={() => router.push("/?scrollTo=gallery")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                    ddd
                </button>
                <span>Gallery</span>
            </h3>
            <div className="gallery_more__inner">
                {images.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt="Picture of the couple"
                        width={500}
                        height={500}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
