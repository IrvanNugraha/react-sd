import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Home from "./Home/Home";


function Loader(){
    return(
        <div className="wrapper">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default Loader;