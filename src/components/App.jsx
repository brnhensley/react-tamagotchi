import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: name,
      food: 10,
      poop: 0,
      numberOfPoops: 0,
      happiness: 55,
      energy: 10
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;