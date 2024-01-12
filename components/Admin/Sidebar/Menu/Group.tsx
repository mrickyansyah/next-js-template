interface MenuGroupProps {
    title: string;
    children?: React.ReactNode;
}

export default function SidebarMenuGroup({ title, children }: MenuGroupProps) {
    return (
        <div className="flex gap-2 flex-col">
            <span className="text-xs font-normal">{title}</span>
            {children}
        </div>
    );
}
