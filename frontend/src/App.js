import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pages } from "./pages/Pages";


function App() {
  return (
  <Router>
    <Route path="/" component={Home} exact />
    <Route path="/pages" component={Pages} exact />
  </Router>
);
}

export default App;
