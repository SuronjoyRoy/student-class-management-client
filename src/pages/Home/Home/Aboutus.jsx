import aboutimg from '../../../assets/images/6-convincing-reasons-take-elearning-course.jpg';

const Aboutus = () => {
    return (
        <div className=''>
            <div className="hero py-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-5xl font-bold">Why You Should Take An eLearning Course</h1>
                        <p className="py-6">How do you think eLearning works? What makes this era the era of eLearning? Why is that eLearning courses have introduced an added advantage to your resume that can keep you at an edge from others? eLearning courses are popular from a higher education level to a number of technical and professional courses that help in attaining a stable career. </p>

                    </div>
                    <img className="w-[50%]" src={aboutimg} data-aos="fade-up"
                        data-aos-duration="3000" alt="promo-1" border="0" />

                </div>
            </div>
        </div>
    );
};

export default Aboutus;