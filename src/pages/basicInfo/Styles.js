import styled from 'styled-components'

export const Wrapper = styled.div`
	h4 {
		font-size: 16px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
	}
`

export const Form = styled.form`
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

export const Label = styled.label`
	display: block;
	font-size: 14px;
	color: #969696;
	transition: 0.3s ease-in-out;
	transform: translateY(-32px);
`

export const Field = styled.div`
	margin-bottom: 16px;
	input,
	select {
		width: 320px;
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
				transform: translateY(-64px);
			}
		}
	}
	select[name='phoneCodes'] {
		width: auto;
	}
`
