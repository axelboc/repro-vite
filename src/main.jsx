import React from 'react'
import ReactDOM from 'react-dom'

import '../dist/style.css'
import { Btn } from '../dist/lib'
import { OtherBtn } from '../dist/lib'

ReactDOM.render(
  <React.StrictMode>
    <Btn />
    <OtherBtn />
  </React.StrictMode>,
  document.getElementById('root')
)
