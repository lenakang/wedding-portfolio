"use client";

import { useState } from "react";

export default function CopyToClipboardButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("서울 강남구 강남대로 652");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 안내 숨김
    } catch (err) {
      console.error("주소 복사 실패:", err);
    }
  };

  return (
    <div>
      <button className="copyBtn underline" onClick={handleCopy}>
        주소 복사하기
      </button>

      {copied && <div className="copyBtn__popup">주소가 복사되었습니다.</div>}
    </div>
  );
}
