import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String! ) {
    addUser(username: $username, email: $email, password: $password){
        _id
      username
      email
    }
  }
`;

/*
export const SAVE_BOOK = gql`
mutation saveBook($bookData:BookInput!){
  saveBook(bookData:$bookData){
    username
    email 
    savedBooks {
        _id
        title
        authors
        bookId
        description
        link
        image
  }
   }
  }
`;
*/

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!, $bookId: String!, $authors: [String], $description: String!, $link: String, $image: String){
    saveBook(bookData: {title: $title, bookId: $bookId, authors: $authors, description: $description, link: $link, image: $image}) {
      _id
      username
      savedBooks {
        _id
        title
        authors
        bookId
        description
        link
        image
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId){
      _id
      username
      email
      savedBooks {
        _id
        title
        authors
        bookId
        image
        description
        link
      }
    }
  }
`;