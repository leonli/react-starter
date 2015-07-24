import React, {Component} from "react";
import {photo} from "../../images";

require('./HelloWorld.styl');

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1 className="aClass">Hello World!</h1>
        <img src={photo} width="500px"/>
      </div>
    );
  }
}
