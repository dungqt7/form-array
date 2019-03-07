import FormControlLabel from '@material-ui/core/es/FormControlLabel/FormControlLabel';
import Checkbox from '@material-ui/core/es/Checkbox/Checkbox';
import React from 'react';


const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={ input.value ? true : false }
          onChange={ input.onChange }
        />
      }
      label={ label }
    />
  </div>
)