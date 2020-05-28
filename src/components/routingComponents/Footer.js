//import the React library
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <nav className="nav nav-justified w-100 justify-content-between">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/all-challenges'>All challenges</Link>
                <Link className="nav-link" to='/clicked'>Clicked</Link>
                <Link className="nav-link" to='/games'>Games</Link>
                <Link className="nav-link" to='/temperature-converter'>Temperature converter</Link>
                <Link className="nav-link" to='/people'>People</Link>
                <Link className="nav-link" to='/transforms'>Transforms</Link>
            </nav>
        );
    }
}

export default Footer;