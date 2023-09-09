import styles from './Footer.module.css'

import { BsTelephone, BsFacebook, BsYoutube } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className='container-fluid'>
        <div className="row" id={styles.footerImages}>
          <div className={`col-6 col-md-2 ${styles.imageContainer}`} id={styles.insta1}>
          </div>
          <div className={`col-6 col-md-2 ${styles.imageContainer}`} id={styles.insta2}>
          </div>
          <div className={`col-6 col-md-2 ${styles.imageContainer}`} id={styles.insta3}>
          </div>
          <div className={`col-6 col-md-2 ${styles.imageContainer}`} id={styles.insta4}>
          </div>
          <div className={`col-6 col-md-2 ${styles.imageContainer}`} id={styles.insta5}>
          </div>
          <div className={`col-6 col-md-2 ${styles.imageContainer}`} id={styles.insta6}>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className="row">
          <div className={`col-12 col-sm-4`} id={styles.informations}>
            <h2>Páginas</h2>
            <a href="/">Home</a>
            <a href="/">Categorias</a>
            <a href="/">Promoções</a>
            <a href="/">Contato</a>
          </div>
          <div className={`col-12 col-sm-4`} id={styles.informations}>
            <h2>Alguma duvida?</h2>
            <h4>Ligue para nós.</h4>
            <h1><BsTelephone />(11)99999-9999</h1>
          </div>
          <div className={`col-12 col-sm-4`} id={styles.informations}>
            <h2>Informações</h2>
            <a href="/">Política de Privacidade</a>
            <a href="/">Política de Entragas</a>
            <a href="/">Rastrear Compra</a>
          </div>
        </div>
      </div>

      <div id={styles.subscrible} className="container-fluid">
        <h4>Inscreva-se em nossa NewsLetter</h4>
        <form className='col-6'>
          <HiOutlineMail />
          <input type="email" className="form-control" placeholder='Insira seu e-mail...' />
          <button className='btn myBtn'>Enviar</button>
        </form>
        <div className={styles.socials}>
          <a href="/"><BsFacebook /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><BsYoutube /></a>
          <a href="/"><FiTwitter /></a>
        </div>
      </div>

      <div id={styles.makeForMe} className="container-fluid">
        <div className={styles.content}>
          <h2>Feito por <span>Pedro T.V</span></h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer