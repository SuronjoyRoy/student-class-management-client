import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import HomeContent from "./HomeContent";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>class management | Home</title>
            </Helmet>
            <Banner></Banner>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Home;