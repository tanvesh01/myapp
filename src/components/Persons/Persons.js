import React from "react";
import Person from "./Person/Person";

const persons = props => {
  return props.person.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.click(index)}
        changeName={event => props.change(event, person.id)}
      />
    );
  });
};

export default persons;
