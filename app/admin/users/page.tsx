import { DotsIcon } from "@/components/Icons/DotsIcon";
import { InfoIcon } from "@/components/Icons/InfoIcon";
import { SettingsIcon } from "@/components/Icons/SettingsIcon";
import { TrashIcon } from "@/components/Icons/TrashIcon";
import { Button, Input } from "@nextui-org/react";
import AddUser from "./components/AddUser";
import { ExportIcon } from "@/components/Icons/ExportIcon";
import TableWrapper from "@/components/Admin/Table";
import UserBreadcrumbs from "./components/UserBreadcrumbs";
import { columns, users } from "@/components/Admin/Table/data";

export default function Page() {
    return (
        <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
            <UserBreadcrumbs />

            <h3 className="text-xl font-semibold">All Accounts</h3>
            <div className="flex justify-between flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                    <Input
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Search users"
                    />
                    <SettingsIcon />
                    <TrashIcon />
                    <InfoIcon />
                    <DotsIcon />
                </div>
                <div className="flex flex-row gap-3.5 flex-wrap">
                    <AddUser />
                    <Button color="primary" startContent={<ExportIcon />}>
                        Export to CSV
                    </Button>
                </div>
            </div>
            <div className="max-w-[95rem] mx-auto w-full">
                <TableWrapper columns={columns} data={users} />
            </div>
        </div>
    );
}
