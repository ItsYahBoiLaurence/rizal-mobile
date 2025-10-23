import Header from "../custom/Header";
import { Outlet } from "react-router-dom";
import { ProtectedRoutes } from "../custom/ProtectedRoutes";

export default function AppLayout() {
    return (
        <div className="relative">
            <ProtectedRoutes>
                <Header />
                <main className="h-[calc(100vh-65px)] relative z-0">
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </ProtectedRoutes>
        </div>
    )
}