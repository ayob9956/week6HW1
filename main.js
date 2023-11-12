function callFatch() {

    fetch("https://rickandmortyapi.com/api/character")           //api for the get request
  .then(response => response.json())
  .then((data) => {
     for(let i = 0; i < data.results.length; i++) {
        let divv = document.getElementById("container")
        let card  = document.createElement("div");
        let headd = document.createElement("h5")
        headd.innerText = data.results[i].name;
        card.className = "card";
        
        divv.append(card)
        card.appendChild(headd);
        let immg = document.createElement("img");
        immg.src=data.results[i].image;
        card.appendChild(immg);
    console.log("hi");
    
  }});
    
}

// `${element.name} ${element.image}`

callFatch();