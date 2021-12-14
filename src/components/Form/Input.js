import { TextField } from '@material-ui/core'
import React from 'react'

const Input = ({name, variant, label, value, onChange}) => {
    return (
        <TextField 
            name={name}
            variant={variant}
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
        />
    )
}

export default Input;
