import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Experience from "./components/experience";
import Availability from "./components/availability";
import Skillset from "./components/skillset";
import Footer from "./components/footer";
import Testimony from "./components/testimony";
import Contact from "./components/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <Experience />
        <Availability />
        <Skillset />
        <Testimony />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
