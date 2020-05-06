import styled, { css } from 'styled-components'

export const Wrapper = styled.div(
	({ theme: { basePt, colors } }) => css`
		display: flex;
		height: 100vh;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		h2 {
			font-size: ${basePt * 4}px;
			font-weight: 400;
			margin-top: ${basePt * 3}px;
			color: ${colors.darkText};
		}
		p {
			font-weight: 400;
			text-align: center;
			line-height: ${basePt * 3.5}px;
			color: ${colors.grayText};
			font-size: ${basePt * 2}px;
			margin-top: ${basePt * 2}px;
			max-width: ${basePt * 70}px;
			width: calc(100vw - ${basePt * 5}px);
		}
	`
)
