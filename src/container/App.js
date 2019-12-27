import React, { useState } from "react";
import Persons from "../components/Persons/Persons";
import classess from "./App.module.css";
import Cockpit from "../components/cockpit/cockpit";

const App = props => {
  const [personState, setpersonState] = useState({
    person: [
      { id: "asdas", name: "Tanvesh01", age: 18 },
      { id: "ysyrh", name: "yoyoHoney", age: 35 },
      { id: "ysysy", name: "Tanvesh04", age: 10 }
    ]
  });

  const [toogleState, setToggleState] = useState({
    showPerson: false
  });
  // eslint-disable-next-line
  const [OtherState, setOtherState] = useState("iphone");

  const nameChangeHandler = (event, id) => {
    const personIndex = personState.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...personState.person[personIndex]
    };
    person.name = event.target.value;
    console.log(event);
    const Person = [...personState.person];
    Person[personIndex] = person;

    setpersonState({
      person: Person
    });
  };

  const deleteNameHandler = personIndex => {
    const person = personState.person;
    person.splice(personIndex, 1);
    setpersonState({ person: person });
  };

  const toogleNames = () => {
    if (toogleState.showPerson === true) {
      setToggleState({ showPerson: false });
    } else {
      setToggleState({ showPerson: true });
    }
  };

  let persons = null;

  if (toogleState.showPerson) {
    persons = (
      <div>
        <Persons
          click={deleteNameHandler}
          change={nameChangeHandler}
          person={personState.person}
        />
      </div>
    );
  }

  return (
    <div className={classess.App}>
      <Cockpit personState={personState} toogleNames={toogleNames} />
      {persons}
      <p className="App">{OtherState}</p>
    </div>
  );
};

export default App;
