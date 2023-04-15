import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "Coloque-aqui-su-api-key";
  
  function searchForPlayer(event){
    var APICallSpring = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    
    axios.get(APICallSpring).then(
      function(response){
        setPlayerData(response.data);
      }
    ).catch(function(error){
        console.log(error);
    });

    console.log(playerData);

  }

  return (
    <div className="App">
      <div className='container'>
        <h5>League of legends Player Searcher</h5>
        <input type='text' onChange={ e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e) }>Search for player</button>
      </div>
      {JSON.stringify(playerData) != '{}' ? 
      <>
      <p>{playerData.name}</p>
      <img width="100" heigth="100" src={"http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/" +  playerData.profileIconId  + ".png"} />
      <p>summoner level {playerData.summonerLevel}</p>
      </>
      :
      <><p>No player data</p></>
      
      }
    </div>
  );
}

export default App;
