import React from 'react';
import { useFormikContext } from 'formik';
import AppButton from 'components/general/AppButton';

function SubmitButton({ title, backgroundColor = 'primary' }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      backgroundColor={backgroundColor}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;
