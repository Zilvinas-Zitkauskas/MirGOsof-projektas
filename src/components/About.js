import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';

function About() {
  let [error, setError] = useState(null);

  let navigate = useNavigate();
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
        MirGOstore internetinė parduotuvė užsiima įvairiausių prekių pardavimu. Parduotuvėje galima įsigyti elektronikos, namų buities prekes, sodo technikos ir kitų
        produktų. Nors parduotuvė įkurta tik 2022 metais, tačiau tai jau yra didžiausia elektroninė parduotuvė Baltijos šalyse ir yra laimėjusi Lietuvos
        parduotuvių apdovanojimą "Metų parduotuvė 2022".
        <br>
        </br>
        Klientų nuomone MirGOstore yra viena patikimiausių ir greičiausiai prekes pristančių parduotuvių Lietuvoje.
         </label>
        <br>
        </br>
        <br>
        </br>
        <label className="label" htmlFor="text">Kontaktai.</label>
        <label className="text" htmlFor="text">El. paštas: mirgostore@gmail.com.</label>
        <br>
        </br>
        <label className="text" htmlFor="text">tel. nr.: 867700012.</label>
        <br>
        </br>
        <br>
        </br>
        <label className="label" htmlFor="text">Projekto komanda:</label>
        <label className="text" htmlFor="text">Justina Krikščikaitė</label>
        <br>
        </br>
        <label className="text" htmlFor="text">Žilvinas Žitkauskas</label>
        <br>
        </br>
        <label className="text" htmlFor="text">Žygimantas Pipiras</label>
        <br>
        </br>
        <label className="text" htmlFor="text">Laurynas Gustas</label>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <label className="text" htmlFor="text">Ši parduotuvė - tai Programavimo inžinerijos modulio projektas.</label>
        </div>
        </div>
      </div>
    </>
  )
}


export default About;