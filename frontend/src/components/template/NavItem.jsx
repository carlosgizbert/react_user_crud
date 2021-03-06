import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

const navItem = props =>
  <Link to={props.url}>
  <i className={`fa fa-${props.icon}`}></i> {props.pageLabel}
  </Link>

  export default navItem