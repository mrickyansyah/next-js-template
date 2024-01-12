import {
    Input,
    Link,
    Navbar as NextUiNavbar,
    NavbarContent,
} from "@nextui-org/react";
import BurgerButton from "./BurgerButton";
import { SearchIcon2 } from "@/components/Icons/SearchIcon2";
import NotificationsDropdown from "./NotificationsDropdown";
import { GithubIcon2 } from "@/components/Icons/GithubIcon2";
import UserDropdown from "./UserDropdown";
import ThemeSwitch from "@/components/ThemeSwitch";

interface NavbarWrapperProps {
    children: React.ReactNode;
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <NextUiNavbar
                isBordered
                className="w-full"
                classNames={{
                    wrapper: "w-full max-w-full",
                }}
            >
                <NavbarContent className="md:hidden">
                    <BurgerButton />
                </NavbarContent>
                <NavbarContent className="w-full max-md:hidden">
                    <Input
                        startContent={<SearchIcon2 />}
                        isClearable
                        className="w-full"
                        size="sm"
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Search..."
                    />
                </NavbarContent>
                <NavbarContent
                    justify="end"
                    className="w-fit data-[justify=end]:flex-grow-0"
                >
                    <div className="max-md:hidden">
                        <ThemeSwitch />
                    </div>

                    <NotificationsDropdown />

                    <Link
                        href="https://github.com/mrickyansyah/next-ui-template"
                        target={"_blank"}
                    >
                        <GithubIcon2 />
                    </Link>
                    <NavbarContent>
                        <UserDropdown />
                    </NavbarContent>
                </NavbarContent>
            </NextUiNavbar>
            {children}
        </div>
    );
}
