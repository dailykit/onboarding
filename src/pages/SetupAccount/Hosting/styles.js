import styled from 'styled-components'

export const RadioWrapper = styled.div(
	({ variant }) => `
		margin-bottom: 48px;
		width: 294px;
		height: ${variant === 'rectangle' ? '64px' : '48px'};
		border-radius: ${variant === 'rectangle' ? '8px' : '48px'};
		background: #fafafa;
		border: 1px solid #ececec;
		padding-left: 4px;
		display: flex;
		align-items: center;
	`
)

export const Label = styled.label(
	({ variant }) => `
		&:first-child {
			margin-right: 4px;
		}
		span {
			cursor: pointer;
			display: block;
			width: 140px;
			height: ${variant === 'rectangle' ? '56px' : '40px'};
			border-radius: ${variant === 'rectangle' ? '8px' : '40px'};
			line-height: ${variant === 'rectangle' ? '56px' : '40px'};
			text-align: center;
			color: #888d9d;
			transition: 0.3s ease-in-out;
		}
		input {
			position: absolute;
			visibility: hidden;
		}
		input:checked ~ span {
			background: #00a7e1;
			color: #fff;
		}
	`
)

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
		a {
			color: #00a7e1;
			text-decoration: none;
		}
	}
`
