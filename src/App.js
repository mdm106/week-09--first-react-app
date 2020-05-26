import React from 'react';
import './App.css';
import Stuff from './components/Stuff';
import Basket from './components/Basket';
import FadeIn from './components/FadeIn';
import Clicked from './components/Clicked';
import ToggleText from './components/ToggleText'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <FadeIn time={"500ms"}>
        <Stuff />
        <Basket items={
          [
            { name: "Coffee", price: 2.10 },
            { name: "Bananas", price: 3.50 },
            { name: "Milk", price: 250.65 },
            { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
          ]
        } />
        <Clicked />
        <ToggleText />
        <Counter />
      </FadeIn>
    </>
  );
}

export default App;
