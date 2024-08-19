import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UserNameMenu from "./UserNameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <>
            <span className="flex space-x-2 items-center">
                {isAuthenticated ? <UserNameMenu /> : (
                    <Button onClick={async () => await loginWithRedirect()} variant="ghost" className="font-bold text-white hover:text-orange-500 bg-orange-500 hover:bg-orange-300">
                        Sign In
                    </Button>
                )}
            </span>
        </>
    )
}

export default MainNav