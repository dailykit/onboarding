import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'

// State
import { context } from '../../state'

// Styled Components
import {
	Footer,
	Main,
	Wrapper,
	Field,
	Label,
	Form,
	Domain,
	Error
} from '../styles'

import { FETCH_ORG } from '../../graphql'

const AboutCompany = () => {
	const { state, dispatch } = React.useContext(context)
	const [fetchOrg, { loading, data }] = useLazyQuery(FETCH_ORG)
	const [form, setForm] = React.useState({
		company: state.user_data.company,
		subdomain: state.user_data.subdomain,
		employeesCount: state.user_data.employeesCount
	})

	const [errors, setErrors] = React.useState({
		isValid: true,
		isUnique: true
	})

	const handleChange = e => {
		const { name, value } = e.target
		setForm(form => ({
			...form,
			[name]: value
		}))
	}

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM2',
			payload: {
				...form
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}

	const prevPage = () => {
		dispatch({
			type: 'SET_FORM2',
			payload: {
				...form
			}
		})
		dispatch({ type: 'PREV_PAGE' })
	}

	React.useEffect(() => {
		if (!loading && data) {
			if (data.organizations.length === 0) {
				setErrors(errors => ({ ...errors, isUnique: true }))
			} else {
				setErrors(errors => ({ ...errors, isUnique: false }))
			}
		}
	}, [loading, data])

	const validateSubdomain = e => {
		const regex = new RegExp(/^[a-z0-9-]{2,40}$/)
		if (regex.test(e.target.value)) {
			setErrors({ ...errors, isValid: true })
		} else {
			setErrors({ ...errors, isValid: false })
		}
		fetchOrg({ variables: { _eq: e.target.value } })
	}

	return (
		<Wrapper>
			<Main>
				<div>
					<h2>Tell us about your company</h2>
					<Form>
						<Field>
							<input
								type="text"
								id="company"
								name="company"
								required
								value={form.company}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="company">Company Name</Label>
						</Field>
						<Field>
							<input
								required
								type="text"
								id="subdomain"
								name="subdomain"
								value={form.subdomain}
								onBlur={e => validateSubdomain(e)}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="subdomain">
								Choose a Subdomain
							</Label>
						</Field>
						<Domain>{form.subdomain}.dailykit.org</Domain>
						{!errors.isUnique && (
							<Error>Subdomain is not available!</Error>
						)}
						{!errors.isValid && (
							<Error>Entered value is not valid!</Error>
						)}
						<Field>
							<select
								name="employeesCount"
								id="employeesCount"
								value={form.employeesCount}
								onChange={e => handleChange(e)}>
								<option value="5">5-10</option>
								<option value="10">10-20</option>
								<option value="20">20-50</option>
								<option value="50">50-100</option>
								<option value="100">100-500</option>
								<option value="500">500+</option>
							</select>
							<Label htmlFor="employeesCount">
								No. of Employees
							</Label>
						</Field>
					</Form>
				</div>
			</Main>
			<Footer>
				<button onClick={() => prevPage()}>Back</button>
				<button onClick={() => nextPage()}>Next</button>
			</Footer>
		</Wrapper>
	)
}

export default AboutCompany
