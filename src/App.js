import logo from "./logo.png";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateSurvey from "./components/create-survey";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <CreateSurvey />
          </Route>
          <Route path="/take">Take Survey</Route>
          <Route path="/">
            <Link to="/create">
              <Button className="survey-main-btn">Create Survey</Button>
            </Link>
            <Link to="/take">
              <Button className="survey-main-btn">Take Survey</Button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
