import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> SpaceX </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    alignItems: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default Header;
