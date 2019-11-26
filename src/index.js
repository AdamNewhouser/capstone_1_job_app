import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './index.css'
import { ProfileProvider } from './contexts/ProfileContext'


ReactDOM.render(
    <BrowserRouter>
        <ProfileProvider>
            <App />
        </ProfileProvider>
    </BrowserRouter>
    , document.getElementById('root')
);