import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        altaran.us
      </Link>
      <ul>
        <CustomLink to="/AloeCam">aloeCam</CustomLink>
        <CustomLink to="/alt">alt</CustomLink>
        <CustomLink to="/space">space</CustomLink>
        <CustomLink to="/altAI">ai</CustomLink>
 
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}