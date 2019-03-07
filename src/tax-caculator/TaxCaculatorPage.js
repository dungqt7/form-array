import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaxCaculatorForm from './TaxCaculatorForm';

class TaxCaculatorPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log('Vulues Submit = ', values)
  }

  render() {
    return (
      <TaxCaculatorForm onSubmit={ this.submit } />
    );
  }
}

export default TaxCaculatorPage;
