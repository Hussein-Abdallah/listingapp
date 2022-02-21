import IconComponent from 'components/general/IconComponent';
import Screen from 'components/general/Screen';
import Separator from 'components/general/Separator';
import { ListItem } from 'components/lists';
import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import AuthContext from 'services/auth/context';
import authStorage from 'services/auth/storage';
import useAuth from 'services/auth/useAuth';
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
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
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
              showChevrons
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
          onPress={() => logout()}
        />
      </View>
    </Screen>
  );
}

export default Account;
