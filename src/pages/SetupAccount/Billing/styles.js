import styled from 'styled-components'

import { Main, Field } from '../../styles'

export const ExtMain = styled(Main)`
	> div {
		width: 640px;
	}
	h4 {
		span {
			font-weight: 400;
			font-size: 14px;
			color: #888d9d;
		}
	}
`

export const ExtendField = styled(Field)`
	display: flex;
	> div:first-child {
		input {
			width: 200px;
		}
	}
	> div:last-child {
		margin-left: 24px;
		input {
			width: 96px;
		}
	}
`
