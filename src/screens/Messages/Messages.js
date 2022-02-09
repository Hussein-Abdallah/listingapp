import Screen from 'components/general/Screen';
import Separator from 'components/general/Separator';
import { ListItem } from 'components/lists';
import DeleteAction from 'components/lists/DeleteAction';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';

//Temporary Data

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handeRefresh = () => {
    setRefreshing(true);
    setMessages([
      ...messages,
      {
        id: 4,
        title: 'T4',
        description: 'D4',
        image: require('assets/images/mosh.jpg'),
      },
    ]);
    setRefreshing(false);
  };

  const handleDelete = (message) => {
    setMessages((prevState) => {
      return prevState.filter((item) => item.id !== message.id);
    });
  };
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
            // handle swipeable action
            renderRightActions={() => (
              <DeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        // handle pull to refresh
        refreshing={refreshing}
        onRefresh={handeRefresh}
      />
    </Screen>
  );
}

export default Messages;
