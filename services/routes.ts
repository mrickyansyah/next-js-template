import { routes } from "@/routes";
import { IconSvgProps } from "@/types";
import { ReactElement, ReactNode } from "react";

export interface Routes {
    admin: RouteInterface[];
    client: RouteInterface[];
    routeGroup?: RouteInterface[];
}

export interface RouteTooltipInterface {
    title: string;
    position?: "top" | "bottom" | "left" | "right";
    color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" 
}

export interface RouteInterface {
    path: string;
    title: string;
    active?: boolean;
    pageTitle?: string;
    type?: "item" | "group";
    icon?: ReactElement | ReactNode | string;
    tooltip?: RouteTooltipInterface | string;
    children?: RouteInterface[];
}

export const getRoutes = (key: "admin" | "client") => {
    const mapping = (route: RouteInterface): RouteInterface => {
        if (!route.type) {
            Object.assign(route, { type: "item" });
        }

        if ((key == "admin") && (route.type !== "group") && !route.path?.includes("/admin")) {
            route.path = "/admin" + (route.path !== "/" ? route.path : "");
        }
        
        if (!route.children) {
            return Object.assign(route, { active: false });
        }
    
        return {
            ...route,
            children: route.children.map((child) => mapping(child)),
            active: false
        };
    };
  
    return routes[key].map((route: RouteInterface) => mapping(route));
}

export const findRoute = (path: string, routes: RouteInterface[]): RouteInterface | undefined => {
    if (!path) return undefined;
  
    for (const route of routes) {
        if (route.path && path.startsWith(route.path)) {
            if (route.children && route.children.length) {
                const childRoute = findRoute(path, route.children);
                
                if (childRoute) {
                    route.children = [childRoute];
                }
    
                return route;
            }
            
            if (route.path === path) {
                return route;
            } 
        }
    }
  
    return undefined;
}