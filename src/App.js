import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Register from './pages/register'
import Layout from './components/Layout'

import RegisterEmail from './pages/basicInfo/RegisterEmail'
import AboutCompany from './pages/basicInfo/AboutCompany'
import AboutYourself from './pages/basicInfo/AboutYourself'

import Hosting from './pages/setupAccount/Hosting'

import Billing from './pages/setupAccount/Billing'

import { Context, state as initialState, reducers } from './state/index'
import OnboardSupport from './pages/setupAccount/OnboardSupport'
import CustomSupport from './pages/setupAccount/CustomSupport'

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
							<Context.Provider value={{ state, dispatch }}>
								<Layout>{StepToRender()}</Layout>
							</Context.Provider>
						)}
					/>
				</Switch>
			</Router>
		</>
	)
}

export default App
