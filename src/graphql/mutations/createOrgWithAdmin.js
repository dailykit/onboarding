import { gql } from 'apollo-boost'

export const CREATE_ORG_WITH_ADMIN = gql`
	mutation createOrganization(
		$organizationName: String
		$organizationUrl: String
		$timeZone: String
		$organizationAdmins: organization_organizationAdmin_arr_rel_insert_input
	) {
		createOrganization(
			object: {
				organizationName: $organizationName
				organizationUrl: $organizationUrl
				organizationAdmins: $organizationAdmins
			}
		) {
			organizationName
		}
	}
`
