import { useSidebarContext } from "@/context/admin/sidebar";
import clsx from "clsx";
import NextLink from "next/link";

interface SidebarMenuItemProps {
    title: string;
    icon: React.ReactNode;
    isActive?: boolean;
    href?: string;
}

export default function SidebarMenuItem(props: SidebarMenuItemProps) {
    const { icon, title, isActive, href = "" } = props;
    const { collapsed, setCollapsed } = useSidebarContext();

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setCollapsed();
        }
    };

    return (
        <NextLink
            href={href}
            className="text-default-900 active:bg-none max-w-full"
        >
            <div
                className={clsx(
                    isActive
                        ? "bg-primary-100 [&_svg_path]:fill-primary-500"
                        : "hover:bg-default-100",
                    "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                )}
                onClick={handleClick}
            >
                {icon}
                <span className="text-default-900">{title}</span>
            </div>
        </NextLink>
    );
}
