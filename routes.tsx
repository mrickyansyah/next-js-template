import { PaymentsIcon } from "./components/Icons/PaymentsIcon";
import { AccountsIcon } from "./components/Icons/AccountsIcon";
import { RouteInterface, Routes } from "./services/routes";
import { BalanceIcon } from "./components/Icons/BalanceIcon";
import { ProductsIcon } from "./components/Icons/ProductsIcon";
import { ReportsIcon } from "./components/Icons/ReportsIcon";
import { DevIcon } from "./components/Icons/DevIcon";
import { ViewIcon } from "./components/Icons/ViewIcon";
import { SettingsIcon } from "./components/Icons/SettingsIcon";
import { ChangeLogIcon } from "./components/Icons/ChangeLogIcon";
import { HomeIcon } from "./components/Icons/HomeIcon";

const client: RouteInterface[] = [];

const admin: RouteInterface[] = [
    {
        path: "/",
        title: "Dashboard",
        icon: <HomeIcon />,
    },
    {
        path: "#",
        type: "group",
        title: "Main Menu",
        children: [
            {
                path: "/users",
                title: "Accounts",
                icon: <AccountsIcon />,
            },
            {
                path: "/payments",
                title: "Payments",
                icon: <PaymentsIcon />,
            },
            {
                path: "/balances",
                title: "Balances",
                icon: <BalanceIcon />,
                children: [
                    {
                        path: "#",
                        title: "Banks Accounts",
                    },
                    {
                        path: "#",
                        title: "Credit Cards",
                    },
                    {
                        path: "#",
                        title: "Loans",
                    },
                ],
            },
            {
                path: "/products",
                title: "Products",
                icon: <ProductsIcon />,
            },
            {
                path: "/reports",
                title: "Reports",
                icon: <ReportsIcon />,
            },
        ],
    },
    {
        path: "#",
        type: "group",
        title: "General",
        children: [
            {
                path: "/developers",
                title: "Developers",
                icon: <DevIcon />,
            },
            {
                path: "/view",
                title: "View Test Data",
                icon: <ViewIcon />,
            },
            {
                path: "/settings",
                title: "Settings",
                icon: <SettingsIcon />,
            },
        ],
    },
    {
        path: "#",
        type: "group",
        title: "Updates",
        children: [
            {
                path: "/changelog",
                title: "Changelog",
                icon: <ChangeLogIcon />,
            },
        ],
    },
];

export const routes: Routes = { admin, client };
