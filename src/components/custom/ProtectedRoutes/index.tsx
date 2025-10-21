import { useAuthStore } from "@/store";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoutes({ children }: { children: ReactNode }) {

    const isAuthenticated = useAuthStore(state => state.loggedIn)

    return isAuthenticated ? children : <Navigate to='/auth/login' replace />
}

export function PublicRoutes({ children }: { children: ReactNode }) {
    const isAuthenticated = useAuthStore(state => state.loggedIn)
    return isAuthenticated ? <Navigate to='/' replace /> : children
}