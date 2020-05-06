import styled from 'styled-components'

export const RadioWrapper = styled.div(
	({ variant, theme: { basePt } }) => `
		margin-bottom: ${basePt * 6}px;
		width: 294px;
		height: ${variant === 'rectangle' ? `${basePt * 8}px` : `${basePt * 6}px`};
		border-radius: ${variant === 'rectangle' ? `${basePt}px` : `${basePt * 6}px`};
		background: #fafafa;
		border: 1px solid #ececec;
		padding-left: ${basePt * 0.5}px;
		display: flex;
		align-items: center;
	`
)

export const Label = styled.label(
	({ variant, theme: { basePt, colors } }) => `
		&:first-child {
			margin-right: ${basePt * 0.5}px;
		}
		span {
			cursor: pointer;
			display: block;
			width: 140px;
			height: ${variant === 'rectangle' ? `${basePt * 7}px` : `${basePt * 5}px`};
			border-radius: ${variant === 'rectangle' ? `${basePt}px` : `${basePt * 5}px`};
			line-height: ${variant === 'rectangle' ? `${basePt * 7}px` : `${basePt * 5}px`};
			text-align: center;
			color: ${colors.grayText};
			transition: 0.3s ease-in-out;
		}
		input {
			position: absolute;
			visibility: hidden;
		}
		input:checked ~ span {
			background: ${colors.active};
			color: #fff;
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
		font-size: ${basePt * 1.74}px;
		color: ${colors.darkText};
		opacity: 0.7;
		font-style: italic;
		a {
			color: ${colors.active};
			text-decoration: none;
		}
	}
`
)
