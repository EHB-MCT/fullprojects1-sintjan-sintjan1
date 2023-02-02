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
    document.getElementsByClassName('').addEventListener('click', () => {
        document.getElementById('btwo').style.display = "none"
        document.getElementById('bbg').style.position = "static"  
               
    })
    
   


}
 button2()
