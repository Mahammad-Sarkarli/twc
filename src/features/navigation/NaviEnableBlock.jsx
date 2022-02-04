import React from 'react'
import DefaultButton from './../toolbox/buttons/DefaultButton'

const NaviEnableBlock = ({mr_nv_btn,mr_nv_nv}) => {
  return (
    <div className='d-flex'>
      <DefaultButton
        classData={`button-detailed button-detailed-transparent ${mr_nv_btn}`}
        contentData="Daxil ol"
      />
      <DefaultButton
        classData={`button-detailed button-detailed-white ${mr_nv_nv}`}
        contentData="Qeydiyyat"
      />
    </div>
  )
}

export default NaviEnableBlock
