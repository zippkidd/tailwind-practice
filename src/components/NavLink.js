import React from "react"
import { Link } from "gatsby"

const NavLink = props => (
	<Link 
		to={props.to}
		className="text-blue-600 border border-blue-600 px-5 py-2 font-bold text-lg rounded-full inline-block"
	>
		{props.children}
	</Link>
)

export default NavLink