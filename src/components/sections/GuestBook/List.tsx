"use client";

import { useGuests } from "@/utils/useGuests";
import Image from "next/image";
import styles from "./styles.module.scss";

const MAX_NOTES = 80;
const GRID_SIZE = 10;
const CELL_WIDTH = 100 / GRID_SIZE;
const CELL_HEIGHT = 100 / GRID_SIZE;
const blockedIndices = new Set([24, 25, 34, 35, 44, 45, 54, 55]);

interface Note {
    top: number;
    left: number;
    rotation: number;
    type: number;
}

function seededRandom(seed: string, min: number, max: number): number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        hash |= 0;
    }
    const normalized = (hash >>> 0) / 2 ** 32;
    return Math.floor(normalized * (max - min + 1)) + min;
}

function getNotePositionById(id: string): Note {
    let index = 0;
    for (let i = 0; i < 10; i++) {
        const tryIndex = seededRandom(id + i, 0, GRID_SIZE * GRID_SIZE - 1);
        if (!blockedIndices.has(tryIndex)) {
            index = tryIndex;
            break;
        }
    }

    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;

    const baseTop = row * CELL_HEIGHT + CELL_HEIGHT / 2;
    const baseLeft = col * CELL_WIDTH + CELL_WIDTH / 2;

    const topOffset = seededRandom(id + "top", -4, 4);
    const leftOffset = seededRandom(id + "left", -4, 4);

    let top = baseTop + topOffset;
    let left = baseLeft + leftOffset;

    if (top < 2) top = 2;
    if (top > 98) top = 98;
    if (left < 2) left = 2;
    if (left > 98) left = 98;

    return {
        top,
        left,
        rotation: seededRandom(id + "rot", -20, 20),
        type: seededRandom(id + "type", 1, 6),
    };
}

export default function List() {
    const guests = useGuests();
    const limitedGuests = guests.slice(0, MAX_NOTES);

    return (
        <div className={styles.guestBook__wall}>
            {limitedGuests.map((guest) => {
                const note = getNotePositionById(guest.id);
                return (
                    <Image
                        key={guest.id}
                        src={`/notes_${note.type}.png`}
                        alt={`note-${note.type}`}
                        width={20}
                        height={20}
                        className={styles.notes}
                        style={{
                            top: `${note.top}%`,
                            left: `${note.left}%`,
                            transform: `translate(-50%, -50%) rotate(${note.rotation}deg)`,
                        }}
                    />
                );
            })}
        </div>
    );
}
