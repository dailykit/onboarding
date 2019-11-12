import React from 'react'

import { Footer, Main, Wrapper, Field, Label, Form, Error } from './Styles'
import { Context } from '../../state'

import validate from '../../validators/validate'

const RegisterEmail = () => {
	const { state, dispatch } = React.useContext(Context)
	const [form, setForm] = React.useState({
		email: state.user_data.email,
		password: state.user_data.password
	})
	const [errors, setErrors] = React.useState({ email: '', password: '' })

	const handleChange = e => {
		const { name, value } = e.target
		setForm(form => ({
			...form,
			[name]: value
		}))
		validate(value, name, 'form1', setErrors)
	}

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM1',
			payload: {
				...form
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	return (
		<Wrapper>
			<Main>
				<div>
					<h2>Register with your work address</h2>
					<Form>
						<Field>
							<input
								type="text"
								id="email"
								name="email"
								required
								value={form.email}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="email">Email</Label>
						</Field>
						{errors.email && <Error>{errors.email}</Error>}
						<Field>
							<input
								type="password"
								id="password"
								name="password"
								required
								value={form.password}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="password">Password</Label>
						</Field>
						{errors.password && <Error>{errors.password}</Error>}
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
