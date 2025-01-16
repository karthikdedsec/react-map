import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
