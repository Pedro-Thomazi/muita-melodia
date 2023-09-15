import { Link } from 'react-router-dom'
import styles from './Register.module.css'

const Register = () => {
  return (
    <div className='container'>
      <div className="row" id={styles.formContainer}>
        <div className='col-md-6'>
          <h2 className={styles.title}>Crie uma conta na Muita Melodia</h2>
          <hr />
        </div>
        <form className="row g-3" id={styles.form}>
          <div className="col-md-6 form-floating">
            <input required type="text" className="form-control" id="inputAddress" placeholder="Digite" />
            <label htmlFor="inputAddress" className="form-label">Nome</label>
          </div>
          <div className="col-md-6 form-floating">
            <input required type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            <label htmlFor="inputAddress" className="form-label">Sobrenome</label>
          </div>
          <div className="col-md-12 form-floating">
            <input required type="email" className="form-control" id="inputEmail4" placeholder='E-mail' />
            <label htmlFor="inputEmail4" className="form-label">E-mail</label>
          </div>
          <div className="col-md-6 form-floating">
            <input required type="password" className="form-control" id="inputPassword4" placeholder='Senha' />
            <label htmlFor="inputPassword4" className="form-label">Senha</label>
          </div>
          <div className="col-md-6 form-floating">
            <input required type="password" className="form-control" id="inputPassword4" placeholder='Confirmação de Senha' />
            <label htmlFor="inputPassword4" className="form-label">Confirmação de Senha</label>
          </div>
          <div className="col-12 form-floating">
            <input required type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            <label htmlFor="inputAddress" className="form-label">Endereço</label>
          </div>
          <div className="col-12 form-floating">
            <input required type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            <label htmlFor="inputAddress2" className="form-label">Casa / Ap</label>
          </div>
          <div className="col-md-5">
            <select required id="inputState" className="form-select">
              <option selected>Estado</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Minas Gerais</option>
            </select>
            <label htmlFor="inputState" className="form-label"></label>
          </div>
          <div className="col-md-5">
            <select required id="inputState" className="form-select">
              <option selected>Cidade</option>
              <option>...</option>
            </select>
            <label htmlFor="inputState" className="form-label"></label>
          </div>
          <div className="col-md-2 form-floating">
            <input required type="text" className="form-control" id="inputZip" placeholder='CEP' />
            <label htmlFor="inputZip" className="form-label">CEP</label>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input required className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Aceito os <Link to={'/'}>termos</Link>.
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary primary-bg-color">Criar conta</button>
          </div>
        </form>
        <p className={styles.linkLogin}>Já possui uma conta? <Link to={'/login'}>Clique aqui.</Link></p>
      </div>
    </div>
  )
}

export default Register