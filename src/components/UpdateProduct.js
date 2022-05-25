import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import Hero from './Hero'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import withContext from "../withContext";
import {ProductItem} from "./ProductItem";
import { propTypes } from 'react-bootstrap/esm/Image';

export const UpdateProduct = ({props}) => {
  let [error, setError] = useState(null);
  //let retrieve_var = props.product;


  let navigate = useNavigate();
  return (
    <>
      <Hero title="Edit Product" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Formik initialValues={{
            name:"",
            stock: "",
            price: "",
            description: "",
            picture:"",
            fk_Category: "",
            id: 0

          }} onSubmit={(values, { setSubmitting }) => {
            fetch(`${environment.serverUrl}/updateproduct`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                navigate('/products');
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
                  <label className="label" htmlFor="name">Product name :</label>
                  <Field className="input" id="name" type="text" name="name" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="price">Price: </label>
                  <Field className="input" id="price" type="number" name="price" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="stock">Available in Stock: </label>
                  <Field className="input" id="stock" type="number" name="stock" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="description">Description: </label>
                  <Field className="input" id="description" type="text" name="description" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="picture">Picture: </label>
                  <Field className="input" id="picture" type="text" name="picture" />
                </div>
                <div className="field">
                <label className="label" htmlFor="fk_Category">Category:</label>
                  <Field className="input" id="fk_Category" as="select" name="fk_Category">
                  <option value="1">Telefonai</option>
                  <option value="2">Kompiuterinė technika</option>
                  <option value="3">Virtuvinė įranga</option>
                  <option value="4">Mašinų aksesuarai</option>
                  <option value="5">Išmaniųjų namų įranga</option>
                  <option value="6">Televizoriai</option>
                  <option value="7">Žaidimų įranga</option>
                  <option value="8">Laisvalaikis</option>
                </Field>
                </div>
                <div className="field">
                  <label className="label" htmlFor="id">id: </label>
                  <Field className="input" id="id" type="text" name="id" />
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

export default UpdateProduct;
