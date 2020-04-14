const tabOne = document.getElementById("tab-1")
const tabTwo = document.getElementById("tab-2")
const insertProducts = document.getElementById("insertProducts")
const updateProducts = document.getElementById("updateProducts")

tabOne.addEventListener('click', () => {
    elem("#insert", (insert) =>{
       elem("#view", (view) =>{
          view.hidden = "true"
       })
       insert.hidden = undefined
    })
})

tabTwo.addEventListener('click', async () => {
    try{
    elem("#view", async (view) =>{
        elem("#insert", (insert) =>{
           insert.hidden = "true"
        })
        view.hidden = undefined

        const data = await viweProducts()
        renderView(data).then((msg) => {
            console.log(msg)
        })

     })
    } catch(e)  {
        console.log(e)
    }
})

insertProducts.addEventListener('submit', async (e) =>{
e.preventDefault() ;
      let data = {}      
      elem('.userdata', (input) => {
          input.forEach((key) => {
              data[key.name] = key.value
          })
      })

    const res = await fetch('/product', {
        method:"post",
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })

    const success = await res.json()
    if(success){
        alert('data has been insert')
        insertProducts.reset()    
    }
})



updateProducts.addEventListener('submit', async (e) =>{
    e.preventDefault() ;
          const id = document.getElementById('up').value
          let data = {}      
          elem('.userdata2', (input) => {
              input.forEach((key) => {
                  if(key.value)
                  data[key.name] = key.value
              })
          })

    
        const res = await fetch(`/product/${id}`, {
            method:"post",
            headers: {
            'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        })
    
        const success = await res.json()
        if(success){
            console.log(success)
            updateProducts.reset()
            alert('data has been updated')
            await renderView(success)
            elem("#update", (el) => {
                el.hidden = "true"
            })
        }
})

const viweProducts = async () =>{
    const res = await fetch('/products', {
        method:"get",
        headers: {
        'Content-Type': 'application/json',
        }}
    )
    const data = await res.json()
    return data
}

const deletePoduct =  async (id) => {
    const res = await fetch(`/product/${id}`, {
        method:"delete",
        headers: {
        'Content-Type': 'application/json',
        }
    })

    const data = await viweProducts()
    await renderView(data)

}


const renderView = (data) =>{
    elem('#viewProducts', (tabel) => {
        tabel.innerHTML = `<th>id</th><th>name</th><th>amount</th><th>price</th><th>description</th><th>update</th><th>delete</th>
        ` 
        let id = 1 ;
         data.forEach((product) => {
            tabel.innerHTML += `<tr title="${new Date(product.updatedAt).toDateString()}">
            <td> ${id++}</td>
            <td> ${product.name} </td> 
            <td> ${product.amount}</td>
            <td> ${product.price}</td>
            <td> ${(product.desription? product.desription: "no description")}</td>
            <td><button data-id='${product._id}' class='modificationBtn' role="update">update</button></td><td><button data-id='${product._id}' class='modificationBtn' role="delete">delete</button></td>
            </tr>`
      })
   })

   elem('.modificationBtn', (btn) => {
    btn.forEach((rick) => {
        rick.addEventListener('click', async (e) => {
              let role = e.target.attributes.role.value
              let id = e.target.attributes["data-id"].value
              console.log(role)
              if(role == "delete"){
                await deletePoduct(id)
                let data = await viweProducts()
                await renderView(data)
              } else{
                elem('#update', (el) => {
                    el.hidden = undefined
                    elem('#up', (idUp) => {
                        idUp.value = id ;
                    })
                })
              }
        })
    })
  })

  return new Promise((solve, wa) => {
      solve('done')
  })
   
}