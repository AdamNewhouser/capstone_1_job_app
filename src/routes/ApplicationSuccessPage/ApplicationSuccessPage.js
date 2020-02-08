import React, { Component } from 'react'


class ApplicationSuccessPage extends Component {
    render() {
        return (
            <div className='ApplicationSuccessPage'>
                <span>You have successfully applied!</span>
                <Link to='/listings'>Return to the listings page</Link>
            </div>
        )
    }
}