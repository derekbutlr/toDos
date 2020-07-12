import React from 'react'
import PropTypes from 'prop-types'

// This component displays an individual 'to do' piece of data, and defines what happens when you click it. If 
// clicked, it will put a line through that item. It will display the input text too. 


const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
