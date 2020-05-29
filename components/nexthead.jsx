import React, { Component } from 'react';
import Head from 'next/head';
class NextHead extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
                <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <p>Hello world!</p>
            </div>
        )
    }
}
export default NextHead