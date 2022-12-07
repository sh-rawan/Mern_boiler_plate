import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pages } from "./pages/Pages";


function App() {
  return (
  <HashRouter>
  <Router>
    <Route path="/" component={Home} exact />
    <Route path="/pages" component={Pages} exact />
  </Router>
  </HashRouter>
);
}

export default App;
