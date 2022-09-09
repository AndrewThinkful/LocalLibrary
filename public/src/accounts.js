function findAccountById(accounts, id) {
  let something = accounts.find((account) => account.id === id)
  return something
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
               )
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++){
    for (let k = 0; k < books[i].borrows.length; k++){
      if(account.id === books[i].borrows[k].id)
        total += 1
    }
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = [];
  books.forEach((book) => {
    let borrows = book.borrows[0];
    if (borrows.returned === false && borrows.id === account.id) {
      let { id, title, genre, authorId, author, borrows } = book;
      author = authors.find((author) => author.id === book.authorId);
      booksCheckedOut.push({ id, title, genre, authorId, author, borrows });
    }
  });
  return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
