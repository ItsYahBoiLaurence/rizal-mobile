import Header from "../custom/Header";
import { Outlet } from "react-router-dom";
import { ProtectedRoutes } from "../custom/ProtectedRoutes";

export default function AppLayout() {
    return (
        <div>
            <ProtectedRoutes>
                <Header />
                <main className="h-[calc(100vh-65px)]">
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </ProtectedRoutes>
        </div>
    )
}