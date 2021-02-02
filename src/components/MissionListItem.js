import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MissionListItem = (props) => {
  const [open, setOpen] = useState(false);
  const toggleListItem = () => {
    setOpen(!open);
  };
  console.log(props)
  const convertTimeStamp = (timestamp, callback) => {
    let dateString = new Date(timestamp * 1000).toLocaleDateString()
    return timestamp === null ? "N/A" : dateString 
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.missionTitleContainer}>
          <Text style={styles.missionTitle}>{props.mission_name}</Text>
          <Icon
            name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={20}
            color={"#000"}
          />
        </View>
      </TouchableWithoutFeedback>
      {open ? (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.column1}>
              <Text style={styles.details}>Start missioin</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.details}>
                {convertTimeStamp(props.static_fire_date_unix)}
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.column1}>
              <Text style={styles.details}>End of mission</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.details}>
                {convertTimeStamp(props.launch_date_unix)}
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.column1}>
              <Text style={styles.details}>Site launch</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.details}>{props.location.name}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.column1}>
              <Text style={styles.details}>Site long</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.details}>{props.location.longitude}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.column1}>
              <Text style={styles.details}>Site lat</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.details}>{props.location.latitude}</Text>
            </View>
          </View>
          <View style={styles.reason}>
            {props.launch_success ? (
              <Text style={styles.details}>Mission success</Text>
            ) : (
              <Text style={styles.details}>
                Mission fail due to: {props.launch_failure_details.reason}
              </Text>
            )}
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  missionTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  missionTitle: {
    fontSize: 20,
    paddingLeft: 35,
    color: "#fff"
  },
  wrapper: {
    padding: 10,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column1: {
    flex: 5,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  column2: {
    flex: 7,
    width: 0.7,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  reason: {
    flex: 1,
    flexDirection: "row",
  },
  details: {
    textTransform: "uppercase",

  },
});
export default MissionListItem;
