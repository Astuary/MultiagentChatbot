import React from "react";
import NavLink from "./NavLink";

const NavList = ['About', 'FAQ']

function NavBar(props) {
  return (
    NavList.map((ListItem) => <NavLink name={`${ListItem}`}>ListItem</NavLink>)
  )
}

export default NavBar