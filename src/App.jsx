import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
    </div>
  );
};

export default App;
