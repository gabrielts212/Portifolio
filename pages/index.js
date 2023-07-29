import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Body from "@/src/components/Body/Body";
import BodyProject from "@/src/components/BodyProject/BodyProject";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './about';
// import Navigation from './../src/components/Navigation';

export default function Home() {
  return (
    // <Router>
    // <Navigation />
    // <Switch>
      <div>
      <Header/>
      <BodyProject/>
      <Body />
      <Footer/>
      </div>

    
  );
}
