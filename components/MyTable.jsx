import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

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

export default function MyTable({ dataFromFE, stylesFromFE }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, stylesFromFE?.title]}>
        {dataFromFE?.screenTitle ? dataFromFE.screenTitle : 'Data from BE'}
      </Text>
      {isLoading ? (
        <Text style={styles.title}>Loading Data...</Text>
      ) : (
        <FlatList
          data={dataFromFE?.data ? dataFromFE.data : data}
          renderItem={({ item }) => <TableItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: { fontSize: 12, fontWeight: 'bold', textAlign: 'left' },
});
