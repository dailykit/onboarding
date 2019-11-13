import styled from 'styled-components'

export const Step = styled.div`
	background: #fafafa;
	height: 100vh;
	padding: ${({ theme }) => `0 ${theme.basePt * 12}px`};
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: ${({ theme }) => `${theme.basePt * 12}px 1fr`};
	grid-template-areas:
		'head head head'
		'main main aside';
`

export const Header = styled.header(
	({ theme }) => `
	grid-area: head;
	display: flex;
	align-items: center;
	span {
		display: flex;
		display: block;
		margin-right: ${theme.basePt * 2}px;
		padding-right: ${theme.basePt * 2}px;
		align-items: center;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
	}
	h1 {
		font-size: ${theme.basePt * 3}px;
		font-weight: 400;
		color: #555b6e;
	}
`
)

export const Main = styled.main`
	grid-area: main;
`
export const Aside = styled.aside`
	grid-area: aside;
	height: calc(100vh - 200px);
	padding: ${({ theme }) =>
		`${theme.basePt * 4}px 0 0 ${theme.basePt * 10}px`};
`

export const Stage = styled.ul(
	({ theme: { basePt, colors }, height }) => `
	font-size: ${basePt * 3}px;
	line-height: ${basePt * 2}px;
	color: ${colors.darkText};
	margin-bottom: ${basePt * 6}px;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: 18px;
		left: -${basePt * 4}px;
		width: 2px;
		height: ${height}%;
		z-index: 100;
		background: ${colors.primary};
	}
	&::after {
		content: '';
		position: absolute;
		top: -2px;
		left: -42px;
		width: 18px;
		height: 18px;
		border: ${
			height > 0
				? `2px solid ${colors.primary}`
				: `2px solid ${colors.gray1}`
		};
		border-radius: 50%;
		background: #fafafa;
	}
	li {
		font-size: ${basePt * 1.75}px;
		height: ${basePt * 6}px;
		display: flex;
		align-items: center;
		list-style: none;
		&:first-child {
			margin-top: ${basePt * 3}px;
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
			top: -${basePt * 3}px;
			left: -${basePt * 4}px;
			width: 2px;
			height: ${basePt * 6}px;
			background: #e1e1e1;
		}
		&.active {
			&::after {
				background: #04a777;
			}
		}
	}
`
)
