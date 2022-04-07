import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';


function ResetPassword() {
  let [error, setError] = useState(null);
  let navigate = useNavigate();
  return (
    <>
      <Hero title="Reset password" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Formik initialValues={{
            newPassword: '',
            confirmPassword: '',
          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/resetpassword`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                navigate('/login');
              })
              .then(result => {
                setError(result);
                setSubmitting(false);
              })
          }}>
            {({ isSubmitting }) => (
              <Form>
                <div className="field">
                  <label className="label" htmlFor="newPassword">New password</label>
                  <Field className="input" id="password" type="password" name="newPassword" />
                </div>

                <div className="field">
                  <label className="label" htmlFor="confirmPassword">Confirm new password</label>
                  <Field className="input" id="password" type="password" name="confirmPassword" />
                </div>
                <button className="button is-primary is-outlined is-pulled-right" type="submit" disabled={isSubmitting}>Continue</button>

                {error?.error && <div className="has-text-danger">{error?.error}</div>}

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default ResetPassword;
