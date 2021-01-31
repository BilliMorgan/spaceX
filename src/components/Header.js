import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
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
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000"
  },
});
export default Header;
