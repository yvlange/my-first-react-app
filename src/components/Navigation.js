import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/hobbies">Hobbies</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
export default Navigation;
