import React from 'react'

// State
import { context } from '../../state'

// Styled Components
import { Footer, Main, Wrapper, Field, Label, Form, Error } from '../styles'

// Utils
import validate from '../../validators/validate'

const AboutCompany = () => {
	const { state, dispatch } = React.useContext(context)
	const [form, setForm] = React.useState({
		company: state.user_data.company,
		employeesCount: state.user_data.employeesCount
	})

	const [errors, setErrors] = React.useState({
		company: '',
		employeesCount: ''
	})

	const handleChange = e => {
		const { name, value } = e.target
		setForm(form => ({
			...form,
			[name]: value
		}))
		validate(value, name, 'form2', setErrors)
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
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

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
						{errors.company && <Error>{errors.company}</Error>}
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

export default AboutCompany
