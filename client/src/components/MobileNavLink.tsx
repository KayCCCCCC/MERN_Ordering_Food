import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLink = () => {
    const { logout } = useAuth0();
    return (
        <>
            <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-orange-500">
                User Profile
            </Link>
            <Button onClick={() => logout()} className="flex items-center px-3 font-bold bg-orange-500 hover:bg-orange-300">
                Sign Out
            </Button>
        </>
    )
}

export default MobileNavLink