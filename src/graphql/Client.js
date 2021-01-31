import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  endpoints: {
    v1: "https://api.spacexdata.com/v3/rockets",
    v2: "https://api.spacexdata.com/v3/launches",
    v3: "https://api.spacexdata.com/v3/launchpads",
  },
  uri: "https://api.spacexdata.com/v3",
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
