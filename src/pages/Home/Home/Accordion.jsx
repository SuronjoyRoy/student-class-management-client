
const Accordion = () => {
    return (
        <div className="w-3/4 mx-auto ">
            <div className="my-30 py-20">
                <h1 className="text-3xl text-center font-medium">Frequently Ask?</h1>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Why You Should Take An eLearning Course?
                </div>
                <div className="collapse-content">
                    <p>Taking an eLearning course is beneficial to the taker in a number of ways. Some can be documented; others cannot. Time and money of course lead the list of advantages, but keeping them aside there is still a number that will make you ponder over taking an eLearning course.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    eLearning courses are scalable, fast, and efficient?
                </div>
                <div className="collapse-content">
                    <p>Compared to the traditional classroom teaching concept, eLearning courses are far faster. The delivery of these courses does not depend on physical infrastructure, and hence there is no limit on the number of students who can enroll. This implies that even if you are in the US, you could access a course in India just through an internet connection. Talking about efficiency, a report says that learners learn more through an eLearning course than a conventional method of learning. Also, creating new policies, concepts, and ideas in an eLearning course is quick.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-16">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    You can tailor eLearning according to your needs?
                </div>
                <div className="collapse-content">
                    <p>A classroom teaching course has mostly a fixed syllabus. eLearning courses on the other hand give you the opportunity to tailor the course according to the needs of the majority. Also, it enables you to attend your weak parts again and again and lets you skip through thorough parts.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;