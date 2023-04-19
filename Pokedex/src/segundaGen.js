const container = document.getElementById("cards-container");
const titleHome = document.getElementById('titleHome');

titleHome.addEventListener('click', () => {
  window.location.href = '../pages/home.html'
})

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151");
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
      const imgPokeShiny = document.createElement('img');
      imgPokeShiny.src = pokeList.sprites.front_shiny;
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
        imgShiny: imgPokeShiny.src,
        id: idPoke.innerText,
        h4: namePoke,
        type: types,
      };

      pokeArr.push(pokeObj);

      pokeArr.sort((a, b) => a.id - b.id)

      localStorage.setItem("pokemon2", JSON.stringify(pokeArr));
    };

    everyPokemon();

  });
};

getPokemons();

function pintarPoke() {
  const pokeStorage = JSON.parse(localStorage.getItem("pokemon2"));


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

    if(img.src === pokemon.img) {
      img.addEventListener('click', () => {
        cardPadding.classList.add('rotateImg');
        img.src = pokemon.imgShiny;
      })
    }

    img.addEventListener('dblclick', () => {
      cardPadding.classList.remove('rotateImg')
      img.src = pokemon.img
    })

    cardPadding.append(img)

  card.append(cardPadding, id, namePoke)
  const types = typePoke.forEach(type => {
        let typeId = document.createElement('small');
        typeId.innerText = 'Type: ' + type.type.name
        card.append(typeId)


        if(type.type.name === 'grass') {
          card.classList.add('grass')
        }

        if(type.type.name === 'fire') {
          card.classList.add('fire');
        }

        if(type.type.name === 'water') {
          card.classList.add('water')
        }

        if(type.type.name === 'bug') {
          card.classList.add('bug')
        }

        if(type.type.name === 'normal') {
          card.classList.add('normal')
        }

        if(type.type.name === 'flying') {
          card.classList.add('fly')
        }

        if(type.type.name === 'poison') {
          card.classList.add('poison')
        }

        if(type.type.name === 'electric') {
          card.classList.add('electric')
        }

        if(type.type.name === 'ground') {
          card.classList.add('ground')
        }

        if(type.type.name === 'fairy') {
          card.classList.add('fairy')
        }

        if(type.type.name === 'psychic') {
          card.classList.add('psychic')
        }

        if(type.type.name === 'fighting') {
          card.classList.add('fight');
        }

        if(type.type.name === 'dragon') {
          card.classList.add('dragon')
        }

        if(type.type.name === 'ice') {
          card.classList.add('ice')
        }

        if(type.type.name === 'rock') {
          card.classList.add('rock')
        }

        if(type.type.name === 'ghost') {
          card.classList.add('phantom')
        }

        if(type.type.name === 'steel') {
          card.classList.add('steel');
        }

        if(type.type.name === 'dark') {
            card.classList.add('sinister');
        }

        if(card.classList.contains('fire') && card.classList.contains('fly')) {
          card.setAttribute("id", "fire-fly");
        }

        if(card.classList.contains('grass') && card.classList.contains('poison')) {
          card.setAttribute('id', 'grass-poison');
        }

        if(card.classList.contains('grass') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'grass-psychic');
        }

        if(card.classList.contains('grass') && card.classList.contains('fly')) {
            card.setAttribute('id', 'grass-fly');
          }

        if(card.classList.contains('fly') && card.classList.contains('normal')) {
          card.setAttribute('id', 'normal-fly');
        }

        if(card.classList.contains('bug') && card.classList.contains('poison')) {
          card.setAttribute('id', 'bug-poison');
        }

        if(card.classList.contains('bug') && card.classList.contains('fly')) {
          card.setAttribute('id', 'bug-fly');
        }

        if(card.classList.contains('water') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'water-psychic');
        }

        if(card.classList.contains('water') && card.classList.contains('poison')) {
          card.setAttribute('id', 'water-poison');
        }

        if(card.classList.contains('poison') && card.classList.contains('ground')) {
          card.setAttribute('id', 'poison-ground');
        }

        if(card.classList.contains('electric') && card.classList.contains('steel')) {
          card.setAttribute('id', 'electric-steel');
        }

        if(card.classList.contains('electric') && card.classList.contains('fly')) {
          card.setAttribute('id', 'electric-fly');
        }

        if(card.classList.contains('bug') && card.classList.contains('grass')) {
          card.setAttribute('id', 'bug-grass');
        }

        if(card.classList.contains('poison') && card.classList.contains('fly')) {
          card.setAttribute('id', 'poison-fly');
        }

        if(card.classList.contains('water') && card.classList.contains('fight')) {
          card.setAttribute('id', 'water-fight');
        }

        if(card.classList.contains('water') && card.classList.contains('ice')) {
          card.setAttribute('id', 'water-ice');
        }

        if(card.classList.contains('water') && card.classList.contains('electric')) {
            card.setAttribute('id', 'water-electric');
          }

        if(card.classList.contains('water') && card.classList.contains('fly')) {
          card.setAttribute('id', 'water-fly');
        }

        if(card.classList.contains('water') && card.classList.contains('fairy')) {
            card.setAttribute('id', 'water-fairy');
        }

        if(card.classList.contains('water') && card.classList.contains('ground')) {
            card.setAttribute('id', 'water-ground');
        }

        if(card.classList.contains('water') && card.classList.contains('dragon')) {
            card.setAttribute('id', 'water-dragon');
        }

        if(card.classList.contains('rock') && card.classList.contains('ground')) {
          card.setAttribute('id', 'rock-ground');
        }

        if(card.classList.contains('rock') && card.classList.contains('water')) {
          card.setAttribute('id', 'rock-water');
        }

        if(card.classList.contains('rock') && card.classList.contains('fly')) {
          card.setAttribute('id', 'rock-fly');
        }

        if(card.classList.contains('normal') && card.classList.contains('fairy')) {
          card.setAttribute('id', 'normal-fairy');
        }

        if(card.classList.contains('phantom') && card.classList.contains('poison')) {
          card.setAttribute('id', 'phantom-poison');
        }

        if(card.classList.contains('psychic') && card.classList.contains('fairy')) {
          card.setAttribute('id', 'psychic-fairy');
        }

        if(card.classList.contains('psychic') && card.classList.contains('fly')) {
            card.setAttribute('id', 'psychic-fly');
          }

        if(card.classList.contains('ice') && card.classList.contains('psychic')) {
          card.setAttribute('id', 'ice-psychic');
        }

        if(card.classList.contains('ice') && card.classList.contains('fly')) {
          card.setAttribute('id', 'ice-fly');
        }

        if(card.classList.contains('dragon') && card.classList.contains('fly')) {
          card.setAttribute('id', 'dragon-fly');
        }

        if(card.classList.contains('fairy') && card.classList.contains('fly')) {
            card.setAttribute('id', 'fairy-fly');
        }

        if(card.classList.contains('sinister') && card.classList.contains('fly')) {
            card.setAttribute('id', 'sinister-fly');
        }

        if(card.classList.contains('ground') && card.classList.contains('fly')) {
            card.setAttribute('id', 'ground-fly');
        }

        if(card.classList.contains('steel') && card.classList.contains('fly')) {
            card.setAttribute('id', 'steel-fly');
        }

        if(card.classList.contains('normal') && card.classList.contains('psychic')) {
            card.setAttribute('id', 'normal-psychic');
        }

        if(card.classList.contains('bug') && card.classList.contains('steel')) {
            card.setAttribute('id', 'bug-steel');
        }

        if(card.classList.contains('steel') && card.classList.contains('ground')) {
            card.setAttribute('id', 'steel-ground');
        }

        if(card.classList.contains('bug') && card.classList.contains('rock')) {
            card.setAttribute('id', 'bug-rock');
        }

        if(card.classList.contains('bug') && card.classList.contains('fight')) {
            card.setAttribute('id', 'bug-fight');
        }

        if(card.classList.contains('sinister') && card.classList.contains('ice')) {
            card.setAttribute('id', 'sinister-ice');
        }

        if(card.classList.contains('sinister') && card.classList.contains('fire')) {
            card.setAttribute('id', 'sinister-fire');
        }

        if(card.classList.contains('fire') && card.classList.contains('rock')) {
            card.setAttribute('id', 'fire-rock');
        }

        if(card.classList.contains('ice') && card.classList.contains('ground')) {
            card.setAttribute('id', 'ice-ground');
        }

        if(card.classList.contains('rock') && card.classList.contains('sinister')) {
            card.setAttribute('id', 'rock-sinister');
        }

    })

  container.appendChild(card);

  })

}

pintarPoke()
