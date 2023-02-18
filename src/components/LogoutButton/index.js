import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

const LogoutButton = props => {
  const onLogout = () => {
    Cookie.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
