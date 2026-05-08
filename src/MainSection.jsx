// import { useState } from "react";
import "./MainSection.css";
import ColorPicker from "./ColorPicker";
import {useState} from 'react'
import squares from './squares.js'

export default function MainSection() {
    // const [color, setColor] = useState("#000");
    const cells = Array.from({ length: 256 });
    const [color, setColor] = useState("#FFFFFF");
    
     const boxes = squares.map((el, index) => (<button 
        key={index} 
        className='color-box'
        style={{backgroundColor: el.color}}
        onClick={() => setColor(el.color)}
        >
        </button>))
    return (
        <>
            <h1>Pixel Art Editor</h1>
            <div className="container">
                <div className="colorPicker">
                    <h3>COLOR</h3>
                    <input type="color" />
                    <div className='box-container'>
                        {boxes}
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