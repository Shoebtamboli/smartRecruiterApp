import React from 'react';
//import PostingListItem from './PostingListItem';

class SearchCountry extends React.Component {
	constructor(props) {
		super(props);
		this.searchCountry = this.searchCountry.bind(this);
		this.state = {
			searchCountry: ''
		};
	}

	searchCountry(e) {
		console.log(e.target.value);
		this.setState({ searchCountry: e.target.value });
	}

	render() {
		let countryNames = this.props.postings.map((names) => {
			return names.location.country;
		});

		let uniqueSet = new Set(countryNames);
		countryNames = [ 'All', ...uniqueSet ];

		let filteredCountry = this.props.postings.filter((posting) => {
			return posting.location.country.toLowerCase().includes('de');
		});

		return (
			<div className="drop-down">
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

				<div className="post-list">
					{filteredCountry.map((posting) => (
						<li key={posting.id} className="list-group-item">
							<h5>{posting.name}</h5>
							<h6>
								{posting.location.city} {posting.location.region}
							</h6>
						</li>
					))}
				</div>
			</div>
		);
	}
}

export default SearchCountry;
