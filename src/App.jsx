import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import NumberCounter from "./components/NumberCounter/NumberCounter";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
    </div>
  );
};

export default App;
