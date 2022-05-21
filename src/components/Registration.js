import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Settings() {
  let [error, setError] = useState(null);
  let navigate = useNavigate();
  return (
    <>
      <Hero title="Sign up" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
          <>
             <ToastContainer/>
          </>
        <div className="column is-one-third">
          <Formik initialValues={{
            fullName: '',
            username: '',
            email: '',
            emailConfirmation: '',
            password: '',
            city: '',
            address: ''
          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/register`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                else{
                  toast("You have successfully registered ! Please log in !");
                }
                navigate('/login');
              })
              .then(result => {
                setError(result);
                setSubmitting(false);
              })

          }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="field">
                  <label className="label" htmlFor="fullName">Full Name:</label>
                  <Field className="input" id="fullName" type="text" name="fullName" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="username">Username</label>
                  <Field className="input" id="username" type="text" name="username" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="email">Email</label>
                  <Field className="input" id="email" type="email" name="email" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="emailConfirmation">Confirm Email</label>
                  <Field className="input" id="emailConfirmation" type="email" name="emailConfirmation" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">Password</label>
                  <Field className="input" id="password" type="password" name="password" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="city">City</label>
                  <Field className="input" id="city" as="select" name="city">
                    <option value=""></option>
                    <option value="Kaunas">Kaunas</option>
                    <option value="Vinius">Vilnius</option>
                  </Field>
                </div>
                <div className="field">
                  <label className="label" htmlFor="address">Address</label>
                  <Field className="input" id="address" type="text" name="address" />
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

export default Settings;
