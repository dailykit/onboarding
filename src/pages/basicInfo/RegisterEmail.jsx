import React from 'react'

import { Wrapper, Field, Label, Form } from './Styles'

const RegisterEmail = () => (
	<Wrapper>
		<h4>Register with your work address</h4>
		<Form>
			<Field>
				<input type="text" id="email" required />
				<Label htmlFor="email">Email</Label>
			</Field>
			<Field>
				<input type="password" id="password" required />
				<Label htmlFor="password">Password</Label>
			</Field>
			<div>
				<input type="checkbox" id="terms" />
				<label htmlFor="terms" id="terms__label">
					I agree to{' '}
					<a
						href="/terms-and-conditions"
						aria-labelledby="read about our terms and conditions"
						title="Read about terms and conditions">
						terms & conditions,
					</a>{' '}
					<a
						href="/cancellation-policy"
						aria-labelledby="read about our cancellation policy"
						title="Read about our cancellation policy">
						cancellation policy
					</a>{' '}
					and{' '}
					<a
						href="/privacy-policy"
						aria-labelledby="read about privacy policy"
						title="Read about privacy policy">
						privacy policy.
					</a>
				</label>
			</div>
		</Form>
	</Wrapper>
)

export default RegisterEmail
