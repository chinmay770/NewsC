import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                    <Link className="navbar-brand" to="/">NewsC</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
                            </li>
                                <Link className="nav-link" to="/business">business</Link>
                                <Link className="nav-link" to="/entertainment">entertainment</Link>
                                <Link className="nav-link" to="/general">general</Link>
                                <Link className="nav-link" to="/health">health</Link>
                                <Link className="nav-link" to="/science">science</Link>
                                <Link className="nav-link" to="/sports">sports</Link>
                                <Link className="nav-link" to="/technology">technology</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
