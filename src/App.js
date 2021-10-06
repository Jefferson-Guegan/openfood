import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/product/:datacode" component={Product}/>
    </Switch>
  );
}

export default App;
