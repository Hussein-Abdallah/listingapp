import AppCard from 'components/general/AppCard';
import Screen from 'components/general/Screen';
import React from 'react';
import { FlatList } from 'react-native';
import listingsData from 'services/utils/listingsData';
import routes from 'src/navigation/routes';
import styles from './styles';

function Listings({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            price={item.price}
            image={item.images}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

export default Listings;
