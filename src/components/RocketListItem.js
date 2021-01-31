import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import MissionListItem from "./MissionListItem";
import Icon from "react-native-vector-icons/MaterialIcons";

const AccordionListItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const toggleListItem = () => {
    setOpen(!open);
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Icon
            name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={30}
            color={"#000"}
          />
        </View>
      </TouchableWithoutFeedback>

      {open ? (
        <View style={styles.bodyContainer}>
          {children.length === 0 ? (
            <Text>There is no information about any missions yet</Text>
          ) : (
            <View>
              <Text style={styles.textMissions}>Missions:</Text>
              {children.map((mission) => {
                return (
                  <View key={mission.mission_name}>
                    <MissionListItem {...mission} />
                  </View>
                );
              })}
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  bodyContainer: {
    padding: 10,
  },
  titleText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 25,
  },
  textMissions: {
    textTransform: "uppercase",
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: "#555",
    fontWeight: "bold",
  },
});
export default AccordionListItem;
