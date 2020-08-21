import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import LoginPage from './Login';
import Body from './body/Body';

function App() {

  return (
    <Container>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/login" component={() => <LoginPage />} />
            <Route exact path="/*" component={() => <Body />} />
          </Switch>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;
