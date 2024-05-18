import education from '../../../assets/education.jpg'
import './Education.css'
const Education = () => {
  return (
    <main className="main-education">
      <section className='banner-education'>
        <img className='banner-education-img' src={education} alt="" />
      </section>
      <article className='article-education'>
        <div className='title-underline'></div>
        <h2 className='title-article-education color-light kantumruy-pro-regular'>EDUCACIÓN PARA</h2>
        <div className='blank'></div>
        <div className='title-underline'></div>
        <h2 className='title-article-education color-light kantumruy-pro-regular'>EL DESARROLLO</h2>
        <div className='separator'></div>
        <p className='color-light kantumruy-pro-light p-article'>
        Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias...
        </p>
        <button className='b-article color-light kantumruy-pro-light' type="button">saber más...</button>
      </article>
    </main>
  )
}

export default Education