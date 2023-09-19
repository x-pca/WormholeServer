import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const UserTableSubTitle = ({ btnTitles }) => {
  return (
    <View >
      <Text style={{ padding: 10, fontSize: 24 }}>User Details</Text>

      <UserTableSubTitleBtn ttl={btnTitles.btnA} />
      <UserTableSubTitleBtnG ttl={btnTitles.btnB} />

    </View>
  );
};

export default UserTableSubTitle;
