import React, { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const contextValues = {
        a: "Value A",
        b: "Value B",
        c: "Value C",
        d: "Value D",
        e: "Value E",
        f: "Value F" 
    };

return (
    <AppContext.Provider value={contextValues}>
        {children}
    </AppContext.Provider>
);
};
