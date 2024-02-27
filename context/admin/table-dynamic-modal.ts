import { ModalFormProps } from "@/components/Admin/Table/Dynamic/ButtonAddNew";
import { createContext, useContext } from "react";

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