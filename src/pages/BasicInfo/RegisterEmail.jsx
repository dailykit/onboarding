import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'

// State
import { context } from '../../state'

import { FETCH_ADMINS } from '../../graphql'

// Styled Components
import { Footer, Main, Wrapper, Field, Label, Form, Error } from '../styles'

const RegisterEmail = () => {
	const [fetchAdmins, { loading, data }] = useLazyQuery(FETCH_ADMINS)
	const { state, dispatch } = React.useContext(context)
	const [form, setForm] = React.useState({
		email: state.user_data.email,
		password: state.user_data.password
	})
	const [isEmailUnique, setIsEmailUnique] = React.useState(true)

	const handleChange = e => {
		const { name, value } = e.target

		setForm(form => ({
			...form,
			[name]: value
		}))
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

	const validateEmail = async e => {
		await fetchAdmins({
			variables: {
				where: {
					email: {
						_eq: e.target.value
					}
				}
			}
		})
	}

	React.useEffect(() => {
		if (!loading && data) {
			if (data.organizationAdmins.length === 0) {
				setIsEmailUnique(true)
			} else {
				setIsEmailUnique(false)
			}
		}
	}, [loading, data])

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
								autoComplete="off"
								onChange={e => handleChange(e)}
								onBlur={e => validateEmail(e)}
							/>
							<Label htmlFor="email">Email</Label>
						</Field>
						{!isEmailUnique && (
							<Error>Email is not available!</Error>
						)}
						<Field>
							<input
								type="password"
								id="password"
								name="password"
								required
								value={form.password}
								autoComplete="off"
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="password">Password</Label>
						</Field>
					</Form>
				</div>
			</Main>
			<Footer>
				{form.email && form.password && isEmailUnique && (
					<button onClick={() => nextPage()}>Next</button>
				)}
			</Footer>
		</Wrapper>
	)
}

export default RegisterEmail
