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
              <div className="col-sm-6 login-sec">
                <h2 className="text-left text-warning">Add Data Event</h2>
                <form className="mt-2" onSubmit={this.handleSubmit}>
                  <div class="form-group row">
                    <label htmlFor="title" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
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
                  </div>

                  <div class="form-group row">
                    <label htmlFor="title" class="col-sm-2 col-form-label">Location</label>
                    <div class="col-sm-10">
                      <input type="text" name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        className="form-control"
                        id="location"
                        placeholder="input location"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label htmlFor="title" class="col-sm-2 col-form-label">Participant</label>
                    <div class="col-sm-10">
                      <input type="text" name="participant"
                        value={this.state.participant}
                        onChange={this.handleChange}
                        className="form-control"
                        id="participant"
                        placeholder="input participant"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label htmlFor="title" class="col-sm-2 col-form-label">Date</label>
                    <div class="col-sm-10">
                      <input type="date" name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        className="form-control"
                        id="date"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label htmlFor="title" class="col-sm-2 col-form-label">Date</label>
                    <div class="col-sm-10">
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
                  </div>
                  <ImageUpload getURL={(image) => this.setState({ image })} />
                  <br></br>
                  <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
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
