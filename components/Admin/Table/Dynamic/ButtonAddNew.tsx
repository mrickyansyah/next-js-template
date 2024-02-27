"use client";
import { ModalProps, useDisclosure, ButtonProps } from "@nextui-org/react";
import Link from "next/link";
import { z } from "zod";
import React from "react";
import ModalWrapper from "./Modal";
import { ModalFormContext } from "@/context/admin/table-dynamic-modal";

export type ModalButtonProps = {
    hide?: boolean;
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    title?: React.ReactNode | string;
};

export type LinkProps = {
    href?: string;
    title?: string;
};

export type ModalFormProps = {
    placement?: ModalProps["placement"];
    header?: React.ReactNode | string;
    button?: {
        color?: ButtonProps["color"];
        title?: React.ReactNode | string;
        variant?: ButtonProps["variant"];
        endContent?: ButtonProps["endContent"];
    };
    body?: {
        content?: (error: any) => React.ReactNode; // https://react.dev/reference/react/cloneElement#overriding-props-of-an-element for input error

        /** @description form validator with zod library */
        validation?: z.ZodType<any>;

        /** @description api for create data */
        api?: string;
    };
    footer?: {
        content?: React.ReactNode;
        button?: {
            close?: ModalButtonProps;
            create?: ModalButtonProps;
        };
    };
};

export interface ButtonAddNewProps {
    /** @description swr mutator <KeyedMutator<Data>> */
    mutate?: any;
    link?: LinkProps;
    isModal?: boolean;
    modal?: ModalFormProps;
}

// TODO: footer content?

export default function ButtonAddNew(props: ButtonAddNewProps) {
    const { mutate, link, isModal, modal } = props;

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<object | null>(null);

    if (!isModal && !link?.href) {
        console.log(Error("property link.href is a required"));
    }

    return isModal ? (
        <ModalFormContext.Provider
            value={{
                modal,
                mutate,
                isLoading,
                setIsLoading,
                error,
                setError,
                isOpen,
                onOpen,
                onOpenChange,
            }}
        >
            <ModalWrapper />
        </ModalFormContext.Provider>
    ) : (
        <Link href={link?.href ?? "#"} title={link?.title ?? "Add New"} />
    );
}
