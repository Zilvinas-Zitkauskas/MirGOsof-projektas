function Hero(props) {
  return (
    <div className="hero is-primary ">
    <div className="hero-body container">
      <h4 className="title">{props.title}</h4>
    </div>
  </div>
  )
}

export default Hero