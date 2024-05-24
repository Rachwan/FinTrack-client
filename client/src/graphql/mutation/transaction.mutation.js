import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
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

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
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

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($id: ID!) {
    deleteTransaction(id: $id) {
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
