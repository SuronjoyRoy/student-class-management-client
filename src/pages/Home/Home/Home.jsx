import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import HomeContent from "./HomeContent";
import ServiceContent from "./ServiceContent";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>class management | Home</title>
            </Helmet>
            <Banner></Banner>
            <HomeContent></HomeContent>
            <ServiceContent></ServiceContent>
        </div>
    );
};

export default Home;