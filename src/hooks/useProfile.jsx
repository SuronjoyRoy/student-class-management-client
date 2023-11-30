import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProfile = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: info=[],refetch} = useQuery({
        enabled: !loading,
        queryKey:['user-profile', user && user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users-profile/${user && user?.email}`);
            return res.data;
        }
    });
    return [info,refetch];
};

export default useProfile;