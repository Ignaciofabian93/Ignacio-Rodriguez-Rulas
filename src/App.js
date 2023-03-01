import "./App.css";

import { About, Skills, Contact, Home, Projects } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
