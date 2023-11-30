
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllClasssShow = () => {
    const axiosSecure = useAxiosSecure();

    const {data: info=[],refetch} = useQuery({
        
        queryKey:['all-teacher-class'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/all-class-show`);
            return res.data;
        }
    });
    return [info,refetch];
};

export default useAllClasssShow;