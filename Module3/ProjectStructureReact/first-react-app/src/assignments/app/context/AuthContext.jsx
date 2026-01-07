import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import * as authService from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsub;
    }, []);
}

const value = {
    user,
    signup: authService.signup,
    login: authService.login,
    logout: authService.logout,
};

return (
    <AuthContext.Provider value={value}>
     {!loading && children}
     </AuthContext.Provider>
);
export const useAuth = () => useContext(AuthContext);
