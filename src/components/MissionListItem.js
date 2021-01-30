import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";


const MissionListItem = (title, children) => {
  console.log(children)
    const [open, setOpen] = useState(false);
    const toggleListItem = () => {
      setOpen(!open);
    };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      {open ? (
        <View style={styles.bodyContainer}>
          {children.map((mission) => {
            return (
              <View>
                <MissionListItem>{children}</MissionListItem>
                <Text key={mission.mission_name}>{mission.mission_name}</Text>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
    backgroundColor: "#555",
  },
  bodyContainer: {
    padding: 10,
    paddingLeft: 1,
    // position: "absolute",
    bottom: 0,
  },
});
}
export default MissionListItem;