import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';
import withContext from "../withContext";


function ChangeInformation(props){
  let [error, setError] = useState(null);
  let navigate = useNavigate();
  return (
    <>
      <Hero title="Change account information" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Formik initialValues={{
            newFullName: props.context.user.fullName,
            newUsername: props.context.user.username,
            userEmail: props.context.user.email,
            newCity: props.context.user.city,
            newAddress: props.context.user.address
          }} onSubmit={(values, { setSubmitting }) => {
            console.log({values});
            fetch(`${environment.serverUrl}/changeinformation`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                navigate('/myaccount');
              })
              .then(result => {
                setError(result);
                setSubmitting(false);
              })
          }}>
            {({ isSubmitting }) => (
              <Form>
                <div className="field">
                  <label className="label" htmlFor="newFullName">Full name</label>
                  <Field className="input" id="newFullName" type="text" name="newFullName" text={props.context.user.fullName}/>
                </div>

                <div className="field">
                  <label className="label" htmlFor="newUsername">Username</label>
                  <Field className="input" id="newUsername" type="text" name="newUsername" text={props.context.user.username}/>
                </div>

                <div className="field">
                  <label className="label" htmlFor="userEmail">Email</label>
                  <Field className="input" id="userEmail" type="text" name="userEmail" text={props.context.user.email} disabled/>
                </div>

                <div className="field">
                  <label className="label" htmlFor="newAddress">Address</label>
                  <Field className="input" id="newAddress" type="text" name="newAddress" text={props.context.user.address}/>
                </div>

                <div className="field">
                  <label className="label" htmlFor="newCity">City</label>
                  <Field className="input" id="newCity" type="text" name="newCity" text={props.context.user.city}/>
                </div>

                <button className="button is-primary is-outlined is-pulled-right" type="submit" disabled={isSubmitting}>Save</button>

                {error?.error && <div className="has-text-danger">{error?.error}</div>}

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default withContext(ChangeInformation);