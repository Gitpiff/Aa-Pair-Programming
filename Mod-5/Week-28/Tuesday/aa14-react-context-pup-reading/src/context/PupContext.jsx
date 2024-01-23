import { createContext, useContext, useState } from "react";
import banana from "../pups/banana-pup.jpg";

export const PupContext = createContext(); //argument would be the context's default

const PupProvider = (props) => {

    const [ puppyType, setPuppyType ] = useState(banana)

    return (
        <PupContext.Provider value={{ puppyType, setPuppyType }}>
            {props.children}
        </PupContext.Provider>
    )
};

export function usePuppycontext() {
    return useContext(PupContext)
};

export default PupProvider;