import styled from 'styled-components'

export const Footer = styled.footer`
	display: flex;
	height: 100px;
	justify-content: space-between;
	align-items: center;
	button {
		height: 40px;
		text-transform: uppercase;
		background: #04a777;
		border-radius: 48px;
		padding: 0 16px;
		border: none;
		font-size: 14px;
		color: #fff;
		cursor: pointer;
		font-weight: 500;
	}
`

export const Main = styled.main`
	background: #fff;
	height: calc(100% - 100px);
	border: 1px solid #ececec;
	padding-top: 80px;
	> div {
		margin: 0 auto;
		width: 322px;
	}
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	h2 {
		font-size: 20px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
	}
	h4 {
		font-size: 16px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 24px;
	}
`

export const Form = styled.form`
	width: 320px;
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
	height: 56px;
	margin-top: 8px;
	input {
		font-size: 16px;
		color: #686d7b;
	}
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
			border-bottom: 2px solid #04a777;
			& + label {
				color: #04a777;
				font-size: 12px;
				transform: translateY(-54px);
			}
		}
	}
	select[name='phoneCodes'] {
		width: auto;
	}
`

export const Error = styled.span`
	display: block;
	margin-bottom: 16px;
	font-size: 14px;
	color: #fc3259;
	font-weight: 400;
`
