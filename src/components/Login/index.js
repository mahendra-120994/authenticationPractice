import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'

const username = 'rahul' // valid data
const password = 'rahul@2021'
// try changing username and password

class Login extends Component {
  state = {showErrorMsg: false, errorMsg: ''}

  onLoginFails = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props

    Cookie.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onLogin = async () => {
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFails(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    const token = Cookie.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login_page">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
        {showErrorMsg && <p>{errorMsg}</p>}
      </div>
    )
  }
}
export default Login
