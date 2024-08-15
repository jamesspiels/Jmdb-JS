import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/movies" element = {<Movies/>}></Route>
          <Route path = {`/movies/:id`} element = {<Details/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
