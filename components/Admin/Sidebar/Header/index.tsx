import CompaniesDropdown from "./CompaniesDropdown";

interface SidebarHeaderProps {
    [key: string]: any;
}

export default function SidebarHeader(props: SidebarHeaderProps) {
    return (
        <div {...props}>
            <CompaniesDropdown />
        </div>
    );
}
