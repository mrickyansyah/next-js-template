"use client";
import React from "react";
import { columns } from "../api/v1/data";
import {
    Button,
    Chip,
    ChipProps,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    User,
} from "@nextui-org/react";
import { z } from "zod";
import TableDynamic, { ItemInterface } from "@/components/Admin/Table/Dynamic";
import { VerticalDotsIcon } from "@/components/Icons/VerticalDotsIcon";
import { ButtonAddNewProps } from "@/components/Admin/Table/Dynamic/ButtonAddNew";

const schema = z
    .object({
        email: z.string().email(),
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        phone: z.string().min(1),
        password: z.string().min(1),
        confirmPassword: z.string().min(1),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export default function Table() {
    const api = "/admin/payments/api/v1";

    const renderCell = React.useCallback(
        (data: ItemInterface, columnKey: React.Key) => {
            const cellValue = data[columnKey as keyof ItemInterface];
            const statusColorMap: Record<string, ChipProps["color"]> = {
                0: "danger",
                1: "success",
            };

            switch (columnKey) {
                case "account_name":
                    return (
                        <User
                            avatarProps={{
                                radius: "lg",
                                src: data.avatar ?? data.logo,
                            }}
                            description={data.name}
                            name={cellValue}
                        >
                            {data.name}
                        </User>
                    );
                case "status":
                    return (
                        <Chip
                            className="capitalize"
                            color={statusColorMap[data.status]}
                            size="sm"
                            variant="flat"
                        >
                            {cellValue}
                        </Chip>
                    );
                case "actions":
                    return (
                        <div className="relative flex justify-end items-center gap-2">
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        isIconOnly
                                        size="sm"
                                        variant="light"
                                    >
                                        <VerticalDotsIcon className="text-default-300" />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem>View</DropdownItem>
                                    <DropdownItem>Edit</DropdownItem>
                                    <DropdownItem>Delete</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    );
                default:
                    return cellValue;
            }
        },
        []
    );

    const buttonCreate: ButtonAddNewProps = {
        isModal: true,
        modal: {
            body: {
                validation: schema,
                api: api,
                content: (error: any) => {
                    return (
                        <>
                            <Input
                                name="email"
                                label="Email"
                                variant="bordered"
                                isInvalid={error?.email}
                                errorMessage={error?.email}
                            />
                            <Input
                                name="firstName"
                                label="First Name"
                                variant="bordered"
                                isInvalid={error?.firstName}
                                errorMessage={error?.firstName}
                            />
                            <Input
                                name="lastName"
                                label="Last Name"
                                variant="bordered"
                                isInvalid={error?.lastName}
                                errorMessage={error?.lastName}
                            />
                            <Input
                                name="phone"
                                label="Phone Number"
                                variant="bordered"
                                isInvalid={error?.phone}
                                errorMessage={error?.phone}
                            />
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                variant="bordered"
                                isInvalid={error?.password}
                                errorMessage={error?.password}
                            />
                            <Input
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                variant="bordered"
                                isInvalid={error?.confirmPassword}
                                errorMessage={error?.confirmPassword}
                            />
                        </>
                    );
                },
            },
        },
    };

    return (
        <TableDynamic
            columns={columns}
            api={api}
            customCell={renderCell}
            buttonCreate={buttonCreate}
        />
    );
}
