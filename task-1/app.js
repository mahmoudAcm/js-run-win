let counter

const init = () => {
   if(!localStorage.getItem("counter"))  
   localStorage.setItem("counter", 0);

   counter = localStorage.getItem("counter")
   counterHTML.innerHTML = counter
}


const counterHTML = document.getElementById("counter")
const add = document.getElementById("inc")
const rest = document.getElementById("rest")

init()

add.addEventListener('click', () => {
    counter = ++localStorage.counter 
    init() 
})

rest.addEventListener('click', () => {
    if(localStorage.getItem("counter"))
        localStorage.removeItem("counter")
    counterHTML.innerHTML = 0 
})



