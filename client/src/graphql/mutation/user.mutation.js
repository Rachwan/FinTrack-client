import { gql } from "@apollo/client";

// ! A Mutation letters must be Upper Case, the first letter of the function also
export const SIGNUP_USER = gql`
  mutation AddUser($input: SingUpInput!) {
    signUp(input: $input) {
      _id
      userName
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LogIn($input: LogInInput!) {
    login(input: $input) {
      _id
      userName
      password
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;
