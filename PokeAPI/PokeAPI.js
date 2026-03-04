
 let cache = sessionStorage;
 let searchButton = document.getElementById("searchButton");
 let PokemonText = null;
 let PokeData = null;
 let PokemonName = null;
 let PokemonAudio = null;
 let PokemonImage = null;

function searchPokemon(){
    PokemonText = document.getElementById("PokemonText").value.toLowerCase();
    if (PokemonText == "") {
        console.log("Enter a pokemon name or ID to continue!!!!.");
        return;
    }
    let checkCache = cache.getItem(PokemonText)
    if(checkCache != null){
        console.log("Data pre-exists, grabbing from local");
        PokeData = JSON.parse(checkCache);
        showPokemon(PokeData);
    }
    
    else{
    console.log("Data does not exist, fetching.");
    fetch("https://pokeapi.co/api/v2/pokemon/"+ PokemonText)
    .then(response => response.json())
    .then(PokeData => {
        cache.setItem(PokemonText, JSON.stringify(PokeData));
        showPokemon(PokeData);
        });
    }

}

function showPokemon(PokeData){
    PokemonName = document.getElementById("Name");
    PokemonAudio = document.getElementById("Audio");
    PokemonImage = document.getElementById("Image");
    PokemonImage.src = PokeData.sprites.front_default;
    PokemonAudio.src = PokeData.cries.latest;
    
    PokemonName.textContent = PokeData.name;
    document.getElementById("Audio").load();
    let Moves = [document.getElementById("Move1"), document.getElementById("Move2"), document.getElementById("Move3"),document.getElementById("Move4")];
    
    for (let i = 0; i < Moves.length; i++){
        let helper = Moves[i];
        helper.innerText = "";
        PokeData.moves.forEach(element => {
            let MoveSet = document.createElement("option");
            MoveSet.textContent = element.move.name;
            helper.appendChild(MoveSet);
        });
    }

}

function addTeam(){
    let Pokemon = document.createElement("div");
    Pokemon.className = "PokeTeamMember";
    let TeamName = document.createElement("h3");
    TeamName.textContent = document.getElementById("Name").textContent;
    let image = document.createElement("img");
    image.src = document.getElementById("Image").src;
    image.width = 125;
    Pokemon.appendChild(TeamName);
    Pokemon.appendChild(image);
    let dropdowns = [document.getElementById("Move1"), document.getElementById("Move2"), document.getElementById("Move3"), document.getElementById("Move4")];
    let moveList = document.createElement("ul");

    for (let i = 0; i < dropdowns.length; i++){
        let helper = document.createElement("li");
        helper.innerText = dropdowns[i].value;
        moveList.appendChild(helper);
    }
    
    Pokemon.appendChild(moveList);
    
    document.getElementById("Team").appendChild(Pokemon);
}