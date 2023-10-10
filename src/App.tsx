import "./App.css";
import Advice from "./components/advice";
import Hero from "./components/hero";
import Interpretation from "./components/interpretation";
import Limitations from "./components/limitations";

function App() {
  return (
    <main className="xl:max-w-[1440px]">
      <Hero />
      <Interpretation />
      <Advice />
      <Limitations />
    </main>
  );
}

export default App;
