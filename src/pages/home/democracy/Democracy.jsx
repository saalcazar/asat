import { Link } from 'react-router-dom'
import democracy from '../../../assets/democracy.jpg'
import './Democracy.css'
const Democracy = () => {
  const project = 'Ayni Democracia'
  return (
    <main className="main-democracy">
      <article className='article-democracy'>
        <div className='title-underline-democracy'></div>
        <h2 className='title-article-democracy kantumruy-pro-regular'>AYNI</h2>
        <div className='blank'></div>
        <div className='title-underline-democracy'></div>
        <h2 className='title-article-democracy kantumruy-pro-regular'>DEMOCRACIA</h2>
        <div className='separator'></div>
        <p className='color-light kantumruy-pro-light p-article'>
        Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias...
        </p>
        <Link className='b-article color-light kantumruy-pro-light' to={project} >saber más...</Link>
      </article>
      <section className='banner-democracy'>
        <img className='banner-democracy-img' src={democracy} alt="" />
      </section>
    </main>
  )
}

export default Democracy