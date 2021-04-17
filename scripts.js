// declaration of variables from html 

const inputToSearch = document.getElementById("inputToSearch");
const goToSeach = document.getElementById("goToSeach");
const basicsFeaturesOfPokemon = document.getElementById("basicsFeaturesOfPokemon");
const geneticsOfPokemon = document.getElementById("geneticsOfPokemon");
const abilitiesOfPokemon = document.getElementById("abilitiesOfPokemon");
let paragraph = document.createElement("p");
let paragraph2 = document.createElement("p");
let paragraph3 = document.createElement("p");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let h3 = document.createElement("h3");
let h32 = document.createElement("h3");
let h33 = document.createElement("h3");

// declaration of varibles for API request 

var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=dbac5690b524dafbf37006d1751668e171618642214");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// event click with pokemon name or id to search 

let response = goToSeach.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    let valueInput = inputToSearch.value;
    valueInput = valueInput.trim();
    if (valueInput > 1118){       //consultar la respuesta de un numero mayor a  1118 
        return alert("The pokemon with the highest number is 1118");
    }
    if (valueInput == 0 || ""){
        return alert("The empty pokemon does not exist")
    }
    console.log(valueInput);
    
    return valuesOfPokemon(valueInput);
    
    // return fetch(`https://pokeapi.co/api/v2/pokemon/${valueInput}`, requestOptions)
    // .then(response => response.json())
    // .then(function(json){
    //     const pokemonName = json.name
    // })
    // .then( json => console.log(json))
    // .catch(error => console.log('error', error));
});
   
const valuesOfPokemon = async function (valueInput) {
    
    // values of pokemon

    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${valueInput}`);
    console.log(response.ok);
    console.log(response.status);
    // if aqui de la 33 
    const data = await response.json();
    console.log(data);
    const pokemonName = data.name;
    console.log(pokemonName)
    const pokemonWeight = data.weight;
    console.log(pokemonWeight);
    const pokemonHeight = data.height;
    console.log(pokemonHeight);
    const pokemonSpecies = data.species.name;
    console.log(pokemonSpecies);

    // if (pokemonSpecies.length > 0){        // duda de lenght en objetos 
    //     var speciesArray = pokemonSpecies.map(spicieUnit => {
    //     spicieUnit.name;
    // });
    //     speciesArray.forEach(spicie => console.log(spicie));    
    // } else { 
    //     spicieArray = pokemonSpecies;
    //     console.log(speciesArray);
    // } 

    const pokemonTypes = data.types;                                                  // por que no puedo agarrar aqui con todo lo de la linea 3 lineas por debajos 
    console.log(pokemonTypes);
    const typesArray = pokemonTypes.map(typeUnit => {
        return typeUnit.type.name;                                
    });                                                          
    typesArray.forEach(type => console.log(type));

    // if (pokemonTypes.length > 0){
    //     var typesArray = pokemonTypes.map(typeUnit => {
    //     typeUnit.type.name;
    // });
    //     typesArray.forEach(type => console.log(type));    
    // } else { 
    //     typesArray = pokemonSpecies;
    //     console.log(typesArray);
    // }    

    const pokemonAbilities = data.abilities;
    console.log(pokemonAbilities);
    const abilitiesArray = pokemonAbilities.map(abilitieUnit => {
        return abilitieUnit.ability.name;
    });
    abilitiesArray.forEach(ability => console.log(ability));
    const imgOfficialArtWork = data.sprites.other;
    // const imgLink = imgOfficialArtWork.official-artwork;                                // ????????? por que no me agarra 
    console.log(imgOfficialArtWork);

    // values of HTML 

    h1.textContent = `${pokemonName}`;
    basicsFeaturesOfPokemon.appendChild(h1);
    h3.textContent = `Basics Features`;
    basicsFeaturesOfPokemon.appendChild(h3);
    paragraph.textContent = `Weight:${pokemonWeight} Height:${pokemonHeight}`;
    basicsFeaturesOfPokemon.appendChild(paragraph);
    h32.textContent = `Genetic`;
    geneticsOfPokemon.appendChild(h32);
    paragraph2.textContent = `Specie:${pokemonSpecies} Type:${typesArray}`;
    geneticsOfPokemon.appendChild(paragraph2);
    h33.textContent = `Abilities`;
    abilitiesOfPokemon.appendChild(h33);
    paragraph3.textContent = `Abilities ${abilitiesArray}`;
    abilitiesOfPokemon.appendChild(paragraph3);




    

  };

//     .then(function(json){
//         // values in html 

//         // values of pokemon 
//         const pokemonName = json.name;
//         const pokemonAbilities = json.abilities;         // dudas con el then aqui , con respecto a usar los json.name/type etc... 
//         console.log(pokemonName);
//         console.log(pokemonAbilities);
//         console.log(pokemonUnitAbilities);
//         // pokemonAbilities.forEach(abilitie => {
//         //     console.log(abilitie);
//         // }) 
//         // console.log(pokemonName);
//     })
//     .catch(error => console.log('error', error));
// });


