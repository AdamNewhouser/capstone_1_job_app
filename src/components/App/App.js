import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ProfilePage from '../../routes/ProfilePage/ProfilePage'
import ListingsPage from '../../routes/ListingsPage/ListingsPage'
import ListingItem from '../../routes/ListingItem/ListingItem'




class App extends Component {
  render() {
  return (
    <div className='App'>
      <header className='App__header'>
        <Header />
      </header>
      <main className='App__main'>
        <Route 
          exact 
          path ={'/'}
          component={LandingPage}
        />
        <Route 
          path={'/registration'}
          component={RegistrationPage}
        />
        <Route 
          path={'/login'}
          component={LoginPage}
        />
        <Route
          path={'/profiles/:profile.id'}
          component={ProfilePage}
        />
        <Route
          exact
          path={'/listings'}
          component={ListingsPage}
        />
        <Route
          path={'/listings/:listing.id'}
          component={ListingItem}
        />
      </main>
    </div>
  );
}}

export default App;