yclass Admin{
    constructor(name, phoneNumber,email){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    constructor(){

    }
    
   library = new Library();
   registerUser(name, contactInformation, email,password){
    let user = new User(name, contactInformation,email, password);
    this.library.addUser(user);
   }
   getUserName(userName){
    for(let c = 0; c < this.library.User.length; c++){
        if(this.library.User[c].userName == userName){
            return this.library.User;
        }
    }
    return null;
   }
   getbookIndex(book){
    if(this.library.book.includes(book)){
      return  this.library.book.indexOf(book);

    }
    return null;
   }
   borrowUsersBook(userName, book){
    if(this.library.availableBooks.includes(book)){
        user = this.getUserName(userName);
        if(user !=  null){
      borrowedBook = this.library.lendUserBook(user,book);
      return borrowedBook;
        }
    }
    return null;
   }
   addBook(book){
    this.library.addToAvailableBook(book);
   }
   browseAvailable(){
    this.library.displayBooks();
   }
     
    }
