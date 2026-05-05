const { useState } = "react";

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <input type="text" value={count} onChange={e => setCount(e + 1)}/>
            <h1>Count: {count}</h1>
        </div>
    )
}