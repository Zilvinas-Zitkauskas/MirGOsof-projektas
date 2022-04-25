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
      <Hero title="Frequently asked question" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
        <div className="field">
        <label className="label" style={{ fontSize:25}} htmlFor="text">•Kodėl Jūsų prekės tokios brangios?</label>
        <label className="text" htmlFor="text">Nes mes studentai ir mums reikia pinigų.</label>
        <br></br>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:25}} htmlFor="text">•Ar galima pasiimti prekę tiesiogiai iš parduotuvės?</label>
        <label className="text" htmlFor="text">Negalima, nes neturime fizinių parduotuvių.</label>
        <br></br>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:25}} htmlFor="text">•Ar parduodamos prekės yra orginalios?</label>
        <label className="text" htmlFor="text">Ne visos.</label>

        </div>
        </div>
      </div>
    </>
  )
}


export default About;