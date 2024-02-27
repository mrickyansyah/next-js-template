"use client";
import React from "react";
import useSWR from "swr";
import { SearchIcon } from "./SearchIcon";
import ButtonAddNew from "./ButtonAddNew";
import RowsPerPage from "./RowsPerPage";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
    Selection,
    SortDescriptor,
    Input,
    getKeyValue,
} from "@nextui-org/react";
import { ItemInterface, TableDynamicProps } from ".";

type FetchArgs = [string, RequestInit?];

const fetcher = (...args: any) =>
    fetch(...(args as FetchArgs)).then((res) => res.json());

const randomString = (length: number) => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
};

// TODO:
// 1. add ColumnFilterDropdown.tsx with dynamic column filter?
// 2. handle error api response

export default function Wrapper({
    api,
    columns,
    customCell,
    buttonCreate,
    isButtonCreate = true,
}: TableDynamicProps) {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filterValue, setFilterValue] = React.useState("");

    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
        new Set([])
    );

    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });

    const { data, isLoading, mutate } = useSWR(
        `${api}?page=${page}&rows=${rowsPerPage}&search=${filterValue}`,
        fetcher,
        {
            keepPreviousData: true,
        }
    );

    const getResults = (response: any) => {
        if (!response || response.status === "error") {
            return {
                data: [],
                count: 0,
                search: filterValue,
            };
        }

        return response.results;
    };

    const results = getResults(data);

    const sortedItems = React.useMemo(() => {
        const items = results?.data ?? [];

        if (!items) return items;

        return [...items].sort((a: ItemInterface, b: ItemInterface) => {
            const first = a[
                sortDescriptor.column as keyof ItemInterface
            ] as number;

            const second = b[
                sortDescriptor.column as keyof ItemInterface
            ] as number;

            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, results]);

    const loadingState = isLoading || (isLoading && sortedItems.length === 0);

    const pages = React.useMemo(() => {
        return results?.count ? Math.ceil(results.count / rowsPerPage) : 1;
    }, [results?.count, rowsPerPage]);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        {isButtonCreate && (
                            <ButtonAddNew {...buttonCreate} mutate={mutate} />
                        )}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <RowsPerPage
                        handlePage={setPage}
                        selected={rowsPerPage}
                        handleRows={setRowsPerPage}
                    />
                </div>
            </div>
        );
    }, [
        filterValue,
        onSearchChange,
        onClear,
        rowsPerPage,
        isButtonCreate,
        buttonCreate,
        mutate,
    ]);

    const selectedString =
        selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${results?.count ?? 0} selected`;

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {Array.from(selectedKeys).length >= 1 && selectedString}
                </span>
                {pages > 1 && (
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={setPage}
                    />
                )}
            </div>
        );
    }, [page, pages, selectedString, selectedKeys]);

    return (
        <Table
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
        >
            <TableHeader>
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column?.id ?? randomString(16)}
                            align={
                                column?.id === "actions" ? "center" : "start"
                            }
                            allowsSorting={column?.sortable}
                        >
                            {column?.name}
                        </TableColumn>
                    )}
                </TableHeader>
            </TableHeader>
            <TableBody
                emptyContent="No data found"
                items={sortedItems}
                isLoading={loadingState}
                loadingContent={<Spinner />}
            >
                {(item: ItemInterface) => (
                    <TableRow key={item?.name ?? item?.id ?? randomString(16)}>
                        {(columnKey) => (
                            <TableCell>
                                {customCell
                                    ? customCell(item, columnKey)
                                    : getKeyValue(item, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
