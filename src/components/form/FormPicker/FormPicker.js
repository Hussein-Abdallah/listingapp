import React from 'react';
import { useFormikContext } from 'formik';

import PickerComponent from 'components/general/Picker/PickerComponent';
import ErrorMessage from '../ErrorMessage';

function FormPicker({ name, data, placeholder }) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <PickerComponent
        placeholder={placeholder}
        data={data}
        onSelectItem={(item) => {
          console.log(values[name]);
          console.log('***************************');
          console.log('item', item);
          setFieldValue(name, item);
        }}
        selectedItem={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormPicker;
