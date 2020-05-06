import { gql } from 'apollo-boost'

export const FETCH_ADMINS = gql`
	query organizationAdmins($where: organization_organizationAdmin_bool_exp) {
		organizationAdmins(where: $where) {
			email
		}
	}
`
