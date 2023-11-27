import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRoleChecker = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: info} = useQuery({
        enabled: !loading,
        queryKey:['users', user && user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data?.role || 'user';
        }
    });
    return info;
};

export default useRoleChecker;