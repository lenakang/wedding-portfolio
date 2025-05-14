"use client";

import { useGuests } from "@/utils/useGuests";
import Image from "next/image";
import styles from "./styles.module.scss";

const MAX_HEARTS = 100;
const GRID_ROWS = 6;
const GRID_COLS = 10;
const CELL_WIDTH = 100 / GRID_COLS;
const CELL_HEIGHT = 100 / GRID_ROWS;

interface Heart {
    top: number;
    left: number;
    rotation: number;
}

function seededRandom(seed: string, min: number, max: number): number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const normalized = (hash >>> 0) / 2 ** 32;
    return Math.floor(normalized * (max - min + 1)) + min;
}

function getPositionById(id: string): Heart {
    const index = seededRandom(id, 0, GRID_ROWS * GRID_COLS - 1);
    const row = Math.floor(index / GRID_COLS);
    const col = index % GRID_COLS;

    return {
        top: row * CELL_HEIGHT + seededRandom(id + "top", 0, 4),
        left: col * CELL_WIDTH + seededRandom(id + "left", 0, 4),
        rotation: seededRandom(id + "rot", -35, 35),
    };
}

export default function List() {
    const guests = useGuests();
    const limitedGuests = guests.slice(0, MAX_HEARTS);

    return (
        <div className={styles.guestBook__wall}>
            {limitedGuests.map((guest) => {
                const heart = getPositionById(guest.id);
                return (
                    <Image
                        key={guest.id}
                        src="/heart.png"
                        alt="heart"
                        width={28}
                        height={25}
                        className={styles.heart}
                        style={{
                            top: `${heart.top}%`,
                            left: `${heart.left}%`,
                            transform: `rotate(${heart.rotation}deg)`,
                            position: "absolute",
                        }}
                    />
                );
            })}
        </div>
    );
}
