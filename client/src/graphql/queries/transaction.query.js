import { gql } from "@apollo/client";

export const getTransactions = gql`
  query GetTransactions {
    transactions {
      _id
      userId
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;

export const getTransactionById = gql`
  query GetTransaction($transactionId: ID!) {
    transaction(transactionId: $transactionId) {
      _id
      userId
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;
