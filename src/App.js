import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import About from "./components/section/about";
import Chefs from "./components/section/chefs";
import Offers from "./components/section/offers";
import Footer from "./components/section/footer";
import Reservation from "./components/section/reservation";
import Menu from "./components/section/menu";

function App() {
  return (
    <div>
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Header />
      {/* ***** Header Area End ***** */}
      {/* ***** Main Banner Area Start ***** */}
      <Banner />
      {/* ***** Main Banner Area End ***** */}
      {/* ***** About Area Starts ***** */}
      <About />
      {/* ***** About Area Ends ***** */}
      {/* ***** Menu Area Starts ***** */}
      <Menu/>
      {/* ***** Menu Area Ends ***** */}
      {/* ***** Chefs Area Starts ***** */}
      <Chefs />
      {/* ***** Chefs Area Ends ***** */}
      {/* ***** Reservation Us Area Starts ***** */}
      <Reservation/>
      {/* ***** Reservation Area Ends ***** */}
      {/* ***** Menu Area Starts ***** */}
      <Offers />
      {/* ***** Chefs Area Ends ***** */}
      {/* ***** Footer Start ***** */}
      <Footer />
    </div>
  );
}

export default App;
