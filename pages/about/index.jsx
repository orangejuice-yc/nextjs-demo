import React, { Component } from 'react';
import Router from 'next/router';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const name = Router.query.name;
        return (
            <div>
               Receive a prop <span style={{'color':'red'}}>{name}</span>, This is About Page,Test for Link.
            </div>
        )
    }
}
export default About