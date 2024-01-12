import { useSidebarContext } from "@/context/admin-layout-context";
import { StyledBurgerButton } from "./navbar.styles";

export default function BurgerButton() {
    const { collapsed, setCollapsed } = useSidebarContext();

    return (
        <div
            className={StyledBurgerButton()}
            // open={collapsed}
            onClick={setCollapsed}
        >
            <div />
            <div />
        </div>
    );
}
