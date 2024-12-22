import './App.css';
import React, {useState} from "react";

const App = () => {


    const [count, setCount] = useState(0)


    return (
        <div className="counter">
            <div className="count">
                <div>{count}</div>

                <button onClick={() => decreaseCounter(setCount, count, 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => decreaseCounter(setCount, count, 2)}>2-</button>
                <button onClick={() => setCount(count + 5)}>5</button>
                <button onClick={() => setCount(0)}>reset</button>

            </div>
        </div>
    )
}

function decreaseCounter(setCount, count, x) {
    if (count >= x) {
        setCount(count - x)

    }

}


export default App;
