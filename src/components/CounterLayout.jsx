import React, { useState } from "react";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

function CounterLayout() {
    var [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 1);
    }
    let decrease = () => {
        setCount(count - 1);
    }
    let reset = () => {
        setCount(0);
    }

    return (
        <div className="my-40">
            <h2 className="text-5xl">{count}</h2>
            <div className="my-6">
                <button onClick={increase} className="inline-block bg-green-400 hover:bg-green-600 transition-all rounded-sm w-16 h-16 mt-6 mx-2 text-center text-white font-bold text-5xl">+</button>
                <button onClick={decrease} className="inline-block bg-green-400 hover:bg-green-600 transition-all rounded-sm w-16 h-16 mt-6 mx-2 text-center text-white font-bold text-5xl">-</button>
                <button onClick={reset} className="inline-block bg-red-500 hover:bg-red-600 transition-all rounded-sm w-16 h-16 mt-6 mx-2 text-center text-white font-bold text-5xl">
                    <DeleteForeverTwoToneIcon className="scale-125 mb-2 block " />
                </button>
            </div>
        </div>
    )
}

export default CounterLayout;