"use client";
import { Button, ModalFooter } from "@nextui-org/react";
import { useModalFormContext } from "@/context/admin/table-dynamic-modal";

interface Props {
    onClose: () => void;
}

export default function ModalFormFooter({ onClose }: Props) {
    const { modal, isLoading } = useModalFormContext();

    return (
        <ModalFooter>
            {!modal?.footer?.button?.close?.hide && (
                <Button
                    color={modal?.footer?.button?.close?.color ?? "danger"}
                    variant={modal?.footer?.button?.close?.variant ?? "flat"}
                    onClick={onClose}
                    type="button"
                >
                    {modal?.footer?.button?.close?.title ?? "Close"}
                </Button>
            )}
            {!modal?.footer?.button?.create?.hide && (
                <Button
                    color={modal?.footer?.button?.create?.color ?? "primary"}
                    variant={modal?.footer?.button?.create?.variant ?? "flat"}
                    isLoading={isLoading}
                    type="submit"
                >
                    {modal?.footer?.button?.create?.title ?? "Add"}
                </Button>
            )}
        </ModalFooter>
    );
}
