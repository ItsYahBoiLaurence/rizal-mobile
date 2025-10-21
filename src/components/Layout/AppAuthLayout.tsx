import { Outlet } from "react-router-dom";
import AuthHeader from "../custom/AuthHeader";
import { PublicRoutes } from "../custom/ProtectedRoutes";

export default function AuthAppLayout() {

    return (
        <div>
            <PublicRoutes>
                <AuthHeader />
                <main>
                    <Outlet />
                </main>
            </PublicRoutes>
        </div>
    )
}