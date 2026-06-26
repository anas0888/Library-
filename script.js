const button = document.querySelector(".submit");

const mainArea = document.querySelector(".main");


button.addEventListener("click",function() {
const myDiv = document.createElement('div');
myDiv.textContent = "hello i am an new book";
 mainArea.appendChild(myDiv);
 event.preventDefault();

myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.border = "2px solid black";
myDiv.style.margin = "10px";

const nameOfBook = document.getElementById('bookName').value
const authorName = document.getElementById('authorName').value;
const pageNumber = document.getElementById('pageNumber').value;
const read = document.getElementById('read').value;
const notRead = document.getElementById('notRead').value;

myDiv.innerHTML = `<p>Name: ${nameOfBook} </p> <br>
<p> Author Name: ${authorName} </p><br>
<p> Page Number: ${pageNumber} </p><br>
<p> Read: ${read} </p><br>
<p> Not Read ${notRead} </p>

`

});

