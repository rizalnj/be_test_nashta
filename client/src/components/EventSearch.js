import React from 'react'

export default class EventSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    this.props.updateSearch(event.target.value);
  }

  handleSearchAction = () => {
    this.props.actionSearch(this.props.search);

  }

  render() {
    return (
      <div className="col-lg-4" style={{ float: 'right' }}>
        <div class="input-group mb-3">
          {/* <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" type="button" onClick={this.handleSearchAction}>Search</button>
          </div> */}
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
            onChange={this.handleSearchChange}
            value={this.props.search}
          />
        </div>
      </div>
    )
  }
}