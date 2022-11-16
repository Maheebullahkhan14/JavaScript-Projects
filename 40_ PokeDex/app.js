const pokemonCount = 152


var Pokedex = {}

window.onload = async function() {
    // getPokemon(1);
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
    
    let pokemonlist = document.createElement('li')
    pokemonlist.id = i
    pokemonlist.innerText = i.toString() + '. ' + Pokedex[i]['name'].toUpperCase()
    pokemonlist.classList.add("pokemon-name");
    pokemonlist.addEventListener('click',update)
    document.getElementById('Pokemon-list').append(pokemonlist)

    
}

}
async function getPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url)
    let pokemon = await res.json()
    // console.log(pokemon)

    let Name = pokemon['name']
    let Height = pokemon['height']
    let Weight = pokemon['weight']
    let img =  pokemon['sprites']['front_default']
    let types = pokemon['types']
    // console.log(types)

    let descurl = await fetch(pokemon['species']['url'])
    let pokemonDescription = await descurl.json()
    let Description = pokemonDescription['flavor_text_entries'][9]['flavor_text']
    // console.log(Description)

    Pokedex[num] = {name : Name , height : Height , weight : Weight , image : img , Types : types , Desc : Description}
}

function update(){
    document.getElementById("pokemonimages").src = Pokedex[this.id]["image"];
    // console.log(this.id)

    let TypesDiv = document.getElementById('pokemon-types')

    while (TypesDiv.firstChild){
        TypesDiv.firstChild.remove()
    }
    
    let types = Pokedex[this.id]['Types']
    
    for(let i=0 ;i < types.length ;i++){
        let type = document.createElement('span')
        type.innerText = types[i]['type']['name']

        type.classList.add('type-box')
        type.classList.add(types[i]['type']['name'])
        TypesDiv.append(type)
    }

    let PokemonHeight = Pokedex[this.id]['height']
   let PokemonWeight = Pokedex[this.id]['weight']
   let PokemonDesc = Pokedex[this.id]['Desc']

   document.getElementById('Height').innerText = PokemonHeight
   document.getElementById('weight').innerText = PokemonWeight

   document.querySelector('.info').innerText = PokemonDesc

}