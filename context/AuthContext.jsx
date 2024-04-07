"use client"

import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null)

    const router = useRouter()

    const login = (info) => {
        setUser(info)
        router.push("/dashboard")
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])
    

    const values = {login, logout}
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider