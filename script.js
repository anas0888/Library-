const button = document.querySelector(".addButton");

const mainArea = document.querySelector(".main");

button.addEventListener("click",function() {
const myDiv = document.createElement('div');
myDiv.textContent = "hello i am an new book";
 mainArea.appendChild(myDiv);

myDiv.style.width = "200px";
myDiv.style.height = "200px";
});
