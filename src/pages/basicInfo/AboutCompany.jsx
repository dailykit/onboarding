import React from 'react'

import { Footer, Main, Wrapper, Field, Label, Form } from './Styles'
import { Context } from '../../state'

const AboutCompany = () => {
	const { state, dispatch } = React.useContext(Context)
	const [company, setCompany] = React.useState(state.user_data.company)
	const [employeesCount, setEmployeesCount] = React.useState(
		state.user_data.employeesCount
	)

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM2',
			payload: {
				company,
				employeesCount
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}
	const prevPage = () => dispatch({ type: 'PREV_PAGE' })

	return (
		<Wrapper>
			<Main>
				<div>
					<h4>Tell us about your company</h4>
					<Form>
						<Field>
							<input
								type="text"
								id="companyName"
								required
								value={company}
								onChange={e => setCompany(e.target.value)}
							/>
							<Label htmlFor="companyName">Company Name</Label>
						</Field>
						<Field>
							<select
								name="employeesCount"
								id="employeesCount"
								value={employeesCount}
								onChange={e =>
									setEmployeesCount(e.target.value)
								}>
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
