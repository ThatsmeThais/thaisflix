import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroMusica from './pages/cadastro/musica'
import CadastroCategoria from './pages/cadastro/categoria';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


const Pagina404 = () => (
  <div className="erro">
    <p>Não encontramos o que queria, mas você pode ouvir uma musiquinha:</p>
    <iframe title="musica" src="https://www.youtube.com/embed/JRfuAukYTKg?controls=0"></iframe>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/musica" component={CadastroMusica} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);
