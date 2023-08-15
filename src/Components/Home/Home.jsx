import Aboutus from "./Aboutus";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Products from "./Products";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Aboutus></Aboutus>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            
        </div>
    );
};

export default Home;