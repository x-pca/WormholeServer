import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Button,
  Alert,
} from "react-native";

const MyWatchList = () => {
  const [tableData, setTableData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetch("http://192.168.1.6:3000/data/symbol-data.json")
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Symbol</Text>
        <Text style={styles.headerCell}>Last</Text>
        <Text style={styles.headerCell}>Buy</Text>
        <Text style={styles.headerCell}>Sell</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={[styles.dataCell, styles.symbolCell]}>
              <Image source={{ uri: modalData?.image }} style={styles.image} />
              <Text>{modalData?.symbol}</Text>
              <Button
                title="Buy"
                color="green"
                onPress={() =>
                  Alert.alert("Buy")
                }
              />
              <Button
                title="Sell"
                color="red"
                onPress={() =>
                  Alert.alert("Sell")
                }
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView>
        {tableData.map((rowData, index) => (
          <Pressable
            key={index}
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible(true);
              setModalData(rowData);
            }}
          >
            <View style={styles.dataRow}>
              <View style={[styles.dataCell, styles.symbolCell]}>
                <Image source={{ uri: rowData.image }} style={styles.image} />
                <Text>{rowData.symbol}</Text>
              </View>
              <Text style={styles.dataCell}>{rowData.last}</Text>
              <Text style={styles.dataCell}>{rowData.buy}</Text>
              <Text style={styles.dataCell}>{rowData.sell}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  dataRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  dataCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  symbolCell: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  modalView: {
    margin: 20,
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MyWatchList;