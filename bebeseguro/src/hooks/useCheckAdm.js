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
            else if (user.uid === 'S0ssykAo4PM7XOxpnH16QTEJ7na2')
                setAdm(true);
            else if (user.uid === '7M6LUwVXckemGHbOXWz1gy8aG783')
                setAdm(true);
            else if (user.uid === 'aCA8xmDvpdhffoT5KbNuyctliFm2')
                setAdm(true);
            else if (user.uid === 'dNnRGYY20ydaKq3OhDIVgEvqeLf1')
                setAdm(true);
            else
                setAdm(false);
        };

        checkingAdm();
    }, [user]);

    return { adm };
}