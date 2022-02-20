import IconComponent from 'components/general/IconComponent';
import Screen from 'components/general/Screen';
import Separator from 'components/general/Separator';
import { ListItem } from 'components/lists';
import React from 'react';
import { FlatList, View } from 'react-native';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

const menuItems = [
  {
    id: 1,
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: 'Listings',
  },
  {
    id: 2,
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];
function Account({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Mosh Hamedani'
          subTitle='programmingwithmosh@gmail.com'
          image={require('assets/images/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconComponent
                  name={item.icon.name}
                  color='white'
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title='Logout'
          IconComponent={
            <IconComponent
              name='logout'
              color='white'
              backgroundColor={colors.warning}
            />
          }
        />
      </View>
    </Screen>
  );
}

export default Account;
