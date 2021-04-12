import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'
import PropTypes from 'prop-types'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

AddTodo.propTypes = {
  dispatch: PropTypes.any
}

export default AddTodo
