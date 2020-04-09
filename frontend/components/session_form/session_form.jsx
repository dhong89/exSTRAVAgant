import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        // debugger    
        super(props);
        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    signup(){
        if (this.props.formType === 'Create Account'){
            return <h1>Join Strava today, it's Free.</h1> 
        } else {
            return <h1>Log In</h1> 
        }
    }

    render () {
        const signinPage = () => (
            <div className="login-form-container">

                <header className='header'>

                    <div className='main-logo-div'>
                        <img className='main-logo' src='' alt="main-logo" />
                    </div>

                    <div className="signup-button">
                        <Link to="/signup">Sign Up</Link>
                    </div>


                </header>

                <div className='container'>
                    <div className="divider" /> 
                    
                    <div className='main-body'>
                        <div className='login-message'>
                            {this.signup()}
                        </div>


                        <form className='login-form' onSubmit={this.handleSubmit}>

                            <label>
                            <input  
                                className='username-form'
                                type="text" 
                                placeholder="username" 
                                onChange={this.update('username')}
                                />
                            </label>

                            <br/>
                            <br/>

                            <label>
                                <input
                                    className='password-form'
                                    type="password"
                                    placeholder="password"
                                    onChange={this.update('password')}
                                />
                            </label>

                            <br/>
                            <br/>
    
                            <input className="session-submit" type="submit" value='Log In' />
                        </form>
                    </div>
                </div>
            </div>
        );

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
        const signupPage = () => (
            <div className="signup-form-container">
                
                <header className='header'>

                    <div className='main-logo-div'>
                        <img className='main-logo' src='' alt="main-logo" />
                    </div>

                    <div className="login-button">
                        <Link to="/login">Login</Link>
                    </div>


                </header>

                <div className='top-container'>
                    {this.signup()}
                </div>
             

                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    
                    <br/>

                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>

                    <br />

                    <label>Firstname:
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                    </label>
                    
                    <br />

                    <label>Lastname:
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                        />
                    </label>

                    <br />

                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>

                    <br />

                    <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        );



        return this.props.formType === 'Create Account' ? signupPage() : signinPage();
        
    }
}

export default SessionForm;
