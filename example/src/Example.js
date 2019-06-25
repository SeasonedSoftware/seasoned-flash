import React, { useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'

import { Countdown } from 'seasoned-components'
import { useFlash } from 'seasoned-flash'

export default () => {
  const { info, error, success, warning } = useFlash()
  useEffect(() => {
    info('Hello!', 0)
  }, [info])
  return (
    <>
      <Card elevation={5}>
        <CardHeader title="useFlash info" />
        <CardContent>
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { useFlash } from 'seasoned-flash'

const { info } = useFlash()
useEffect(() => {
  info('Hello!', 0)
}, [info])
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      <Card elevation={5}>
        <CardHeader title="useFlash error" />
        <CardContent>
          <Countdown
            active
            time={2}
            onFinish={() => error('An error sample', 0)}
          />
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { useFlash } from 'seasoned-flash'

const { error } = useFlash()
useEffect(() => {
  error('An error sample', 0)
}, [error])
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      <Card elevation={5}>
        <CardHeader title="useFlash warning" />
        <CardContent>
          <Countdown
            active
            time={4}
            onFinish={() => warning('A warning sample', 0)}
          />
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { useFlash } from 'seasoned-flash'

const { warning } = useFlash()
useEffect(() => {
  warning('A warning sample', 0)
}, [warning])
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      <Card elevation={5}>
        <CardHeader title="useFlash success" />
        <CardContent>
          <Countdown
            active
            time={6}
            onFinish={() => success('A success sample', 0)}
          />
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { useFlash } from 'seasoned-flash'

const { success } = useFlash()
useEffect(() => {
  success('A success sample', 0)
}, [success])
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </>
  )
}
