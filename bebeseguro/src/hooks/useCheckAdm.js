import { useState, useEffect } from "react";
import { useAuthValue } from "../context/AuthContext";

export const useCheckAdm = () => {
    const { user } = useAuthValue();

    const [adm, setAdm] = useState(false);

    useEffect(() => {

        const checkingAdm = () => {

            if (user.uid === 'k9PU6PoBElXuyp8Mq2pqpgnYW9L2')
                setAdm(true);
            else if (user.uid === '4cXDOK9fDWSc4xFcmIXePNCt25m2')
                setAdm(true);
            else
                setAdm(false);
        };

        checkingAdm();
    }, [user]);

    return {adm};
}