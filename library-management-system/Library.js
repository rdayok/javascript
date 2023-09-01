import { User } from "./User.js";

class Library {
  constructor() {
    this.availableBooks = [];
    this.borrowedBooks = [];
    this.Users = [];
  }

  addToAvailableBook(book) {
    this.availableBooks.push(book);
  }

  

  removeAvailableBook(book) {
    const index = this.availableBooks.indexOf(book);
    if (index !== -1) {
      this.availableBooks.splice(index, 1);
    } 

  }
  
  saveUser(user){
    this.Users.push(user); 
  }
  displayBooks(){
    for(let count = 0; count < this.availableBooks.length;count++){
      console.log(this.availableBooks[count]);
    }
  }
  lendUserBook( user, book ){
    if(this.addToAvailableBook.includes(book)&& this.Users.includes(user)){
     this.removeBorrowBook(book)
     this.addToBorrowedBook(book);
     return book;

    }
  }
  removeBorrowBook(book){
    index = this.availableBooks.indexOf(book);
    delete this.availableBooks[index];
  }
  addToBorrowedBook(book){
    this.borrowedBooks.push(book);
  }
  // removeBorrowedBook(book) {
  //   const index = this.borrowedBooks.indexOf(book);
  //   if (index !== -1) {
  //     this.borrowedBooks.splice(index, 1);
  //   }
  // }

  // lendBooks(user, book) {
  //   user.em
  //   for (user of this.users ) {
  //     if (user.em)
  //   }
}
