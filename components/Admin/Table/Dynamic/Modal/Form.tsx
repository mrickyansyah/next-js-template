"use client";
import { useModalFormContext } from "@/context/admin/table-dynamic-modal";
import { ResponseTypeEnum } from "@/services/response-object";
import { getZodErrorMessage } from "@/services/zod-error-message";
import { FormEvent } from "react";

interface Props {
    onClose: () => void;
    children: React.ReactNode;
}

export default function ModalForm({ onClose, children }: Props) {
    const { setIsLoading, setError, mutate, modal } = useModalFormContext();

    async function onSubmit(event: FormEvent<HTMLFormElement>, onClose: any) {
        let form: any = {};

        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const fetcher = async () => {
            const options = {
                method: "post",
                body: JSON.stringify(form),
            };

            if (modal?.body?.api && form) {
                const response = await fetch(modal?.body?.api, options).then(
                    (result) => result.json()
                );

                if (response.status === "error") {
                    if (response.type === ResponseTypeEnum.FORM_INVALID) {
                        setError(response.results);
                    }

                    if (response.type === ResponseTypeEnum.FORM_NULL) {
                        throw Error(response.message);
                    }
                }

                if (response.status === "success") {
                    mutate();
                    onClose();
                }
            }
        };

        const inputs = event.currentTarget?.querySelectorAll(
            "input, textarea, select"
        );

        if (inputs) {
            for (let i = 0; i < inputs.length; i++) {
                const name = inputs[i].getAttribute("name");
                const value = inputs[i].getAttribute("value");

                if (typeof name === "string") {
                    form[name] = value;
                }
            }
        }

        if (modal?.body?.validation) {
            const result = modal?.body?.validation.safeParse(form);

            if (result.success) {
                await fetcher();
            } else {
                const errors = getZodErrorMessage(result.error.issues);
                if (errors) setError(errors);
            }
        } else {
            await fetcher();
        }

        setIsLoading(false);
    }

    return <form onSubmit={(e) => onSubmit(e, onClose)}>{children}</form>;
}
