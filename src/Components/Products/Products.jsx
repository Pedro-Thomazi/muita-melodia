import styles from './Products.module.css'

import guitarSRV from '../../img/guitar-srv.png'
import guitarSlash from '../../img/guitar-slash.png'
import violao2 from '../../img/violao-2.png'
import violao3 from '../../img/violao-3.png'
import marshallJCM from '../../img/marshall-jcm-800.png'
import pedal2 from '../../img/pedal-2.png'
import baixo2 from '../../img/baixo-1.png'
import guitar1 from '../../img/guitar-1.png'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <main className='conatiner' id={styles.mainContainer}>
      <div className="container">
        <h2 className='primary-color'>Novos Produtos</h2>
        <div className='row' id={styles.productsContainer}>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={guitarSRV} alt="Guitarra SRV" />
            <p>Guitarra</p>
            <h3>Guitarra Fender Number One</h3>
            <span>R$4.145,14</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={guitarSlash} alt="Guitarra SRV" />
            <p>Guitarra</p>
            <h3>Guitarra Gibson</h3>
            <span>R$4.235,52</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={violao2} alt="Guitarra SRV" />
            <p>Violão</p>
            <h3>Violão Gidson</h3>
            <span>R$2.526,73</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={violao3} alt="Guitarra SRV" />
            <p>Violão</p>
            <h3>Violão Fender</h3>
            <span>R$1.245,14</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={marshallJCM} alt="Guitarra SRV" />
            <p>Amplificador</p>
            <h3>Amplificador Marshall JCM800</h3>
            <span>R$14.414,52</span>
            <Link to='https://page-marshall-jcm800.vercel.app/' target='blank' className='btn myBtn specialBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={pedal2} alt="Guitarra SRV" />
            <p>Pedal</p>
            <h3>Pedal Fuzz</h3>
            <span>R$1,526.36</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={baixo2} alt="Guitarra SRV" />
            <p>Contra Baixo</p>
            <h3>Contra Baixo Fender Squier</h3>
            <span>R$3,414.53</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
          <div className={`col-12 col-md-3 ${styles.product}`}>
            <img className='img-fluid' src={guitar1} alt="Guitarra SRV" />
            <p>Guitarra</p>
            <h3>Guitarra Gibson</h3>
            <span>R$3,256.62</span>
            <Link to={'/product'} className='btn myBtn'>Comprar</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Products