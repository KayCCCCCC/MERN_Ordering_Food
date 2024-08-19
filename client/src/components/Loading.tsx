import { Loader2 } from "lucide-react"

const Loading = () => {
    return (
        <div className="container flex items-center justify-center text-3xl text-orange-500">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
        </div>
    )
}

export default Loading