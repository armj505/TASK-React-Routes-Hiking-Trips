import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/TripsList" Component={TripsList} />
        <Route path="/TripDetail/:tripSlug" Component={TripDetail} />
      </Routes>
    </div>
  );
}

export default App;
