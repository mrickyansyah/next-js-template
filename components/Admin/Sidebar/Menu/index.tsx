import SidebarMenuItem from "./Item";
import SidebarMenuGroup from "./Group";
import SidebarMenuCollapse from "./Collapse";
import { RouteInterface } from "@/services/routes";

interface MenuProps {
    pathname: string;
    routes: RouteInterface[];
    [key: string]: any;
}

interface SidebarItemProps {
    route: RouteInterface;
    pathname?: string;
}

const SidebarItem = ({ route, pathname }: SidebarItemProps) => {
    return route.children ? (
        <SidebarMenuCollapse
            icon={route.icon}
            title={route.title}
            items={route.children}
        />
    ) : (
        <SidebarMenuItem
            icon={route.icon}
            title={route.title}
            href={route.path ?? ""}
            isActive={pathname === route.path}
        />
    );
};

export default function SidebarMenu({ pathname, routes, ...props }: MenuProps) {
    return (
        <div {...props}>
            {routes.map((route: RouteInterface, index: number) => {
                if (route.type === "group") {
                    return (
                        <SidebarMenuGroup title={route.title} key={index}>
                            {route.children?.map(
                                (child: RouteInterface, childIndex: number) => {
                                    return (
                                        <SidebarItem
                                            route={child}
                                            key={childIndex}
                                            pathname={pathname}
                                        />
                                    );
                                }
                            )}
                        </SidebarMenuGroup>
                    );
                }

                return (
                    <SidebarItem
                        key={index}
                        route={route}
                        pathname={pathname}
                    />
                );
            })}
        </div>
    );
}
