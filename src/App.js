import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

// State
import { context, state as initialState, reducers } from './state'

// Components
import { Layout } from './components'

// Pages
import Register from './pages/Register'
import {
	RegisterEmail,
	AboutCompany,
	AboutYourself,
	Hosting,
	OnboardSupport,
	CustomSupport,
	Billing
} from './pages'

// Global Styles
const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i&display=swap');
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Rubik', sans-serif;
	}
`

const App = () => {
	const [state, dispatch] = React.useReducer(reducers, initialState)
	const StepToRender = () => {
		switch (state.step) {
			case 0:
				return <RegisterEmail />
			case 1:
				return <AboutCompany />
			case 2:
				return <AboutYourself />
			case 3:
				return <Hosting />
			case 4:
				return <OnboardSupport />
			case 5:
				return <CustomSupport />
			case 6:
				return <Billing />
			default:
				return <RegisterEmail />
		}
	}
	return (
		<>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/" component={Register} />
					<Route
						exact
						path="/register"
						render={() => (
							<context.Provider value={{ state, dispatch }}>
								<Layout>{StepToRender()}</Layout>
							</context.Provider>
						)}
					/>
				</Switch>
			</Router>
		</>
	)
}

export default App
