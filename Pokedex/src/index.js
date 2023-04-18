const container = document.getElementById("cards-container");

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const data = await response.json();
  return data;
};

const getPokemons = async () => {
  const pokemons = await fetchData();
  const pokemonsList = pokemons.results;

  const pokeArr = [];

  pokemonsList.forEach((pokemon) => {
    const fetchPokemon = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    };

    const everyPokemon = async () => {
      const poke = await fetchPokemon();
      const pokeList = poke;

      const imgPoke = document.createElement("img");
      imgPoke.src = pokeList.sprites.front_default;
      const idPoke = document.createElement("span");
      if(pokeList.id < 10) {
        idPoke.innerText = "00" + pokeList.id
      } else if(pokeList.id > 10 && pokeList.id < 100) {
        idPoke.innerText = "0" + pokeList.id
      } else {
        idPoke.innerText = pokeList.id
      }
      let namePoke = (document.createElement("h4").innerText = pokeList.name);
      const types = pokeList.types;

      const pokeObj = {
        img: imgPoke.src,
        id: idPoke.innerText,
        h4: namePoke,
        type: types,
      };

      pokeArr.push(pokeObj);

      localStorage.setItem("pokemon", JSON.stringify(pokeArr));
    };

    everyPokemon();

  });
};

getPokemons();

function pintarPoke() {
  const pokeStorage = JSON.parse(localStorage.getItem("pokemon"));

  pokeStorage.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add('card');
    const cardPadding = document.createElement('div');
    cardPadding.classList.add('cardPadding')
    const img = document.createElement('img');
    img.src = pokemon.img;
    const id = document.createElement('span');
    id.innerText = '#' + pokemon.id;
    id.style.marginTop = '15px'
    const namePoke = document.createElement('h4');
    namePoke.innerText = pokemon.h4;
    namePoke.style.marginTop = '15px'
    const typePoke = pokemon.type;



    cardPadding.appendChild(img)

  card.append(cardPadding, id, namePoke)
  const types = typePoke.forEach(type => {
        let typeId = document.createElement('li');
        const ul = document.createElement('ul');
        console.log(type.type);
        typeId.innerText = type.type.name
        ul.appendChild(typeId)
        card.append(ul)

        
    })

  container.appendChild(card);
  })

}

pintarPoke()
