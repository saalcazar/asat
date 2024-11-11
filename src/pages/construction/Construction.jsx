import asat from '../../assets/logo.png'
import './Construction.css'
const Construction = () => {
  return (
    <main className='main-construction'>
      <section className='container-construction'>
        <h1 className='title-construction kantumruy-pro-bold'>¡Estamos trabajando en algo increible!</h1>
        <div className='img-construction'>
          <img src={asat} alt='ASAT' />
        </div>
        <ul className='social-list'>
          <li className='social-construction'>
            <a href='https://www.facebook.com/ASAT.Bolivia' target='_blank' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' className='icon-construction icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' /></svg>
            </a>
          </li>
          <li className='social-construction'>
            <a href='' target='_blank' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' className='icon-construction icon icon-tabler icons-tabler-outline icon-tabler-brand-x'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 4l11.733 16h4.267l-11.733 -16z' /><path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' /></svg>
            </a>
          </li>
          <li className='social-construction'>
            <a href='' target='_blank' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' className='icon-construction icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z' /></svg>
            </a>
          </li>
        </ul>
        <article className='description'>
          <h2 className='subtitle-construction kantumruy-pro-regular'>Gracias por tu paciencia.</h2>
          <h2 className='subtitle-construction kantumruy-pro-regular'>Estamos emocionados de compartir esto contigo pronto.</h2>
        </article>
      </section>
    </main>
  )
}

export default Construction
