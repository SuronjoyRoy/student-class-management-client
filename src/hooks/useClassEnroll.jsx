import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublice";



const useClassEnroll = (id) => {
    const axiosPublic = useAxiosPublic();

    const {data: info={}} = useQuery({
        enabled: !!id,
        queryKey:['details-class', id],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/class-single/${id}`);
            return res.data;
        }
    });
    return [info];
};


export default useClassEnroll;