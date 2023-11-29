
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllclass = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: info=[],refetch} = useQuery({
        enabled: !loading,
        queryKey:['allClass', user && user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/class`);
            return res.data;
        }
    });
    return [info,refetch];
};

export default useAllclass;