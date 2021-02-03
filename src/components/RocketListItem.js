import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
} from "react-native";
import MissionListItem from "./MissionListItem";
import Chart from "./Chart"
import Icon from "react-native-vector-icons/MaterialIcons";

const AccordionListItem = ({ title, children, picture, description, engine }) => {
  const [open, setOpen] = useState(false);
  const toggleListItem = () => {
    setOpen(!open);
  };
  const image = { uri: picture[0] };
  // console.log(children);
  return (
    <View>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={() => toggleListItem()}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Icon
              name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={30}
              color={"#fff"}
            />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
      {open ? (
        <View style={styles.bodyContainer}>
          <Text style={styles.description}>{description}</Text>
          <Chart engineInfo={engine}/>
          {children.length === 0 ? (
            <Text style={styles.description}>
              There is no information about any missions yet
            </Text>
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
  backgroundImage: {
    marginBottom: 10,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingLeft: 20,
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
  bodyContainer: {
    padding: 10,
  },
  titleText: {
    textTransform: "uppercase",
    // fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
  },
  textMissions: {
    textTransform: "uppercase",
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    textTransform: "none",
    marginBottom: 20,
    letterSpacing: 1
  },
});
export default AccordionListItem;
