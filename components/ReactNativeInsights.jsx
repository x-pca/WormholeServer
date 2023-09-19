import React, { useState, useEffect } from 'react';
import {  View, ScrollView, SafeAreaView } from "react-native";
import {
    Card,
    Button,
    Text,
    Avatar,
    Divider,
} from "react-native-paper";

const Insight = ({ data }) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 8 }}>
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
          // right={(props) => <Button {...props} icon="rocket" mode="contained-tonal" buttonColor="#ff4040" style={{ marginRight: 10 }}>Buy</Button>}
        />

        <Card.Content>
          <Text variant="titleMedium">{ new Date(data.date).toLocaleString() }</Text>
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
    </SafeAreaView>
  );
};

const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.6:3000/rest/web/js?id=insights")
      .then((response) => response.json())
      .then((data) => {
        setInsights(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

    return (
      <ScrollView>
        {insights.map((data) => <Insight key={data.symbol} data={data} />)}
      </ScrollView>
    );
};

export default Insights;
