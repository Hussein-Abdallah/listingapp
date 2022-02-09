import AppCard from 'components/general/AppCard';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Account from 'src/screens/Account';
import Listings from 'src/screens/Feed/Listings';
import Post from 'src/screens/Feed/Post';
import Messages from 'src/screens/Messages';
import Welcome from 'src/screens/Welcome';

export default function App() {
  return <Listings />;
}
