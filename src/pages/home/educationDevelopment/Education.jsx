import { Link } from 'react-router-dom'
import education from '../../../assets/education.jpg'
import './Education.css'
const Education = () => {
  const project = 'Educación para el Desarrollo'
  return (
    <main className="main-education scrolls">
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
        <Link className='b-article color-light kantumruy-pro-light' to={project} >saber más...</Link>
      </article>
    </main>
  )
}

export default Education