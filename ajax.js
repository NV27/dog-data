fetch("doggies.json").then(response => {
    return response.json()
}).then(data => {
    console.log(data);
    d = data.data
    //document.querySelector('.content').innerHTML += `<ul>`
    for(i=0; i < d.length; i++){
        document.querySelector('.content').innerHTML += `
        <div class="dog">
            <h1>Name: ${d[i].name}</h1>
            <p>Weight: ${d[i].weight.imperial}</p>
        </div>
        `
            
            
    }
    //document.querySelector('.content').innerHTML += `</ul>`
})