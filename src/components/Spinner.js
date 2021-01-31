import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
});

export default Spinner;
