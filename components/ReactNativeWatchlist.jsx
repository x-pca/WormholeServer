import React, { useState, useRef, Fragment } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
  PanResponder,
  SafeAreaView,
} from "react-native";
import { Card, Text, Avatar, IconButton, Chip } from "react-native-paper";
import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  Octicons,
} from "@expo/vector-icons";

const instrumentTypes = ["All", "Equity", "Forex", "Futures"];

const MyWatchList = ({ tableData, imagePaths, descriptions }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalData, setModalData] = useState({});
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <BasicModal
        basicModalVisibility={modalVisible}
        setBasicModalVisiblity={setModalVisible}
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: 18,
          paddingLeft: 15,
          paddingRight: 15,
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
          flexDirection: "row",
          marginTop: 18,
          marginBottom: 18,
          paddingLeft: 15,
          paddingRight: 15,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchBar value={text} setValue={setText} />

        <View>
          <IconButton
            icon={() => (
              <AntDesign name="pluscircle" size={30} color="#007AFF" />
            )}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
      </View>

      <ScrollView>
        {tableData.map((rowData, index) => {
          const label = rowData.id.split("_")[3];

          return (
            <Card
              key={index}
              onPress={() => {
                // setModalVisible(true);
                // setModalData(rowData);
              }}
              elevation={0}
              style={{ backgroundColor: "#fff", borderRadius: 0 }}
            >
              <View style={styles.dataRow}>
                <View
                  style={{
                    flex: 1,
                    justifySelf: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <InstrumentBadge
                    label={label}
                    imgPath={imagePaths[label]}
                    description={descriptions[label]}
                  />
                </View>

                <View
                  style={[
                    styles.symbolCell,
                    { width: 120, alignItems: "flex-end" },
                  ]}
                >
                  <Text
                    style={{ fontSize: 13, color: "#404040", fontWeight: 500 }}
                  >
                    {Math.floor(rowData.fields.vol24h) || ""}&nbsp;USD
                  </Text>
                </View>

                <View
                  style={[
                    styles.symbolCell,
                    { alignItems: "flex-end", width: 110 },
                  ]}
                >
                  <Text
                    style={{ fontSize: 14, color: "#404040", fontWeight: 700 }}
                  >
                    {roundToTwoDecimalPlaces(rowData.fields.usdPrc) || 0} USD
                  </Text>
                  {Number(rowData.fields.usdPctChg1h) <= 0 ? (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <AntDesign name="caretdown" size={8} color="#FC4950" />
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#FC4950",
                        }}
                      >
                        &nbsp;
                        {roundToTwoDecimalPlaces(rowData.fields.usdChg24h) ||
                          0}{" "}
                        {`(${rowData.fields.usdPctChg1h}%)`}
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <AntDesign name="caretup" size={8} color="#00AD7B" />
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#00AD7B",
                        }}
                      >
                        &nbsp;
                        {`+${
                          roundToTwoDecimalPlaces(rowData.fields.usdChg24h) || 0
                        }`}{" "}
                        {`(${rowData.fields.usdPctChg1h}%)`}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const InstrumentBadge = ({ label, imgPath, description }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={[styles.symbolCell, { paddingRight: 10 }]}>
        <Avatar.Image
          size={24}
          style={{ backgroundColor: "transperant" }}
          source={imgPath}
        />
      </View>

      <View style={styles.symbolCell}>
        <Text style={{ fontSize: 15, color: "#007AFF", fontWeight: 700 }}>
          {label}
        </Text>
        <Text style={{ fontSize: 10, color: "#2E384D" }}>{description}</Text>
      </View>
    </View>
  );
};

const SymbolSelectionRow = ({ selected, label }) => {
  const handlePress = () => {
    console.log("pressed an symbol: ", label);
  };

  return (
    <Card
      onPress={handlePress}
      elevation={0}
      style={{ backgroundColor: "#fff", borderRadius: 0 }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: 12,
          paddingBottom: 12,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifySelf: "flex-start",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <InstrumentBadge
            label={label}
            imgPath={{
              uri: "https://e1.pngegg.com/pngimages/682/548/png-clipart-simply-styled-icon-set-731-icons-free-microsoft-windows-icon.png",
            }}
            description={"Microsoft"}
          />
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 14, color: "#2E384D80" }}>EQU</Text>
        </View>

        <View style={{ width: 80, alignItems: "flex-end" }}>
          <AntDesign
            name="checkcircle"
            size={24}
            color={selected ? "#007AFF" : "#2E384D60"}
          />
        </View>
      </View>
    </Card>
  );
};

const SearchBar = ({ value, setValue }) => {
  return (
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
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Search"
      />
    </View>
  );
};

const BasicModal = ({ basicModalVisibility, setBasicModalVisiblity }) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: () => {},
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          setBasicModalVisiblity(false);
        }
      },
    })
  ).current;

  const [searchVal, setSearchVal] = useState();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={basicModalVisibility}
      onRequestClose={() => {
        setBasicModalVisiblity(false);
      }}
    >
      <View style={{ flex: 1 }} {...panResponder.panHandlers}>
        <View style={styles.modalView}>
          <CloseModal setModalVisible={setBasicModalVisiblity}></CloseModal>

          <View>
            <Text style={{ marginBottom: 15, fontSize: 24, color: "#202020" }}>
              Add Symbols
            </Text>

            <View
              style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}
            >
              <SearchBar value={searchVal} setValue={setSearchVal} />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              {instrumentTypes.map((it, index) => {
                return (
                  <InstrumentTypeChip
                    key={index}
                    selected={index === 1 ? true : false}
                    name={it}
                  />
                );
              })}
            </View>

            <SymbolList />
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

