import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLink from "./MobileNavLink"

const MobileNav = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    return (
        <Sheet>
            {/* Trigger to show */}
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? <span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-orange-500" />
                        {user?.email}
                    </span> : <span>Welcome to OrderingFood.com!</span>}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ?
                        <MobileNavLink />
                        :
                        (<Button onClick={async () => await loginWithRedirect()} className="flex-1 font-bold bg-orange-500 w-full">Sign In</Button>)}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav