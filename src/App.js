import React, { Component } from 'react';
import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import Default from './pages/Default'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <main>
            <Navbar />
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes"  component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default} />
            </Switch>
            </main>
        </Router>
      </div>
    );
  }
}

export default App;
