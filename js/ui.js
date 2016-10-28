(function() {
  window.todos = window.todos || {};


  console.log("I am js ui file");

  document
    .querySelector(".new-todo")
    .addEventListener("click", function addListItem (eventObj) {
    eventObj.target.style.color = "green";
    })














})();
