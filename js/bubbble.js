document.getElementById("item-2").addEventListener("click", function (event) {
   console.log("update");
   event.stopPropagation();
});

document.getElementById("ul-list").addEventListener("click", function () {
   console.log("ul click");
});
