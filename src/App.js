import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home_page/Home";
import Calendar from "./pages/calendar_page/Calendar";
import Enterprises from "./pages/enterprises_page/Enterprises";
import Contact from "./pages/contact_page/Contact";
import HamburgerButton from "./components/hamburguer_button/HamburguerButton";

function App() {
  return (
    <div>
      <HamburgerButton/>
      <Navbar />
      <Home />
      <Calendar />
      <Enterprises />
      <Contact />
    </div>
    
  );
}

export default App;