const SymbolList = () => {
  const [symbolData, setSymbolData] = useState([]);

  fetch(
    "https://bdswiss.dev.xinfinit.com/frontend/search/instruments?limit=10&pattern=g",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2SVdqbi1LSkk0SDlWVWJsV0JKTUtOc3lzMUJ0WGY1dGlvOEczN01uNVhnIn0.eyJleHAiOjE2OTUxMjc2ODgsImlhdCI6MTY5NTEyNzM4OCwianRpIjoiMTBlYTY5N2YtMTIyMi00NGJhLTg0MTItMWI1NTk5NDJiOWY3IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmRldi54aW5maW5pdC5jb20vYXV0aC9yZWFsbXMveGluZmluaXQtcmVhbG0iLCJzdWIiOiI2ODNiMzhmNi1hOWEwLTRhNDctYWNiYS1mNWU2M2UyZTNkMmIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ4aW5maW5pdC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNjE0ZWI0OWYtYzk3Yy00ZDkyLTgyMDYtYzViY2Y5Zjc1MDczIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8veG9uZWNsb3VkLmRldi54aW5maW5pdC5jb20iLCJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwczovL2RlbW8ueGluZmluaXQuY29tIiwiaHR0cHM6Ly9jYm9lLmRlbW8ueGluZmluaXQuY29tIiwiaHR0cHM6Ly9keG9uZS5jb21wYW55IiwiaHR0cHM6Ly9ib2Vyc2Utb25saW5lLmRlbW8ueGluZmluaXQuY29tIiwiaHR0cDovL2xvY2FsaG9zdDo4MTcxLyIsImh0dHBzOi8vZXJzdGUuZGVtby54aW5maW5pdC5jb20iLCJodHRwczovL2FwaS1hc3NldGdlZWsuZGV2LnhpbmZpbml0LmNvbS9hdXRoL2xvZ2luIiwiaHR0cHM6Ly9kZXYueGluZmluaXQuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ4LWFwaS1zdHJlYW1pbmciLCJ4LWFwaS1zZXJ2aWNlLWRlZiIsIngtYXNzaWduLWdyb3VwLXVzZXIiLCJ4LWFzc2lnbi1kaXNwbGF5LXBhZ2UiLCJ4LXZpZXctdXNlciIsIngtdG0tY29uc29sZS1hZG0iLCJ4LWVkaXRvci1zaGFyZS1yZWFkIiwieC1hcGktcHJvZHVjdCIsIngtZWRpdC1wcm9kdWN0cyIsIngtZW9kLWNvbnNvbGUtYWRtIiwieC1hc3NpZ24tZ3JvdXAtYXBwIiwieC1yb2xlLXVzZXIiLCJ4LXNlcnZpY2UtYXBpLWRvYyIsIngtcm9sZS1wdWJsaWMiLCJ4LWFkbWluLWFjY2VzcyIsIngtb21zLXVzZXItYWNjZXNzIiwieC1lZGl0LWFwcC1zZXR0aW5ncyIsIngtdXBkYXRlLXVzZXIiLCJ4LXZpZXctcm9sZXMiLCJ4LW1zLWNvbnNvbGUtYWRtIiwieC1hcGktZG9jIiwieC1wZy1jb25zb2xlLWFkbSIsIngtZGVsZXRlLXZlbmRvciIsIngtbWFuYWdlLWN1c3RvbS1wZXJtaXNzaW9uIiwieC1yZXBvcnQtY2FtcGFpZ24iLCJ4LWVkaXRvci1zaGFyZS13cml0ZSIsIngtZGVsZXRlLWRpc3BsYXktZGVmaW5pdGlvbiIsIngtY3JlYXRlLWRpc3BsYXktZGVmaW5pdGlvbiIsIngtY3JlYXRlLWdyb3VwIiwiY3VzdG9tLWFkZC1sYXlvdXRzIiwieC1lbmFibGUtbmV3cy1hdWRpbyIsIngtY3JlYXRlLWR5bmFtaWMtcGFnZSIsIngtZGVsZXRlLWdyb3VwLWFwcCIsIngtY3JlYXRlLXVzZXIiLCJ4LWRlbGV0ZS11c2VyIiwieC1hcGktaW5zdHJ1bWVudCIsIngtc3RhdGlzdGljcy1hbmFseXNlIiwieC10cmFkaW5nLWlkZWEtYWNjZXNzIiwieC1kZWxldGUtZ3JvdXAiLCJ4LWRlbGV0ZS1ncm91cC11c2VyIiwieC1tYW5hZ2Utcm9sZXMiLCJ4LWFzc2lnbi12ZW5kb3ItZ3JvdXAiLCJ4LXN0YXRpc3RpY3MtYXBpIiwieC1lbmFibGUtZWRpdG9yIiwieC1vbXMtYWRtaW4tYWNjZXNzIiwieC1hcGktdmVuZG9yIiwieC1jcmVhdGUtdmVuZG9yIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsieGluZmluaXQtY2xpZW50Ijp7InJvbGVzIjpbIlgtTWVtYmVyIiwiWC1EZXZlbG9wZXIiLCJEZWZhdWx0LVVzZXIiLCJXZWItVXNlciJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjYxNGViNDlmLWM5N2MtNGQ5Mi04MjA2LWM1YmNmOWY3NTA3MyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Ik1vYmlsZSBEZXZlbG9wZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtb2JpbGVkZXYiLCJnaXZlbl9uYW1lIjoiTW9iaWxlIiwiZmFtaWx5X25hbWUiOiJEZXZlbG9wZXIiLCJlbWFpbCI6Im1vYmRldmVsb3BlckB4aW5maW5pdC5jb20ifQ.iPd4wOvrAlHnq5w6Nq_YmQziuc60otAXB63MivPaJ7UeIKm5r3jQRUkTMdompmQUObP7aAtonVWosLznXDdnI42SiOwjJlVdj8-AmB5TfCk0opDAPKUmIHUqK3QyFnEnwAXxenyeQOPHobnS8ea2cJ6aEW2YWFroOlchlpDCPhyHQAvQyy2QMLT1zAUX7fu0LQmaOyePAW5BSsUOLeTUrXK7mu4fKGM2lzZTaBQ_rVA4RGqSawUW3FnNo2jCivJUlDKqSs6aDBxDCUl7nhLZpF80iI0nMVrb5EnS9Ql7BV5oF9Vs4634VOBK9FhSnGpW3iImmsh10D5c5TMOaFVFaw`,
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();

      } else {
        throw new Error("Symbol request failed with status: ", res.status);
      }
    })
    .then((data) => {
      setSymbolData(data);
    })
    .catch((e) => console.error("Error loading symbol data: ", e));

  return (
    <ScrollView style={{ flex: 1 }}>
      {symbolData && symbolData.length > 0 ? (
        symbolData.map((symbol) => (
          <SymbolSelectionRow key={symbol.id.name} selected={true} label={symbol.id.name} />
        ))
      ) : (
        <Text>Loadig...</Text>
      )}
    </ScrollView>
  );
};

const InstrumentTypeChip = ({ selected, name }) => {
  return (
    <Chip
      showSelectedCheck={false}
      onPress={() => console.log("Pressed")}
      textStyle={{
        color: selected ? "white" : "#2E384D",
        fontWeight: 200,
        fontSize: 14,
      }}
      style={{
        borderRadius: 20,
        backgroundColor: selected ? "#007AFF" : "#878EBA1A",
        marginRight: 8,
      }}
    >
      {name}
    </Chip>
  );
};

const CloseModal = ({ setModalVisible }) => {
  return (
    <Fragment>
      <View style={{ alignItems: "center" }}>
        <Octicons name="dash" size={35} color="gray" />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={{ justifyContent: "flex-end" }}
        >
          <AntDesign name="closecircle" size={18} color="#808080" />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

function roundToTwoDecimalPlaces(number) {
  return Math.round(number * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 25,
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
    paddingRight: 15,
    paddingLeft: 15,
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
    justifyContent: "flex-end",
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
  modalView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 35, // Adjust as needed
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, // Adjust for the desired shadow direction
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default MyWatchList;
