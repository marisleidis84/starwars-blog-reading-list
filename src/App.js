import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import Characters from './views/characters';
import Home from './views/home';
import NotFound from './views/notfound';
import Planets from './views/planets';
import Starships from './views/starships';

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container-fluid app'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/starships" component={Starships} />
        <Route component={NotFound} />
      </Switch>
        </div>
    </BrowserRouter>
  )
}

export default injectContext(App);
