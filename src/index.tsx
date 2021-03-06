import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import materialUiTheme from './theme'
import store from './redux/store'

import App from './pages/App'

import reportWebVitals from './reportWebVitals'

import './index.css'

ReactDOM.render(
  <ThemeProvider theme={materialUiTheme}>
    <CssBaseline />
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
