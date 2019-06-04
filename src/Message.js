import React from 'react'
import { Countdown } from 'seasoned-components'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'

const variantIcon = {
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
}

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing.unit,
    opacity: 0.9,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  message: {
    alignItems: 'center',
    display: 'flex',
  },
  success: {
    backgroundColor: green[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
})

const Message = ({
  timeout,
  classes,
  style = {},
  text,
  close,
  noIcon,
  type = 'info',
}) => {
  const Icon = variantIcon[type]
  const onFinish = () => (timeout > 0 ? close() : null)
  return (
    <SnackbarContent
      className={classes[type]}
      open={true}
      onClose={close}
      style={style}
      message={
        <Countdown time={timeout} onFinish={onFinish} active>
          <span id="client-snackbar" className={classes.message}>
            {noIcon || (
              <Icon className={`${classes.icon} ${classes.iconVariant}`} />
            )}
            {text}
          </span>
        </Countdown>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={close}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  )
}

export default withStyles(styles)(Message)
