import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import renderTextField from '../material-redux-form-components/renderTextField';
import validate from './validate';
import AdditionalFieldMenu from './AdditionalFieldMenu';
import FieldArray from 'redux-form/es/FieldArray';
import renderAdditionalField from './renderAdditionalField';


function TaxCaculatorForm(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="mb-5">
        <Field name="documentNumber" component={ renderTextField } label="Document number" />
        <FieldArray name="additionalFields" component={renderAdditionalField} />

        { /*<AdditionalFieldMenu></AdditionalFieldMenu>*/ }
      </div>



      <div>
        <Button className="mt-5" variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

TaxCaculatorForm = reduxForm({
  // a unique name for the form
  form: 'taxCaculatorForm',
  validate
})(TaxCaculatorForm)

export default TaxCaculatorForm;


