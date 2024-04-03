import "./App.css";
import Ending from "./components/Ending";
import GotoPlans from "./components/GotoPlans";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurService from "./components/OurService";
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <div className="bg-[#f7f7f8]">
      <div className="my_container">
        <Header />
        <GotoPlans />

        <main className="max-w-[1078px] mx-auto">
          <div className="border-[1px] border-primaryBorder w-full">
            <HeroSection />
            <OurService />
            <PricingSection />
            <Ending />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
