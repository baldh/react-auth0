import LoginButton from './components/login-button'
import LogoutButton from './components/logout-button'
import Profile from './components/profile'
import {useAuth0} from '@auth0/auth0-react'

export default function App() {
  const {isLoading, error} = useAuth0()
  return (
    <main>
      <h1>Auth0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...........</p>}
      {!error && !isLoading && <>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </>}
    </main>
  )
}