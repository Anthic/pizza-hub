import "./App.css";
import Banner from "./components/Banner";
import Ceo from "./components/Ceo";
import FoodCategori from "./components/FoodCategori";
import Footer from "./components/Footer";
import Images from "./components/Images";
import Navbar from "./components/Navbar";
import OurProduct from "./components/OurProduct";
import Review from "./components/Review";
import Today from "./components/Today";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto py-2">
      <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className=" py-2 bg-pink-50">
        <Ceo></Ceo>
      </div>
      <div>
        <OurProduct></OurProduct>
        <Today></Today>
      </div>
      <div className ="w-11/12 mx-auto my-4" >
        <FoodCategori></FoodCategori>
      </div>
      <div>
        <Review></Review>
      </div>
      <div>
        <Images></Images>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
