import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const MobileNav = () => {
    return (
        <Sheet>
            {/* Trigger to show */}
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to OrderingFood.com!</span>
                </SheetTitle>
                <Separator />
                <SheetDescription>
                    <Button className="flex-1 font-bold bg-orange-500 w-full">Sign In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav