import React from 'react';
import { Image } from 'react-native';
import * as Yup from 'yup';

import Screen from 'components/general/Screen';
import SubmitButton from 'components/form/SubmitButton';
import FormField from 'components/form/FormField';
import AppForm from 'components/form/AppForm';

import styles from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
function Login(props) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require('assets/images/logo-red.png')}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          icon='email'
          name='email'
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <FormField
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />
        <SubmitButton title='Login' backgroundColor='secondary' />
      </AppForm>
    </Screen>
  );
}

export default Login;
