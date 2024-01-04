import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F0F1F1]">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Container />
      </div>
    </div>
  );
}

export default App;
