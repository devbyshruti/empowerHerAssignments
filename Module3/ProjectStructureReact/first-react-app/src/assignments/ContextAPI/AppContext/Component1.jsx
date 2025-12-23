import React from "react";
import { AppProvider  } from "./AppContext";
import Component2 from "./Component2";

const Component1 = () => {
    return ( 
        <AppProvider>
        <Component2 />
        </AppProvider>
    );
};
export default Component1;