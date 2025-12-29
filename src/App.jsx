import { useState } from "react";
import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import Pricing from "./Component/Pricing";
import Testi from "./Component/Testi";

function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Pricing />
      <Testi/>
      <Footer />
    </>
  );
}

export default App;
