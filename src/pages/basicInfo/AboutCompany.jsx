import React from 'react'

import { Wrapper, Field, Label, Form } from './Styles'

const AboutCompany = () => (
	<Wrapper>
		<h4>Tell us about your company</h4>
		<Form>
			<Field>
				<input type="text" id="companyName" required />
				<Label htmlFor="companyName">Company Name</Label>
			</Field>
			<Field>
				<select name="employeesCount" id="employeesCount">
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

export default AboutCompany
