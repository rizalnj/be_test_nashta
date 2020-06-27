import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import List from "../containers/List";


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="bg-light">
          <div className="jumbotron mainBG-txt mr0">
            <div className="container">
              <h1 className="text-warning">NASHTA Event List</h1>
              <h3></h3>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="col-sm-12">
            <List />
            <br></br>
          </div>
        </div>
      </Fragment>
    )
  }
}