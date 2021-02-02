import React from "react";
import { Text, StyleSheet } from "react-native";

const Error = () => {
  return <Text style={styles.error}>Server error</Text>;
};
const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
export default Error;
