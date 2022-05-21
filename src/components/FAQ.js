import { Formik, Form, Field } from 'formik';
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import Hero from './Hero'
import { useState } from 'react';

function About() {
  let [error, setError] = useState(null);

  let navigate = useNavigate();
  return (
    <>
      <Hero title="Frequently asked question" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="field">
        <label className="label" style={{ fontSize:18}} htmlFor="text">1. Where is my order?</label>
        <label className="text" htmlFor="text">You can check the tracking link we sent in your despatch email to
          view the latest tracking information.</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">2. What are my delivery options?</label>
        <label className="text" htmlFor="text">We deliver all around the world!</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">3. Something is missing from my order.</label>
        <label className="text" htmlFor="text">At certain times we are unable to send all of the items that you have 
          ordered. If this is the case, we will send you an email letting you know of any items that are missing from your order.</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">4. Do i have to pay customs/import charges?</label>
        <label className="text" htmlFor="text">If your order is being delivered within the EU there will be no import charges to
         order value of 100€. For orders deliveries outside the EU, import charges may apply regardless of the order value.</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">5. My order has been split.</label>
        <label className="text" htmlFor="text">We have split your order so that we can get it out to you faster.</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">6. What do i do if my item arrives faulty or damaged?</label>
        <label className="text" htmlFor="text">If an item arrives damaged or faulty then please contact our
         Customer Service team who will arrange and discuss your return options.</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">7. Can i have express delivery?</label>
        <label className="text" htmlFor="text">Order by midnight to receive your parcel within 2 days of the following day!</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">8. Why has my order been cancelled?</label>
        <label className="text" htmlFor="text">Sorry your order was cancelled.
        If the item you've ordered is out of stock at the time of packing your order, we need to cancel it.</label>
        <br></br>
        <br></br>
        <label className="label" style={{ fontSize:18}} htmlFor="text">9. COVID-19 safety</label>
        <label className="text" htmlFor="text">We are fully committed to ensuring the safety of our customers and colleagues in all of our stores!</label>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
    </>
  )
}


export default About;