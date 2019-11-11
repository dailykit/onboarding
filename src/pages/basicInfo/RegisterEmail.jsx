import React from 'react'

import { Footer, Main, Wrapper, Field, Label, Form } from './Styles'
import { Context } from '../../state'

const RegisterEmail = () => {
	const { state, dispatch } = React.useContext(Context)
	const [email, setEmail] = React.useState(state.user_data.email)
	const [password, setPassword] = React.useState(state.user_data.email)

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM1',
			payload: {
				email,
				password
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	return (
		<Wrapper>
			<Main>
				<div>
					<h4>Register with your work address</h4>
					<Form>
						<Field>
							<input
								type="text"
								id="email"
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Label htmlFor="email">Email</Label>
						</Field>
						<Field>
							<input
								type="password"
								id="password"
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
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
				</div>
			</Main>
			<Footer>
				<button onClick={() => prevPage()}>Back</button>
				<button
					onClick={() => nextPage()}
					style={{
						background: '#04a777'
					}}>
					Next
				</button>
			</Footer>
		</Wrapper>
	)
}

export default RegisterEmail
