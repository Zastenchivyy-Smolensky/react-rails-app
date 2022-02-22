import React from 'react'
import styled from "styled-components"
import {Switch, Route, Link} from "react-router-dom"
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import EditTodo from './EditTodo'
import "./App.css"

const Navbar = styled.nav`
    background: #dbfeed;
    min-height:8vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Logo = styled.div`
    font-weight:bold;
    font-size:23px;
    letter-spacing:3px;
`
function App1() {
  return (
    <div>
      <Navbar>
        <Logo>
          Todo
        </Logo>
      </Navbar>
        <Switch>
          <Route exact path="/todos" component={TodoList}  />
          <Route exact path="/todos/list/new" component={AddTodo}  />
          <Route path="/todos/:id/edit" component={EditTodo}  />
        </Switch>
    </div>

  )
}

export default App1