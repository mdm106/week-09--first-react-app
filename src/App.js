import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Stuff from './components/Stuff';
import FadeIn from './components/FadeIn';
import Clicked from './components/Clicked';
import Die from './components/tricksyState/Die';
import LameGame from './components/tricksyState/LameGame';
import TempConverter from './components/formComponents/TempConverter';
import Transform from './components/formComponents/Transform';
import People from './components/People';
import RollCall from './components/RollCall';
import Footer from './components/routingComponents/Footer';
import FourOhFour from './components/routingComponents/FourOhFour';
import Square from './components/Square';

function App() {
  let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
  return (
    <>
    <Router>
      <FadeIn time={"500ms"}>
        <Header>
          The Fantastic React App
        </Header>
        <Switch>
          <Route path="/all-challenges">
            <Stuff />
          </Route>
          <Route exact path="/clicked" component={ Clicked } />
          <Route exact path="/games">
            <Die />
            <LameGame />
          </Route>
          <Route exact path="/temperature-converter" component={ TempConverter } />
          <Route exact path="/people">
            <People names = {names}/>
            <RollCall names = {names}/>
          </Route>
          <Route exact path="/transforms">
            <Transform transform={x => x * x} />
            <Transform transform={x => x + 4} />
            <Transform transform={x => x * 10} />
          </Route>
          <Route path="/squares/:colour" render={ ({ match }) => (
              <Square colour={ match.params.colour } />
          )} />
          <Route component={FourOhFour}/>
        </Switch>
        <Footer />
      </FadeIn>
    </Router>
    </>
  );
}

export default App;
