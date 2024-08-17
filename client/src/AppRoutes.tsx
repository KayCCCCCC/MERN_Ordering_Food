import { Navigate, Route, Routes } from "react-router-dom"
import Layouts from "./layouts/layouts"
import Home from "./pages/Home"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts><Home /></Layouts>} />
            <Route path="/user-profile" element={<span>User Profiles</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes