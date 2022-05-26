import { useNavigate } from "react-router-dom";
import withContext from "../withContext";

function MyAccount(props) {

  let navigate = useNavigate();

  const onChagePassword = () => {
      navigate("/changepassword");
  }

  const onChageInfo = () => {
      navigate("/changeinformation");
  }

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body" >
          <div className="container has-text-centered">
            <p className="title" >
              Hello {props.context.user.fullName}
            </p>
            <p class="subtitle">
              My account
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <div className="box">
            <div className = "mb-3">
              <button
                className="button is-primary"
                onClick={onChagePassword}
              >
                Change Password
              </button>
            </div>
            <div className="mb-3">
              <button
                className="button is-primary"
                onClick={onChageInfo}
              >
                Change acount information
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default withContext(MyAccount);
