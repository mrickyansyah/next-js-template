"use client";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import ModalButton from "./Button";
import ModalFormFooter from "./Footer";
import React from "react";
import { useModalFormContext } from "@/context/admin/table-dynamic-modal";
import ModalForm from "./Form";

export default function ModalWrapper() {
    const { modal, isOpen, onOpenChange, error, setError } =
        useModalFormContext();

    return (
        <>
            <ModalButton />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={() => setError(null)}
                placement={modal?.placement ?? "top-center"}
            >
                <ModalContent>
                    {(onClose) => (
                        <ModalForm onClose={onClose}>
                            <ModalHeader className="flex flex-col gap-1">
                                {modal?.header ?? "Add Data"}
                            </ModalHeader>
                            <ModalBody id="add-new-body">
                                {modal?.body?.content
                                    ? modal.body.content(error)
                                    : null}
                            </ModalBody>
                            <ModalFormFooter onClose={onClose} />
                        </ModalForm>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
