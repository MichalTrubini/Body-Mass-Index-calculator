import { useState } from "react";
import "./App.css";
import Advice from "./components/advice";
import Hero from "./components/hero";
import Interpretation from "./components/interpretation";
import Limitations from "./components/limitations";

function App() {

  const [bmi, setBMI] = useState<string>("20");

  return (
    <main className="xl:max-w-[1440px]">
      <Hero setBMI={setBMI}/>
      <Interpretation bmi={bmi}/>
      <Advice />
      <Limitations />
    </main>
  );
}

export default App;
