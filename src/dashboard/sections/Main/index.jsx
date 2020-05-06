import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Views
import { Home, UsersListing, UserForm } from '../../views'

const Main = () => {
	return (
		<main>
			<Switch>
				<Route path="/dashboard" exact>
					<Home />
				</Route>
				<Route path="/dashboard/users" exact>
					<UsersListing />
				</Route>
				<Route path="/dashboard/users/:name">
					<UserForm />
				</Route>
			</Switch>
		</main>
	)
}

export default Main
