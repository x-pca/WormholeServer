import React from 'react';
import {  View, ScrollView } from "react-native";
import {
    Card,
    Button,
    Text,
    Avatar,
    Divider,
} from "react-native-paper";

const Insight = ({ data }) => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <Card>
        <Card.Cover source={{ uri: data.coverImage }} />

        <Card.Title
          title={
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "orange", fontSize: 18 }}>{data.symbol}</Text>
              <Text style={{ fontSize: 18 }}>.NAS</Text>
            </View>
          }
          subtitle={<Text style={{ color: "#888" }}>{data.name}</Text>}
          left={(props) => <Avatar.Image {...props} source={{ uri: data.icon }} />}
          right={(props) => <Button {...props} icon="rocket" mode="contained-tonal" buttonColor="#ff4040" style={{ marginRight: 10 }}>Buy</Button>}
        />

        <Card.Content>
          <Text variant="titleMedium">{data.date.toLocaleString()}</Text>
          <Text variant="bodyMedium">{data.content}</Text>
        </Card.Content>

        <Divider style={{ marginTop: 20, marginBottom: 20 }} />

        <Card.Actions>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

          <Avatar.Image size={40} source={{ uri: data.avatar }} />

          <Button icon="plus" mode="outlined" onPress={() => console.log('You pressed follow btn')}>Follow</Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

const Insights = ({ insightData }) => {
    return (
      <ScrollView>
        {insightData.map((data) => <Insight key={data.symbol} data={data} />)}
      </ScrollView>
    );
};

export default Insights;
