import React from 'react';
import * as Yup from 'yup';

import AppForm from 'components/form/AppForm';
import FormField from 'components/form/FormField';
import SubmitButton from 'components/form/SubmitButton';
import Screen from 'components/general/Screen';

import styles from './styles';
import FormPicker from 'components/form/FormPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().optional().label('Description'),
});
const categories = [
  { id: 1, label: 'Furniture' },
  { id: 2, label: 'Clothing' },
  { id: 3, label: 'Camera' },
];
function Post(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(value)}
        validationSchema={validationSchema}
      >
        <FormField
          name='title'
          maxLength={255}
          placeholder='Title'
          autoCorrect={false}
          autoCapitalize='sentences'
          keyboardType='default'
        />
        <FormField
          name='price'
          maxLength={8}
          placeholder='Price'
          autoCorrect={false}
          autoCapitalize='sentences'
          keyboardType='numeric'
        />
        <FormPicker name='category' placeholder='Category' data={categories} />
        <FormField
          name='description'
          placeholder='Description'
          numberOfLines={3}
          multiline
          maxLength={600}
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
}

export default Post;
