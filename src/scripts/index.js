import 'regenerator-runtime'
import '../styles/responsive.css'
import '../styles/styles.css'
import CONFIG from './globals/config'
import swRegister from './utils/sw-registration'
import WebSocketInitiator from './utils/websocket-initiator'
import App from './views/app'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})
