import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Markup } from "interweave";

class PostingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDescription: [],
      jqualifications: [],
      name: [],
      city: [],
      country: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings" +
          window.location.pathname
      )
      .then((response) => {
        this.setState({
          jobDescription: response.data.jobAd.sections.jobDescription,
          jqualifications: response.data.jobAd.sections.qualifications,
          name: response.data.name,
          country: response.data.customField[1],
          city: response.data.location,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="details">
        <Link to="/smartRecruiterApp">back to list</Link>
        <div className="post-list-details">
          <h4>{this.state.name}</h4>
          <h6>
            {this.state.city.city}
            {","} {this.state.country.valueLabel}
          </h6>
        </div>
        <div className="post-list-details">
          <h4>{this.state.jobDescription.title}</h4>
          <Markup content={this.state.jobDescription.text} />
        </div>
        <div className="post-list-details">
          <h4>{this.state.jqualifications.title}</h4>
          <Markup content={this.state.jqualifications.text} />
        </div>
      </div>
    );
  }
}

export default PostingDetails;
