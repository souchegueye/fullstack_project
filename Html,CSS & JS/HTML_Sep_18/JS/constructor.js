function Book (name, author, price) {
  this.name = name;
  this.author = author;
  this.price = price;

  this.details = function () {
    console.log (
      `Book Name is:${this.name}, author is: ${this.author} and price is:${this.price}`
    );
  };
}

var book_obj1 = new Book ('Java', 'author', 50);
book_obj1.details ();

var book_obj2 = new Book ('Spring Boot', 'author', 70);
book_obj2.details ();
