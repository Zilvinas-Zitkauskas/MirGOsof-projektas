import Hero from './Hero'
import { NavLink } from 'react-router-dom';

function MyAccount() {

  return (
    <>
      <Hero title="My account" />
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
        <div className="field">
        <NavLink to="/changepassword">
                  Change Password
        </NavLink> 
        </div>
        <div className="field">
        <NavLink to="/changeinformation">
                  Change acount information
        </NavLink>
        </div>
        </div>
      </div>
    </>
  )
}


export default MyAccount;
