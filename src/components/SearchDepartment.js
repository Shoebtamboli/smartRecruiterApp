import React from 'react';
import PostingListItem from './PostingListItem';
import axios from 'axios';

class SearchDepartment extends React.Component {
	constructor(props) {
		super(props);
		this.searchDepartment = this.searchDepartment.bind(this);
		this.searchCountry = this.searchCountry.bind(this);
		this.state = {
			searchDepartment: 'All',
			searchCountry: 'All',
			countryNames: [],
			postings: []
		};
	}

	componentDidMount() {
		axios
			.get('https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings')
			.then((res) => {
				this.setState({
					postings: res.data.content
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
		let uniqueSet = new Set(departNames);
		departNames = [ 'All', ...uniqueSet ];

		let countryNames = this.state.postings.map((names) => {
			return names.customField[1].valueLabel;
		});

		let uniqueSet1 = new Set(countryNames);
		countryNames = [ 'All', ...uniqueSet1 ];

		// filter logic for department
		let filterbyDepartment = this.state.postings.filter((posting) => {
			return posting.department.label === this.state.searchDepartment;
		});
		// filter logic for country
		let filterbyCountry = this.state.postings.filter((posting) => {
			return posting.customField[1].valueLabel === this.state.searchCountry;
		});

		let filterPosts = [ ...filterbyDepartment, ...filterbyCountry ];

		// when no filter is selected show all
		if (this.state.searchDepartment === 'All' && this.state.searchCountry === 'All') {
			filterPosts = this.state.postings;
		} else if (this.state.searchDepartment !== 'All' && this.state.searchCountry !== 'All') {
			filterPosts = filterbyDepartment.filter((element) => filterbyCountry.includes(element));
		}

		return (
			<div>
				<br />
				<div className="drop-down">
					<label>
						Department:
						<select value={this.props.value} onChange={this.searchDepartment}>
							{departNames.map((department, i) => (
								<option key={i} value={department}>
									{department}
								</option>
							))}
						</select>
					</label>
					<span className="tab" />
					<label>
						Country
						<select value={this.props.value} onChange={this.searchCountry}>
							{countryNames.map((country, i) => (
								<option key={i} value={country}>
									{country}
								</option>
							))}
						</select>
					</label>
				</div>

				<div className="post-list">
					{filterPosts.map((posting) => <PostingListItem key={posting.id} posting={posting} />)}
				</div>
			</div>
		);
	}
}
export default SearchDepartment;
