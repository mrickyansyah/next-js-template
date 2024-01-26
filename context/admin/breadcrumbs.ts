import { createContext, useContext } from 'react';

export interface BreadcrumbsInterface {
    href: string;
    title: string;
    icon?: React.ReactNode;
}

interface BreadcrumbsContext {
    breadcrumbs: BreadcrumbsInterface[];
    addBreadcrumb: (breadcrumb: BreadcrumbsInterface) => void;
    setBreadcrumbs: (breadcrumbs: BreadcrumbsInterface[]) => void;
    removeBreadcrumbs: (key: string | string[]) => void;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContext>({
    breadcrumbs: [],
    addBreadcrumb: () => {},
    setBreadcrumbs: () => {},
    removeBreadcrumbs: () => {}
});

export const useBreadcrumbs = () => {
    return useContext(BreadcrumbsContext);
};