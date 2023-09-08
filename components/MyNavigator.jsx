import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { AppWormhole as Wormhole } from 'AppWormhole';
import MyTable from "./MyTable";
// import UserTable from "./UserTable";

const useComponentSize = () => {
  const [size, setSize] = React.useState(null);

  const onLayout = React.useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

function HomeScreen() {
  const [size, onLayout] = useComponentSize();
  // console.log("🚀 ~ file: MyNavigator.jsx:39 ~ HomeScreen ~ size:", size);

  return (
    <View
      onLayout={onLayout}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
      }}
    >
      <Text onLayout={onLayout} style={{ borderWidth: 2 }}>
        Home
      </Text>
      <View
        onLayout={onLayout}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
        }}
      >
        <Text onLayout={onLayout} style={{ borderWidth: 2 }}>
          Home 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Commodi rerum quasi excepturi consectetur, aliquid eveniet provident
          expedita magnam, dignissimos, repudiandae minima non error eligendi
          quaerat earum debitis minus. Sunt, vero!!
        </Text>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
      {/* <Wormhole
        source={{ uri: "http://192.168.1.6:3000/component/MyTable" }}
      /> */}

      <MyTable />
      {/* <UserTable /> */}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function MyNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}