import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import { BrowserRouter } from 'react-router-dom'

import language_tr from './tools/languages/tr/tr.json'
import language_en from './tools/languages/us/us.json'

const defaultLanguageIsSet = () => {
  let browserLanguage = window.navigator.language

  if (browserLanguage.indexOf("en") === 0) {
    return "us"
  } else if (browserLanguage.indexOf("tr") === 0) {
    return "tr"
  } else {
    return "us"
  }
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: defaultLanguageIsSet(),
  resources: {
    tr: {
      translation: language_tr
    },
    us: {
      translation: language_en
    }
  },
})

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'))