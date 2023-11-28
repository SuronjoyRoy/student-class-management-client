
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUpdateClass = (id) => {
    
    const axiosSecure = useAxiosSecure();

    const {data: info={}} = useQuery({
        enabled: !!id,
        queryKey:['update-class', id],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/update-class/${id}`);
            return res.data;
        }
    });
    return [info];
};

export default useUpdateClass;