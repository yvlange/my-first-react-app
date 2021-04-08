import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main className="Main">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
