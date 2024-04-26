import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({ children }) => {
    const { data, loading } = useFetch("/trilhas.json")
    const [trilhas, setTrilhas] = useState([])

    useEffect(() => {
        if (data && data.trilhas && !loading) {
            setTrilhas(data.trilhas)
        }
    })

    function adicionarTrilha(trilhasData) {
        setTrilhas((t) => [...t, trilhasData])
    }

    return (
        <TrilhasContext.Provider value={{ trilhas, data, setTrilhas, loading, adicionarTrilha }}>
            {children}
        </TrilhasContext.Provider>
    )
}
