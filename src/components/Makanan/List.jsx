import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// Lazy load komponen
const Home = React.lazy(() => import("./components/Home"));
const MakananList = React.lazy(() => import("./components/Makanan/List"));
c

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dokters">
                  Makanan
                </NavLink>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-3">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/makanan" element={<MakananList />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;