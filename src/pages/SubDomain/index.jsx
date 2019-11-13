import React from 'react'

// Style Components
import { Field, Label } from '../styles'
import { ExtWrapper, ExtForm } from './styles'

const SubDomain = () => {
	const [name, setName] = React.useState('')
	return (
		<ExtWrapper>
			<div>
				<h2>Customize your URL</h2>
				<p>
					This is where you will access your apps and manage your
					team. Make sure to bookmark it once you’re inside.
				</p>
				<ExtForm>
					<Field>
						<div>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={name}
								onChange={e => setName(e.target.value)}
							/>
							<Label htmlFor="name">Subdomain Name</Label>
						</div>
						<span>dailykit.org</span>
					</Field>
					<button>Save</button>
				</ExtForm>
			</div>
		</ExtWrapper>
	)
}

export default SubDomain
