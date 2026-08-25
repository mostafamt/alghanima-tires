import './App.css'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ValueStrip from "./components/ValueStrip/ValueStrip";
import Categories from "./components/Categories/Categories";
import BrandCards from "./components/BrandCards/BrandCards";
import Brands from "./components/Brands/Brands";
import OrderSteps from "./components/OrderSteps/OrderSteps";
import QuoteRequest from "./components/QuoteRequest/QuoteRequest";
import Coverage from "./components/Coverage/Coverage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ValueStrip />
      <BrandCards />
      <Brands />
      <Categories />
      <OrderSteps />
      <QuoteRequest />
      <Coverage />
      <Footer />
    </>
  );
}

export default App
