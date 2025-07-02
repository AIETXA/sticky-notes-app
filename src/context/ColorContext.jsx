import { createContext, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({children}) => {
    const [ color, setColor ] = useState('amarillo')

   return (
    <ColorContext.Provider value={{color, setColor}}>
        {children}
    </ColorContext.Provider>
   ) 
}


export { ColorContext, ColorProvider }