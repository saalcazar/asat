import { Link } from 'react-router-dom'
import futbol from '../../../assets/futbol.jpg'
import './Futbol.css'
const Futbol = () => {
  const project = 'Futbol sin fronteras'
  return (
    <main className="main-futbol scrolls">
      <img className='main-futbol-img' src={futbol} alt="" />
      <div className='rectangle'></div>
      <article className='article-futbol'>
        <div className='title-underline-futbol'></div>
        <h2 className='title-article-futbol color-light kantumruy-pro-regular'>FUTBOL</h2>
        <div className='blank'></div>
        <div className='title-underline-futbol'></div>
        <h2 className='title-article-futbol color-light kantumruy-pro-regular'>SIN FRONTERAS</h2>
        <div className='separator'></div>
        <p className='color-light kantumruy-pro-light p-article'>
        Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias...
        </p>
        <Link className='b-article color-light kantumruy-pro-light' to={project}>saber más...</Link>
      </article>
    </main>
  )
}

export default Futbol