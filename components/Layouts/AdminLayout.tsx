import NavbarWrapper from "../Admin/Navbar/Wrapper";
import SidebarWrapper from "../Admin/Sidebar/Wrapper";
import BreadcrumbsProvider from "../Provider/BreadcrumbsProvider";
import SidebarProvider from "../Provider/SidebarProvider";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <SidebarProvider>
            <BreadcrumbsProvider>
                <section className="flex">
                    <SidebarWrapper />
                    <NavbarWrapper>
                        <div className="h-full lg:px-6 lg:py-4">{children}</div>
                    </NavbarWrapper>
                </section>
            </BreadcrumbsProvider>
        </SidebarProvider>
    );
}
