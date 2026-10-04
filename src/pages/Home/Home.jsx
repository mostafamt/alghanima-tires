import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ValueStrip from "../../components/ValueStrip/ValueStrip";
import Categories from "../../components/Categories/Categories";
import BrandCards from "../../components/BrandCards/BrandCards";
import Brands from "../../components/Brands/Brands";
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import QuoteRequest from "../../components/QuoteRequest/QuoteRequest";
import Coverage from "../../components/Coverage/Coverage";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const { hash } = useLocation();

  // arriving from another page with /#section
  useEffect(() => {
    if (hash) scrollToSection(hash.slice(1));
  }, [hash]);

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
};

export default Home;
