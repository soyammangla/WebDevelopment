// Q1. Library Book Management

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getAvailableBooks() {
    return this.books.filter((b) => b.available === true);
  }

  searchByAuthor(author) {
    return this.books.find((b) => b.author === author);
  }
}

// Create books
const lib = new Library();
lib.addBook({ title: "Book A", author: "Author1", available: true });
lib.addBook({ title: "Book B", author: "Author2", available: false });
lib.addBook({ title: "Book C", author: "Author1", available: true });

console.log("Available Books:", lib.getAvailableBooks());
console.log("Search Author1:", lib.searchByAuthor("Author1"));
