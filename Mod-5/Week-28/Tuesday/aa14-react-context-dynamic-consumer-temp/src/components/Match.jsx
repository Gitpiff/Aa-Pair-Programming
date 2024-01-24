import { useState } from "react";
import { useHoroscopeContext } from "../context/HoroscopeContext";


const Match = () => {
    const [ match, setMatch ] = useState(false);
    const { sign } = useHoroscopeContext();

    console.log(sign)

    return (
        <>
            <button onClick={() => setMatch(!match)}>Match?</button>
            {
                match ?
                <div>
                    {sign.match}
                </div>
                :
                ""
            }
            
        </>
    )
};

export default Match;