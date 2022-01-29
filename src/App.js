import react from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Views imports
 */
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
