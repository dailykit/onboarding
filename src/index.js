import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'
import './global.css'

const client = new ApolloClient({
	link: process.env.REACT_APP_DAILYCLOAK_URL,
	request: operation => {
		operation.setContext({
			headers: {
				'x-hasura-admin-secret': `${process.env.REACT_APP_ADMIN_SECRET}`
			}
		})
	}
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
