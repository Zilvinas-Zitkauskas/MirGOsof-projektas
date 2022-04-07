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
        </div>
        </div>
      </div>
    </>
  )
}


export default About;