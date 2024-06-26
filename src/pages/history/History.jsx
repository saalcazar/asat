import './History.css'
const History = () => {
  const history = [
    {
      title: 'HISTORIA',
      content: `La Asociación Amigos de la Tierra cuya sigla es ASAT nace en junio del año 2008, a partir de una iniciativa de jóvenes provenientes del municipio de Coripata de la provincia Nor Yungas, como una institución sin fines de lucro, orientada a tomar acciones específicas dentro del ámbito del desarrollo local para revertir el progresivo deterioro económico y social de la provincia Nor Yungas dentro del departamento de La Paz.\nA iniciativa de los jóvenes Moisés Joel Ticona Choque, Marco Antonio Yujra, Fredy Angel Loza Chinchero y Oscar Machaca Condori, son los que dan inicio a la fundación de la Asociación Amigos de la Tierra - ASAT, cuenta con su PERSONALIDAD JURÍDICA, bajo la Resolución Administrativa Departamental No.  0523/2013, otorgado por el Gobierno Autónomo Departamental de La Paz, cuya resolución reconoce a ASAT como una institución sin fines de lucro y que da legalidad a todas las acciones que desarrolla la institución. La premisa fundamental de las acciones de Amigos de la Tierra fue el convencimiento de que las potencialidades productivas dela región de la Provincia Nor Yungas del Departamento de La Paz fueron y siguen siendo suficientes para crear prosperidad para todos sus habitantes.\nLa lógica inicial de la intervención Institucional estuvo dirigida a eliminar obstáculos existentes que dificultaban el desarrollo de iniciativas productivas en la región; particularmente de aquellas capaces de promover, en forma sostenida, mejores condiciones de empleo y oportunidades de ingreso para la población del Departamento.\nEs así que ASAT se constituye en una institución de jóvenes que tienen un desafío en: aportar con su conocimiento y experiencia de sus  profesionales a la construcción de una provincia dentro del Departamento  más homogéneo en su desarrollo sostenible, la promoción de un dialogo intercultural, una educación para el desarrollo y el cuidado de nuestro medio ambiente, donde se brinde mayores oportunidades productivas de la provincia Nor Yungas.`
    }
  ]

  const historySlice = history[0].content.split('\n')
 
  return (
    <main className='main-history'>
      <article className='history'>
        <h2 className='kantumruy-pro-regular title-history'>{history[0].title}</h2>
        <div className='content-history'>
          {
            historySlice.map((content, index) => (
              <p key={index} className='kantumruy-pro-light history-p'>{content}</p>
            ))
          }
        </div>
      </article>
    </main>
  )
}

export default History