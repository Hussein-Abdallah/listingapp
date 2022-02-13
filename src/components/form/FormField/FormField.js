import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from 'components/general/AppTextInput';
import ErrorMessage from '../ErrorMessage';

function FormField({ name, ...otherProps }) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormField;
