// import { useState } from "react";
import "./MainSection.css";
import {useState} from 'react'
import defaultColors from './defaultColors.js'

export default function MainSection() {
    // const [color, setColor] = useState("#000");
    const GRID_SIZE = 16
    const DEFAULT_COLOR = "#FFFFFF"

    const cells = Array.from({ length: 16 }, () => Array(GRID_SIZE).fill(DEFAULT_COLOR));
   
    function clearBoard(){
        setGrid(createGrid)
    }

    function createGrid(){
        return cells;
    }

    const [grid, setGrid] = useState(createGrid)
    const [color, setColor] = useState(DEFAULT_COLOR);

    const colorChoices = defaultColors.map((el, index) => (<button 
        key={index} 
        className='color-box'
        style={{
            backgroundColor: el.color
        }}
        onClick={() => setColor(el.color)}
    >
    </button>))

    function changeColor(row, col){
        if(grid[row][col] === color){
            const newGrid = grid.map(el => el.slice())
            newGrid[row][col] = DEFAULT_COLOR
            setGrid(newGrid)
        } else {
            const newGrid = grid.map(el => el.slice())
            newGrid[row][col] = color
            setGrid(newGrid)
        }

        // alert("color changed:"+ color)
    }

    // console.log(color)
    return (
        <>
            <h1>Pixel Art Editor</h1>
            <div className="container">
                <div className="colorPicker">
                    <h3>COLOR</h3>
                    <input 
                        type="color" 
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <div className='default-colors'>
                        {colorChoices}
                    </div>
               
                    <button onClick={clearBoard}>Clear</button>
                    <p>Click any cell to paint it with the current color.</p>
                </div>
                <div className="grid-container">
                {
                    grid.map((row, r) => 
                        row.map((col, c) => (
                            <button 
                                key={`${r}-${c}`}
                                onClick={() => changeColor(r, c)}                             
                                style={{
                                    backgroundColor: col
                                }}
                            >
                            </button>
                        )
                    ))
                }
                </div>
            </div>
        </>
    )
}