import './ColorPicker.css'
import squares from './squares.js'
function ColorPicker(){
    const boxes = squares.map((el, index) => (<h1 key={index} className='color-box'>{el.id}</h1>))
    // console.log(squares)
    console.log(boxes)
    return (
        <div className='box-container'>
            {boxes}
        </div>
       
    )
}
export default ColorPicker