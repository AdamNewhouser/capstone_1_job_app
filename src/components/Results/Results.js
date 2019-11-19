import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Results.css'

export default class Results extends Component {
    render() {
        return (

            
                <li className='results-item'>
                    <Link className='link-container' to={'/listings/:listing.id'}>
                    <h3>item-title</h3>
                    <p>item-description</p>
                    <p>Salary: item-pay</p>
                    </Link>
                </li>
           
        )
    }

}
