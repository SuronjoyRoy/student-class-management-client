import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useTeacherReq = (id) => {
    const axiosSecure = useAxiosSecure();

    const {data: info={}} = useQuery({
        enabled: !!id,
        queryKey:['classDetails', id],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/class/${id}`);
            return res.data;
        }
    });
    return [info];
};

export default useTeacherReq;