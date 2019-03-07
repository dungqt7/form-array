import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/es/Button/Button';
import TaxCaculatorForm from './tax-caculator/TaxCaculatorForm';
import TaxCaculatorPage from './tax-caculator/TaxCaculatorPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TaxCaculatorPage />
      </div>
    );
  }
}

export default App;
