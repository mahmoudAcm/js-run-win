let counter = 0

const init = (add, calback) => {
   if(!localStorage.getItem("counter")){
      localStorage.setItem("counter", 0)
   }

   localStorage.counter = Number(localStorage.counter) + add
   calback(localStorage.counter)
}


const counterHTML = document.getElementById("counter")
const add = document.getElementById("inc")
const rest = document.getElementById("rest")

init(0, (data) => {
    counterHTML.innerHTML = data
})

add.addEventListener('click', () => {
    init(1, (data) => {
        counterHTML.innerHTML = data
    })
})

rest.addEventListener('click', () => {
    if(localStorage.getItem("counter"))
        localStorage.removeItem("counter")
    counterHTML.innerHTML = 0 
})



