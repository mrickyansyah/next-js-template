"use client";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar.styles";
import SidebarMenu from "./Menu";
import SidebarHeader from "./Header";
import SidebarFooter from "./Footer";
import { getRoutes } from "@/services/routes";
import { useSidebarContext } from "@/context/admin/sidebar";

export default function SidebarWrapper() {
    const pathname = usePathname();
    const routes = getRoutes("admin");
    const { collapsed, setCollapsed } = useSidebarContext();

    return (
        <aside className="h-screen z-[202] sticky top-0">
            {collapsed && (
                <div className={Sidebar.Overlay()} onClick={setCollapsed} />
            )}
            <div
                className={Sidebar({
                    collapsed: collapsed,
                })}
            >
                <SidebarHeader className={Sidebar.Header()} />
                <div className="flex flex-col justify-between h-full">
                    <SidebarMenu
                        routes={routes}
                        pathname={pathname}
                        className={Sidebar.Body()}
                    />
                    <SidebarFooter className={Sidebar.Footer()} />
                </div>
            </div>
        </aside>
    );
}
