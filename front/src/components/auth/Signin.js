import React from 'react'
import Login from './Login'

function Signin(props) {
    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/todos/")
    }


  return (
    <div>
        <h1>ログインページ</h1>
        <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </div>
    
  )
}

export default Signin