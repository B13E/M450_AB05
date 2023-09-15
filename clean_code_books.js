let bookList = [
    { id: 1, title: "Der alte Mann und das Meer", price: 10.5 },
    { id: 2, title: "Moby Dick", price: 12.3 },
    { id: 3, title: "1984", price: 8.5 },
  ];
  
  function getBook(id) {
    for (let book of bookList) {
        if (book.id === id) {  
            return (book.title + "cost" + book.price + "€");
        }
    }
    return "Buch nicht gefunden";
}

function addBook(title, price) {
  let maxId = 0;
  for (let book of bookList) {
      if (book.id > maxId) {  
          maxId = book.id;
      }
  }
  bookList.push({ id: maxId + 1, title, price });
} 
  
  function showBooks() { 
    for (let book of bookList) {
      console.log(book.title + " added with the price " + book.price + "€"); // String Tamplate {`var`}
    }
  }
  
  // Example Function Calls
  let myBook = getBook(2);
  console.log(myBook);
  addBook("Fahrenheit 451", 9.2);
  showBooks()
