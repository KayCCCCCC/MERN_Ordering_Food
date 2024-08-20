import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi"
import ManageRestaurantForm from "@/forms/manage-restaurant/ManageRestaurantForm"

const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading: isLoadingCreate } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant, isLoading: isLoadingUpdate } = useUpdateMyRestaurant();

    const isEditing = !!restaurant;

    return (
        <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isLoadingCreate || isLoadingUpdate} />
    )
}

export default ManageRestaurantPage