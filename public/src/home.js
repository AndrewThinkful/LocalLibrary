function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const totalBorrowed = books.reduce((count, book) => {
    if(book.borrows[0].returned == false){
      count++
    }
    return count;
  }, 0)
  return totalBorrowed;
}

function getMostCommonGenres(books) {
  const getCommonGenres = books.reduce((acc, book) => {
    let { genre } = book;
    if (acc[genre] === undefined) {
      acc[genre] = { name: `${genre}`, count: 1};
    } else {
      acc[genre].count++;
    }
    return acc;
  }, {});
  const totalGenres = Object.values(getCommonGenres);
  totalGenres.sort((a, b) => (a.count > b.count ? -1 : 1));
  return totalGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrowed = books.map((book) => {
    return (mostPopular = {
      name: book.title,
      count: book.borrows.length,
    })
  })
  borrowed.sort((a, b) => (a.count < b.count ? 1 : -1))
  return borrowed.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  for (let book of books){
    for (let author of authors){
      let {borrows, authorId} = book
      let fullName = `${author.name.first} ${author.name.last}`
      if (authorId === author.id){
        result.push({ name: `${fullName}`, count: borrows.length})
      }
    }
  }
  result.sort((a, b) => a.count > b.count ? -1 : 1)
  return result.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
