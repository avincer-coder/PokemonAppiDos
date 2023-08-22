// import { useState, useEffect } from 'react'
  // import Chip from '@mui/material/Chip';
// import axios from 'axios'

function App() {
  
  
  return(
    <>
      <p>
        POKEMON
      </p>

      <p>
        Holaaaaaa
      </p>
    </>
  )
//   const [pokemon,setPokemon] = useState();
//   const [nombrePokemon, setNombrePokemon] = useState('');
//   const pokemonTypes = {
//     ground:"brown",
//     water:"blue",
//     bug:"green",
//     fire:"red",
//     flying:"#A9CFFF",
//     poison:"#BE0ED1"
//   };

//   const obtenerPokemon = () => {axios.get('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon)
//   .then(function (response){
//     console.log(response.data);
//     setPokemon(response.data)
//   })
//   .catch(function (error){
//     console.log(error);
//   })
//   .finally(function(){

//   });

// };
//   return (
//     <>
//     <input placeholder='Ingresa el Nombre del pokemon' onChange={(e)=>setNombrePokemon(e.target.value)}></input>
//     <button onClick={obtenerPokemon}>Buscar</button>
//     { pokemon &&
//       <>
//         <h1>{pokemon.name}</h1>
//         <h2>{pokemon.id}</h2>
//         <img src={pokemon.sprites.front_shiny}></img>
//         <p>{JSON.stringify(pokemon.types)}</p>
//         {
//           pokemon.types.map((x)=>{
//             return <Chip key={x} label = { x.type.name } sx={{backgroundColor: pokemonTypes[x.type.name]}} variante="outlined" />
//           })
//         }
//       </>
//     }
//     </>
  // )
}
export default App