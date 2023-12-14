
// document.getElementById("git-text-input").addEventListener('keyup', function(event){
//  const text = event.target.value;
//  const deleteButton = document.getElementById("git-btn");
//  if(text === 'delete'){
//    deleteButton.removeAttribute("disabled");
//  }
//  else{
//    deleteButton.setAttribute("disabled", true);
//  }
// });


// document.getElementById("git-btn").addEventListener('click',function(){
//    const secret = document.getElementById("git-text");
//    secret.style.display = 'none';
// });


document.getElementById("git-btn").addEventListener('click',function(){
   const secrets = document.getElementById("git-text");
   secrets.style.display = 'none';
});

document.getElementById("git-text-input").addEventListener('keyup',function(event){
   const text2 = event.target.value;
   const btn = document.getElementById("git-btn");
   if(text2 == 'delete'){
      btn.removeAttribute("disabled");
   }
   else{
      btn.setAttribute("disabled", true);
   }
});