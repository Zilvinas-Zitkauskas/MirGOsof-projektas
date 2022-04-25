import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';

function ChangeInformation() {
  let [error, setError] = useState(null);

  let navigate = useNavigate();
  return (
    <>
      <Hero title="Acount Information" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
        <div className="field">
        <label className="label" htmlFor="text">Galima keisti paskyros informaciją</label>
        </div>
        </div>
      </div>
    </>
  )
}


export default ChangeInformation;
