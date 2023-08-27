// import { useState, useEffect } from 'react'
  // import Chip from '@mui/material/Chip';
// import axios from 'axios'

import "./App.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const [listaPokemon, setlistaPokemon] = useState([]);
  const [text, setText] = useState("Hola, mundo!");

  useEffect(() => {
   const fetchdata = async () =>{
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/') // PRIMERA APPI
  
    setlistaPokemon(response.data.results) // ListaPokemon = primera data

    //Multiples llamadas para obtener URLS
    //El resultado maps lo guarde en imagen Pokemon(varios objetos)
      const imagenPokemon = response.data.results.map( async (PokemonID) => {
        const responseV2 = await axios.get(PokemonID.url)
        
        //Creamos un objeto para guardar la URL de la imagen y el pokemon
        return {
          url:responseV2.data.sprites.front_default,
          nombre: responseV2.data.name
        }

      })
      //El resultado de imagen pokemon (array de pokemones con url) ahora esta en lista pokemon
      setlistaPokemon(await Promise.all(imagenPokemon))

      
    }
    
  fetchdata()

      // .catch(error => {
      //   console.error('Error:', error);
      // });
  }, []); 

  //Filtro con valor de input a ListaPokemon
  //  ----------- B 

    const ListaPokemonFiltrada = listaPokemon.filter(
    (Pokemon) => Pokemon.nombre = text
  );

      console.log(ListaPokemonFiltrada)
      
  function ProcesoFiltro(e){
    console.log(e)
    setText(e.target.value);
  };

  return( 
    <div className="contenedor_all">
      <header>
        <img src="" alt="" />
      </header>
        <h1>Pokedex.org</h1>
        
        <input type="text" 
        onChange={ProcesoFiltro} 
        value={text} placeholder="Search Pokemon information" />
        
        <p>El valor del input es: {text}</p>
        <main className="contenedor_main">
          <ul className="contenedor_cards">
            {listaPokemon.map(Pokemon => (
            <li className="contenedor_card" key={Pokemon.nombre}>
              <img src={Pokemon.url} alt="" />
              <p>{Pokemon.nombre}</p>
            </li>
            ))}
          </ul>
        </main>
    </div>
  );
}

export default App;

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



// 1. Funccion onchange a input text "e"
// 2. Guardar el value en variable de input (SE LLAMA text)
// 3. Crear Use state para modificar variable
// 4. Filtro con filter() a listapokemon antes del renderizado