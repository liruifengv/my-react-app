import React from 'react'
import Toggle from './TestComponent'
// import Greeting from './newComponent'
// import Mailbox from './Message'
// import NameForm from './NameForm'
// import Calculator from './Calculator'
import Example from './TestHook'
import './common.less'

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Prwr'
// }

// const messages = ['React', 'Re: React', 'Re:Re: React']

function App () {
  return (
    <div className="App">
      <Example/>
      <Toggle />
      <div className="app">
        <p className="test">1wqwqw3sasas123</p>
      </div>
      {/* <Toggle />
      <NameForm />
      <Calculator />
      <Greeting isLoggedIn={false} />
      <Mailbox unreadMessages={messages}></Mailbox> */}
    </div>
  )
}

export default App
