import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './index.css'
import { ListingsProvider } from './contexts/ListingsContext'
import { ProfileProvider } from './contexts/ProfileContext'
import { ListingItemProvider } from './contexts/ListingItemContext'

ReactDOM.render(
    <BrowserRouter>
        <ListingItemProvider>
            <ListingsProvider>
                <ProfileProvider>
                    <App />
                </ProfileProvider>
            </ListingsProvider>
        </ListingItemProvider>
    </BrowserRouter>
    , document.getElementById('root')
);