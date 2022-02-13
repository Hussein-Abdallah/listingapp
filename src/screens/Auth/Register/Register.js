import React from 'react';
import * as Yup from 'yup';

import Screen from 'components/general/Screen';
import AppForm from 'components/form/AppForm';
import FormField from 'components/form/FormField';
import SubmitButton from 'components/form/SubmitButton';

import styles from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label('Name'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
    .label('Password'),
});
function Register(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name='name'
          icon='account'
          placeholder='Full Name'
          autoCorrect={false}
          autoCapitalize='words'
          keyboardType='default'
          textContentType='name'
        />
        <FormField
          name='email'
          icon='email'
          placeholder='Email Address'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <FormField
          name='password'
          icon='lock'
          placeholder='Password'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry
        />
        <SubmitButton title='Register' backgroundColor='primary' />
      </AppForm>
    </Screen>
  );
}

export default Register;
