let body = document.querySelector("body");
let popCard = document.querySelector(".cookie-card");
let popCardBtn = document.querySelector(".accept");

 body.addEventListener("click", ()=>{
  alert("🔧 Site under development — we’ll be live soon with something amazing!");
});


 popCardBtn.addEventListener("click",()=>{
    alert("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
     popCard.style.display = "none";

 })


setTimeout(() => {
    popCard.style.display = "none";
}, 5000); 
