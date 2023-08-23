import { createContext, useState } from "react"

export default function useTheme(){

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || document.documentElement.dataset.bsTheme || "dark"
        )
        
        function handleTheme(){
            const newTheme = theme === "dark" ? "light" : "dark"
            setTheme(newTheme)
            localStorage.setItem("theme", newTheme)
            document.documentElement.dataset.bsTheme = newTheme
        }
        return [theme, handleTheme]
    }
    