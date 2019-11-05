import React from 'react'
import styled from 'styled-components'

const RegisterEmail = () => (
	<Wrapper>
		<h4>Register with your work address.</h4>
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
				<CheckBox type="checkbox" id="terms" />
				<label htmlFor="terms" id="terms__label">
					I agree to <a href="#">terms & conditions</a>,{' '}
					<a href="#">cancellation policy</a> and{' '}
					<a href="#">privacy policy</a>.
				</label>
			</div>
		</Form>
	</Wrapper>
)

export default RegisterEmail

const Wrapper = styled.div`
	h4 {
		font-size: 16px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
	}
`

const Form = styled.form`
	width: 240px;
	#terms__label {
		font-size: 14px;
		color: #888d9d;
		margin-left: 8px;
		a {
			text-decoration: none;
			color: #888d9d;
			font-weight: 500;
			&:hover {
				color: #6e7382;
			}
		}
	}
`

const Label = styled.label`
	display: block;
	font-size: 14px;
	color: #969696;
	transition: 0.3s ease-in-out;
	transform: translateY(-32px);
`

const Field = styled.div`
	input {
		width: 240px;
		height: 48px;
		border: none;
		border-bottom: 2px solid #e1e1e1;
		&:focus {
			outline: transparent;
			border-bottom: 2px solid #04a777;
		}
		&:focus,
		&:valid {
			& + label {
				transform: translateY(-56px);
			}
		}
	}
`

const CheckBox = styled.input``
