import React from 'react';
import * as Yup from 'yup';

import Screen from 'components/general/Screen';
import AppForm from 'components/form/AppForm';
import FormField from 'components/form/FormField';
import SubmitButton from 'components/form/SubmitButton';

import styles from './styles';
import usersApi from 'services/auth/register';
import { useState } from 'react/cjs/react.development';
import useAuth from 'services/auth/useAuth';
import ErrorMessage from 'components/form/ErrorMessage';
import authApi from 'services/auth/login';
import useApi from 'src/hooks/useApi';
import ActivityIndicator from 'components/general/ActivityIndicator';

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
  //using api hook
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    try {
      const result = await registerApi.request(userInfo);
      if (!result.ok) {
        if (result.data) setError(result.data.error);
        else {
          setError('An unexpected error occured.');
          console.log(result);
        }
        return;
      }
      const { data: authToken } = await loginApi.request(
        userInfo.email,
        userInfo.password
      );

      auth.login(authToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={!!error} />
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
    </>
  );
}

export default Register;
