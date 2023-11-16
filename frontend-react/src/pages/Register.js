import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';

// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../Login.css';


const Register = () => {
    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [repeatpassError, setRepeatpassError] = useState(false);
    const [matchError, setmatchError] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const repeat_pass = event.target.elements.repeat_pass.value;
    
        // Check if title and description are empty
        if (!email) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
        if (!username) {
            setUsernameError(true);
          } else {
            setUsernameError(false);
        }
        if (!password) {
            setPasswordError(true);
          } else {
            setPasswordError(false);
          }
          if (!repeat_pass) {
            setRepeatpassError(true);
          } else {
            setRepeatpassError(false);
          }
          
          if (!email || !username || !password || !repeat_pass) {
            return;
          }
          if (password != repeat_pass) {
            setmatchError(true);
            return;
          }
        // if (!description) {
        //   setDescriptionError(true);
        // } else {
        //   setDescriptionError(false);
        // }
    
    }
  return (
    <>
        <section className="login">
            <div className="login_box">
                <div className="left">
                    <div className="top_link">
                        <a href="/">
                            <img
                                src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                                alt=""
                            />
                            
                        </a>
                    </div>
                    <div className="contact">
                        <form onSubmit={handleSubmit}>
                            <h3>SIGN IN</h3>
                            <input name="email" type="text" placeholder="EMAIL" required />
                            {emailError && <div className="error-text">Email is required</div>}
                            <input name="username" type="text" placeholder="USERNAME" required />
                            {usernameError && <div className="error-text">Username is required</div>}
                            <input name="password" type="password" placeholder="PASSWORD" required />
                            {passwordError && <div className="error-text">Password is required</div>}
                            <input name="repeat_pass" type="password" placeholder="CONFIRM PASSWORD" required />
                            {repeatpassError && <div className="error-text">Password is required</div>}
                            {matchError && <div className="error-text">Password does not match</div>}
                            <button className="submit">LET'S GO</button>
                            <div className="account2">
                               Already have an account?&nbsp;<a href="login">Log in</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="right-text">
                        <h2>RECIPE MAKER</h2>
                        <h5>A PLACE TO SHARE AND FIND RECIPES</h5>
                    </div>
                    <div className="right-inductor">
                        <img
                            src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    </>

  )
};

export default Register;