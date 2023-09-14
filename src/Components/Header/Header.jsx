import styles from './Header.module.css'

import logo from '../../img/logo.png'

import { BsSearch, BsPerson, BsFillBagCheckFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.containerAll}`}>
        <div className={styles.nameAndLogo}>
            <Link to={'/'}>
              <h1>M. Melodia</h1>
            </Link>
            <Link to={'/'}><img src={logo} alt="Logo Muita Melodia" /></Link>
        </div>
        <form className={`${styles.search}`}>
          <BsSearch />
          <input className="form-control me-2" type="search" placeholder="Busque seu relógio..." aria-label="Search" />
          <button className="btn myBtn" type="submit">Pesquisar</button>
        </form>
        <ul className={`navbar-nav ${styles.listForUser}`}>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <BsPerson />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <AiOutlineHeart />
            </a>
            <span>0</span>
          </li>
          <li className="nav-item" id="bag-item">
            <a className="nav-link" href="/">
              <BsFillBagCheckFill />
              <b>R$ 0,00</b>
            </a>
            <span>0</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header