import { createContext, useState } from "react";

const CalculatorContext = createContext();



const CalculatorProvider = ({children}) => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const providerValues = {
        calc, setCalc
    }

    return(
        <CalculatorContext.Provider value={providerValues}>
            {children}
        </CalculatorContext.Provider>
    )
}

export {CalculatorContext, CalculatorProvider}