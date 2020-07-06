import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchDepartment from './components/SearchDepartment';
import { Switch, Route } from 'react-router-dom';
import PostingDetails from './components/PostingDetails';

import { Container, Jumbotron } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Container>
				<Router>
					<div className="container">
						<Switch>
							<Route path="/" exact>
								<h1 className="header">SmartRecruiters Posting List App </h1>
								<SearchDepartment />
							</Route>

							<Jumbotron>
								<Route>
									<PostingDetails />
								</Route>
							</Jumbotron>
						</Switch>
					</div>
				</Router>
			</Container>
		);
	}
}

export default App;
