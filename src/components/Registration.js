import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import Hero from './Hero'

function Settings() {
  return (
    <>
      <Hero title="Sign up" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
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
              .then((value) => value.json())
              .then(result => {
                alert(JSON.stringify(result, null, 2));
                setSubmitting(false);
              })
          }}>
            {({ isSubmitting }) => (
              <Form>
                <div className="field">
                  <label className="label" htmlFor="fullName">Full Name:</label>
                  <Field className="input" id="fullName" type="text" name="fullName" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="username">username</label>
                  <Field className="input" id="username" type="text" name="username" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="email">e-mail</label>
                  <Field className="input" id="email" type="email" name="email" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="emailConfirmation">confirm e-mail</label>
                  <Field className="input" id="emailConfirmation" type="email" name="emailConfirmation" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">password</label>
                  <Field className="input" id="password" type="password" name="password" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="city">city</label>
                  <Field className="input" id="city" as="select" name="city">
                    <option value=""></option>
                    <option value="Kaunas">Kaunas</option>
                    <option value="Vinius">Vilnius</option>
                  </Field>
                </div>
                <div className="field">
                  <label className="label" htmlFor="address">address</label>
                  <Field className="input" id="address" type="text" name="address" />
                </div>
                <button className="button is-primary is-outlined is-pulled-right" type="submit" disabled={isSubmitting}>Continue</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Settings;
