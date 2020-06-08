import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLoginHelper = this.demoLoginHelper.bind(this);
  }

  componentDidMount() {
    this.props.resetErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  signup() {
    if (this.props.formType === "Create Account") {
      return <h1>Join Strava today, it's Free!</h1>;
    } else {
      return <h1>Log In</h1>;
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: "demo_user", password: "password123" };
    const userNameArray = user.username.split("");
    const passwordArray = user.password.split("");

    this.setState({ username: "", password: "" }, () => {
      this.demoLoginHelper(userNameArray, passwordArray);
    });
  }

  demoLoginHelper(userNameArray, passwordArray) {
    if (userNameArray.length > 0) {
      this.setState(
        {
          username: this.state.username + userNameArray.shift(),
        },
        () => {
          window.setTimeout(
            () => this.demoLoginHelper(userNameArray, passwordArray),
            75
          );
        }
      );
    } else if (passwordArray.length > 0) {
      this.setState(
        {
          password: this.state.password + passwordArray.shift(),
        },
        () => {
          window.setTimeout(
            () => this.demoLoginHelper(userNameArray, passwordArray),
            75
          );
        }
      );
    } else {
      this.props.demoLogin(this.state);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const signinPage = () => (
      <div className="login-form-container">
        <header className="header">
          <div className="main-logo-div">
            <Link to="/">
              <img
                className="main-logo"
                src={window.main_logo_orange}
                alt="main-logo"
              />
            </Link>
          </div>

          <div className="signup-button-login">
            <Link to="/signup">Sign Up</Link>
          </div>
        </header>

        <div className="container">
          <div className="divider" />

          <div className="main-body-login">
            <div className="login-container">
              <div className="login-message">{this.signup()}</div>

              <div className="error-messages-1">{this.renderErrors()}</div>

              <form className="login-form" onSubmit={this.handleSubmit}>
                <label>
                  <input
                    className="username-form"
                    type="text"
                    placeholder="username"
                    onChange={this.update("username")}
                  />
                </label>

                <br />
                <br />

                <label>
                  <input
                    className="password-form"
                    type="password"
                    placeholder="password"
                    onChange={this.update("password")}
                  />
                </label>

                <br />

                <input
                  className="session-submit"
                  type="submit"
                  value="Log In"
                />

                <br />
                <input
                  className="demo-submit"
                  type="submit"
                  value="Demo User"
                  onClick={this.demoLogin}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const signupPage = () => (
      <div className="signup-form-container">
        <header className="header">
          <div className="main-logo-div-signup">
            <Link to="/">
              <img
                className="main-logo"
                src={window.main_logo_orange}
                alt="main-logo"
              />
            </Link>
          </div>

          <div className="login-button-8">
            <Link to="/login">Login</Link>
          </div>
        </header>

        <div className="outer-container">
          <div className="divider" />

          <div className="main-body">
            <div className="signup-message">{this.signup()}</div>

            <div className="error-messages-2">{this.renderErrors()}</div>

            <form className="signup-form" onSubmit={this.handleSubmit}>
              <label>
                <input
                  className="email-form"
                  type="text"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>

              <br />

              <label>
                <input
                  className="username-form"
                  type="text"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>

              <br />

              <label>
                <input
                  className="password-form"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>

              <br />

              <label>
                <input
                  className="first-name-form"
                  type="text"
                  placeholder="first name"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                />
              </label>

              <br />

              <label>
                <input
                  className="last-name-form"
                  type="text"
                  placeholder="last name"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                />
              </label>

              <br />

              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
            </form>
          </div>
        </div>
      </div>
    );

    return this.props.formType === "Create Account"
      ? signupPage()
      : signinPage();
  }
}

export default SessionForm;
