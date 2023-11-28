import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: info=[],refetch} = useQuery({
        enabled: !loading,
        queryKey:['teacher-class', user && user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/class/${user?.email}`);
            return res.data;
        }
    });
    return [info,refetch];
};

export default useClass;