import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={'/img/dia-star-wars.jpg'}/></Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <ul>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Favorites
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPages">
                  <a className="dropdown-item" href="full-width.html">Full Width Page</a>
                  <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
                  <a className="dropdown-item" href="faq.html">FAQ</a>
                  <a className="dropdown-item" href="404.html">404</a>
                  <a className="dropdown-item" href="pricing.html">Pricing Table</a>
                </div>
              </li>
            </ul>
          </div>
      </nav>
    )
}
export default Navbar;