// import { useState } from "react";
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
                    <fieldset>
                        <div>
                            <input type="radio" name="color" value="Red" />
                            <input type="radio" name="color" value="Orange" />
                            <input type="radio" name="color" value="Yellow" />
                            <input type="radio" name="color" value="Green" />
                            <input type="radio" name="color" value="Blue" />
                        </div>
                        <div>
                            <input type="radio" name="color" value="purple" />
                            <input type="radio" name="color" value="pink" />
                            <input type="radio" name="color" value="black" />
                            <input type="radio" name="color" value="other" />
                            <input type="radio" name="color" value="other" />
                        </div>
                    </fieldset>
                    
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