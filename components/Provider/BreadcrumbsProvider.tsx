"use client";
import { useState } from "react";
import { HouseIcon } from "../Icons/HouseIcon";
import {
    BreadcrumbsContext,
    BreadcrumbsInterface,
} from "@/context/admin/breadcrumbs";

interface Props {
    children: React.ReactNode;
}

const dashboard = {
    href: "/admin",
    title: "Home",
    icon: <HouseIcon />,
};

export default function BreadcrumbsProvider({ children }: Props) {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsInterface[]>([
        dashboard,
    ]);

    const handleAddBreadcrumb = (breadcrumb: BreadcrumbsInterface) => {
        setBreadcrumbs([...breadcrumbs, breadcrumb]);
    };

    const handleSetBreadcrumbs = (newBreadcrumbs: BreadcrumbsInterface[]) => {
        setBreadcrumbs([dashboard, ...newBreadcrumbs]);
    };

    const handleRemoveBreadcrumbs = (key: string | string[]) => {
        const newBreadcrumbs = breadcrumbs.filter((breadcrumb) => {
            const href = breadcrumb.href.toLowerCase();
            const title = breadcrumb.title.toLowerCase();

            if (typeof key === "string") {
                key = key.toLowerCase();
                return href == key || title == key;
            }

            return key.includes(href || title);
        });

        setBreadcrumbs(newBreadcrumbs);
    };

    return (
        <BreadcrumbsContext.Provider
            value={{
                breadcrumbs: breadcrumbs,
                addBreadcrumb: handleAddBreadcrumb,
                setBreadcrumbs: handleSetBreadcrumbs,
                removeBreadcrumbs: handleRemoveBreadcrumbs,
            }}
        >
            {children}
        </BreadcrumbsContext.Provider>
    );
}
