import styles from './PrincipalGuitar.module.css'

import principalGuitar from '../../img/principalGuitar.png'

const PrincipalGuitar = () => {
  return (
    <main className={styles.principalGuitar}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.name}>
            <h5>Raridade</h5>
            <h3>1978 Gibson Double Neck</h3>
            <p>Guitarra Double Neck</p>
            <button className='btn principalBtn'>Comprar Agora</button>
          </div>
          <div className={styles.guitarImage}>
            <img src={principalGuitar} alt="Principal Guitarra" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrincipalGuitar