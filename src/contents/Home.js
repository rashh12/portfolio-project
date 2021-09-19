import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/logo.png';
import Social from '../components/Social'
class Home extends Component {
render() {
    return (
        <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect className="typingeffect" text={['I am Rachana KB, Software Quality Analyst']} speed={50} />
        <Social />
        </div>
    )
}
}
export default Home