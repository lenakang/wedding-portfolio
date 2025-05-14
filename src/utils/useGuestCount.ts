import { getCountFromServer, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

export const useGuestCount = () => {
    const [count, setCount] = useState<number | null>(null);

    const fetchCount = async () => {
        const snapshot = await getCountFromServer(collection(db, "guest"));
        setCount(snapshot.data().count);
    };

    useEffect(() => {
        fetchCount();

        const onWritten = () => fetchCount();
        window.addEventListener("guest_written", onWritten);

        return () => window.removeEventListener("guest_written", onWritten);
    }, []);

    return count;
};
