import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { NewWorker } from './pages/NewWorker';
import { RedPencil } from './pages/RedPencil';
import { Registry } from './pages/Registry';

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <div className='container-fluid pt-4'>
          <Switch>
            <Route path={'/'} exact component={Registry} />
            <Route path={'/create'} component={NewWorker} />
            <Route path={'/red-pencil'} component={RedPencil} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
