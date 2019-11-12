import styled from 'styled-components'
import { Main } from '../../styles'

export const ExtMain = styled(Main)`
	> div {
		width: 640px;
	}
	h4 {
		margin-top: 48px;
		font-size: 16px;
		font-weight: 400;
		color: #555b6e;
		margin-bottom: 16px;
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

export const RadioWrapper = styled.div`
	margin-bottom: 48px;
	width: 558px;
	height: 68px;
	border-radius: 8px;
	background: #fafafa;
	border: 1px solid #ececec;
	padding-left: 4px;
	display: flex;
	align-items: center;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		border-radius: 8px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(251, 251, 251, 0.65);
		display: ${props => (props.checked ? 'none' : 'block')};
	}
`

export const Label = styled.label`
	&:first-child,
	&:nth-child(2) {
		margin-right: 4px;
	}
	> span {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 180px;
		height: 56px;
		border-radius: 6px;
		color: #888d9d;
		font-weight: 500;
		padding-left: 16px;
		transition: 0.3s ease-in-out;
		span {
			display: block;
			&:last-child {
				font-size: 12px;
				opacity: 0.7;
				margin-top: 4px;
				font-weight: 400;
			}
		}
	}
	input {
		position: absolute;
		visibility: hidden;
	}
	input:checked ~ span {
		background: #00a7e1;
		span {
			color: #fff;
		}
	}
`

export const Tip = styled.div`
	display: flex;
	margin-top: 32px;
	padding-top: 24px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
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
