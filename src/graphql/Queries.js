import { gql } from "@apollo/client";

export const infoMissions = gql`
  query Rockets {
    rockets @rest(type: "Rocket", path: "/", endpoint: "v1") {
      rocket_name
      rocket_id
    }
    launches @rest(type: "Launches", path: "/", endpoint: "v2") {
      mission_name
      launch_date_unix
      static_fire_date_unix
      launch_success
      launch_failure_details{
        reason
      }
      rocket {
        rocket_id
      }
      launch_site {
        site_id
      }
    }
    launchpads @rest(type: "Launchpads", path: "/", endpoint: "v3") {
      site_id
      location {
        name
        longitude
        latitude
      }
    }
  }
`;


