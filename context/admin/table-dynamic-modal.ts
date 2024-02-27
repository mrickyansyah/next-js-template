import { ModalFormProps } from "@/app/admin/payments/components/TableDynamic/ButtonAddNew";
import { createContext, useContext } from "react";
import { KeyedMutator } from "swr";

interface ModalFormContext {
    mutate: any;
    modal?: ModalFormProps;

    // loading
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

    // error
    error: object | null,
    setError: React.Dispatch<React.SetStateAction<object | null>>;

    // disclosure
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

export const ModalFormContext = createContext<ModalFormContext>({
    modal: {},
    mutate: () => {},
    isLoading: false,
    setIsLoading: () => {},
    error: null,
    setError: () => {},
    isOpen: false,
    onOpen: () => {},
    onOpenChange: () => {},
})

export const useModalFormContext = () => {
    return useContext(ModalFormContext);
}