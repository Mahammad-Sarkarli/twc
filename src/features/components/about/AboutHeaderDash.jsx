// @ts-nocheck
import React from 'react'
import Navigation from '../../navigation/Navigation'
import NavHeader from '../../toolbox/navheader/NavHeader'
import Header from './../../header/Header'
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg'
const AboutHeaderDash = () => {
  return (
    <div>
      <NavHeader
        textColor={'nav-header-text-dark'}
        borderBgColor={'nav-header-border-dark'}
      />
      <Navigation logo={blackThinkWiseLogo} enable={false} textColor="text-dark" bgColor="bg-dark" />
      <Header />
    </div>
  )
}

export default AboutHeaderDash
