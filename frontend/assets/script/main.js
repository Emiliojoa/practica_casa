const url = "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265"
const contenedor = document.getElementById("contenedor")



fetch(url).then((respuesta)=>{
    respuesta.json().then((info)=>{
        console.log(info)
    })
})

fetch(url).then((respuesta)=>{
    respuesta.json().then((info)=>{
        console.log(info)
        info.forEach(element => {
            contenedor.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${element.image}" >
            <div class="card-body">
            <h3 class="card-title">${element.name}</h3>
            <p class="card-text">${element.wikiUrl}</p>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWyol0wVCL94BfhRKNBpVeNJTGJ6XNRVnjg&s" class="btn btn-primary" target="_blank">click aqui</a>
            </div>
            </div>
            `
        });
    })
})
