import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useClassFormUpdate = (id) => {
    const axiosSecure = useAxiosSecure();

    const {data: info={}} = useQuery({
        enabled: !!id,
        queryKey:['update-form-class', id],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/update-form-class/${id}`);
            return res.data;
        }
    });
    return [info];
};


export default useClassFormUpdate;