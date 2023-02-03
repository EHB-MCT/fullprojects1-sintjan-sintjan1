"use strict"

function button(){
document.getElementById('open-menu').addEventListener('click', () => {
    document.getElementById('burger2').style.display = "flex"

    document.getElementById('close-menu').style.display = "block"
    document.getElementById('open-menu').style.display = "none"

   
})

document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('burger2').style.display = "none"

    document.getElementById('close-menu').style.display = "none"
    document.getElementById('open-menu').style.display = "block"

   
})

document.getElementById('border-boxL').addEventListener('click', () => {
    window.location.href = "https://sint-jan-brussel.smartschool.be/login";

   
})

document.getElementById('border-boxi').addEventListener('click', () => {
    window.location.href = "ouders.html";
})

document.getElementById('border-boxj').addEventListener('click', () => {
    window.location.href = "vacatures.html";
})
}

button()

function button2(){
    document.getElementById('duos').addEventListener('click', () => {
        document.getElementById('btwo').style.display = "block";
        document.getElementById('duos').style.animation = "stop";
        document.getElementById('bone').style.display = "none";
        document.getElementById('duos').style.left = "150px";
       console.log("test");
    })
    document.getElementById('brclick').addEventListener('click', () => {
        document.getElementById('btwo').style.display = "none";
        document.getElementById('bbg').style.position = "static";
        document.getElementById('bone').style.display = 'block'
        document.getElementById('bone').style.position = 'relative'
        document.getElementById('bbg').style.paddingTop = '320px'
        document.getElementById('bone').style.top = '-350px'
               
    })
    
   


}
 button2()
