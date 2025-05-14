import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { VirtualKeyboard } from "~/components/virtual-keyboard";

export default function Layout() {
    return (
        <main className="w-full h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7">
            <Header />
            <div className="h-full grid grid-rows-[1fr,0.4fr]">
                <div className="w-full h-full">
                    <Outlet />
                </div>
                <div className="flex justify-center">
                    <VirtualKeyboard />
                </div>
            </div>
            <Footer />
        </main>
    );
}
