import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
//import { useAuthValue } from "../context/AuthContext";

export const useCheckAdm = () => {
    //const { user } = useAuthValue();
    const { auth } = useAuth();
    const { user } = useSelector((state) => state.auth);

    //console.log(user._id)

    const [adm, setAdm] = useState(false);

    useEffect(() => {

        const checkingAdm = () => {

            if (user._id === '646944ec075c491e26066819')
                setAdm(true);
            else if (user._id === '64715ad54f4f668289d23847')
                setAdm(true);
            else if (user._id === '64715d034f4f668289d23864')
                setAdm(true);
            else if (user._id === '64715f804f4f668289d2386c')
                setAdm(true);
            else if (user._id === '64715fef4f4f668289d23871')
                setAdm(true);
            else if (user._id === '647160384f4f668289d2387a')
                setAdm(true);
            else
                setAdm(false);
        };

        checkingAdm();
    }, [user]);

    return { adm, user };
}