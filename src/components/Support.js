import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import Hero from './Hero'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from 'axios';
import { Button} from 'react-bootstrap';


function Support() {

  let [error, setError] = useState(null);
  let [message, setMessage] = useState(null);
  let navigate = useNavigate();

  const [buttonText, setButtonText] = useState("Send"); 

  const changeText = (text) => setButtonText(text);

return (
  <>
    <Hero title="Support" />
    <br />
    <br />
    <div className="columns is-mobile is-centered">
      <div className="column is-one-third">
        <Formik initialValues={{
          email: '',
          usertext: ''
        }} onSubmit={(values, { resetForm, setSubmitting }) => {
          fetch(`${environment.serverUrl}/support`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                setMessage("Email sent! We will get back to you as soon as possible.");
                resetForm({values: ''});
              })
              .then(result => {
                setError(result);
                setSubmitting(false);
              })
        }}
        >
          {({ isSubmitting }) => (
            <Form >
              <div className="field">
                <label className="label" htmlFor="email">Email :</label>
                <Field className="input" id="email" type="text" name="email"/>
              </div>
              <div className="field">
                <label className="label" htmlFor="usertext">Text :</label>
                <Field className="textarea" component="textarea" id="usertext" placeholder="Text" name="usertext"/>
              </div>
              
              <button className="button is-primary is-outlined is-pulled-right" onClick={() => changeText("Ticket sent!")}>{buttonText}</button>
              {message && <div className="has-text-success">{message}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  )
}

export default Support;
