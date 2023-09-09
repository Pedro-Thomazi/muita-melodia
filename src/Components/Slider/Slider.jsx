import styles from './Slider.module.css'

import image1 from '../../img/slider-img-1.jpeg'
import image2 from '../../img/slider-img-2.webp'
import image3 from '../../img/slider-img-3.webp'

import guitar1 from '../../img/guitar-1.png'
import guitar2 from '../../img/guitar-2.png'
import guitar3 from '../../img/guitar-3.png'

const Slider = () => {
  return (
    <div className="container" id="banners-container">
      <div className={`carousel slide ${styles.carouselContainer}`} id="slider" data-bs-ride="carousel">
        <div className="carousel-inner" id={styles.carousel}>
          <div id={styles.slide} className="carousel-item active">
            <img src={image1} alt="Banner 1" className="d-block w-100 img-fluid" />
            <div className="carousel-caption dark-bg-color">
              <h5>Variedade de Instrumentos</h5>
              <p>Para você estar pronto em qualquer situação.</p>
            </div>
          </div>
          <div id={styles.slide} className="carousel-item ">
            <img src={image2} alt="Banner 2" className="d-block w-100 img-fluid" />
            <div className="carousel-caption dark-bg-color">
              <h5>Regulação e Manutenção de seus Instrumentos</h5>
              <p>Traga seus instrumentos para manutenção.</p>
            </div>
          </div>
          <div id={styles.slide} className="carousel-item ">
            <img src={image3} alt="Banner 3" className="d-block w-100 img-fluid" />
            <div className="carousel-caption dark-bg-color">
              <h5>Acusticos e Semi-Acustucos</h5>
              <p>Conheça as melhores guitarras, com pronta entrega.</p>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Privious</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container" id={styles.miniBanners}>
        <div className="row justify-content-around">
          <div className={`col-12 dark-secondary-bg-color ${styles.banner}`} id={styles.miniBanner1}>
            <h2>Nova Coleção</h2>
            <img src={guitar1} alt="Guitarra 1" />
            <a href="/">Compre Agora</a>
          </div>
          <div className={`col-12 secondary-bg-color ${styles.banner}`} id={styles.miniBanner2}>
            <h2>Promoções</h2>
            <img src={guitar2} alt="Relógio 2" />
            <a href="/">Compre Agora</a>
          </div>
          <div className={`col-12 light-bg-color ${styles.banner}`} id={styles.miniBanner3}>
            <h2 className="secondary-color">Edição Limitada</h2>
            <img src={guitar3} alt="Relógio 3"/>
              <a href="/">Compre Agora</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider