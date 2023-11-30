
import useAllclass from '../../hooks/useAllclass';
import AllClassesCard from './AllClassesCard';


const AllClasses = () => {
    const [allClass, refetch ]= useAllclass();
    console.log(allClass);
    return (
        <div className=" w-auto gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {
                allClass.map(item =><AllClassesCard refetch={refetch} key={item._id} item={item}></AllClassesCard>)
            }
        </div>
    );
};

export default AllClasses;