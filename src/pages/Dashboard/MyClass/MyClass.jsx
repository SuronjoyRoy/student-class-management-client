import useClass from "../../../hooks/useClass";
import ClassCard from "./ClassCard";

const MyClass = () => {
    const [myclass ]= useClass();
    // console.log(myclass)
    return (
        <div className=" w-auto gap-4 grid md:grid-cols-3 grid-cols-1 ">
            {
                myclass.map(item =><ClassCard key={item._id} item={item}></ClassCard>)
            }
        </div>
    );
};

export default MyClass;