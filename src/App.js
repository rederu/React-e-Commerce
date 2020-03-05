import React, { Fragment, Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal';
import Routes from './routes';

//Import routes


class App extends Component {
  render() {
    return (
      <Fragment>
          <Navbar />
            <Routes/>
          <Modal/>
      </Fragment>
    );
  }
}

export default withRouter(App);