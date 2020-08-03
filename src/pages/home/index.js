import React, { useEffect } from 'react';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
      });
  });

  return (
    <div>
      <Menu />

      <BannerMain
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
      />

      <Footer/>
    </div>
  );
}

export default Home;
