import React from 'react'

import FlashMessage from 'seasoned-flash'
import Example from './Example'

import './App.css'

export default () => (
  <FlashMessage style={{ color: 'white' }}>
    <Example />
  </FlashMessage>
)
