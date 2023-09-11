import styles from './BestSellers.module.css'

import guitar4 from '../../img/guitar-4.png'
import violao1 from '../../img/violao-1.png'
import baixo1 from '../../img/baixo-1.png'
import pedal1 from '../../img/pedal-1.png'

const BestSellers = () => {
  return (
    <main className={styles.bestSellers}>
      <div className="container">
        <h2>Mais Vendidas</h2>
        <ul className='row'>
          <li className='col'>
            <img src={guitar4} alt="Guitarra" />
            <p>Guitarra</p>
            <h3>Guitarra elétrica Strinberg</h3>
            <span>R$1,245,35</span>
            <button className='btn myBtn'>Comprar</button>
          </li>
          <li className='col'>
            <img src={violao1} alt="Guitarra" />
            <p>Violão</p>
            <h3>Violão Eletro Acústico Tagima</h3>
            <span>R$1,523,52</span>
            <button className='btn myBtn'>Comprar</button>
          </li>
          <li className='col'>
            <img src={baixo1} alt="Guitarra" />
            <p>Contra Baixo</p>
            <h3>Contra Baixo Fender Squier</h3>
            <span>R$3,414.53</span>
            <button className='btn myBtn'>Comprar</button>
          </li>
          <li className='col'>
            <img src={pedal1} alt="Guitarra" />
            <p>Pedal</p>
            <h3>Pedal de efeito Ibanez Tube Screamer TS9</h3>
            <span>R$953.43</span>
            <button className='btn myBtn'>Comprar</button>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default BestSellers