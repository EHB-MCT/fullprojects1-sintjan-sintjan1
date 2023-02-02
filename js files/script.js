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
}

button()




