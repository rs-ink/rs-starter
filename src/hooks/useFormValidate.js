import {useCallback, useMemo, useState} from 'react';
import validate from 'validate.js';

export function useFormValidate({schema, values: _values = {}}) {
    const [values, setValues] = useState(_values);
    const [touched, setTouched] = useState({});
    const errors = useMemo(() => validate(values, schema, {fullMessages: false}), [values]);
    const isValid = useMemo(() => !errors, [errors]);

    const handleChange = event => {
        if ("function" === typeof event.persist) {
            event.persist();
        }
        setTouched(touched => ({
            ...touched,
            [event.target.name]: true
        }));
        setValues(v => ({...v, [event.target.name]: checkTypeResult(event)}))
    };
    const hasError = useCallback(
        field => {
            return !!(touched[field] && errors && errors[field]);
        }, [touched, errors]
    );
    const errorInfo = useCallback(field => {
        return hasError(field) ? errors[field][0] : null
    }, [errors]);

    const value = useCallback(filed => {
        return values[filed] || '';
    }, [values]);
    return {values, hasError, isValid, handleChange, errorInfo, value, setValues}
}

function checkTypeResult(event) {
    if (event.target.type === 'checkbox') {
        return event.target.checked;
    } else if (event.target.type === 'number') {
        return Number(event.target.value)
    } else {
        return event.target.value;
    }
}
