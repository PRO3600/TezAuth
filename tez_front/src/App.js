<<<<<<< HEAD
import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Mint from './components/mint/Mint.jsx';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Wallet from './components/wallet/Wallet.jsx'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact component={Mint} path="/mint" />
                    <Route exact component={Home} path="/" />
                    <Route exact component={Wallet} path ="/wallet" />
                </Switch>
            </Router>
        </div>
    );
};
=======
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';

class App extends React.Component {

  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

class Home extends React.Component {

  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class About  extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

class Topics extends React.Component {
  render( ) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <div className="secondary-route-place">
          <Route
            path={`${this.props.match.url}/:topicId`}
            component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>
                Please select a topic.
              </h3>
            }
            />
        </div>
      </div>
    );
  }
}

class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}
>>>>>>> 8a4bc4206c0fe721a6dd7d69a1c4bf90a5fe3237

export default App;
