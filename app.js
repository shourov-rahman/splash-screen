const intro = document.querySelector(".intro");
const intrologo = document.querySelectorAll(".intro-logo");

window.addEventListener("DOMContentLoaded", function(){
   
  setTimeout(()=>{
    // logo appearing
    intrologo.forEach((logo,index)=>{
      setTimeout(()=>{
        logo.classList.add("active");
      },250*(index+1));
    })
    //logo disappearing
    setTimeout(()=>{
      intrologo.forEach((logo,index)=>{
        setTimeout(()=>{
          logo.classList.remove("active");
          logo.classList.add("fade");
        },800*(index+1))
      },2000)
    })
    
    // screen disappearence
    setTimeout(()=>{
      intro.style.top = "-100vh"
    },2200)
  })
})
