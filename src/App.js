import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";


const App = props => {
  const [personState, setpersonState] = useState({
    person: [
      { name: "Tanvesh01", age: 18 },
      { name: "yoyoHoney!!! ", age: 35 },
      { name: "Tanvesh012", age: 185 },
    ]
  });

  const [toogleState, setToggleState] = useState({
    showPerson: false
  })

  const [OtherState, setOtherState] = useState("iphone");

  
  const nameChangeHandler = (event) => {
    setpersonState({
      person: [
        { name: "Tanvesh", age: 50 },
        { name: event.target.value, age: 39 }
      ]
    });
  };

  const deleteNameHandler = (personIndex) => {
    const person = personState.person;
    person.splice(personIndex, 1);
    setpersonState({person:person});
  }

  const toogleNames = () => {
    if (toogleState.showPerson === true) {
      setToggleState({showPerson: false})
    } else {
      setToggleState({showPerson: true})
    }
  }

  let persons = null;

  if(toogleState.showPerson){
    persons =  (
      <div>
        {personState.person.map((person, index) => {
          return (
          <Person 
          name = {person.name}
          age = {person.age}
          click = {() => deleteNameHandler(index)}
          />
          )
        })}  
      </div>
    )
  }  

  return (
    <div className="App">
      <p>this is it!</p>
      <button onClick={toogleNames}>
        Switch this
      </button>
      {persons}
      {/* { toogleState.showPerson === true ? 
      null
      } */}
      <p className="App">{OtherState}</p>
    </div>
  );
};

export default App;
