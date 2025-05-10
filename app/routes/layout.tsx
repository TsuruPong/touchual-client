import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="w-full h-full">
            <Outlet />
        </div>
    );
}
