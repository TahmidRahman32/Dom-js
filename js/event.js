
document.getElementById("git-text-input").addEventListener('keyup', function(event){
 const text = event.target.value;
 const deleteButton = document.getElementById("git-btn");
 if(text === 'delete'){
   deleteButton.removeAttribute("disabled");
 }
 else{
   deleteButton.setAttribute("disabled", true);
 }
});


document.getElementById("git-btn").addEventListener('click',function(){
   const secret = document.getElementById("git-text");
   secret.style.display = 'none';
});