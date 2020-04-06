const login = document.getElementById("login")


const getAccount = () => {
    let inputs = document.getElementsByTagName("input")
    const keys = Object.values(inputs)
    let data = {} 
    keys.forEach((input) => {
        if(input["name"] !== "submit")
        data[input["name"]] = input["value"]
    });
    return JSON.stringify(data)
}

login.addEventListener('submit', async (e) => {
    e.preventDefault()

    try{
        const res = await fetch('/login', {
            method:"post",
            headers: {
              'Content-Type': 'application/json',
            },
            body:getAccount()
        })

        const data = await res.json()

        if(res.status === 404){
            return alert(data.msg)
        }

        alert(`Wellcome ${data.name}`)


    } catch(es){
  
    }
})