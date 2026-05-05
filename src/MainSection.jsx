// import { useState } from "react";
import "./MainSectionStyle.css";

export default function MainSection() {
    // const [color, setColor] = useState("#000");

    return (
        <>
            <h1>Pixel Art Editor</h1>
            <div className="container">
                <div className="colorPicker">
                    <h3>COLOR</h3>
                    <input type="color" />
                    <input type="radio" />
                    <button>Clear</button>
                    <p>Click any cell to paint it with the current color.</p>
                </div>
                <div className="grid">input</div>
            </div>
        </>
    )
}