import './Staff.css'
import { staff } from '../../../helpers/staff.js'

const Staff = () => {
  return (
    <main className='staff-home'>
      <div className='title-underline'></div>
      <h2 className='title-article-education title-staff-home color-light kantumruy-pro-regular'>CONÓCENOS</h2>
      <section className='employes-home'>
        {
          staff.map((employe, index) => (
            <article className='card-employes' key={index}>
              <img className='photo-employes kantumruy-pro-light' src={employe.img} alt="" />
              <h3 className='name-employes kantumruy-pro-light'>{employe.name}</h3>
              <p className='grade-employes kantumruy-pro-light'>{employe.grade}</p>
            </article>
          ))
        }
      </section>
    </main>
  )
}

export default Staff