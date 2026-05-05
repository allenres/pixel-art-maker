// import { useState } from "react";
import "./MainSectionStyle.css";
import ColorPicker from "./ColorPicker";
import "./MainSection.css";


export default function MainSection() {
    // const [color, setColor] = useState("#000");
    const cells = Array.from({ length: 256 });

    return (
        <>
            <h1>Pixel Art Editor</h1>
            <div className="container">
                <div className="colorPicker">
                    <h3>COLOR</h3>
                    <input type="color" />
                    <div className="color-picker">
                        <ColorPicker />
                    </div>
                    
                    <button>Clear</button>
                    <p>Click any cell to paint it with the current color.</p>
                </div>
                <div className="grid-container">
                {cells.map((_, index) => (
                    <div key={index} className="grid-item">
                    {/* Optional content here */}
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}