import React, { Component } from 'react'
import logo from '../images/logo1.svg'
import { FaSistrix } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    
    render() {
        
        return (
            <nav className="header">  
               <Link to ="/">
                    <img className="header_icon" src={logo} alt="logo"/>
                </Link>
                <div className="header_center">
                    <input type="text" placeholder="Start your search.."/>
                    <FaSistrix/>
                </div>
                <div className="header_right">
                    <FaRegUserCircle className="user_logo"/>
                    <p>Login/SignUp</p>
                </div>
            </nav>
        )
    }
}
