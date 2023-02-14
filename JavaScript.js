let i=1;
  function afisare(){
    let humburger = document.getElementById("nav");
    let body=document.querySelectorAll("body");
    if(i==1){
      humburger.classList.add("activare");
      i=2;
    }else if(i==2){
      humburger.classList.remove("activare");
      i=1;
    }
  }
  
  window.addEventListener('scroll', function change(){
    let navbar = document.getElementById("nav-bar");
    if(window.scrollY >= 165){
      navbar.classList.remove("headerColorOut");
      navbar.classList.add("headerColorOn");
    }else if(window.scrollY < 165){
      navbar.classList.remove("headerColorOn");
      navbar.classList.add("headerColorOut");
    }
  });