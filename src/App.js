import React, { Fragment, Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
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
//withRouter gives the App component access to this.props.history and can redirect the user.
export default withRouter(App);