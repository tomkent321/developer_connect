import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import Moment from "react-moment";

export class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props.profile;

    //display the experience list
    let expList;

    if (isEmpty(experience)) {
      expList = <p>No experience listed</p>;
    } else {
      expList = experience.map((exp, index) => (
        <li className="list-group-item" key={index}>
          <h4>{exp.company}</h4>
          <p>
            <Moment format="MM/YYYY">{exp.from}</Moment> <span> - </span>
            {exp.to === null ? (
              " Now"
            ) : (
              <Moment format="MM/YYYY">{exp.to}</Moment>
            )}
          </p>
          <p>
            <strong>Position:</strong> {exp.title}
          </p>
          <p>
            <strong>Description:</strong> {exp.description}
          </p>
        </li>
      ));
    }
    //Display the education list

    let eduList;

    if (isEmpty(education)) {
      eduList = <p>No education listed</p>;
    } else {
      eduList = education.map((edu, index) => (
        <li className="list-group-item" key={index}>
          <h4>{edu.school}</h4>
          <p>
            <Moment format="MM/YYYY">{edu.from}</Moment> <span> - </span>
            {edu.to === null ? (
              " Now"
            ) : (
              <Moment format="MM/YYYY">{edu.to}</Moment>
            )}
          </p>
          <p>
            <strong>Degree: </strong>
            {edu.degree}
          </p>
          <p>
            <strong>Field Of Study: </strong>
            {edu.fieldofstudy}
          </p>

          <p>
            <strong>Description:</strong> {edu.description}
          </p>
        </li>
      ));
    }

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          <ul className="list-group">{expList}</ul>
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          <ul className="list-group">{eduList}</ul>
        </div>
      </div>
    );
  }
}

ProfileCreds.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileCreds;
