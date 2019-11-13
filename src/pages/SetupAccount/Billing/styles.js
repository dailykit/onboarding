import styled from 'styled-components'

import { Main, Field } from '../../styles'

export const ExtMain = styled(Main)(
	({ theme: { basePt, colors } }) => `
	> div {
		width: ${basePt * 40}px;
	}
	h4 {
		span {
			font-weight: 400;
			font-size: ${basePt * 1.75}px;
			color: ${colors.grayText};
		}
	}
`
)

export const ExtendField = styled(Field)(
	({ theme: { basePt } }) => `
	display: flex;
	> div:first-child {
		input {
			width: ${basePt * 25}px;
		}
	}
	> div:last-child {
		margin-left: ${basePt * 3}px;		
		input {
			width: ${basePt * 12}px;
		}
	}
`
)
