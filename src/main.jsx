import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App'

const domain = "dev-nry05ikrt5q6ltyd.us.auth0.com"
const clientId = "YdLLP0zOepetUwZtR1Y1IciowBeUo1dt"

console.log(domain)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
)
