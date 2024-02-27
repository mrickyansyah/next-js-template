"use client";
import React from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import {
    Button,
    ButtonProps,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Selection,
} from "@nextui-org/react";
import { ColumnInterface } from ".";

interface Props {
    title: string;
    columns: ColumnInterface[];
    variant: ButtonProps["variant"];
    select?: {
        value: Selection;
        set: () => void;
    };
}

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function ColumnFilterDropdown({
    title,
    columns,
    variant,
    select,
}: Props) {
    const [selected, setSelected] = React.useState<Selection>("all");

    // const filteredItems = React.useMemo(() => {
    //     let filteredUsers = [...users];

    //     if (hasSearchFilter) {
    //         filteredUsers = filteredUsers.filter((user) =>
    //             user.name.toLowerCase().includes(filterValue.toLowerCase())
    //         );
    //     }
    //     if (
    //         selected !== "all" &&
    //         Array.from(selected).length !== statusOptions.length
    //     ) {
    //         filteredUsers = filteredUsers.filter((user) =>
    //             Array.from(selected).includes(user.status)
    //         );
    //     }

    //     return filteredUsers;
    // }, [users, filterValue, selected]);

    return (
        <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
                <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    variant={variant ?? "flat"}
                >
                    {title}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={select?.value ?? selected}
                selectionMode="multiple"
                onSelectionChange={select?.set ?? setSelected}
            >
                {columns.map((column) => (
                    <DropdownItem key={column.id} className="capitalize">
                        {capitalize(column.name)}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}
