import "./App.css";
import GolfHero from "./components/GolfHero";
import PopularCourses from "./components/PopularCourses";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GolfHero />
      <PopularCourses />
      <Footer />
    </div>
  );
}

export default App;
