import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Post from 'src/screens/Feed/Post';
import FeedNavigator from '../FeedNavigator';
import AccountNavigator from '../AccountNavigator';
import NewListingButton from '../NewListingButton';
import routes from '../routes';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Post'
        component={Post}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.POST_LISTING)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='plus-circle'
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name='Profile'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
