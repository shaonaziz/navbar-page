import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Welcome/>
     
      </div>
    </>
  );
}

export default App;
