const Card = ({name, description, grade, position, img}) => {
  return (
    <section className="card">
      <div className="img-conteiner-card">
      <img className="img-card" src={img} alt="" />
      </div>
      <article className="article-card">
        <h3 className="title-card kantumruy-pro-regular">{name}</h3>
        <p className="grade-card kantumruy-pro-thin">{grade}</p>
        <p className="position-card kantumruy-pro-thin">{position}</p>
        <p className="p-card kantumruy-pro-light">{description}</p>
      </article>
    </section>
  )
}

export default Card