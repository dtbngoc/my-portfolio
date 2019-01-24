import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <img src={require('../images/logo-white.svg')} width="48" />
      {/* N. <b>Dang</b>  */}
    </div>
  </div>
)


export default Header
