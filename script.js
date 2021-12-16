//creating header using DOM
const header = document.createElement('div');
header.style.width = "100%";
header.style.height = "80px";
header.style.background = "blue";
header.style.color = "white";
header.innerHTML = "KEN'S LIBRARY";
//appending header to container
document.getElementById('container').appendChild(header);
//creating add button and appending to container
let btn = document.createElement("button");
btn.innerHTML = "Add Book";
document.body.appendChild(btn);
btn.onclick= addBook;
// function to add book and form used for input


//library Array
let myLibrary =[];
// book prototype
function Book(bookName,author , status) {
    this.bookName = bookName;
    this.author = author;
    this.status= status;
    
  }

//add function to add new book div to viewport everytime data is entered onto the form
  function addBook(){

  //this div holds all the book elements/displayed books
  let nwItem = document.getElementById('libcontent');
  nwItem.style.display="block";
  nwItem.style.height="500px";
  nwItem.style.width="100%";
  nwItem.style.backgroundColor="yellow";
  //this div displays a single books info
  let bkDiv = document.createElement("div");
  bkDiv.style.display="flex";
  bkDiv.style.height ="150px";
  bkDiv.style.width ="100px";

  //these are the input boxes and the whole input form
  let bkName = document.createElement("input");
  bkName.setAttribute("type","text");
  bkName.setAttribute('name','Book Name');
  bkName.setAttribute("placeholder","Book Name");

  let writer = document.createElement("input");
  writer.setAttribute('type',"text");
  writer.setAttribute('name','Author');
  writer.setAttribute("placeholder","Author");

  let staTus = document.createElement("input");
  staTus.setAttribute('type',"text");
  staTus.setAttribute('name','Read/NotRead?');
  staTus.setAttribute("placeholder","Status");

  let addBtn = document.createElement("button");
  addBtn.innerHTML = "Add Book";
//adding form div to its container
  nwItem.append(bkDiv);
//adding elements to form div
  bkDiv.appendChild(bkName);
  bkDiv.appendChild(writer);
  bkDiv.appendChild(staTus);
  bkDiv.appendChild(addBtn);


  function libBooks(){
    let book = new Book(bkName,writer,staTus);
    myLibrary.push(book);
    console.table(myLibrary);
  }

  addBtn.onclick= libBooks;
  

}

// function to delete book from viewport
const deleteBook = ()=>{

}


