import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Message from './Message'

export default ({
  message = {},
  close,
  open,
  willClose,
  noIcon,
  style,
  position,
}) =>
  message && message.text ? (
    <Snackbar
      anchorOrigin={
        position || {
          horizontal: 'right',
          vertical: 'bottom',
        }
      }
      open={open}
      onClose={close}
    >
      <Message noIcon={noIcon} close={willClose} style={style} {...message} />
    </Snackbar>
  ) : null
