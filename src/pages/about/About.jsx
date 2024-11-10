import './About.css'
const About = () => {
  const about = [
    {
      tVision: 'Visión',
      tMision: 'Misión',
      cVision: 'ASAT es una institución constituida por jóvenes y organizaciones de la sociedad civil de la Provincia Nor Yungas. Reconocida como una institución educativa para el desarrollo sostenible con participación democrática, intercultural y de promoción de los derechos humanos.',
      cMision: `
        Formamos jóvenes, adolecentes, niños y población en general de la provincia Nor Yungas; en temas referidos a desarrollo sostenible, liderazgo, oratoria y derechos humanos, promovemos un desarrollo respetuoso con la naturaleza, capacitamos en participación ciudadana a la sociedad en general, propiciamos diálogo inter generacional entre padres e hijos; nuestro compromiso es con la población mencionada con quien nos relacionaremos con los siguientes valores:
      `,
      values: `Respeto. Humildad. Paciencia. Solidaridad. Tolerancia. Transparencia. Calidad. Puntualidad. Independencia. Honradez.`,
      objetive: 'Desarrollar propuestas educativas para el desarrollo sostenible de la Provincia Nor Yungas del Departamento de La Paz, las mismas que contengan participación democrática, intercultural y promoción de los derechos humanos.',
      especifics: `Generar propuestas de desarrollo municipal en los municipios de Coripata y Coroico de Noryungas.\nFormar jóvenes hombres y mujeres en temas concernientes a ciudadanía, democracia y desarrollo en los municipios de influencia de la Institución.\nGenerar opinión pública local - municipal para la participación de la ciudadanía en el desarrollo municipal.`,
    }
  ]

  const valuesSplit = about[0].values.split(' ')
  const especificsSplit = about[0].especifics.split('\n')

  return (
    <main className="about">
      <h1 className='title-article kantumruy-pro-regular'>VALORES INSTITUCIONALES</h1>
      <article className='about-article vision kantumruy-pro-regular'>
        <h2 className='about-title-article'>{about[0].tVision}</h2>
        <p className='about-p kantumruy-pro-light'>{about[0].cVision}</p>
      </article>
      <article className='about-article mision kantumruy-pro-regular'>
        <h2 className='about-title-article'>{about[0].tMision}</h2>
        <p className='about-p kantumruy-pro-light'>{about[0].cMision}</p>
      </article>
      <article className='about-article valores kantumruy-pro-regular'>
        <h2 className='about-title-article'>Valores institucionales</h2>
        <p className='about-p kantumruy-pro-light about-list'>
          {
            valuesSplit.map((value, index) => (
              <li className='about-list-item' key={index}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-checks about-list-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                {value}
              </li>
            ))
          }
        </p>
      </article>
      <article className='about-article objetivo kantumruy-pro-regular'>
        <h2 className='about-title-article'>Objetivo</h2>
        <p className='about-p kantumruy-pro-light'>{about[0].objetive}</p>
      </article>
      <article className='about-article objetivos kantumruy-pro-regular'>
        <h2 className='about-title-article'>Objetivos específicos</h2>
        <p className='about-p kantumruy-pro-light about-list'>
          {
            especificsSplit.map((value, index) => (
              <li className='about-list-item' key={index}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-checks about-list-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                {value}
              </li>
            ))
          }
        </p>
      </article>
    </main>
  )
}

export default About