import React from 'react'
import Registrations from './Registrations'

function Signup(props) {
    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }
  return (
    <div>
        <h1>ログイン状態:{props.loggedInStatus}</h1>
        
        <Registrations handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </div>
  )
}

export default Signup