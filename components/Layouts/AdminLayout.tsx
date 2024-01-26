"use client";
import { useLockedBody } from "@/hooks/useBodyLock";
import NavbarWrapper from "../Admin/Navbar/Wrapper";
import { useState } from "react";
import SidebarWrapper from "../Admin/Sidebar/Wrapper";
import { SidebarContext } from "@/context/admin/sidebar";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [_, setLocked] = useLockedBody(false);

    const handleToggleSidebar = (): void => {
        setSidebarOpen(!sidebarOpen);
        setLocked(!sidebarOpen);
    };

    return (
        <SidebarContext.Provider
            value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
            }}
        >
            <section className="flex">
                <SidebarWrapper />
                <NavbarWrapper>
                    <div className="h-full lg:px-6 lg:py-4">{children}</div>
                </NavbarWrapper>
            </section>
        </SidebarContext.Provider>
    );
}
