import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import events from "../reducers/events";

export default function Item(props) {
  return (
    <div className="card-deck" >
      <div className="col-md-3">
        <div className="card text-white bg-dark mb-3" style={{ width: " 15rem" }}>
          <Link to="/dashboard">
            <img src={props.events && props.events.image || "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <small>
              <i className="fa fa-map-marker text-danger mr-1" aria-hidden="true"></i>
              {props.events && props.events.location}
            </small>
            <h5 className="card-title">{props.events && props.events.title}</h5>

            <small>
              <Moment format="D MMMM YYYY" withTitle>
                {props.event && props.events.date}
              </Moment>
            </small>
          </div>
          <ul className="list-group list-group-flush" style={{ color: '#000' }}>
            <div className="list-group list-group-flush">
              <div className="list-group-item">
                {props.events && props.events.participant}
              </div>
            </div>
          </ul>
          <li className="list-group-item" style={{ color: '#000' }}>"{props.events && props.events.note}"</li>
        </div>
      </div>
    </div>
  );
}
