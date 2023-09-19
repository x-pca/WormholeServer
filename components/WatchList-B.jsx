import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import { Card, Button, Text, Avatar } from "react-native-paper";
import { AntDesign, MaterialIcons, EvilIcons } from "@expo/vector-icons";

const MyWatchList = () => {
  const [tableData, setTableData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://192.168.1.6:3000/rest/web/js?id=symbol-data")
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
              {/* <Avatar.Image size={12} source={{ uri: modalData?.image }} /> */}
              <Text>{modalData?.symbol}</Text>
              <Button
                title="Buy"
                color="green"
                onPress={() => Alert.alert("Buy")}
              />
              <Button
                title="Sell"
                color="red"
                onPress={() => Alert.alert("Sell")}
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

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 18, color: "#404040", fontWeight: 700 }}>
            My Fav Watchlist{" "}
          </Text>

          <AntDesign name="down" color="#202020" size={14} fontWeight={700} />
        </View>

        <View>
          <MaterialIcons name="tune" size={18} color="black" />
        </View>
      </View>

      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          marginTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            marginRight: 5,
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            borderWidth: 1,
            borderColor: "#aaa",
            borderRadius: 30,
          }}
        >
          <EvilIcons name="search" size={24} color="black" />

          <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="search"
          />
        </View>

        <View>
          <AntDesign name="pluscircle" size={30} color="#007AFF" />
        </View>
      </View>

      <ScrollView>
        {tableData.map((rowData, index) => (
          <Card
            key={index}
            onPress={() => {
              setModalVisible(true);
              setModalData(rowData);
            }}
            elevation={0}
            style={{ backgroundColor: "#fff", borderRadius: 0 }}
          >
            <View style={styles.dataRow}>
              <View style={{ flexDirection: "row" }}>
                <View style={[styles.symbolCell, { paddingRight: 10 }]}>
                  <Avatar.Image
                    size={24}
                    style={{ backgroundColor: "transperant" }}
                    source={{ uri: rowData.image }}
                  />
                </View>

                <View style={styles.symbolCell}>
                  <Text
                    style={{ fontSize: 15, color: "#007AFF", fontWeight: 700 }}
                  >
                    {rowData.symbol}
                  </Text>
                  <Text style={{ fontSize: 10, color: "#2E384D" }}>
                    {rowData.company}
                  </Text>
                </View>
              </View>

              {/* <View style={[styles.symbolCell, { width: 60 }]}>
                <Text>{"chart"}</Text>
              </View> */}

              <View style={[styles.symbolCell, { alignItems: "flex-end" }]}>
                <Text
                  style={{ fontSize: 14, color: "#404040", fontWeight: 700 }}
                >
                  {rowData.last} USD
                </Text>
                {Number(rowData.change) <= 0 ? (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="caretdown" size={8} color="#FC4950" />
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#FC4950",
                      }}
                    >
                      &nbsp;{rowData.change} {`(${rowData.percent}%)`}
                    </Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="caretup" size={8} color="#00AD7B" />
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#00AD7B",
                      }}
                    >
                      &nbsp;{`+${rowData.change}`} {`(${rowData.percent}%)`}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  dataCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  symbolCell: {
    flexDirection: "column",
    justifyContent: "center",
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
