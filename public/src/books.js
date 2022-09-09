//checking if the authors exist
function findAuthorById(authors, id) {
  let realAuthors = authors.find((author) => author.id === id)
  return realAuthors
}

//checking if the books exist
function findBookById(books, id) {
  let realBooks = books.find((book) => book.id === id)
  return realBooks
}

//filtering out books that have or have not been returned
function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned ===true))
  let miaBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  return [[...miaBooks], [...returnedBooks]]
}

//checking the individuals that have rented out an individual book
function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account};
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
