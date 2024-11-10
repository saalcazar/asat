import { staff } from '../../helpers/staff'
import './Staff.css'
import Card from './card/Card'
const Staff = () => {
  
  return (
    <main className="main-staff">
      <h2 className='title-staff kantumruy-pro-regular'>Nuestro equipo</h2>
      <article className='cards'>
        {
          staff.map(({name, description, grade, position, img}, index) => (
            <Card
              key={index}
              name ={name}
              description={description}
              grade={grade}
              position={position}
              img={img}
            />
          ))
        }
      </article>
    </main>
  )
}

export default Staff