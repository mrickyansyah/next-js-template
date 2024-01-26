"use client";
import { SidebarContext } from "@/context/admin/sidebar";
import { useLockedBody } from "@/hooks/useBodyLock";
import { useState } from "react";

interface SidebarProps {
    children: React.ReactNode;
}

export default function SidebarProvider({ children }: SidebarProps) {
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
            {children}
        </SidebarContext.Provider>
    );
}
