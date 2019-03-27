import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

export class Education extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };
  render() {
    const Education = this.props.education.map(exp => (
      <tr key={exp._id}>
        <td>{exp.school}</td>
        <td>{exp.degree}</td>
        <td>
          <Moment format="MM/YYYY">{exp.from}</Moment> <span> - </span>
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="MM/YYYY">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => this.onDeleteClick(exp._id)}
            // onClick={this.onDeleteClick.bind(exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Education Credentials Summary</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree or Certificate</th>
              <th>Years</th>
              <th />
            </tr>

            {Education}
          </thead>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
