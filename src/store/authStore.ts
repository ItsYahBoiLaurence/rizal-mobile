import type { UserCreds } from '@/types/User'
import { create } from 'zustand'

export type AuthState = {
    loggedIn: boolean
}

export type AuthActions = {
    login: (credentials: UserCreds) => Promise<void>
    logout: () => Promise<void>
}

export type AuthStoreType = AuthActions & AuthState

export const useAuthStore = create<AuthStoreType>((set) => ({
    loggedIn: false,

    login: async (credentials) => {
        console.log(credentials)
        set({
            loggedIn: true
        })
    },

    logout: async () => {
        console.log('logout')
        set({
            loggedIn: false
        })
    }

}))