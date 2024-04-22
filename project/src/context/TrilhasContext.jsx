import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch"

export const TrilhasContext = createContext()

export const TrilhasContextProvide = ({children}) => {
    const [trilhas, loading] = useFetch("./public/trilhas.json")
    const [trilhas2, setTrilhas2] = useState([])

    return(
        <TrilhasContext.Provider value={{trilhas2, setTrilhas2, trilhas, loading}}>
            {children}
        </TrilhasContext.Provider>
    )
}
