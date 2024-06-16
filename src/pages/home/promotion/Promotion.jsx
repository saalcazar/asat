import promotion from '../../../assets/promotion.jpg'
import './Promotion.css'
const Promotion = () => {
  return (
    <main className='main-promotion'>
      <section className='banner-promotion'>
        <img className='banner-promotion-img' src={promotion} alt="" />
      </section>
      <article className='article-promotion'>
        <div className='title-underline-promotion'></div>
        <h2 className='title-article-promotion color-light kantumruy-pro-regular'>PROMOTORES</h2>
        <div className='blank'></div>
        <div className='title-underline-promotion'></div>
        <h2 className='title-article-promotion color-light kantumruy-pro-regular'>DDHH</h2>
        <div className='separator'></div>
        <p className='color-light kantumruy-pro-light p-article'>
        Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias...
        </p>
        <button className='b-article color-light kantumruy-pro-light' type="button">saber más...</button>
      </article>
    </main>
  )
}

export default Promotion