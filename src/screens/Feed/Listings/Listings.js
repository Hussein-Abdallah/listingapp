import AppCard from 'components/general/AppCard';
import Screen from 'components/general/Screen';
import React from 'react';
import { FlatList, View } from 'react-native';
import listingsData from 'services/utils/listingsData';
import styles from './styles';

function Listings(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard title={item.title} price={item.price} image={item.images} />
        )}
      />
    </Screen>
  );
}

export default Listings;
