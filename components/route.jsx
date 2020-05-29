import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
//welcome
const handler = () =>{
    Router.push({
        pathname:'/about',
        query: {name: 'CYTzz'}
    })
}
class RoutePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
        <div>
            <Link href={{ pathname: '/about', query: { name: 'CYT' }}}>
                <a>link to page withRouter</a>
            </Link>
            <div onClick={handler}>Use Router.push</div>
            {/* <Link href="/router/about">link to about page</Link> */}
        </div>
    )
  }
}

export default RoutePage