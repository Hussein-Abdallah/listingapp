import React from 'react';
import { useFormikContext } from 'formik';

import PickerComponent from 'components/general/Picker/PickerComponent';
import ErrorMessage from '../ErrorMessage';

function FormPicker({
  name,
  data,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
}) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <PickerComponent
        placeholder={placeholder}
        data={data}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        selectedItem={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormPicker;
