import React from 'react';
import * as Yup from 'yup';

import AppForm from 'components/form/AppForm';
import FormField from 'components/form/FormField';
import SubmitButton from 'components/form/SubmitButton';
import Screen from 'components/general/Screen';
import FormPicker from 'components/form/FormPicker';
import CategoryPickerItem from 'components/general/Picker/CategoryPickerItem';
import FormImagePicker from 'components/form/FormImagePicker';

import useLocation from 'src/hooks/useLocation';
import categoriesData from 'services/utils/categoriesData';

import styles from './styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().optional().label('Description'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

function Post(props) {
  const location = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
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
        <FormPicker
          name='category'
          placeholder='Category'
          data={categoriesData}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
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
