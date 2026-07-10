import { createContext, useEffect, useState } from "react";

export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    function toggleTheme(){
        setTheme((prevTheme)=>prevTheme=="light"?"dark":"light")
    }
    useEffect(()=>{
        document.documentElement.classList.toggle("dark",theme==="dark")
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
    )
}