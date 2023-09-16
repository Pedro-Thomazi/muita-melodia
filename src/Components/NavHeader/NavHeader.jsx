import { Link } from 'react-router-dom'
import styles from './NavHeader.module.css'

import { BsList } from 'react-icons/bs'

const NavHeader = () => {
  return (
    <nav className={styles.navbar}>
      <div className='container'>
        <nav className="navbar navbar-expand-lg p-2" id="bottom-navbar-container">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bottom-navbar"
              aria-controls="bottom-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <BsList />
            </button>
            <ul className="navbar-nav mb-2 mb-lg-0 collapse navbar-collapse" id="bottom-navbar">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a href="/#productsLink" className="nav-link">Produtos</a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Promoções</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default NavHeader