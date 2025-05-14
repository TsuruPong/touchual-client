import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { VirtualKeyboard } from "~/components/virtual-keyboard";

export default function Layout() {
    return (
        <main className="h-full flex flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="flex justify-center">
                <VirtualKeyboard />
            </div>
            <Footer />
        </main>
    );
}
