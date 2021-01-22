import { BrowserRouter , Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Restaurants from './components/Restaurants'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
     <Switch >
      <Route exact path='/' component = { Home} />
      <Route  path='/Login' component = { Login } />
      <Route path='/:restaurant_id' component = {Restaurants}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
