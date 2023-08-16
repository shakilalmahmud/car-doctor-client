import { Helmet } from "react-helmet-async";
import Aboutus from "./Aboutus";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Products from "./Products";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>car-doctor/home</title>
            </Helmet>
            <Carousel></Carousel>
            <Aboutus></Aboutus>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            
        </div>
    );
};

export default Home;