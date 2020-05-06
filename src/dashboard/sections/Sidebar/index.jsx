import React from 'react'

// State
import { useTabs } from '../../context/tabs'

// Styled
import {
	StyledSidebar,
	StyledList,
	StyledListItem,
	StyledHeading
} from './styled'

const Sidebar = ({ visible, toggleSidebar }) => {
	const { addTab } = useTabs()
	return (
		<StyledSidebar visible={visible} onClick={() => toggleSidebar(false)}>
			<StyledHeading>Listings</StyledHeading>
			<StyledList>
				<StyledListItem
					onClick={() => addTab('Users', '/dashboard/users')}>
					Users
				</StyledListItem>
			</StyledList>
		</StyledSidebar>
	)
}

export default Sidebar
