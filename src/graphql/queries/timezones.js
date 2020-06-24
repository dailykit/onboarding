import gql from 'graphql-tag'

export const TIMEZONES = gql`
	query timezones($title: String!) {
		timezones: master_timezone(where: { title: { _ilike: $title } }) {
			title
			value
		}
	}
`
