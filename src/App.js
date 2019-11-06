import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Register from './pages/register'
import Layout from './components/Layout'

import RegisterEmail from './pages/basicInfo/RegisterEmail'
import AboutCompany from './pages/basicInfo/AboutCompany'

import { Context, state as initialState, reducers } from './state/index'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,500i,700,700i,900&display=swap');
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
`

const App = () => {
	const [state, dispatch] = React.useReducer(reducers, initialState)
	return (
		<Context.Provider value={{ state, dispatch }}>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/" component={Register} />
					<Route
						exact
						path="/register"
						render={() => {
							switch (state.step) {
								case 0:
									return (
										<Layout>
											<RegisterEmail />
										</Layout>
									)
								case 1:
									return (
										<Layout>
											<AboutCompany />
										</Layout>
									)

								default:
									break
							}
						}}
					/>
				</Switch>
			</Router>
		</Context.Provider>
	)
}

export default App
