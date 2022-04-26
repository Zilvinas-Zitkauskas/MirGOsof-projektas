import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';


function ChangeInformation(){

  const [buttonText, setButtonText] = useState("Change information"); 

  const changeText = (text) => setButtonText(text);


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
            newPassword: '',
            confirmPassword: '',
          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/changeInformation`,
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
                  <label className="label" htmlFor="FullName">Full name</label>
                  <Field className="input" id="FullName" type="text" name="FullName" />
                </div>

                <div className="field">
                  <label className="label" htmlFor="Username">Username</label>
                  <Field className="input" id="Username" type="text" name="Username" />
                </div>

                <div className="field">
                  <label className="label" htmlFor="Email">Email</label>
                  <Field className="input" id="Email" type="text" name="Email" />
                </div>

                <div className="field">
                  <label className="label" htmlFor="Adress">Adress</label>
                  <Field className="input" id="Adress" type="text" name="Adress" />
                </div>

                <div className="field">
                  <label className="label" htmlFor="City">City</label>
                  <Field className="input" id="City" type="text" name="City" />
                </div>

                <button className="button is-primary is-outlined is-pulled-right" onClick={() => changeText("Information has been changed!")}>{buttonText}</button>

                {error?.error && <div className="has-text-danger">{error?.error}</div>}

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
export default ChangeInformation;