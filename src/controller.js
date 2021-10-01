const { response, request } = require('express');

const axios = require('axios');
const { get } = require('./router');
const getPairsOfPlayers = async (req = request, resp = response) => {
  
  var players=new Array();
  var parejas=new Array();
  const dataPlayers = await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');;

 
  for(let i=0;i<dataPlayers.data.values.length;i++){
    players[i]={
        "first_name":dataPlayers.data.values[i].first_name,
        "h_in":dataPlayers.data.values[i].h_in,
        "h_meters":dataPlayers.data.values[i].h_meters,
        "last_name":dataPlayers.data.values[i].last_name,
      
    };
} 
let counter=0;

for(let i=0;i<players.length;i++){
 
  for(let j=0;j<players.length;j++){
   
    if(parseInt(players[i].h_in)+parseInt(players[j].h_in)==req.params.heightRef&&i!=j){
     
    parejas[counter]=players[i];
    counter++;
    parejas[counter]=players[j];
    counter++;
  }
  }
}
var parejasSend=new Array();
for(let i=0;i<parejas.length/2 +1;i++){
  parejasSend[i]=parejas[i];
}
return resp.json(parejasSend);
};
const getAllPlayers = async (req = request, resp = response) => {
 
  const dataPlayers = await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');
  
  return resp.json(dataPlayers.data);
};
module.exports = { getPairsOfPlayers, getAllPlayers };
