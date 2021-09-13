import {useState} from "react"
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import "./app.scss"
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Menu  menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
     
    </div>
  );
}

export default App;
