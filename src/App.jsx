import "./App.css";
import GotoPlans from "./components/GotoPlans";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurService from "./components/OurService";

function App() {
  return (
    <div className="bg-[#f7f7f8]">
      <div className="my_container">
        <Header />
        <GotoPlans />

        <main>
          <div className="border-[1px] border-primaryBorder">
            <HeroSection />
            <OurService />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
