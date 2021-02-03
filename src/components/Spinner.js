import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#000"
  },
});

export default Spinner;
