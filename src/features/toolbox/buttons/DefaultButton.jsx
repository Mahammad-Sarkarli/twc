import React from 'react'

const DefaultButton = ({ classData, contentData }) => {
  return (
    <div>
      <button className={classData}>{contentData}</button>
    </div>
  )
}

export default DefaultButton
