
hamburger = document.querySelector(".hamburger");
navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
            
function mobileMenu() {
    navMenu.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
function changer(abs){
    navLink.forEach(n => n.classList.remove("nav-yellow"));
    document.getElementById("main").classList.remove("nav-yellow");
    document.getElementById("main").classList.add("nav-link");
    document.getElementById("one").classList.add("nav-link");
    document.getElementById("two").classList.add("nav-link");
    document.getElementById(abs).classList.add("nav-yellow");
}
function remover(){
    navLink.forEach(n => n.classList.remove("nav-yellow"));
    document.getElementById("main").classList.add("nav-yellow");
    document.getElementById("one").classList.add("nav-link");
    document.getElementById("two").classList.add("nav-link");
    
}



var one = document.getElementById("one");
var two = document.getElementById("two");
var main = document.getElementById("main");
one.addEventListener("click",scoreb);
two.addEventListener("click",colorp);
main.addEventListener("click",mainer)
function colorp(){
    var webp = document.getElementById("webp");
    var colo = document.getElementById("colo");
    var cric = document.getElementById("cricket");
  if(colo.style.display == "none")  {
      colo.style.display = "block"
      webp.style.display = "none"
      cric.style.display = "none"
      changer("two");
  }
  else{
      colo.style.display = "none"
      webp.style.display = "flex"
      cric.style.display = "none"
      remover();

  }
}
function scoreb(){
    var colo = document.getElementById("colo");
    var webp = document.getElementById("webp");
    var cric = document.getElementById("cricket");
    if(cric.style.display == "none")  {
        cric.style.display = "block"
        webp.style.display = "none"
        colo.style.display = "none"
        changer("one");
    }
    else{
        cric.style.display = "none"
        webp.style.display = "flex"
        colo.style.display = "none"
        remover();
        
    }
}
function mainer(){
    var webp = document.getElementById("webp");
    var colo = document.getElementById("colo");
    var cric = document.getElementById("cricket");
      colo.style.display = "none";
      webp.style.display = "flex";
      cric.style.display = "none";
      changer("main");
  
}





