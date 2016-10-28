(function() {
  window.todos = window.todos || {};


  console.log("I am js ui file");

// Function creation to add new todo list item
  function addListItem() {
    // For creation of new list item
    var li = document.createElement("li");
    // For grabbing text in form input to put on list item
    var inputValue = document.querySelector(".to-do").value;
    // For creating text node for new list item text to reside
    var newTodo = document.createTextNode(inputValue)
    // // Adding text to new todo line item.
    li.appendChild(newTodo);
    // // Adding new todo list item to UL
    // document.querySelector(".items")appendChild(li);
    //
    // document.querySelector(".to-do").value = "";
  }



/////////////////////////////////////
  document
    .querySelector("form")
    .addEventListener("submit", function addListItem(eventObj) {
      console.log(eventObj);
      eventObj.preventDefault();

      // console.log("Hello");

      var li = document.createElement("li");
      console.log("li");
      // For grabbing text in form input to put on list item
      var inputValue = document.querySelector(".new-todo").value;
      console.log(inputValue);
      // For creating text node for new list item text to reside
      li.innerText = inputValue;
      li.classList.add("new-item");
      // // Adding text to new todo line item.
      document.querySelector("ul").appendChild(li);
      console.log("hello");
      // li.appendChild(newTodo);


    })











})();
