import AppCard from 'components/general/AppCard';
import Screen from 'components/general/Screen';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import routes from 'src/navigation/routes';
import styles from './styles';
import listingsApi from 'services/listings/listings';
import AppText from 'components/general/AppText';
import AppButton from 'components/general/AppButton';
import ActivityIndicator from 'components/general/ActivityIndicator';
import useApi from 'src/hooks/useApi';
function Listings({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadLisings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadLisings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title='Retry' onPress={loadLisings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            price={item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

export default Listings;
