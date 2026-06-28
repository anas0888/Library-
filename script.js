const button = document.querySelector(".submit");

const mainArea = document.querySelector(".main");


button.addEventListener("click",function() {
const myDiv = document.createElement('div');
myDiv.textContent = "hello i am an new book";
// mainArea.appendChild(myDiv);
// event.preventDefault();

myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.border = "2px solid black";
myDiv.style.margin = "10px";

const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginTop = "10px";
    removeBtn.style.backgroundColor = "#ff4d4d";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.padding = "5px 10px";
    removeBtn.style.cursor = "pointer";


   removeBtn.addEventListener('click' , function(){
myDiv.remove();
       });
 //  myDiv.appendChild(removeBtn);

const nameOfBook = document.getElementById('bookName').value
const authorName = document.getElementById('authorName').value;
const pageNumber = document.getElementById('pageNumber').value;

const bookStatus =  document.querySelector('input[name = "status"]:checked').value;


myDiv.innerHTML = `<p>Name: ${nameOfBook} </p> <br>
<p> Author Name: ${authorName} </p><br>
<p> Page Number: ${pageNumber} </p><br>
<p> Status: ${bookStatus} </p>

`
   myDiv.appendChild(removeBtn);

 mainArea.appendChild(myDiv);
 event.preventDefault();
});

