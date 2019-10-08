import React, { Component } from 'react';

const HeaderStyle= {
    textAlign: "center",
    color: "beige",
    letterSpacing: "3px",
    fontFamily: "Helvetica"

}
class Header extends Component {
    render() {
        return (
            <h1 style={HeaderStyle}>Welcome Back!</h1>
        )
    }
}

export default Header;
