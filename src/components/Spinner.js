import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";


const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" />
    </View>
  )
}
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default Spinner
