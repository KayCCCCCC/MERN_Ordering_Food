import { Navigate, Route, Routes } from "react-router-dom"
import Layouts from "./layouts/layouts"
import Home from "./pages/Home"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
import ManageRestaurantPage from "./pages/ManageRestaurantPage"
import SearchPage from "./pages/SearchPage"
import DetailPage from "./pages/DetailPage"
import OrderStatusPage from "./pages/OrderStatusPage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts><Home /></Layouts>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/search/:city" element={<Layouts showHero={false}><SearchPage /></Layouts>} />
            <Route path="/detail/:restaurantId" element={<Layouts showHero={false}><DetailPage /></Layouts>} />

            <Route element={<ProtectedRoute />}>
                <Route path="/order-status" element={<Layouts showHero={false}><OrderStatusPage /></Layouts>} />
                <Route path="/user-profile" element={<Layouts showHero={false}><UserProfilePage /></Layouts>} />
                <Route path="/manage-restaurant" element={<Layouts showHero={false}><ManageRestaurantPage /></Layouts>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes