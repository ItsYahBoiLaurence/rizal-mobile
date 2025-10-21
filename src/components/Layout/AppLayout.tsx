import Header from "../custom/Header";
import Footer from "../custom/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}