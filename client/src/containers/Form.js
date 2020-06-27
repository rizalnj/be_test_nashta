import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { postEvent } from "../actions";
import { connect } from "react-redux";
import history from "../history";
import ImageUpload from "../components/ImageUpload"

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: "",
      participant: "",
      note: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      title,
      location,
      date,
      participant,
      note,
      image
    } = this.state
    this.props.postEvent({
      title,
      location,
      date,
      participant,
      note,
      image
    });
    this.props.history.push("/")
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="login-block" method="post">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 login-sec">
                <h2 className="text-left text-warning">+ Add Event</h2>
                <form className="mt-2" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      className="form-control"
                      id="title"
                      placeholder="input title"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location"
                      value={this.state.location}
                      onChange={this.handleChange}
                      className="form-control"
                      id="location"
                      placeholder="input location"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="participant">Participant</label>
                    <input type="text" name="participant"
                      value={this.state.participant}
                      onChange={this.handleChange}
                      className="form-control"
                      id="participant"
                      placeholder="input participant"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                      className="form-control"
                      id="date"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="note">Note</label>
                    <textarea
                      className="form-control"
                      name="note"
                      value={this.state.note}
                      onChange={this.handleChange}
                      id="note"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <ImageUpload getURL={(image) => this.setState({ image })} />
                  <br></br>
                  <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
              </div>
              <div className="col-md-8 banner-sec">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="https://image.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        );
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postEvent: (data) => dispatch(postEvent(data)),
});

export default connect(null, mapDispatchToProps)(AddEvent);
