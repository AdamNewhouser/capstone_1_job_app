import React, { Component } from 'react'

export default class WelcomePage extends Component {

    handleToEducationClicked = (e) => {
        console.log('button was clicked')
    }

    render() {
        return(
            <div className='WelcomePage'>
                <h2>Welcome to the Job App!</h2>
                <p className='welcome_explain'>Before you can get started searching for your new career, a detailed profile is a must!</p>
                <p className='welcome_explain'>Your profile is essentially your resume. Let's build your profile!</p>
                <h3>Step 1:</h3>
                <button type='button' onClick={(e) => this.handleToEducationClicked(e)}></button>
            </div>
        )
    }
}