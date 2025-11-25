class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    this.isIssued = true;
  }
  returnBook() {
    this.isIssued = false;
  }
}

const library = [
  new Book("Gita", "Vyasa", "101"),
  new Book("Ramayan", "Valmiki", "102"),
  new Book("Harry Potter", "JK Rowling", "103"),
];

console.log("Available Books:");
library.filter((b) => !b.isIssued).forEach((b) => console.log(b.title));

function issueBookByISBN(isbn) {
  const book = library.find((b) => b.ISBN === isbn);
  if (!book) return console.log("Book not found");
  if (book.isIssued) return console.log("Already issued");
  book.issueBook();
  console.log(book.title, "Issued Successfully");
}

issueBookByISBN("102");
