// User Class: Design a `User` class to represent library users. Users should have attributes like
// name, contact information, and a list of borrowed books
//I Removed  the borrowingcapacity as a parameter cause it's not the user that give themself a capacity  
export class User {
  constructor(userName, fullname, email, password) {
    this.userName = userName;
    this.fullname = fullname;
    this.email = email
    this.borrowedBooks = [];
    this.borrowingCapacity = 5;
    this.password = password;
    
  }
  admin = new Admin();
  
  borrowBook (book) {
    if (this.borrowingCapacity >= 1 && this.borrowingCapacity <= 5 && !this.borrowedBooks.includes(book)) {
      bbok =  this.admin.borrowUsersBook(this.userName,book);
      this.borrowedBooks.push(book);
      this.borrowingCapacity -1;
  }}



  returnBook (book) {
    if (this.borrowedBooks.includes(book)) {
    var index = this.borrowedBooks.indexOf(book)
    this.borrowedBooks.splice(index, book)
    this.borrowingCapacity +1;
  }
}
}
