import dynamic from "next/dynamic";
import { ButtonAddNewProps } from "./ButtonAddNew";

export interface ColumnInterface {
    id: string;
    name: string;
    sortable?: boolean;
}

export interface ItemInterface {
    [key: string]: any;
}

export interface TableDynamicProps {
    api: string;
    columns: ColumnInterface[];
    customCell?: (data: ItemInterface, columnKey: React.Key) => any;
    buttonCreate?: ButtonAddNewProps;
    isButtonCreate?: boolean;
}

const Wrapper = dynamic(() => import("./Wrapper"), {
    ssr: false,
});

export default function TableDynamic({
    api,
    columns,
    customCell,
    buttonCreate,
    isButtonCreate = true,
}: TableDynamicProps) {
    return (
        <Wrapper
            api={api}
            columns={columns}
            customCell={customCell}
            buttonCreate={buttonCreate}
            isButtonCreate={isButtonCreate}
        />
    );
}
