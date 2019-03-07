import React from 'react';
import Button from '@material-ui/core/Button';
import { Field } from 'redux-form'
import renderTextField from '../material-redux-form-components/renderTextField';
import { connect } from 'react-redux';
import formValueSelector from 'redux-form/es/formValueSelector';

const CustomesDutiesAmount = ({ onRemove, amountName }) => (
  <div>
    <h5 className="mt-3">
      Customes/Duties Amount
      <Button
        type="button"
        title="Remove Member"
        color="secondary"
        onClick={ onRemove }>
        Remove
      </Button>
    </h5>
    <Field
      name={ amountName }
      type="text"
      component={ renderTextField }
      label="Amount"
    />
  </div>

)

const DeliveryAmount = ({ onRemove, amountName }) => (
  <div>
    <h5 className="mt-3">
      Delivery Amount
      <Button
        type="button"
        title="Remove Member"
        color="secondary"
        onClick={ onRemove }>
        Remove
      </Button>
    </h5>
    <Field
      /*name={ `${ additionalField }.amount` }*/
      name={ amountName }
      type="text"
      component={ renderTextField }
      label="Amount"
    />
  </div>

)

const renderAdditionalFields = ({ additionalFields, fields, meta: { error, submitFailed } }) => (
  <div>
    <div className="mt-4">
      <Button style={ { marginRight: 10 } } color="primary"
              onClick={ () => fields.push({ type: 'customs-duties-amount' }) }>
        Add Customs/ Duties Amount
      </Button>
      <Button color="primary"
              onClick={ () => fields.push({ type: 'delivery-amount' }) }
      >Add Delivery Amount</Button>
      { submitFailed && error && <span>{ error }</span> }
    </div>
    { fields.map((f, index) => {
      switch (additionalFields[index].type) {
        case 'customs-duties-amount': {
          return (
            <div key={ index }>
              <CustomesDutiesAmount amountName={ `${ f }.amount` } onRemove={ () => fields.remove(index) } />
            </div>
          )
        }
        case 'delivery-amount': {
          return (
            <div key={ index }>
              <DeliveryAmount amountName={ `${ f }.amount` } onRemove={ () => fields.remove(index) } />
            </div>
          )
        }
        default: {
          return null
        }
      }
    })
    }
  </div>
)

const mapStateToProps = (state) => {
  const selector = formValueSelector('taxCaculatorForm'); // <-- same as form name
  return {
    additionalFields: selector(state, 'additionalFields')
  }
}

export default connect(mapStateToProps)(renderAdditionalFields);