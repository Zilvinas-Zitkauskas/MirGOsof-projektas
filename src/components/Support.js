import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import Hero from './Hero'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from 'axios';
import { Button} from 'react-bootstrap';


function Support() {

    const [buttonText, setButtonText] = useState("Submit"); 

    const changeText = (text) => setButtonText(text);

  return (
    <>
      <Hero title="Support" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Formik initialValues={{
            Name: '',
            price: '',
            shortDesc: '',
            description: '',
            stock: 0
          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/add-product`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => value.json())
              .then(result => {
                alert(JSON.stringify(result, null, 2));
                setSubmitting(false);
              })
              (<Navigate to="/products" />);
          }}
          >
            {({ isSubmitting }) => (
              <Form >
                <div className="field">
                  <label className="label" htmlFor="Pavadinimas">Email :</label>
                  <Field className="input" id="Email" type="text" name="Email"/>
                </div>
                <div className="field">
                  <label className="label" htmlFor="Kaina">Ticket :</label>
                  <Field className="input" id="Ticket" type="text" name="Ticket"/>
                </div>
                 
                <button className="button is-primary is-outlined is-pulled-right" onClick={() => changeText("Ticket sent!")}>{buttonText}</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Support;
