import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="page1">Page1</Link>
        <br />
        <Link to="page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Page1 />
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
