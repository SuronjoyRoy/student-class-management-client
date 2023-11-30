
const HomeContent = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 py-5 items-center justify-center">
                <div className="">
                    <figure>
                        <img className="w-[600px] rounded-lg" src="https://i.ibb.co/nsg2cjb/teach123.jpg" alt="" />
                    </figure>
                </div>
                <div className="flex-1 space-y-2 max-w-xl">
                    <h1 className="font-bold text-2xl">Become an Instructor</h1>
                    <p>
                        Becoming a Teacher
                        The legal, ethical and moral implications of entering society’s most fundamental profession
                    </p>
                    <p>
                    Accessible, readable and engaging, Becoming a Teacher draws on Alan’s decades of professional work and academic study in education to set out the key principles for developing and understanding the professional values essential to becoming a good teacher.
                    </p>
                    <a className="btn rounded bg-[#ff5722] hover:bg-[#ff56228e] text-white border-none" href="/teachon">
                        Start Teaching Today
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
