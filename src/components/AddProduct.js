import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import Hero from './Hero'
import { Navigate } from "react-router-dom";


function Settings() {
  return (
    <>
      <Hero title="Add Product" />
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
              <Form>
                <div className="field">
                  <label className="label" htmlFor="Name">Product name :</label>
                  <Field className="input" id="Name" type="text" name="Name" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="price">Price: </label>
                  <Field className="input" id="price" type="number" name="price" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="shortDesc">Short description: </label>
                  <Field className="input" id="shortDesc" type="text" name="shortDesc" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="description">Description: </label>
                  <Field className="input" id="description" type="text" name="description" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="stock">Available in Stock: </label>
                  <Field className="input" id="stock" type="number" name="stock" />
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
