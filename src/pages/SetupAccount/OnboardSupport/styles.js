import styled from 'styled-components'

import { Main } from '../../styles'

export const ExtMain = styled(Main)`
	> div {
		width: 640px;
	}
`

export const CheckBoxWrapper = styled.div`
	margin-top: 32px;
	label {
		font-size: 16px;
		color: #555b6e;
		margin-left: 8px;
	}
`

export const Info = styled.div`
	display: flex;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	margin-top: 32px;
	padding-top: 32px;
	ul {
		padding-left: 32px;
		margin-top: 24px;
		li {
			font-size: 14px;
			color: #555b6e;
			line-height: 24px;
		}
	}
`

export const Tip = styled.div`
	display: flex;
	span {
		margin-right: 16px;
	}
	p {
		font-size: 14px;
		color: #555b6e;
		opacity: 0.7;
		font-style: italic;
	}
`

export const Card = styled.div`
	width: 260px;
	height: 180px;
	display: flex;
	padding: 16px;
	border-radius: 4px;
	text-align: center;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.1);
	h4 {
		font-size: 14px;
		margin: 0;
		font-weight: 400;
		color: #888d9d;
		padding-bottom: 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	#strike {
		font-size: 12px;
		text-decoration-line: line-through;
		color: #888d9d;
		margin-top: 16px;
	}
	#discount {
		font-size: 12px;
		font-feature-settings: 'cpsp' on;
		color: #ff8484;
		margin: 8px 0 24px 0;
	}
	#price {
		font-weight: 500;
		font-size: 20px;
		line-height: 23px;
		color: #555b6e;
	}
`
