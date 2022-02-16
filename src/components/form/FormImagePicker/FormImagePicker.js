import ImageInputList from 'components/general/ImagePicker/ImageInputList';
import { useFormikContext } from 'formik';
import React from 'react';
import ErrorMessage from '../ErrorMessage';

function FormImagePicker({ name }) {
  const { values, errors, touched, setFieldValue } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormImagePicker;
