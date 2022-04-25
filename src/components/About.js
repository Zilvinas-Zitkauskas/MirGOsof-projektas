import Hero from './Hero'

function About() {

  return (
    <>
      <Hero title="About" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
        <div className="field">
        <label className="label" htmlFor="text">MirGOsof teams project for: "Programavimo indžinerija".</label>
        <label className="text" htmlFor="text">MirGOsof teams - tai 2022 metais KTU multimedijos studentų įkurta įmonė. 
        MirGOstore internetinė parduotuvė užsiima įvairiausių prekių pardavimu. Ši parduotuvė - tai Programavimo inžinerijos modulio projektas.</label>
        <br>
        </br>
        <br>
        </br>
        <label className="label" htmlFor="text">Kontaktai.</label>
        <label className="text" htmlFor="text">El. paštas: info@mirgostore.lt.</label>
        <br>
        </br>
        <label className="text" htmlFor="text">tel. nr.: 867700012.</label>
        </div>
        </div>
      </div>
    </>
  )
}


export default About;