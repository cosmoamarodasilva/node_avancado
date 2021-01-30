const fetch = require('node-fetch');
module.exports = async function pegarjogos(pesquisa, nota){
    let url = `https://api.rawg.io/api/games?search=${pesquisa}&search_precise=true`;
    let jogos = [];
    let resultado = await fetch (url);
    let json = await resultado.json();
    for (let i = 0; i < json.results.length; i++){
        if(json.results[i].rating_top >= nota){
            jogos.push(json.results[i]);
        }
        
        console.log (json.results[i].name);
    }
    return jogos

};

