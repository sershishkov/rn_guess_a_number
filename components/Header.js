import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Header;
