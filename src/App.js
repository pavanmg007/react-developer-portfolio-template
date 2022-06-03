import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-dark-mode h-screen">
        <Header />
        <Home />
      </div>
    </div>
  );
}
export default App;
