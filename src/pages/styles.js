import styled from 'styled-components'

export const Footer = styled.footer(
	({ theme: { basePt, colors } }) => `
	display: flex;
	height: ${basePt * 12}px;
	justify-content: space-between;
	align-items: center;
	button {
		height: ${basePt * 5}px;
		text-transform: uppercase;
		background: ${colors.primary};
		border-radius: ${basePt * 6}px;
		padding: 0 ${basePt * 2}px;
		border: none;
		font-size: ${basePt * 1.75}px;
		color: #fff;
		cursor: pointer;
		font-weight: 500;
	}
`
)

export const Main = styled.main(
	({ theme: { basePt } }) => `
	background: #fff;
	height: calc(100% - ${basePt * 12}px);
	border: 1px solid #ececec;
	padding-top: ${basePt * 10}px;
	> div {
		margin: 0 auto;
		width: ${basePt * 40}px;
	}
`
)

export const Wrapper = styled.div(
	({ theme: { basePt, colors } }) => `
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	h2 {
		font-size: ${basePt * 2.5}px;
		font-weight: 400;
		color: ${colors.darkText};
		margin-bottom: ${basePt * 3}px;
	}
	h4 {
		font-size: ${basePt * 2}px;
		font-weight: 400;
		color: ${colors.darkText};
		margin-bottom: ${basePt * 3}px;
	}
`
)

export const Form = styled.form(
	({ theme: { basePt, colors } }) => `
	width: ${basePt * 40}px;
	#terms__label {
		font-size: ${basePt * 1.75}px;
		color: ${colors.grayText};
		margin-left: ${basePt}px;
		a {
			text-decoration: none;
			color: ${colors.grayText};
			font-weight: 500;
			&:hover {
				color: #6e7382;
			}
		}
	}
`
)

export const Label = styled.label(
	({ theme: { basePt } }) => `
	display: block;
	font-size: ${basePt * 1.75}px;
	color: #969696;
	transition: 0.3s ease-in-out;
	transform: translateY(-${basePt * 4}px);
`
)

export const Field = styled.div(
	({ theme: { basePt, colors } }) => `
	height: ${basePt * 7}px;
	margin-top: ${basePt}px;
	input {
		font-size: ${basePt * 2}px;
		color: #686d7b;
	}
	input,
	select {
		width: ${basePt * 40}px;
		height: ${basePt * 6}px;
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
				color: ${colors.primary};
				font-size: 12px;
				transform: translateY(-54px);
			}
		}
	}
	select[name='phoneCodes'] {
		width: auto;
	}
`
)

export const Error = styled.span(
	({ theme: { basePt } }) => `
	display: block;
	margin-bottom: ${basePt * 2}px;
	font-size: ${basePt * 1.75}px;
	color: #fc3259;
	font-weight: 400;
`
)
