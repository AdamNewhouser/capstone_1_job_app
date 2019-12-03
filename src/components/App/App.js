import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ProfilePage from '../../routes/ProfilePage/ProfilePage'
import ListingsPage from '../../routes/ListingsPage/ListingsPage'
import ListingItem from '../../routes/ListingItem/ListingItem'
import NewListingPage from '../../routes/NewListingPage/NewListingPage'
import WelcomePage from '../../routes/WelcomePage/WelcomePage'


class App extends Component {
  state = { 
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  
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
          render={ props => <RegistrationPage {...props} />}
        />
        <Route 
          path={'/login'}
          render={ props => <LoginPage {...props} />}
        />
        <Route
          path={'/profiles/:profileId'}
          component={ProfilePage}
        />
        <Route
          exact
          path={'/listings'}
          component={ListingsPage}
        />
        <Route
          path={'/listings/:listingId'}
          component={ListingItem}
        />
        <Route
          path={'/new_listing'}
          render={ props => <NewListingPage {...props} />}
        />
        <Route
          path={'/welcome'}
          render={ props => <WelcomePage {...props} />}
        />  
      </main>
    </div>
  );
}}

export default App;