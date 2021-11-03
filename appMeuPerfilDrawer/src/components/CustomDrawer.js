import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from '../styles/styles';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerDrawer}>
        <Image
          source={require('../../public/picture.jpg')}
          style={styles.imageDrawer}
        />
        <Text style={styles.textDrawer}>Klauss M.</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
