import styled, { css } from 'styled-components'

export const StyledSidebar = styled.aside(
	({ visible }) => css`
		top: 40px;
		bottom: 0;
		width: 240px;
		position: absolute;
		background: #04a777;
		left: 0;
		border-top: 1px solid #03865f;
		transition: 0.3s ease-in-out;
		transform: translateX(${visible ? '0' : '-240px'});
	`
)

export const StyledHeading = styled.h3`
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	padding: 18px 12px 8px 12px;
	letter-spacing: 0.4px;
	text-transform: uppercase;
`

export const StyledList = styled.ul`
	padding: 0 12px;
`

export const StyledListItem = styled.li`
	color: #fff;
	height: 40px;
	display: flex;
	cursor: pointer;
	align-items: center;
	border-bottom: 1px solid #03865f;
	:hover {
		border-bottom: 1px solid #0ace93;
	}
`
