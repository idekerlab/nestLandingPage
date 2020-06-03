import React from 'react'
import './componentStyles/topPanel.css'

const TopPanel = ({children}) => (
  <div id='topDivWrapper'>
    <div id='topDiv'>
      <div id='topDivContents'>
        {children}
      </div>
    </div>
  </div>
)

export default TopPanel