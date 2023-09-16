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
            <input required type="text" className="form-control" id="name" placeholder="Nome" />
            <label htmlFor="name" className="form-label">Nome</label>
          </div>
          <div className="col-md-6 form-floating">
            <input required type="text" className="form-control" id="surname" placeholder="Sobrenome" />
            <label htmlFor="surname" className="form-label">Sobrenome</label>
          </div>
          <div className="col-md-12 form-floating">
            <input required type="email" className="form-control" id="inputEmail4" placeholder='E-mail' />
            <label htmlFor="inputEmail4" className="form-label">E-mail</label>
          </div>
          <div className="col-md-6 form-floating">
            <input required type="password" className="form-control" id="password" placeholder='Senha' />
            <label htmlFor="password" className="form-label">Senha</label>
          </div>
          <div className="col-md-6 form-floating">
            <input required type="password" className="form-control" id="confirmPassword" placeholder='Confirmação de Senha' />
            <label htmlFor="confirmPassword" className="form-label">Confirmação de Senha</label>
          </div>
          <div className="col-12 form-floating">
            <input required type="text" className="form-control" id="inputAddress" placeholder="Endereço" />
            <label htmlFor="inputAddress" className="form-label">Endereço</label>
          </div>
          <div className="col-12 form-floating">
            <input required type="text" className="form-control" id="inputAddress2" placeholder="Casa / Ap" />
            <label htmlFor="inputAddress2" className="form-label">Casa / Ap</label>
          </div>
          <div className="col-md-5">
            <select required id="state" className="form-select">
              <option value={'1'}>Estado</option>
              <option value={'2'}>São Paulo</option>
              <option value={'3'}>Rio de Janeiro</option>
              <option value={'4'}>Minas Gerais</option>
            </select>
            <label htmlFor="state" className="form-label"></label>
          </div>
          <div className="col-md-5">
            <select required id="city" className="form-select">
              <option value={'1'}>Cidade</option>
              <option value={'2'}>...</option>
            </select>
            <label htmlFor="city" className="form-label"></label>
          </div>
          <div className="col-md-2 form-floating">
            <input required type="text" className="form-control" id="CEP" maxLength={8} placeholder='CEP' />
            <label htmlFor="CEP" className="form-label">CEP</label>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input required className="form-check-input" type="checkbox" id="terms" />
              <label className="form-check-label" htmlFor="terms">
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