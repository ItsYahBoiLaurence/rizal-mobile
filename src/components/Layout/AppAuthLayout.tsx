import { Outlet } from "react-router-dom";
import AuthHeader from "../custom/AuthHeader";
import { PublicRoutes } from "../custom/ProtectedRoutes";

export default function AuthAppLayout() {

    return (
        <div>
            <PublicRoutes>
                <AuthHeader />
                <main className="h-[calc(100vh-65px)] z-0">
                    <Outlet />
                </main>
            </PublicRoutes>
        </div>
    )
}