import React, { Component } from 'react';
import cowsay from 'cowsay-browser'

  //cowsay
class CowsayPage extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      return (
        <pre>
            {cowsay.say({ text: 'hi there!' })}
        </pre>
      )
    }
  }
  
  export default CowsayPage