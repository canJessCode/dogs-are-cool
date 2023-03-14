import "./index.css";

import ButtonAppBar from "./components/AppBar";
import DogCard from "./components/DogCard";
import DogFacts from "./components/DogFacts";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <DogCard />
      <DogFacts />
    </div>
  );
}

export default App;
