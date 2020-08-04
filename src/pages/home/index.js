import React, { useEffect, useState } from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PagesDefault from '../../components/PagesDefault';
import { ImgLoading } from '../cadastro/categoria/style';
import img from '../../assets/img/music1.png';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithMusicas()
      .then((categoriasComMusicas) => {
        console.log(categoriasComMusicas);
        setDadosIniciais(categoriasComMusicas);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, []);

  return (
    <PagesDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<ImgLoading src={img}></ImgLoading>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0){
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].musicas[0].titulo}
                url={dadosIniciais[0].musicas[0].url}
                videoDescription="Minha playlist inicia com a minha cantora favorita: Avril Lavigne (A mulher nunca envelhece, loucura !!). E vamos de uma bem animada e nostalgica pra vocês, espero que gostem!"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      
      {/*<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Minha playlist inicia com a minha cantora favorita: Avril Lavigne (A mulher nunca envelhece, loucura !!). E vamos de uma bem animada e nostalgica pra vocês, espero que gostem!"
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[6]}
      />*/}

    </PagesDefault>
  );
}

export default Home;
