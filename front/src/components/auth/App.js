import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard'
import Home from './Home'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Signup from './Signup'
import Signin from './Signin'
import axios from 'axios'
import Navbar from './style/Navbar'
import TodoList from '../todos/TodoList'

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  useEffect(()=> {
    checkLoginStatus()
  })
  const handleLogin = (data) => {
    setLoggedInStatus("ログイン完了")
    setUser(data.user)
  }
  const handleLogout = (data) => {
    setLoggedInStatus("未ログイン")
    setUser({})
  }
  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/logged_in", {withCredentials: true})
      .then(response => {
        if (response.data.logged_in && loggedInStatus === "未ログイン") {
          setLoggedInStatus("ログイン完了")
          setUser(response.data.user)
        }else if(!response.data.logged_in && loggedInStatus === "ログイン完了") {
          setLoggedInStatus("未ログイン")
          setUser({})
        }
      }).catch(error => {
        console.log("ログインエラー",error)
      })
  }

  return (
    
      <BrowserRouter>
        
          
          <div className="flex justify-center items-center w-screen h-screen">
          
            <div className="w-11/12 h-5/6 md:w-9/12 md:h-5/6">
            <Navbar/>
            <Switch>
              
            <Route exact path={"/Home"} component={Home} />
              <Route exact path={"/signin"}
                render ={props => (
                  <Signin {...props} handleLogin={handleLogin} handleLogout={handleLogout}  loggedInStatus={loggedInStatus} />
                    )}  />
              <Route exact path={"/dashboard"} 
                  render={props => (
                    <Dashboard {...props} loggedInStatus={loggedInStatus} />
                     )}
                      />
              <Route exact path = {"/signup"}
                  render={props =>(
                    <Signup {...props} handleLogin={handleLogin} loggedInStatus={loggedInStatus} />
                      )}
            />
            <Route exact path={"/todos"} component={TodoList} />
            </Switch>
          </div>
        </div>
        
      </BrowserRouter>
     
  )
}

export default App