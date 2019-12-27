import React from "react";
import classess from "../../container/App.module.css";

const cockpit = props => {
  const classes = [];
  if (props.personState.person.length <= 2) {
    classes.push(classess.red);
  }
  if (props.personState.person.length <= 1) {
    classes.push(classess.bold);
  }
  return (
    <div>
      <p className={classes.join(" ")}>this is it!</p>
      <button className={classess.button} onClick={props.toogleNames}>
        Switch this
      </button>
    </div>
  );
};

export default cockpit;
