(function(){
window.todo = window.todo || {}


document
  .querySelector("form")
  .addEventListener("submit", function(event){

    // To prevent default and JS to implement
    event.preventDefault();

    // Creatiion of li element to attach to ul
    var newList = document.createElement("li");

    // To capture form input
    var newTodo = document.querySelector(".new-todo").value;

    // Creatiion of artilce element to attach to  li
    var newArticle = document.createElement("article");

    //Creation of check button element to attach to article
    var newCheckButton = document.createElement("button");
    // Assignment of class to check button for style to take hold
    newCheckButton.classList.add("check");
    // Appending to article
    newArticle.appendChild(newCheckButton);

    // Creatiion of paragraph element to attach to article
    var newParagraph = document.createElement("p");
    newParagraph.innerText = newTodo;
    // Appending to article
    newArticle.appendChild(newParagraph);

    var newDeleteButton = document.createElement("button");
    // Assignment of class to delete button for style to take hold
    newDeleteButton.classList.add("delete");
    // Appending to article
    newArticle.appendChild(newDeleteButton);
    newDeleteButton.innerText = "X";

    // Appending article to li
    newList.appendChild(newArticle);

    //Appending li to ul
    document.querySelector(".items").appendChild(newList);

  })

  console.log("I'm here");

})();
