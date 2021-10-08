
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Users from './components/Users'
import AddUser from './components/AddUser'
import PageNotFound from './components/PageNotFound'
import Update from './components/Update'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App" >
      

      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/update/:id" component={Update} />
          <Route component={PageNotFound}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
