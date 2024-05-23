import { gql } from "@apollo/client";

export const getUsers = gql`
  query GetUsers {
    users {
      _id
      userName
      name
      password
      profilePicture
      gender
    }
  }
`;

export const getAuthUser = gql`
  query GetAuthUser {
    authUser {
      _id
      userName
      name
      password
      profilePicture
      gender
    }
  }
`;
