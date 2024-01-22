import { useState } from "react";
import { useEffect } from "react"

export default function UseEffectTest () {

    const [ toggleOne, setToggleOne ] = useState(false);

    useEffect(() => {
        console.log('UseEffect1 Ran')
    });

    return (
        <div>
            {console.log('rendered or re-rendered')}
            <h1>
                UseEffectTest Component
            </h1>
            <button onClick={() => setToggleOne(!toggleOne)}>
                ToggleOne
            </button>

        </div>
    )
};
