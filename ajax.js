var pageUnits = true;
loadJson();

document.querySelector(".unit-button").addEventListener("click",() => {
    pageUnits = !pageUnits;
    console.log(pageUnits);
    if (!pageUnits){
        document.querySelector(".unit-button").textContent = "metric"
    }
    else{
        document.querySelector(".unit-button").textContent = "imperial"
    }
    loadJson();
})

function loadJson(){
    fetch("doggies.json").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        d = data.data
        document.querySelector('.content').innerHTML = ""
        for(i=0; i < d.length; i++){
    
            if (pageUnits == true){
                h = `Height: ${d[i].height.imperial} inches`;
                w = `Weight: ${d[i].weight.imperial} pounds`;
            }
            else{
                h = `Height: ${d[i].height.metric} cm`;
                w = `Weight: ${d[i].weight.metric} kilograms`;
            }
            
            document.querySelector('.content').innerHTML += `
            <div class="dog">
                <h2>Name: ${d[i].name}</h2>
                <p>Breed Group: ${d[i].breed_group}</p>
                <p>Bred For: ${d[i].bred_for}</p>
                <p>Lifespan: ${d[i].life_span}</p>
                <p>Temperament: ${d[i].temperament}</p>
                <p>${h} </p>
                <p>${w} </p>
            </div>`
        }
    })
}


