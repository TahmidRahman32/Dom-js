// const items = document.getElementsByClassName("item");
// for (const item of items) {
//    item.addEventListener("click", function (event) {
//       event.target.parentNode.removeChild(event.target);
//    });
// }

document.getElementById("main-container").addEventListener('click', function(event){
event.target.parentNode.removeChild(event.target)
});

document.getElementById("add-item").addEventListener("click", function () {
   const addItem = document.getElementById("main-container");
   const li = document.createElement("li");
   li.innerText = "added new item";
   li.classList.add('item')
   addItem.appendChild(li);
});
