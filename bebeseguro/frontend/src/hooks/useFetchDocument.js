// Esse hook serve para pegar um documento específico dentro do banco de dados do firebase

import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
    doc,
    getDoc
} from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {

    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // lidando com vazamento de memória
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        const loadDocument = async () => {
            if (cancelled) return;

            setLoading(true);

            try {
                
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);

                setDocument(docSnap.data());
                setLoading(false);

            } catch (error) {
                
                console.log(error);
                setError(error.message);
                setLoading(false);

            }
        };

        loadDocument();
    }, [docCollection, id, cancelled]);

    console.log(document);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {document, loading, error};

}