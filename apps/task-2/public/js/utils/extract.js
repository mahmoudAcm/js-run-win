const elem = (name, callback) =>{ 
    const id = name.match(/#[a-z-0-9]+/gm) 
    const idClass = name.match(/\.[a-z-0-9]+/gm)
    try{
        if(id){  
        let el = document.querySelector(name)   

        if(!el){
            throw "something went wrong"
        }
        
        callback(el) 

        } else if(idClass){
          let el = document.querySelectorAll(name) 

          if(!el){
            throw "something went wrong"
          }

          el = Array.from(el)
          callback(el)  
        }

    } catch(e){
        callback(e)
    }
}
