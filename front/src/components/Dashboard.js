import React from 'react'

function Dashboard(props) {
  return (
    <div>
        <h1>Dashboard</h1>
        <h2>ログイン状態:{props.loggedInStatus}</h2>
        <h2>hello world</h2>
    </div>
  )
}

export default Dashboard