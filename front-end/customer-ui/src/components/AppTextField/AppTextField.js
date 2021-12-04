import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import _ from "lodash"

export default function ({ field = {}, control, readOnly, multiline, rows, onKeyDown = () => { } }) {

    const ext = {};
    if (multiline) {
        ext['multiline'] = true;
        ext['rows'] = rows || 3;
    }
    // if (_.get(errors, [field.id, 'message'], null)) {
    //     ext['helperText'] = tErr(_.get(errors, [field.id, 'message'], 'Error'));
    // }

    return (
        <Controller
            as={
                <TextField
                    variant="outlined"
                    required={_.get(field, ['required'], false)}
                    fullWidth
                    id={field.id}
                    type={field.type || 'text'}
                    label={field.label}
                    autoComplete='off'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: readOnly || false,
                    }}
                    {...ext}
                    onKeyDown={onKeyDown}
                    
                />
            }
            name={field.id}
            defaultValue={field.defaultValue || ''}
            control={control}
        />
    );
}
