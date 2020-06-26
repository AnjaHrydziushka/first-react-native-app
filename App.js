import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}>
      <View
        style={{ width: 50, height: 70, backgroundColor: "rebeccapurple" }}
      />
      <View style={{ width: 70, height: 70, backgroundColor: "crimson" }} />
      <View style={{ width: 90, height: 70, backgroundColor: "gold" }} />
    </View>
  );
}