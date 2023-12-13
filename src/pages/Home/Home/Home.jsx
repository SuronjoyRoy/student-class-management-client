import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import HomeContent from "./HomeContent";
import ServiceContent from "./ServiceContent";
import Aboutus from "./Aboutus";
import Accordion from "./Accordion";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>class management | Home</title>
            </Helmet>
            <Banner></Banner>
            <HomeContent></HomeContent>
            <ServiceContent></ServiceContent>
            <Aboutus></Aboutus>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;