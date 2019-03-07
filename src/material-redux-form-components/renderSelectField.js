import React from 'react'
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel';
import Select from '@material-ui/core/es/Select/Select';
import FormHelperText from '@material-ui/core/FormHelperText'


const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{ touched && error }</FormHelperText>
  }
}

const renderSelectField = ({
                             input,
                             label,
                             meta: { touched, error },
                             children,
                             ...custom
                           }) => (
  <FormControl error={ touched && error }>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      { ...input }
      { ...custom }
      inputProps={ {
        name: 'age',
        id: 'age-native-simple'
      } }
    >
      { children }
    </Select>
    { renderFromHelper({ touched, error }) }
  </FormControl>
)