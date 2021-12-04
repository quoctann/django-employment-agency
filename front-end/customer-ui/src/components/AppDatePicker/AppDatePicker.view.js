import React from 'react';
import { Controller } from 'react-hook-form';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PICKER_DATE_FORMAT } from './AppDatePicker.const';
import { useStyles } from "./AppDatePicker.styles"

export default function ({ field = {}, control, readOnly, size }) {
    const classes = useStyles();

    /** actions **/

    /** renders **/
    function renderDatePicker(onChange, onBlur, value) {
        let rs = (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    id={field.id}
                    format={PICKER_DATE_FORMAT.DD_MM_YYYY}
                    label={field.label}
                    value={value}
                    fullWidth
                    readOnly={readOnly}
                    size={size || 'medium'}
                    inputProps={{
                        readOnly: readOnly,
                    }}
                    onChange={(date) => {
                        onChange(date);
                    }}
                    KeyboardButtonProps={{
                        'aria-label': field.id,
                    }}
                    inputVariant={readOnly ? 'filled' : 'outlined'}
                    margin="none"
                    variant="inline"
                    views={['year', 'month', 'date']}
                    orientation="landscape"
                    className={classes.root}
                />
            </MuiPickersUtilsProvider>
        );
        return rs;
    }
    return (
        <Controller
            name={field.id}
            control={control}
            defaultValue={new Date()}
            render={({ onChange, onBlur, value }) => {
                return renderDatePicker(onChange, onBlur, value);
            }}
        />
    );
}
