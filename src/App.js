import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";


const App = props => {
  const [personState, setpersonState] = useState({
    person: [
      { id:'asdas' , name: "Tanvesh01", age: 18 },
      { id:'ysyrh', name: "yoyoHoney!!! ", age: 35 },
      { id:'ysysy', name: "Tanvesh012", age: 185 },
    ]
  });
  
  const [toogleState, setToggleState] = useState({
    showPerson: false
  })

  const [OtherState, setOtherState] = useState("iphone");

  
  const nameChangeHandler = (event, id) => {
    const personIndex = personState.person.findIndex(p =>{
      return p.id === id;
    })
    const person = {
      ...personState.person[personIndex]
    }
    person.name = event.target.value;
    const Person = [
      ...personState.person
    ]
    Person[personIndex] = person;

    setpersonState({
      person: Person
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
          key = {person.id}
          name = {person.name}
          age = {person.age}
          click = {() => deleteNameHandler(index)}
          changeName = {(event) => nameChangeHandler(event, person.id)} 
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
