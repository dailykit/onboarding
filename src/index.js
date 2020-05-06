import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { AuthProvider } from './context/auth'

import App from './App'
import './global.css'

const client = new ApolloClient({
	uri: process.env.REACT_APP_DAILYCLOAK_URL
})

ReactDOM.render(
	<AuthProvider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</AuthProvider>,
	document.getElementById('root')
)
