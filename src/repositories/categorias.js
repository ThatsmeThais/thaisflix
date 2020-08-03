import config from '../config/index';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=musicas`;

function getAllWithVideos(){
    console.log();
    return fetch(URL_CATEGORIES)
        .then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json();
            return resposta;
    });
}
export default{
    getAllWithVideos,
};