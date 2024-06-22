import './Staff.css'
import Card from './card/Card'
import oscar from '../../assets/oscar.jpg'
const Staff = () => {
  const staff = [
    {
      name: 'Oscar Machaca',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
      grade: 'Licenciado en comunicación social',
      position: 'Director',
      img: oscar
    },
    {
      name: 'Oscar Machaca',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
      grade: 'Licenciado en comunicación social',
      position: 'Director',
      img: oscar
    },
    {
      name: 'Oscar Machaca',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
      grade: 'Licenciado en comunicación social',
      position: 'Director',
      img: oscar
    }
  ]
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