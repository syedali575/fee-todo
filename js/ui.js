(function() {
  window.todos = window.todos || {};



  document
    .querySelector("form")
    .addEventListener("submit", function addListItem(eventObj) {

      eventObj.preventDefault();

      var li = document.createElement("li");
      var inputValue = document.querySelector(".new-todo").value;

      var addArticle = document.createElement("article");


      var addButton = document.createElement("button");
      addButton.classList.add("check");
      addArticle.appendChild(addButton);

      var addP = document.createElement("p");
      addP.innerText = inputValue;
      addArticle.appendChild(addP);

      var addXbutton = document.createElement("button");
      addXbutton.classList.add("delete");
      addXbutton.innerText = "X";
      addArticle.appendChild(addXbutton);

      li.appendChild(addArticle);

      document.querySelector(".items").appendChild(li);


    })


  document.querySelector("article")
  .addEventListener("click", function complete(event) {
  event.target.classList.add("completed");
  console.log("I am here");





  })



})();
