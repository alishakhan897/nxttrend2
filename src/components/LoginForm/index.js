// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginPage extends Component {
  state = {username: '', password: '', showError: false, messsge: ''}

  UserNameField = event => {
    this.setState({username: event.target.value})
  }

  PasswordField = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const Apis = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(Apis, options)
    const data = await response.json()

    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({messsge: data.error_msg, showError: true})
    }
  }

  render() {
    const {username, password, showError, messsge} = this.state
    return (
      <div className="main-container">
        <div className="small-container">
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="trend-small"
              alt="website logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="image-height"
              alt="website login"
            />
          </div>
          <div className="trend-card">
            <div className="next-trend-photo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="logo"
                alt="website logo"
              />

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                className="image-height-small"
                alt="website login"
              />
            </div>

            <form className="form-div" onSubmit={this.SubmitForm}>
              <div>
                <label className="username-head" htmlFor="username">
                  USERNAME
                </label>
                <div>
                  <input
                    type="text"
                    id="username"
                    className="username-text"
                    value={username}
                    placeholder="Username"
                    onChange={this.UserNameField}
                  />
                </div>
              </div>
              <div>
                <label className="username-head" htmlFor="password">
                  PASSWORD
                </label>
                <div>
                  <input
                    id="password"
                    type="password"
                    className="username-text"
                    value={password}
                    placeholder="Password"
                    onChange={this.PasswordField}
                  />
                </div>
              </div>
              {showError && <p>{messsge}</p>}
              <button type="submit" className="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
