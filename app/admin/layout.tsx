import AdminLayout from "@/components/Layouts/AdminLayout";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: AdminLayoutProps) {
    return <AdminLayout>{children}</AdminLayout>;
}
