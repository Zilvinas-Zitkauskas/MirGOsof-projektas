import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';

function PasswordChange() {
  let [error, setError] = useState(null);
  let [message, setMessage] = useState(null);

  let navigate = useNavigate();
  return (
    <>
      <Hero title="Remind password" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Formik initialValues={{
            email: ''
          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/forgotpassword`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                setMessage("Check your email, for password reset link.")
              })
              .then(result => {
                setError(result);
                setSubmitting(false);
              })
          }}>
            {({ isSubmitting }) => (
              <Form>
                <div className="field">
                  <label className="label" htmlFor="email">Email</label>
                  <Field className="input" id="email" type="email" name="email" />
                </div>
                <button className="button is-primary is-outlined is-pulled-right" type="submit" disabled={isSubmitting}>Submit</button>

                {error?.error && <div className="has-text-danger">{error?.error}</div>}
                {message && <div className="has-text-success">{message}</div>}

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}



export default PasswordChange;
