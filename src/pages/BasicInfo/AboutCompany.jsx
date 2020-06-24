import React from 'react'
import styled from 'styled-components'
import { useLazyQuery } from '@apollo/react-hooks'
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption
} from '@reach/combobox'

// State
import { context } from '../../state'

// Styled Components
import {
	Footer,
	Main,
	Wrapper,
	Field,
	Label,
	Form,
	Domain,
	Error
} from '../styles'

import { FETCH_ORG } from '../../graphql'
import { useTimezones } from '../../utils'

const AboutCompany = () => {
	const [search, setSearch] = React.useState('')
	const { timezones } = useTimezones(search)
	const { state, dispatch } = React.useContext(context)
	const [fetchOrg, { loading, data }] = useLazyQuery(FETCH_ORG)

	const [form, setForm] = React.useState({
		company: state.user_data.company,
		subdomain: state.user_data.subdomain,
		timezone: state.user_data.timezone,
		employeesCount: state.user_data.employeesCount
	})

	const [errors, setErrors] = React.useState({
		isValid: true,
		isUnique: true
	})

	const handleChange = e => {
		const { name, value } = e.target
		setForm(form => ({
			...form,
			[name]: value
		}))
	}

	const nextPage = () => {
		dispatch({
			type: 'SET_FORM2',
			payload: {
				...form
			}
		})
		dispatch({ type: 'NEXT_PAGE' })
	}

	const prevPage = () => {
		dispatch({
			type: 'SET_FORM2',
			payload: {
				...form
			}
		})
		dispatch({ type: 'PREV_PAGE' })
	}

	React.useEffect(() => {
		if (!loading && data) {
			if (data.organizations.length === 0) {
				setErrors(errors => ({ ...errors, isUnique: true }))
			} else {
				setErrors(errors => ({ ...errors, isUnique: false }))
			}
		}
	}, [loading, data])

	const validateSubdomain = e => {
		const regex = new RegExp(/^[a-z0-9-]{2,40}$/)
		if (regex.test(e.target.value)) {
			setErrors({ ...errors, isValid: true })
		} else {
			setErrors({ ...errors, isValid: false })
		}
		fetchOrg({ variables: { _eq: `${e.target.value}.dailykit.org` } })
	}

	return (
		<Wrapper>
			<Main>
				<div>
					<h2>Tell us about your company</h2>
					<Form>
						<Field>
							<input
								type="text"
								id="company"
								name="company"
								required
								value={form.company}
								autoComplete="off"
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="company">Company Name</Label>
						</Field>
						<Field>
							<input
								required
								type="text"
								id="subdomain"
								name="subdomain"
								value={form.subdomain}
								autoComplete="off"
								onBlur={e => validateSubdomain(e)}
								onChange={e => handleChange(e)}
							/>
							<Label htmlFor="subdomain">
								Choose a Subdomain
							</Label>
						</Field>
						<Domain>{form.subdomain}.dailykit.org</Domain>
						{!errors.isUnique && (
							<Error>Subdomain is not available!</Error>
						)}
						{!errors.isValid && (
							<Error>Entered value is not valid!</Error>
						)}
						<Combobox
							aria-label="Timezones"
							onSelect={item =>
								handleChange({
									target: { name: 'timezone', value: item }
								})
							}>
							<StyledComboboxInput
								value={form.timezone}
								placeholder="Select Timezone"
								onChange={e =>
									setSearch(e.target.value) ||
									handleChange({
										target: {
											name: 'timezone',
											value: e.target.value
										}
									})
								}
							/>
							{timezones.length > 0 && (
								<StyledComboboxPopover>
									{timezones.length > 0 ? (
										<ComboboxList>
											{timezones.map(timezone => {
												return (
													<ComboboxOption
														key={timezone.title}
														value={timezone.title}
													/>
												)
											})}
										</ComboboxList>
									) : (
										<span
											style={{
												display: 'block',
												margin: 8
											}}>
											No results found
										</span>
									)}
								</StyledComboboxPopover>
							)}
						</Combobox>
						<Field>
							<select
								name="employeesCount"
								id="employeesCount"
								value={form.employeesCount}
								onChange={e => handleChange(e)}>
								<option value="5">5-10</option>
								<option value="10">10-20</option>
								<option value="20">20-50</option>
								<option value="50">50-100</option>
								<option value="100">100-500</option>
								<option value="500">500+</option>
							</select>
							<Label htmlFor="employeesCount">
								No. of Employees
							</Label>
						</Field>
					</Form>
				</div>
			</Main>
			<Footer>
				<button onClick={() => prevPage()}>Back</button>
				{errors.isUnique &&
					errors.isValid &&
					form.subdomain.length > 2 && (
						<button onClick={() => nextPage()}>Next</button>
					)}
			</Footer>
		</Wrapper>
	)
}

export default AboutCompany

const StyledComboboxPopover = styled(ComboboxPopover)`
	padding: 4px 0;
	margin-top: 4px;
	background: #fff;
	overflow-y: auto;
	max-height: 340px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	[data-reach-combobox-option] {
		padding: 4px 8px;
		list-style: none;
		:hover {
			background: rgba(0, 0, 0, 0.1);
		}
	}
	[data-user-value] {
	}
	[data-suggested-value] {
		color: #ada9a9;
	}
`

const StyledComboboxInput = styled(ComboboxInput)(
	({ theme: { basePt, colors } }) => `
   border: none;
   color: #686d7b;
   width: ${basePt * 40}px;
   height: ${basePt * 6}px;
   font-size: ${basePt * 1.75}px;
   margin-bottom: ${basePt * 2}px;
   border-bottom: 2px solid #e1e1e1;
   &::placeholder {
      color: #969696;
   }
   &:focus {
      outline: transparent;
      border-bottom: 2px solid #04a777;
   }
`
)
