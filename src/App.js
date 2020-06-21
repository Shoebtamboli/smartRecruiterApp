import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchDepartment from './components/SearchDepartment';
import { Switch, Route } from 'react-router-dom';
import PostingDetails from './components/PostingDetails';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Switch>
						<Route path="/" exact>
							<h1 className="header">SmartRecruiters Posting List App </h1>
							<SearchDepartment />
						</Route>
						<Route>
							<PostingDetails />
						</Route>
					</Switch>
					<hr />
				</div>
			</Router>
		);
	}
}

export default App;
