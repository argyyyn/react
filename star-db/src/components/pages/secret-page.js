import React from 'react'
import {Route} from 'react-router-dom'

const SecretPage = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return (
			<div className="jumbotron text-center">
				<h3>This page is full of secrets!!!</h3>
			</div>
		)
	}

	return <Route to="/login" />
}

export default SecretPage
