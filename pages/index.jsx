import React, { Component } from 'react';
import dynamic from 'next/dynamic';
// import Welcome from '../components/welcome';
// import CowsayPage from '../components/cowsay';
// import WithLess from '../components/withless';
// import NextHead from '../components/nexthead';
// import RoutePage from '../components/route';
const Welcome = dynamic(import('../components/welcome'));
const CowsayPage = dynamic(import('../components/cowsay'))
const WithLess = dynamic(import('../components/withless'))
const NextHead = dynamic(import('../components/nexthead'))
const RoutePage = dynamic(import('../components/route'))
const WelcomeWithLoading = dynamic(import('../components/welcome'),{
  loading:() => <p>...</p>
})
//Index
class Index extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      return (
        <div>
           <Welcome />
           <WelcomeWithLoading />
           <CowsayPage />
           <WithLess />
           <NextHead />
           <RoutePage />
        </div>
      )
    }
  }
  
  export default Index