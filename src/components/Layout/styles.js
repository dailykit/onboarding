import styled from 'styled-components'

export const Step = styled.div`
	background: #fafafa;
	height: 100vh;
	padding: 0 100px;
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 100px 1fr;
	grid-template-areas:
		'head head head'
		'main main aside';
`

export const Header = styled.header`
	grid-area: head;
	display: flex;
	align-items: center;
	span {
		display: flex;
		display: block;
		margin-right: 16px;
		padding-right: 16px;
		align-items: center;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
	}
	h1 {
		font-size: 24px;
		font-weight: 400;
		color: #555b6e;
	}
`
export const Main = styled.main`
	grid-area: main;
`
export const Aside = styled.aside`
	grid-area: aside;
	height: calc(100vh - 200px);
	padding: 32px 0 0 80px;
`

export const Stage = styled.ul`
	font-size: 24px;
	line-height: 16px;
	color: #555b6e;
	margin-bottom: 48px;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: 18px;
		left: -32px;
		width: 2px;
		height: ${props => `${props.height}%`};
		z-index: 100;
		background: #04a777;
	}
	&::after {
		content: '';
		position: absolute;
		top: -2px;
		left: -42px;
		width: 18px;
		height: 18px;
		border: ${props =>
			props.height > 0 ? '2px solid #04a777' : '2px solid #e1e1e1'};
		border-radius: 50%;
		background: #fafafa;
	}
	li {
		font-size: 14px;
		height: 48px;
		display: flex;
		align-items: center;
		list-style: none;
		&:first-child {
			margin-top: 24px;
		}
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: calc(100% - 26px);
			left: -35px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: #e1e1e1;
			z-index: 10;
		}
		&::before {
			content: '';
			position: absolute;
			top: -24px;
			left: -32px;
			width: 2px;
			height: 48px;
			background: #e1e1e1;
		}
		&.active {
			&::after {
				background: #04a777;
			}
		}
	}
`
