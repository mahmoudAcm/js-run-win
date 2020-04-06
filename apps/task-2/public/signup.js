const signup = document.getElementById("SignUp") 

const submit = () => {
    let inputs = document.getElementsByTagName("input")
    const keys = Object.values(inputs)
    let data = {} 
    keys.forEach((input) => {
        if(input["namee"] !== "submit")
        data[input["name"]] = input["value"]
    });
    return JSON.stringify(data)
}

signup.addEventListener('submit', async (e) =>{
    e.preventDefault()
    
    try{
      const res = await fetch('/signup', {
          method:"post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: submit()
      }) 

      const response = await res.json()

      if(res.status === 404){
         if(response.errors && response.errors.email.message){
           alert('this is not a valid email')
         } else if(response.driver) {
          alert('this email is used!')
         }
      } else {
         alert('success!')
         window.location.replace("/login.html");
      }
    
      
    } catch(e){
          console.log(e)
    }
})
