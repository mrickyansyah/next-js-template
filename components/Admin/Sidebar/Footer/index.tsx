import { FilterIcon } from "@/components/Icons/FilterIcon";
import { SettingsIcon } from "@/components/Icons/SettingsIcon";
import { Avatar, Tooltip } from "@nextui-org/react";

interface SidebarFooterProps {
    [key: string]: any;
}

export default function SidebarFooter(props: SidebarFooterProps) {
    return (
        <div {...props}>
            <Tooltip content={"Settings"} color="primary">
                <div className="max-w-fit">
                    <SettingsIcon />
                </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
                <div className="max-w-fit">
                    <FilterIcon />
                </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
                <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="sm"
                />
            </Tooltip>
        </div>
    );
}
