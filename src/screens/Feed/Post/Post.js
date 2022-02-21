import React, { useState } from 'react';
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
import listingsApi from 'src/services/listings/listings';
import styles from './styles';
import UploadScreen from 'components/general/UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().optional().label('Description'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

function Post(props) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.');
    }
    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
          images: [],
        }}
        onSubmit={handleSubmit}
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
