"use client";

import { useState } from "react";

export default function CopyToClipboardButton({
    address,
}: {
    address: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("주소 복사 실패:", err);
        }
    };

    return (
        <>
            <span className="copyBtn underline" onClick={handleCopy}>
                주소 복사하기
            </span>

            {copied && (
                <div className="copyBtn__popup">주소가 복사되었습니다.</div>
            )}
        </>
    );
}
