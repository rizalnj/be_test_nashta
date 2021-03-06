import React, { Component } from "react";
// import ReactDOM from "react-dom";


export default class Pgination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pageNum = []
    const maxPage = Math.ceil(this.props.total / this.props.limit)
    for (let i = 0; i < maxPage; i++) {
      pageNum.push(<li key={i} onClick={() => this.props.updatePage(i + 1)} className="page-item">
        <a className="page-link" href="#">{i + 1}</a>
      </li>)
    }

    return (
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-right">
            <li className={`page-item ${this.props.page - 1 ? '' : 'disabled'}`} onClick={() => this.props.page - 1 ? this.props.updatePage(this.props.page - 1) : console.log()}>
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            {pageNum}
            <li className={`page-item ${this.props.page != maxPage ? '' : 'disabled'}`} onClick={() => this.props.page != maxPage ? this.props.updatePage(this.props.page + 1) : console.log()}>
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

