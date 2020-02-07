import React from "react"
import { Link } from "gatsby"

const NavLink = props => (
	<Link 
		to={props.to}
		className="text-orange-400"
	>
		{props.children}
	</Link>
)

export default NavLink