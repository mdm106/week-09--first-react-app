import React from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from './Basket';
import ToggleText from './ToggleText'
import Counter from './Counter'
import StepCounter from './StepCounter'
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import Colours from './tricksyState/Colours';
import Die from './tricksyState/Die';
import LameGame from './tricksyState/LameGame';
import Length from './formComponents/Length';
import PasswordStrength from './formComponents/PasswordStrength';
import TempConverter from './formComponents/TempConverter';
import List from './formComponents/List';
import Adder from './formComponents/Adder';
import Transform from './formComponents/Transform';
import Progress from "./preBuilt/Progress";

const Stuff = ({ square }) => (
    <>
        <Header />
        <Paragraph>
            Hello Hello Hello
        </Paragraph>
        {square ? <Square /> : null}
        <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
        <Basket items={
          [
            { name: "Coffee", price: 2.10 },
            { name: "Bananas", price: 3.50 },
            { name: "Milk", price: 250.65 },
            { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
          ]
        } />
        <ToggleText />
        <Counter />
        <StepCounter />
        <CatchMeIfYouCan />
        <RollCall />
        <Colours />
        <Die />
        <LameGame aim={5}/>
        <Length />
        <PasswordStrength />
        <TempConverter />
        <List />
        <Adder />
        <Transform transform={x => x * x} />
        <Transform transform={x => x + 4} />
        <Transform transform={x => x * 10} />
        <Progress />
    </>
);

Stuff.defaultProps = {
    square: true
};

export default Stuff;