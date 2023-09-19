import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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
          Date
        </Text>

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

      <MyTable />
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
