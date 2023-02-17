const intro = document.querySelector(".intro");
const intrologo = document.querySelectorAll(".intro-logo");

window.addEventListener("DOMContentLoaded", function(){
   
  setTimeout(()=>{
    // logo appearing
    intrologo.forEach((logo,index)=>{
      setTimeout(()=>{
        logo.classList.add("active");
      },500*(index+1));
    })      
  })
})
