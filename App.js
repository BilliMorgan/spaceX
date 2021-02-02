import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import Spinner from "./src/components/Spinner";
import AccordionListItem from "./src/components/RocketListItem";
import { client } from "./src/graphql/Client";
import { infoMissions } from "./src/graphql/Queries";
import Error from "./src/components/Error";

const App = () => {
  const [rocketsInfo, setRocketsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  // console.log(rocketsInfo)

  useEffect(() => {
    requestRockets();
  }, []);

  const requestRockets = () => {
    client
      .query({
        query: infoMissions,
      })
      .then((response) => {
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
        // setErrorMessage(false);
      })
      .catch((error) => {
        console.log(`Error message ${error}`);
        setErrorMessage(true);
      });
  };
  const renderItem = ({ item }) => (
    //
    <AccordionListItem title={item.rocket_name} picture={item.flickr_images} description = {item.description}>
      {item.missions}
    </AccordionListItem>
  );
  return (
    <View style={styles.container}>
      <Header />
      {errorMessage ? (
        <Error />
      ) : (
        <View style={styles.contentContainer}>
          {loading ? (
            <Spinner />
          ) : (
            <FlatList
              data={rocketsInfo}
              renderItem={renderItem}
              keyExtractor={(item) => item.rocket_id}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
  },

  contentContainer: {
    paddingHorizontal: 0,
    paddingVertical: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
