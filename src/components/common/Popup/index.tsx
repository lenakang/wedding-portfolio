import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./styles.module.scss";

interface PopupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  style?: "line1" | "line2";
}

export default function Popup({
  setIsOpen,
  children,
  style = "line1",
}: PopupProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "<"
    );
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsOpen(false),
    });
    tl.to(contentRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    }).to(
      backdropRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "<"
    );
  };

  return (
    <div className={styles.backdrop} ref={backdropRef} onClick={handleClose}>
      <div
        className={`${styles.content} ${styles[style]}`}
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={handleClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}
