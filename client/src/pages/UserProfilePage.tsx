import { useGetUser, useUpdateUser } from "@/api/UserApi"
import Loading from "@/components/Loading";
import UserProfileForm from "@/forms/user-profile/UserProfileForm"

const UserProfilePage = () => {
    const { updateUser, isLoading: isLoadingUpdate } = useUpdateUser();
    const { currentUser, isLoading: isLoadingGet } = useGetUser();

    if (isLoadingGet) {
        return <Loading />
    }

    if (!currentUser) {
        return <span>Unable to load user profile</span>
    }

    return (
        <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isLoadingUpdate} />
    )
}

export default UserProfilePage