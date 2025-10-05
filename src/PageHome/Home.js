import Header from './header';
import Section from './sections';
import Footer from './footer';
import { Component } from 'react';
export default class Home extends Component{
  render(){
    return (
      <>
        <Header />
        <Section />
        <Footer />
      </>
  )}
}