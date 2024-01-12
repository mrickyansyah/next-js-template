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
import { columns, users } from "./data";

export default function TableWrapper() {
    return (
        <div className=" w-full flex flex-col gap-4">
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={
                                column.uid === "actions" ? "center" : "start"
                            }
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
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
