import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Shop from './components/Shop';
import Item from './components/Item';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Item} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
    
  );
}

const Home = () => {
  return (
    <h1>Home Page</h1>
  )
}

export default App;
