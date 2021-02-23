import React from "react";
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
{
    books {
        name
        genre
        author {
            name
        }
    }
}
`

class BookList extends React.Component {
    displayBooks(){
        var data = this.props.data
        if(data.loading){
            return(<div>Loading Books...</div>)
        }
        else {
            return data.books.map(book => {
                return(
                    <li>{ book.name } by "{book.author.name}"</li>
                )
            })
        }
    }


  render() {
    return (
      <div className="App">
        <ul>
            { this.displayBooks() }
        </ul>̦̦
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
