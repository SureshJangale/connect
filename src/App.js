import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import LogIn from './components/LogIn';

import {useStateValue} from './StateProvider';

import './App.css';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LogIn/>
        ) : (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Switch>
                  <Route path='/room/:roomId'>
                    <Chat />
                  </Route>
                  <Route path='/'>
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
