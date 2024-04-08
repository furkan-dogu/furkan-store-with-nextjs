"use client"

import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedUser = sessionStorage.getItem("user")
            return storedUser ? JSON.parse(storedUser) : null
        } else {
            return null
        }
    })

    const router = useRouter()

    const login = (info) => {
        setUser(info)
        router.push("/dashboard")
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user))
        } else {
            sessionStorage.removeItem("user")
        }
    }, [user])
    

    const values = {login, logout}
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider
