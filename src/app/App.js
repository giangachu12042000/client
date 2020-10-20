import React from 'react';
import {Switch, BrowserRouter as Router,Route} from 'react-router-dom'
import GetRoute from './getRoute'
import routes from './routes'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => <GetRoute key={i} {...route} />)}
             <Route />
        </Switch>
      </Router>
    )
  }
}

export default App