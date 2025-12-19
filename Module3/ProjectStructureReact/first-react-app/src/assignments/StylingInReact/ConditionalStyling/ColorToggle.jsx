import { useState } from "react";

function ColorToggle() {
    const [isRed, setIsRed] = useState(true);

    const boxStyle = {
        padding: "20px",
        color: white,
        backgroundColor: isRed ? "red" : "blue",
        marginButton: "10px"
    };

    return (
        <div>
            <div style={boxStyle}>
                This div changes color

            </div>
            <button onClick={() => setIsRed(!isRed)}>
               Toggle Color
            </button>
        </div>
    );
}

export default ColorToggle;