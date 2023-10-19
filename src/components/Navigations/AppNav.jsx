import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";
import { Header } from "./Navigation.styled";

export const AppNav = () => {
    const { isLogin } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLogin ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};