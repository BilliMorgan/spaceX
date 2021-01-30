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
    marginTop: 50,
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default Header;
