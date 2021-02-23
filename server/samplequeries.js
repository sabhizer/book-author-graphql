// Sample Queries :
// {
//     book(id: 1) {
//       name
//       genre
//     }
// }

// {
//     author(id: 2) {
//       name
//       id
//       age
//     }
// }

// {
//     book(id: 2) {
//       name
//       id
//       genre
//       author {
//         name
//         age
//       }
//     }
// }

// {
//     author(id: 3) {
//       name
//       age
//       books {
//         name
//         genre
//       }
//     }
// }


// {
//     books { 
//       name
//       genre
//       author {
//             name
//       }
//     }
//   }

// {
//     authors { 
//         name
//         age
//         books {
//             name
//             genre
//       }
//     }
// }
// mutation {
//     addAuthor(name: "Amish", age: 45) {
//       name
//       age
//     }
//   }

// mutation {
//     addBook(name: "Immortals of Meluha", genre: "Fiction", authorId: "5fe22f26d49626384dbbe5ab") {
//       name
//       genre
//     }
//   }