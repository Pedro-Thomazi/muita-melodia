import styles from './Product.module.css'

const Product = () => {
  return (
    <main className={styles.productContainer}>
      <div className='container-fluid' id={styles.product}>
        <div className='row'>
          <div className='col-md-8' id={styles.pricipal}>
            <div className='row d-flex' id={styles.photos}>
              <div className='col-md-2' id={styles.changePhotos}>
                <span className={styles.photo}>Foto 1</span>
                <span className={styles.photo}>Foto 2</span>
                <span className={styles.photo}>Foto 3</span>
              </div>
              <div className='col-md-10' id={styles.principalPhoto}>
                <span>Principal Foto</span>
              </div>
            </div>
            <div className={styles.hidden}>
              <div className='col-md-4' id={styles.secondary}>
                <h2>Nome do Produto</h2>
                <div className={styles.price}>
                  <h2>R$X.XXX,XX</h2>
                  <p>em <span>10x R$XXX,XX</span> sem juros.</p>
                </div>
                <div className={styles.local}>
                  <h5><i className="bi bi-person-fill"></i>Entrega a combinar com o vendedor</h5>
                  <p>São Paulo, São Paulo</p>
                </div>
                <div className={styles.color}>
                  <h5>Cor: <span>XXXXXX</span></h5>
                </div>

                <button className='btn btnBuy'>Comprar Agora</button>
              </div>
            </div>
            <div className='col' id={styles.configs}>
              <h4>Características do produto</h4>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> XXXXXXXXXXXX</li>
                <li><i className="bi bi-check-circle-fill"></i> XXXXXXXXXXXX</li>
                <li><i className="bi bi-check-circle-fill"></i> XXXXXXXXXXXX</li>
                <li><i className="bi bi-check-circle-fill"></i> XXXXXXXXXXXX</li>
                <li><i className="bi bi-check-circle-fill"></i> XXXXXXXXXXXX</li>
              </ul>
            </div>
            <div className="col" id={styles.description}>
              <h4>Descrição</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi recusandae repellendus eligendi animi unde alias pariatur corrupti ab. Totam facere nesciunt adipisci deleniti ex eum ratione fuga optio, veniam eius obcaecati sit perferendis eos mollitia voluptates sed? Vel nemo quia nisi odio laboriosam consequuntur error tempora quidem porro beatae incidunt neque, iure debitis nam deleniti ipsum, quaerat doloremque blanditiis, doloribus ea! A, voluptas quis? Consectetur praesentium, aliquam animi suscipit fugit quia vitae eveniet nam! Minima consequuntur ipsa saepe enim laboriosam itaque aspernatur tenetur accusantium nisi dolorem ad alias perspiciatis, reprehenderit laudantium error deleniti id voluptatum dolore! Omnis quasi officiis delectus aliquid a vitae dicta esse est exercitationem laboriosam voluptatum iste totam culpa voluptate, ipsum magni autem mollitia. Reprehenderit enim voluptatibus veritatis quam odio, non labore ea sed natus sint tempore eveniet explicabo debitis maiores incidunt, eius exercitationem accusamus laudantium totam assumenda dolore modi! Incidunt, quod a? In laudantium voluptatibus libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, fuga numquam. Adipisci, repellendus ex libero esse minima iste assumenda eum voluptatum? Aperiam aliquam asperiores accusantium hic cum eligendi doloribus est voluptatibus deserunt illum? Laboriosam non vel id asperiores fugiat. Natus aliquam, ipsam nulla consequatur voluptate corporis omnis molestiae maxime vel!</p>
            </div>
            <div className="col" id={styles.questions}>
              <h4>Perguntas e Respostas</h4>
              <p>Qual informação você precisa?</p>
              <form className={styles.form}>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Faça sua pergunta.</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </form>
            </div>
          </div>

          <div className={`col-md-4 ${styles.hide}`} id={styles.secondary}>
            <h2>Nome do Produto</h2>
            <div className={styles.price}>
              <h2>R$X.XXX,XX</h2>
              <p>em <span>10x R$XXX,XX</span> sem juros.</p>
            </div>
            <div className={styles.local}>
              <h5><i className="bi bi-person-fill"></i>Entrega a combinar com o vendedor</h5>
              <p>São Paulo, São Paulo</p>
            </div>
            <div className={styles.color}>
              <h5>Cor: <span>XXXXXX</span></h5>
            </div>

            <button className='btn btnBuy'>Comprar Agora</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product