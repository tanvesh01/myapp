import React from "react";
import classes from "../../../container/App.module.css";

const Person = props => {
  console.log(props.click);
  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        hii this is {props.name} and my age is {props.age}
      </p>
      <input type="text" onChange={props.changeName} />
    </div>
  );
};

export default Person;
