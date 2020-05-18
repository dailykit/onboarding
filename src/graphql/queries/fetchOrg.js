import { gql } from 'apollo-boost'

export const FETCH_ORG = gql`
	query organizations($_eq: String!) {
		organizations(where: { organizationUrl: { _eq: $_eq } }) {
			id
		}
	}
`
