import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// State
import { context as Context, state as initialState, reducers } from './state'

// Components
import { Layout } from './components'

// Pages
import {
	Register,
	SubDomain,
	Installation,
	RegisterEmail,
	AboutCompany,
	AboutYourself,
	Hosting,
	OnboardSupport,
	CustomSupport,
	Billing,
	ConfirmEmail
} from './pages'

const theme = {
	basePt: 8,
	borderRadius: {
		sm: 2,
		md: 4,
		lg: 8
	},
	colors: {
		primary: '#04A777',
		darkText: '#555B6E',
		grayText: '#888D9D',
		active: '#00A7E1',
		gray1: '#C3C6CE'
	}
}

const App = () => {
	const [state, dispatch] = React.useReducer(reducers, initialState)
	const StepToRender = props => {
		switch (state.step) {
			case 1:
				return <RegisterEmail />
			case 2:
				return <AboutCompany />
			case 3:
				return <AboutYourself />
			case 4:
				return <Hosting />
			case 5:
				return <OnboardSupport />
			case 6:
				return <CustomSupport />
			case 7:
				return <Billing {...props} />
			default:
				return <RegisterEmail />
		}
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Context.Provider value={{ state, dispatch }}>
					<Router>
						<Switch>
							<Route exact path="/" component={Register} />
							<Route
								exact
								path="/register"
								render={props => (
									<Layout {...props}>
										{StepToRender(props)}
									</Layout>
								)}
							/>
							<Route
								exact
								path="/subdomain"
								component={SubDomain}
							/>
							<Route
								exact
								path="/confirm-email"
								component={ConfirmEmail}
							/>
							<Route
								exact
								path="/installation"
								component={Installation}
							/>
						</Switch>
					</Router>
				</Context.Provider>
			</ThemeProvider>
		</>
	)
}

export default App
