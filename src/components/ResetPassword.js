import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate, useParams } from "react-router-dom";
import Hero from './Hero'
import { useState, useEffect } from 'react';


function ResetPassword() {
  let [error, setError] = useState(null);
  let [userEmail, setUserEmail] = useState(null);
  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    fetch(`${environment.serverUrl}/resetPassword?token=${id}`)
      .then((response) => response.json())
      .then((response) => {
        if (!response.userEmail) {
          // error
          return;
        }
        const { userEmail } = response;
        setUserEmail(userEmail);
      })
  })
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
            fetch(`${environment.serverUrl}/updatepassword`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...values, userEmail })
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
