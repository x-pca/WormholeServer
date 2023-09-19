import { Text, View, StyleSheet } from "react-native";
import React from "react";

const TableItem = ({ item }) => { 
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 40, backgroundColor: "lightyellow" }}>
          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={{ width: 120, backgroundColor: "lightpink" }}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
        <View style={{ width: 270, backgroundColor: "lavender" }}>
          <Text style={styles.text}>{item.body}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 12, fontWeight: "bold", textAlign: "left" },
});

export default TableItem;
