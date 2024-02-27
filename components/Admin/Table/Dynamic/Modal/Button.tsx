"use client";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "../PlusIcon";
import { useModalFormContext } from "@/context/admin/table-dynamic-modal";

export default function ModalButton() {
    const { modal, onOpen } = useModalFormContext();

    return (
        <Button
            onPress={onOpen}
            color={modal?.button?.color ?? "primary"}
            variant={modal?.button?.variant ?? "flat"}
            endContent={modal?.button?.endContent ?? <PlusIcon />}
        >
            {modal?.button?.title ?? "Add New"}
        </Button>
    );
}
