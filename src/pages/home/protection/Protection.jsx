import { Link } from 'react-router-dom'
import protection from'../../../assets/protection.jpg'
import './Protection.css'
const Protection = () => {
  const project = 'ASAT Protegeres'
  return (
    <main className="main-protection scrolls">
      <article className='article-protection'>
        <div className='title-underline-protection'></div>
        <h2 className='title-article-protection color-light kantumruy-pro-regular'>ASAT</h2>
        <div className='blank'></div>
        <div className='title-underline-protection'></div>
        <h2 className='title-article-protection color-light kantumruy-pro-regular'>PROTEGERES</h2>
        <section className='banner-protection'>
          <img className='banner-protection-img' src={protection} alt="" />
        </section>
        <div className='separator'></div>
        <p className='color-light kantumruy-pro-light p-article'>
        Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias...
        </p>
        <Link className='b-article color-light kantumruy-pro-light' to={project}>saber más...</Link>
      </article>
    </main>
  )
}

export default Protection
