import { useState } from "react";
import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import Pricing from "./Component/Pricing";
import Testi from "./Component/Testi";
import CalltoAction from "./Component/CalltoAction";
import FAQ from "./Component/FAQ";

function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Pricing />
      <Testi />
      <FAQ />
      <CalltoAction />
      <Footer />
    </>
  );
}

export default App;
