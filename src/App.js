import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Stuff from './components/Stuff';
import FadeIn from './components/FadeIn';
import Clicked from './components/Clicked';
import Die from './components/tricksyState/Die';
import LameGame from './components/tricksyState/LameGame';
import TempConverter from './components/formComponents/TempConverter';
import People from './components/People';
import RollCall from './components/RollCall';



function App() {
  let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
  return (
    <>
    <Router>
      <FadeIn time={"500ms"}>
        <Header>
          The Fantastic React App
        </Header>
        <Route path="/main-stuff">
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
      </FadeIn>
    </Router>
    </>
  );
}

export default App;
