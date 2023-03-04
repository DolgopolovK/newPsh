
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Skills2 } from "./components/Skills2";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { Problems } from "./components/Problems";


function App() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Skills2 />
      <Card />
      <Problems />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
