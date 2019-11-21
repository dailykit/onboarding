import React from 'react'

// Style Components
import { Wrapper } from './styles'

// Assets
import { ConfirmEmailIcon } from '../../assets/svgs'

const ConfirmEmail = () => (
	<Wrapper>
		<ConfirmEmailIcon />
		<h2>Confirm your email</h2>
		<p>
			Your account has been successfully registered. To complete the
			process please check your email for a validation request.
		</p>
	</Wrapper>
)

export default ConfirmEmail
