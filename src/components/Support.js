import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import Hero from './Hero'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from 'axios';
import { Button} from 'react-bootstrap';


function Support() {

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
            subject: '',
            text: ''
          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/support`,
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
                  <label className="label" htmlFor="email">Email :</label>
                  <Field className="input" id="email" type="text" name="email"/>
                </div>
                <div className="field">
                  <label className="label" htmlFor="subject">Subject :</label>
                  <Field className="input" id="subject" type="text" name="subject"/>
                </div>
                <div className="field">
                  <label className="label" htmlFor="text">Text :</label>
                  <textarea class="textarea" id="text" placeholder="Text" name="text"></textarea>
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
