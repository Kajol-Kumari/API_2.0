import React, { Component } from "react";

class UserDetail extends Component {
  render() {
    return (
      <div className="card">
        <a className="card-link" href="https://www.postman.com/student-program/"
          target="_blank"
          rel="noopener noreferrer">
          <code>
            <div className="card-content">
              <span className="card-heading">
                {this.props.details.name}<br />
              </span>
              Description - {this.props.details.description} <br />
              A Message For World - {this.props.details.anything_for_world}
            </div>
          </code>
        </a>
      </div>
    )
  }
}

export default UserDetail;
