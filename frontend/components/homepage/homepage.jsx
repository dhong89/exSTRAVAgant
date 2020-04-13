import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: 'demo_user',
            password: 'password123'
        }

        if (e.currentTarget.innerHTML === "Use Demo User"){
            const demoUser = {
                username: 'demo_user',
                password: 'password123'
            }
            return this.props.processForm(demoUser)
        } else {
            this.props.processForm(user);
        }
    }

    render () {
        const sessionPage = () => (

        <div className='view'>

            <header className='header'>

                <div className='main-logo-div'>
                    <img className='main-logo' src={window.main_logo_orange} alt="main-logo" />
                </div>
                
                <div className="login-button">
                    <Link to="/login">Login</Link>
                </div>

  
            </header>

            <div className='main-container'>
                <h2>The #1 app for runners and cyclists</h2>
            </div>


            <div className='col col-2-3'>

                <img className='homepage-logo' src={window.logo} alt="logo" />


            </div>


            <div className="col col-1-3">
                <div className='buttons-container'>
                
                    <div className='demo-user-btn'>
                            <Link  to="/login">Use Demo User</Link>
                    </div>

                        <div className="divider" /> 

                    <div className='sign-up-container'>
                        <img className='email-logo' src={window.email} alt="email" />

                         <div className='signup-btn'>
                             <Link to="/signup">Use my Email</Link>
                        </div>
                    </div>
                            <div className="divider" /> 

                        <p className='terms-conditions'>
                            By signing up for Strava, you agree to the  <a href="">Terms of Service.</a> 
                             View our <a href="">Privacy Policy.</a>  
                        </p>



                            <div className="divider" /> 

                    <label className='login-redirect'>Already a member?
                        <Link to="/login">Log in</Link>
                    </label>

                </div>
            </div>

            <div className="footer">

                    <div className='main-logo-div-white'>
                        <img className='main-logo' src={window.main_logo_white} alt="main-logo" />
                    </div>

            </div>


           
        </div>



    )

    return sessionPage();
    }
}





export default HomePage;