const validate = values => {
  const errors = {}
  if (!values.documentNumber) {
    errors.documentNumber = 'Required'
  }

  return errors
}

export default validate