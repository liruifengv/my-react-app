import React from 'react'
import PropTypes from 'prop-types'

// function UserGreeting (props) {
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting (props) {
//   return <h1>Please sign up.</h1>
// }

// function Greeting (props) {
//   // const isLoggedIn = props.isLoggedIn;
//   // if (isLoggedIn) {
//   //   return <UserGreeting />;
//   // }
//   // return <GuestGreeting />;
// }

const numbers = [1, 2, 3, 4, 5]

function LoginButton (props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

LoginButton.propTypes = {
  onClick: PropTypes.func
}

function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

LogoutButton.propTypes = {
  onClick: PropTypes.func
}

function NumberList (props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

NumberList.propTypes = {
  numbers: PropTypes.number
}

export default class LoginControl extends React.Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
        <NumberList numbers={numbers} />,
      </div>
    )
  }
}
