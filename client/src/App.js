import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

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
				return <Billing {...props} />
			default:
				return <RegisterEmail />
		}
	}
	return (
		<>
			<GlobalStyle />
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
