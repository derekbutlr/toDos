import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
// This is the component that we call upon to render our collective components (Todolist, Addtodo button, Footer with completed/active etc)

const App = () => (
  <div>
   
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
