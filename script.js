//creating header using DOM
const header = document.createElement('div');
header.style.width = "100%;"
header.style.height = "80px";
header.style.background = "blue";
header.style.color = "white";
header.innerHTML = "KEN'S LIBRARY";
//appending header to container
document.getElementById('container').appendChild(header);
//creating add button and appending to container
let btn = document.createElement("button");
btn.innerHTML = "Add Book";
btn.onclick = addBook();
document.body.appendChild(btn);

// book prototype
function Book(bookName,author , status) {
    this.bookNAme = bookName;
    this.author = author;
    this.status= status;
    
  }
// function to add book and form used for input
  Book.prototype.addBook = function(){

    const form = document.createElement("form");




    document.getElementById('libcontent').appendChild(form);


  }
// function to delete book from viewport
const deleteBook = ()=>{

}


