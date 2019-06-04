import React, { useEffect } from 'react'

import { useFlash } from 'seasoned-flash'

export default () => {
  const { info } = useFlash()
  useEffect(() => {
    info('Hello!', 0)
  }, [info])
  return <h1>Hello world</h1>
}
