import { createContext, useState } from "react";
import useTheme from "../customHooks/useTheme";
const ThemeContext = createContext() //provider, consumer
function ThemeContextProvider({children}){
    const [theme, handleTheme] = useTheme()

    const context = {
        theme : theme,
        handleTheme : handleTheme

    }
    return <ThemeContext.Provider value={context}>
        {children}
    </ThemeContext.Provider>
}

export {ThemeContext, ThemeContextProvider}