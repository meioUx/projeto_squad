import { createContext, useContext, useState } from "react";
import { api, endpoint } from "../services/api";

interface ILogin {
    email: string, password: string
}

interface IUser {
    user: User
    token: string
}

export interface User {
    email: string
    password: string
    _id: string
    __v: number
}


interface IAppContext {
    isLoading: boolean
    user: IUser | null
    signIn: (form: ILogin) => Promise<void>
    signUp: (form: ILogin) => Promise<void>
    signOut: () => void
}

const AppContext = createContext({} as IAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<IUser | null>(null)

    async function signIn(form: ILogin) {
        setIsLoading(true)
        try {
            const response = await api.post<IUser>(endpoint.user.login, form)
            console.log(response.data)
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
            setUser(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function signUp(form: ILogin) {
        setIsLoading(true)
        try {
            const response = await api.post<IUser>(endpoint.user.register, form)
            console.log(response.data)
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
            setUser(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function signOut() {

    }

    return (
        <AppContext.Provider value={{ isLoading, user, signIn, signUp, signOut }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    return context
}