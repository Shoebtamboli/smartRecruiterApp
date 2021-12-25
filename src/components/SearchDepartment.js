import React from "react";
import PostingList from "./PostingList";
import axios from "axios";

class SearchDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.searchDepartment = this.searchDepartment.bind(this);
    this.searchCountry = this.searchCountry.bind(this);
    this.state = {
      searchDepartment: "Select Department",
      searchCountry: "Select Country",
      countryNames: [],
      postings: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings"
      )
      .then((res) => {
        this.setState({
          postings: res.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchDepartment(e) {
    this.setState({ searchDepartment: e.target.value });
  }

  searchCountry(e) {
    console.log(e.target.value);
    this.setState({ searchCountry: e.target.value });
  }

  render() {
    let departNames = this.state.postings.map((names) => {
      return names.department.label;
    });
    const uniqueSet = new Set(departNames);
    departNames = ["Select Department", ...uniqueSet];

    let countryNames = this.state.postings.map((names) => {
      return names.customField[1].valueLabel;
    });

    const uniqueSet1 = new Set(countryNames);
    countryNames = ["Select Country", ...uniqueSet1];

    // filter logic for department
    const filterbyDepartment = this.state.postings.filter((posting) => {
      return posting.department.label === this.state.searchDepartment;
    });
    // filter logic for country
    const filterbyCountry = this.state.postings.filter((posting) => {
      return posting.customField[1].valueLabel === this.state.searchCountry;
    });

    let filterPosts = [...filterbyDepartment, ...filterbyCountry];

    // when no filter is selected show all
    if (
      this.state.searchDepartment === "Select Department" &&
      this.state.searchCountry === "Select Country"
    ) {
      filterPosts = this.state.postings;
    } else if (
      this.state.searchDepartment !== "Select Department" &&
      this.state.searchCountry !== "Select Country"
    ) {
      filterPosts = filterbyDepartment.filter((element) =>
        filterbyCountry.includes(element)
      );
    }

    return (
      <form>
        <div className="form">
          {/* <label>Department</label> */}
          <select
            className="custom-select"
            value={this.props.value}
            onChange={this.searchDepartment}
          >
            {departNames.map((department, i) => (
              <option key={i} value={department}>
                {department}
              </option>
            ))}
          </select>

          {/* <label>Country</label> */}
          <select
            className="custom-select"
            value={this.props.value}
            onChange={this.searchCountry}
          >
            {countryNames.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <PostingList postings={filterPosts} />
      </form>
    );
  }
}
export default SearchDepartment;
