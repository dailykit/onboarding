import styled from 'styled-components'
import { Wrapper, Form } from '../styles'

export const ExtWrapper = styled(Wrapper)`
	display: flex;
	align-items: center;
	text-align: center;
	margin-top: ${({ theme }) => `${theme.basePt * 12}px`};
	div {
		height: auto;
		width: ${({ theme }) => `${theme.basePt * 50}px`};
		h2 {
			text-align: center;
		}
		p {
			font-size: 14px;
			text-align: center;
			color: ${({ theme }) => theme.colors.grayText};
		}
	}
`

export const ExtForm = styled(Form)(
	({ theme: { basePt, colors } }) => `
    width: auto;
    > div {
        display: flex;
        align-items: center;
        width: auto;
        div {
            height: ${basePt * 6}px;
        }
        label {
            text-align: left;
        }
        input {
            margin-right: ${basePt * 2}px;
        }
        > span {
            font-size: 16px;
            color: ${colors.darkText};
        }
    }
    button {
        margin-top: ${basePt * 2}px;
        height: ${basePt * 5}px;
        line-height: ${basePt * 5.25}px;
        text-transform: uppercase;
        background: ${colors.primary};
        border-radius: ${basePt * 6}px;
        padding: 0 ${basePt * 2}px;
        border: none;
        font-size: ${basePt * 1.75}px;
        color: #fff;
        cursor: pointer;
        font-weight: 400;
    }
`
)
