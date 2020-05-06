import styled, { css } from 'styled-components'

export const StyledTabs = styled.ul`
	display: flex;
	border-left: 1px solid #03865f;
`

export const StyledTab = styled.li(
	({ active }) => css`
		width: 220px;
		height: 40px;
		color: #fff;
		display: grid;
		cursor: pointer;
		align-items: center;
		grid-template-columns: 1fr 40px;
		background: ${active ? '#03865f' : 'transparent'};
		border-right: 1px solid #03865f;
		span {
			padding-left: 12px;
		}
		div {
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			:hover {
				background: #04a777;
			}
		}
	`
)
