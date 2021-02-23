import React from "react";

//graphql client to query graphql server
import ApolloClient from "apollo-boost";

//Binding react and Apollo client.
import { ApolloProvider } from "react-apollo";

//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>My Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
