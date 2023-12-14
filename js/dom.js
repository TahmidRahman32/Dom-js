document.getElementById("click-me").addEventListener("click", function () {
   document.body.style.backgroundColor = "green";
});

const parent = document.getElementById("ul-list");
const li = document.createElement('li')
li.innerHTML =` <div>
<li>text</li>
<li>file</li>
</div>`;
parent.appendChild(li)

// document.getElementById("btn-update").addEventListener('click',function(){
//    // const inputField = document.getElementById("input-field");
//    console.log('update')
 
// });

document.getElementById("btn-update").addEventListener('click', function(){
   const inputField = document.getElementById("input-field");
   // console.log(inputField)
   const inputValue = inputField.value;
   const textBox = document.getElementById("text-box");
   textBox.innerText = inputValue;
   inputField.value = '';



});

document.getElementById("btn-comment").addEventListener('click',function(){
   const inputComment = document.getElementById("input-comment");
   const value = inputComment.value;
   
   const newComment = document.getElementById("new-comment");
   const p = document.createElement('p');
   p.innerText = value;
   newComment.appendChild(p);
   inputComment.value = '';

});