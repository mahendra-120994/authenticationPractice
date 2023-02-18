import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <ul className="nav_link">
      <li className="list_item">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="list_item">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
