import IconComponent from 'components/general/IconComponent';
import Screen from 'components/general/Screen';
import Separator from 'components/general/Separator';
import { ListItem } from 'components/lists';
import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';

const menuItems = [
  {
    id: 1,
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: 'primary',
    },
  },
  {
    id: 2,
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: 'secondary',
    },
  },
];
function Account(props) {
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
              backgroundColor='warning'
            />
          }
        />
      </View>
    </Screen>
  );
}

export default Account;
