import { useState } from "react";

export default function Name() {
    const [name, setName] = useState('');

    function updateName(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={updateName}/>
            <h1>Name: {name}</h1>
        </div>
    )
}