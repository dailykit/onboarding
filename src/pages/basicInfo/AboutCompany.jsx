import React from 'react'

import { Wrapper, Field, Label, Form } from './Styles'
import { Context } from '../../state'

const AboutCompany = () => {
	const { state, dispatch } = React.useContext(Context)
	return (
		<Wrapper>
			<h4>Tell us about your company</h4>
			<Form>
				<Field>
					<input
						type="text"
						id="companyName"
						required
						value={state.company}
						onChange={e =>
							dispatch({
								type: 'SET_COMPANY',
								payload: e.target.value
							})
						}
					/>
					<Label htmlFor="companyName">Company Name</Label>
				</Field>
				<Field>
					<select
						name="employeesCount"
						id="employeesCount"
						value={state.employees_count}
						onChange={e =>
							dispatch({
								type: 'SET_EMPLOYEES_COUNT',
								payload: e.target.value
							})
						}>
						<option value="5">5-10</option>
						<option value="10">10-20</option>
						<option value="20">20-50</option>
						<option value="50">50-100</option>
						<option value="100">100-500</option>
						<option value="500">500+</option>
					</select>
					<Label htmlFor="employeesCount">No. of Employees</Label>
				</Field>
			</Form>
		</Wrapper>
	)
}

export default AboutCompany
