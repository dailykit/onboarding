import styled from 'styled-components'

import { Main } from '../../styles'

export const ExtMain = styled(Main)`
	> div {
		width: ${({ theme }) => `${theme.basePt * 80}px`};
	}
`

export const CheckBoxWrapper = styled.div(
	({ theme: { basePt, colors } }) => `
	margin-top: ${basePt * 4}px;
	label {
		font-size: ${basePt * 2}px;
		color: ${colors.darkText};
		margin-left: ${basePt}px;
	}
`
)

export const Info = styled.div(
	({ theme: { basePt, colors } }) => `
	display: flex;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	margin-top: ${basePt * 4}px;
	padding-top: ${basePt * 4}px;
	ul {
		padding-left: ${basePt * 4}px;
		margin-top: ${basePt * 3}px;
		li {
			font-size: ${basePt * 1.75}px;
			color: ${colors.darkText};
			line-height: ${basePt * 3}px;
		}
	}
`
)

export const Tip = styled.div(
	({ theme: { basePt, colors } }) => `
	display: flex;
	span {
		margin-right: ${basePt * 2}px;
	}
	p {
		font-size: ${basePt * 1.75}px;
		color: ${colors.darkText};
		opacity: 0.7;
		font-style: italic;
	}
`
)

export const Card = styled.div(
	({ theme: { basePt, colors } }) => `
	width: ${basePt * 32.5}px;
	height: ${basePt * 22.5}px;
	display: flex;
	padding: ${basePt * 2}px;
	border-radius: ${basePt * 0.5}px;
	text-align: center;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.1);
	h4 {
		font-size: ${basePt * 1.75}px;
		margin: 0;
		font-weight: 400;
		color: ${colors.grayText};
		padding-bottom: ${basePt * 1.5}px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	#strike {
		font-size: ${basePt * 1.5}px;
		text-decoration-line: line-through;
		color: ${colors.grayText};
		margin-top: ${basePt * 2}px;
	}
	#discount {
		font-size: ${basePt * 1.5}px;
		font-feature-settings: 'cpsp' on;
		color: #ff8484;
		margin: ${basePt}px 0 ${basePt * 3}px 0;
	}
	#price {
		font-weight: 500;
		font-size: ${basePt * 2.5}px;
		line-height: ${basePt * 3}px;
		color: ${colors.darkText};
	}
`
)
