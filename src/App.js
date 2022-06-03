import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
function App() {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-dark-mode h-screen font-primary">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
export default App;
