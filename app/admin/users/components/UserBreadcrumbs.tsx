"use client";
import Breadcrumbs from "@/components/Admin/Breadcrumbs";
import { UsersIcon } from "@/components/Icons/UsersIcon";
import {
    BreadcrumbsInterface,
    useBreadcrumbs,
} from "@/context/admin/breadcrumbs";
import { useEffect } from "react";

const breadcrumbs: BreadcrumbsInterface[] = [
    {
        href: "/admin/users",
        title: "Users",
        icon: <UsersIcon />,
    },
    {
        href: "#",
        title: "List",
    },
];

export default function UserBreadcrumbs() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, []);

    return <Breadcrumbs />;
}
