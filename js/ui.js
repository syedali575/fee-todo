(function() {
  window.todos = window.todos || {};


  console.log("I am js ui file");

// Function creation to add new todo list item
  function newElement() {
    // For creation of new li
    var li = document.createElement("li");
    //
    var inputValue = document.getElementsByClassName(".to-do").value;
    var newTodo = document.createTextNode(inputValue)
    //Adding text to new todo line item.
    li.appendChild(newTodo);
    // Adding new todo list item to UL
    document.getElementsByClassName(".")


    document.getElementsByClassName(".items").appendChild(li);
    document.getElementsByClassName(".to-do").value = "";

  }


/////////////////////////////////////
  document
    .querySelector(".new-todo")
    .addEventListener("click", function addListItem (eventObj) {
    eventObj.target.style.color = "green";
    })











})();
