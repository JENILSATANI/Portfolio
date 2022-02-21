
import React from 'react';
import './App.css';
import './component/Website.css'
import './component/Home.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './component/About.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Website from './component/Website';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services'


function App() {
  return (
        <div className="App">
    <Router>
      <Website/>

      <Switch>
       <Route exact path='/home' component={Home}/>
       <Route exact path='/about' component={About}/>
       <Route exact path='/services' component={Services}/>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
