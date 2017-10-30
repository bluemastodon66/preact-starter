import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Header from './header';
import Home from './home';
import Profile from './profile';



export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 * comment to name module name !!!!! important
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="訪客" />
					<Profile path="/profile/:user" />
					<AsyncRoute path="/test" getComponent={ () => import(/* webpackChunkName: "dynamic" */'./Dynamic').then(module => module.default) }
					loading={ () => <div>loading...</div> } />


				</Router>
			</div>
		);
	}
}
