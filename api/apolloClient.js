// import { useMemo } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: `http://localhost:4000/api/graphql`, // must be absolute for SSR to work
    cache: new InMemoryCache()
  });
};

export const client = createApolloClient();
