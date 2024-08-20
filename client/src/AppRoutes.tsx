import { Navigate, Route, Routes } from "react-router-dom"
import Layouts from "./layouts/layouts"
import Home from "./pages/Home"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
import ManageRestaurantPage from "./pages/ManageRestaurantPage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts><Home /></Layouts>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/user-profile" element={<Layouts showHero={false}><UserProfilePage /></Layouts>} />
                <Route path="/manage-restaurant" element={<Layouts showHero={false}><ManageRestaurantPage /></Layouts>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes