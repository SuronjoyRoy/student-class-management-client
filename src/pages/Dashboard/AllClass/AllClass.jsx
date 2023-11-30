import useClass from "../../../hooks/useClass";
import ClassCard from "../MyClass/ClassCard";

const AllClass = () => {
    const [myclass, refetch ]= useClass();
    // console.log(myclass)
    return (
        <div className=" w-auto gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {
                myclass.map(item =><ClassCard refetch={refetch} key={item._id} item={item}></ClassCard>)
            }
        </div>
    );
};

export default AllClass;