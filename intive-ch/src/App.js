import React from 'react';
import {DataProvider} from './context/DataContext.js';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import UserCard from './components/UserCard.js';
import UserDetail from './components/UserDetail.js';
import BackButton from './components/BackButton.js';

function App() {
  return (<div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">

    <DataProvider>
      <Router>
      <BackButton />
        <Switch>
          <Route path='/detail/:id'>
          <UserDetail />
          </Route>
          <Route path='/'>
            <UserCard />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  </div>
  );
}

export default App;