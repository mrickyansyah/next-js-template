"use client";
import { useCallback } from "react";

interface Props {
    rows?: number[];
    selected: number;
    handlePage: (page: number) => void;
    handleRows: (rows: number) => void;
}

export default function RowsPerPage({
    rows,
    selected,
    handlePage,
    handleRows,
}: Props) {
    const onRowsPerPageChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            handleRows(Number(e.target.value));
            handlePage(1);
        },
        [handlePage, handleRows]
    );

    if (!rows) {
        rows = [5, 10, 15];
    }

    return (
        <div className="flex justify-between items-center">
            <label className="flex items-center text-default-400 text-small">
                Rows per page:
                <select
                    className="bg-transparent outline-none text-default-400 text-small"
                    onChange={onRowsPerPageChange}
                    defaultValue={selected}
                >
                    {rows.map((row: number) => (
                        <option key={row} value={row}>
                            {row}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
