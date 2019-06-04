import React, { useState } from 'react'
import MessagesController from './MessagesController'

export const Context = React.createContext()

export default ({ children, noIcon, position, style }) => {
  const [message, setMessage] = useState(null)
  const [open, setOpen] = useState(false)
  const dispatch = (text, type = 'info', timeout = 4) => {
    setMessage({ text, timeout, type })
    setOpen(true)
  }
  const close = () => setMessage(null)
  const willClose = () => setOpen(false)
  return (
    <Context.Provider value={dispatch}>
      <MessagesController
        noIcon={noIcon}
        position={position}
        message={message}
        open={open}
        style={style}
        willClose={willClose}
        close={close}
      />
      {children}
    </Context.Provider>
  )
}
