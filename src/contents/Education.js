import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Social from '../components/Social';

class Education extends Component {
    render() {
        return (
        <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard title="M.Tech Software Engineering" where="VTU University" from="July 2013" to="July 2015"/>
        <Widecard title="B.Tech " where="VTU University" from="July 2008" to="July 2012"/>
        <Social />
        </div>
        )
    }
}

export default Education
