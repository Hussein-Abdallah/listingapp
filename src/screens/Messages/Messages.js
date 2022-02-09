import Screen from 'components/general/Screen';
import Separator from 'components/general/Separator';
import { ListItem } from 'components/lists';
import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';

//Temporary Data

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('assets/images/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('assets/images/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('assets/images/mosh.jpg'),
  },
];

function Messages(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Pressed', item)}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
}

export default Messages;
