import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="navbar">
        <h2>Career Track</h2>

        <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/applications">Applications</NavLink>
            <NavLink to="/add-application">Add Application</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
