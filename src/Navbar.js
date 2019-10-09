import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { match, location, history } = this.props;
        var path = location.pathname;
       if (path == "/works/one") {
            var homeLink = (
                <li className="navItem homeLink"><Link to="/works">Mayer / Designer</Link></li>
            )
        } else {
            var homeLink = (
                <li className="navItem homeLink"><Link to="/">//</Link></li>
            )
        }
        return (
            <div className="navbarContainer">
                <ul className="navbar">
                    { homeLink }
                    <div className="rightLinks">
                        <li className="navItem"><Link to="/works">Works</Link></li>
                        <li className="navItem"><Link to="/about">About</Link></li>
                        <li className="navItem"><a href="#">Resume</a></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default withRouter(Navbar);