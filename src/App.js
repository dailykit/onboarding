import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Register from './pages/register'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,500i,700,700i,900&display=swap');
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
`

const App = () => (
	<Router>
		<GlobalStyle />
		<Switch>
			<Route exact path="/" component={Register} />
		</Switch>
	</Router>
)

export default App
