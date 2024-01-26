"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import RenderCell from "./RenderCell";

export type TableColumn = {
    title: string;
    name: string;
};

export type TableData = {
    id: number;
    name: string;
    role?: string;
    team?: string;
    status?: string | number | boolean;
    age?: number | string;
    avatar?: string;
    email?: string;
};

interface TableWrapperProps {
    columns: TableColumn[];
    data: TableData[];
}

export default function TableWrapper({ columns, data }: TableWrapperProps) {
    return (
        <div className=" w-full flex flex-col gap-4">
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column.name}
                            hideHeader={column.name === "actions"}
                            align={
                                column.name === "actions" ? "center" : "start"
                            }
                        >
                            {column.title}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={data}>
                    {(item) => (
                        <TableRow>
                            {(columnKey) => (
                                <TableCell>
                                    {RenderCell({
                                        user: item,
                                        columnKey: columnKey,
                                    })}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
