import { Link } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className='container'>
      <div className="row" id={styles.formContainer}>
        <div className='col-md-6'>
          <h2 className={styles.title}>Digite seu E-mail e sua Senha de usuário do Muita Melodia</h2>
          <hr />
          <h6>Reportar um problema</h6>
          <div className={styles.phone}>
            <i class="bi bi-phone"></i>
            <p>Roubo ou perda de celular</p>
            <i class="bi bi-chevron-compact-right"></i>
          </div>
          <hr />
          <div className={styles.person}>
            <i class="bi bi-person"></i>
            <p>Roubo de conta</p>
            <i class="bi bi-chevron-compact-right"></i>
          </div>
          <Link className={styles.moreInformations} to='/'>Preciso de ajuda com outros temas</Link>
        </div>
        <form className="col-md-6" id={styles.form}>
          <div className="form-floating col m-4">
            <input type="email" className="form-control form-control-lg" name="email" id="email"
              placeholder="Insira seu E-mail" required />
            <label htmlFor="email" className="form-label">Insira seu E-mail</label>
          </div>
          <div className="form-floating col m-4">
            <input type="password" className="form-control form-control-lg" name="password" id="password"
              placeholder="Insira seu Nome" required />
            <label htmlFor="password" className="form-label">Insira sua Senha</label>
          </div>
          <button type="submit" className="btn btn-success m-4">Entrar</button>
        </form>
        <p className={styles.linkRegister}>Ainda não tem uma conta? <Link to={'/register'}>Clique aqui.</Link></p>
      </div>
    </div>
  )
}

export default Login