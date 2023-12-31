// import { useState, useEffect } from 'react'
  // import Chip from '@mui/material/Chip';
// import axios from 'axios'

import "./App.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const [listaPokemon, setlistaPokemon] = useState([]);
  const [text, setText] = useState("");
  const [nuevaLista, setnuevaLista] = useState([]); 

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
      // Creamos dos listas la primera filtra y la segunda deja la lista intacta
      setnuevaLista( await Promise.all(imagenPokemon))
      setlistaPokemon(await Promise.all(imagenPokemon))
    }
    // Llama a la fucnion fetchdata sino no sirve esta definida arriba
  fetchdata()
  // Los corchetes de array definen que use effect solo va a ejecutarse en el renderisado inicial
  }, []); 

  //Esta funcion se ejecuta cada que escucha un cambio el input text
  function ProcesoFiltro(e){
    //Adentro guardamos una variable para el value 
    setText(e.target.value);
    //Uno de los dos arrays que creamos lo vamos a filtrar 
    let Filtro = listaPokemon.filter(pokemon => pokemon.nombre.includes(e.target.value));
    // El segundo array lo cambiamos por resultado del filtro
    setnuevaLista(Filtro)
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
            {nuevaLista.map(Pokemon => (
            <li className="contenedor_card" key={Pokemon.nombre}>
              <p>{Pokemon.nombre}</p>
              <img src={Pokemon.url} alt="" />
              
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