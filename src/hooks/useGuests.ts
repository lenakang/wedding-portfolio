import { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type GuestMessage = {
    id: string;
    name: string;
    content: string;
    createdAt?: Timestamp;
};

export const useGuests = () => {
    const [guests, setGuests] = useState<GuestMessage[]>([]);

    useEffect(() => {
        const q = query(collection(db, "guest"), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snapshot) => {
            setGuests(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as GuestMessage[]
            );
        });

        return () => unsub();
    }, []);

    return guests;
};
