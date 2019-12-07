import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './index.css'
import { ProfileProvider } from './contexts/ProfileContext'
import JavaScriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

JavaScriptTimeAgo.locale(en)


ReactDOM.render(
    <BrowserRouter>
        <ProfileProvider>
            <App />
        </ProfileProvider>
    </BrowserRouter>
    , document.getElementById('root')
);