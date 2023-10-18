import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";

export const AppNav = () => {
    const { isLogin } = useAuth();

    return (
        <header>
            <Navigation />
            {isLogin ? <UserMenu /> : <AuthNav />}
        </header>
    );
};