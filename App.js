import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Header from "./src/components/Header"
import Spinner from "./src/components/Spinner";
import AccordionListItem from "./src/components/RocketListItem";
import { client } from "./src/graphql/Client";
import { infoMissions } from "./src/graphql/Queries";



const App = () => {
  const [loading, setLoading] = useState(true);
  const [rocketsInfo, setRocketsInfo] = useState([]);
  console.log(rocketsInfo);
  useEffect(() => {
    requestRockets();
  }, []);

  const requestRockets = () => {
    client
      .query({
        query: infoMissions,
      })
      .then((response) => {
        console.log(response.loading)
        let dataLaunches = response.data.launches;
        let dataLaunchPads = response.data.launchpads;
        let dataLaunchesWithlocation = dataLaunches.map((launch) => {
          let mission = {};
          let siteLocation = dataLaunchPads.find(
            (launchPad) => launchPad.site_id === launch.launch_site.site_id
            );
            return (mission = { ...launch, location: siteLocation.location });
          });
          let dataRockets = response.data.rockets;
          let allRocketsInfo = dataRockets.map((rocket) => {
            let consolidatedRocketInfo = {};
            let missions = dataLaunchesWithlocation.filter(
              (launch) => launch.rocket.rocket_id === rocket.rocket_id
              );
              return (consolidatedRocketInfo = { ...rocket, missions });
            });
            setRocketsInfo(allRocketsInfo);
            setLoading(response.loading);
      })
      .catch((error) => console.log(error));
  };
const renderItem = ({ item }) => <AccordionListItem title={item.rocket_name}>{item.missions}</AccordionListItem>;
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>

          <FlatList
            data={rocketsInfo}
            renderItem={renderItem}
            keyExtractor={(item) => item.rocket_id}
          />


        {loading ? <Spinner /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
