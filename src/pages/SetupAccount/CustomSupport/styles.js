import styled from 'styled-components'
import { Main } from '../../styles'

export const ExtMain = styled(Main)(
	({ theme: { basePt, colors } }) => `
	> div {
		width: ${basePt * 80}px;
	}
	h4 {
		margin-top: ${basePt * 6}px;
		font-size: ${basePt * 2}px;
		font-weight: 400;
		color: ${colors.darkText};
		margin-bottom: ${basePt * 2}px;
	}
`
)

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

export const RadioWrapper = styled.div(
	({ theme: { basePt, colors }, checked }) => `
	margin-bottom: ${basePt * 6}px;
	width: 558px;
	height: ${basePt * 8.5}px;
	border-radius: ${basePt}px;
	background: #fafafa;
	border: 1px solid #ececec;
	padding-left: ${basePt * 0.5}px;
	display: flex;
	align-items: center;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		border-radius: ${basePt}px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(251, 251, 251, 0.65);
		display: ${checked ? 'none' : 'block'};
	}
`
)

export const Label = styled.label(
	({ theme: { basePt, colors, borderRadius } }) => `
	&:first-child,
	&:nth-child(2) {
		margin-right: ${basePt * 0.5}px;
	}
	> span {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 180px;
		height: ${basePt * 7}px;
		border-radius: ${borderRadius.md}px;
		color: #888d9d;
		font-weight: 500;
		padding-left: ${basePt * 2}px;
		transition: 0.3s ease-in-out;
		span {
			display: block;
			&:last-child {
				font-size: ${basePt * 1.5}px;
				opacity: 0.7;
				margin-top: ${basePt * 0.5}px;
				font-weight: 400;
			}
		}
	}
	input {
		position: absolute;
		visibility: hidden;
	}
	input:checked ~ span {
		background: ${colors.active};
		span {
			color: #fff;
		}
	}
`
)

export const Tip = styled.div(
	({ theme: { basePt, colors } }) => `
	display: flex;
	margin-top: ${basePt * 4}px;
	padding-top: ${basePt * 3}px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
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
