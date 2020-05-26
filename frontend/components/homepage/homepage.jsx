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

                <div className='main-logo-div-9'>
                        <Link to="/"><img className='main-logo' src={window.main_logo_orange} alt="main-logo" /></Link>
                </div>
                
                <div className="login-button-9">
                    <Link to="/login">Login</Link>
                </div>

            </header>

            <div className='main-container'>
                <h2>The #1 app for runners and cyclists</h2>
            </div>


            <div className='col col-2-3'>
                    <Link to="/"> <img className='homepage-logo' src={window.logo} alt="logo" /> </Link>
            </div>


            <div className="col col-1-3">
                <div className='buttons-container'>

                    <div className='demo-user-btn'>

                        <a href="https://dhong89.github.io/" target='blank'>
                            <i class="fab fa-chrome"></i>
                        </a>
                        <a href="https://github.com/dhong89/exSTRAVAgant" target='blank'>
                            <i className="fab fa-github-square" ></i>
                        </a>

                        <a href="https://www.linkedin.com/in/david-hong-53a8b768/" target='blank'>
                            <i className="fab fa-linkedin" ></i>
                        </a>
                        <a href="https://angel.co/u/david-hong-32" target='blank'>
                            <i class="fab fa-angellist"></i>
                        </a>
                    </div>
                
                    <div className='demo-user-btn'>
                        <Link  to="/login">Sign in using a Demo User</Link>
                    </div>

                    <div className="divider" /> 

                    <div className='sign-up-container'>
                        <img className='email-logo' src={window.email} alt="email" />

                         <div className='signup-btn'>
                             <Link to="/signup">Sign up using email</Link>
                        </div>
                    </div>

                        <div className="divider" /> 
                            
                        <span className='login-redirect'>Already a member? <Link to="/login">Log in</Link></span>
                        
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