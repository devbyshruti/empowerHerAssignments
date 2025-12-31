import React from "react";

function HeavyComponent() {
    console.log("HeavyComponent rendered");

    let sum = 0;
    for (let i = 0; i< 100000000; i++) {
        sum += 1;

    }

    return ( 
       <div style={{ border: "1px solid black", padding: "10px" }}>
        <h2>Heavy Component</h2>
        <p>Expensive UI section</p>
       </div>
    );
}

export default React.memo(HeavyComponent);