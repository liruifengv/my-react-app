import React from 'react'
import PropTypes from 'prop-types'
import styles from './common.module.less'

export default function Mailbox (props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1 className={ styles.test }>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

Mailbox.propTypes = {
  unreadMessages: PropTypes.arrary
}
