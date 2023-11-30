import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTeacherApporve = (id) => {
    const axiosSecure = useAxiosSecure();

    const {data: info={}} = useQuery({
        enabled: !!id,
        queryKey:['apporove-class', id],
        queryFn: async () =>{
            const res = await axiosSecure.patch(`/apporove-single/${id}`);
            return res.data;
        }
    });
    return [info];
};


export default useTeacherApporve;