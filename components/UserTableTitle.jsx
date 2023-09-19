import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const UserTableTitle = () => {
  return (
    <View >
      <Text style={{ padding: 10, fontSize: 32 }}>User Table</Text>
      <UserTableSubTitle btnTitles={ { btnA: 'Button 1',  btnB: 'Button 2' }} />
    </View>
  );
};

export default UserTableTitle;
