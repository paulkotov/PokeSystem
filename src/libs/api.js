function getProfile(){
  return fetch('https://paulkotov-pokeserver.herokuapp.com/auth', {
    //mode: 'no-cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json'
    }
  }).then(response => response.json())
    .catch((err)=> alert(err));
}

function isObjEmpty(obj){
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
} 

function savePokemon(pokemon) {
  fetch('https://paulkotov-pokeserver.herokuapp.com/pokemons/add' ,{
    method:  'POST',
    credentials: 'include',
    headers: {  
      'Content-Type':'application/json' 
    },
    body: JSON.stringify(pokemon)
  }).then(()=> {alert(`Server responded: ${pokemon.name} saved`);
  });
}

function delPokemon(pokemon){
  fetch(`https://paulkotov-pokeserver.herokuapp.com/pokemons/del/${pokemon.name}` ,{
    method:  'GET',
    credentials: 'include',
    headers: {  
      'Content-Type':'application/json' 
    }
  }).then(()=> {alert(`${pokemon.name} deleted`); });
}

function LoadOuterData(){
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000' ,{
    mode: 'cors',
    method:  'GET',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then(r => r.json()); 
}

function LoadDBData(){
  return fetch('https://paulkotov-pokeserver.herokuapp.com/pokemons/showall', {
    method:  'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then(r => r.json());
}

export { isObjEmpty, getProfile, LoadOuterData, LoadDBData, savePokemon, delPokemon };
