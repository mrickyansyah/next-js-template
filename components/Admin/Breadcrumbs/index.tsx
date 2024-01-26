"use client";
import Link from "next/link";
import { useBreadcrumbs } from "@/context/admin/breadcrumbs";

export default function Breadcrumbs() {
    const { breadcrumbs } = useBreadcrumbs();
    const lastIndexBreadcrumbs = breadcrumbs.length - 1;

    return (
        <ul className="flex">
            {breadcrumbs.map((breadcrumb, index: number) => {
                return lastIndexBreadcrumbs == index ? (
                    <li key={index} className="flex gap-2">
                        {breadcrumb.icon}
                        <span>{breadcrumb.title}</span>
                    </li>
                ) : (
                    <li key={index} className="flex gap-2">
                        {breadcrumb.icon}
                        <Link href={breadcrumb.href}>
                            <span>{breadcrumb.title}</span>
                        </Link>
                        <span className="mr-2">/</span>
                    </li>
                );
            })}
        </ul>
    );
}
