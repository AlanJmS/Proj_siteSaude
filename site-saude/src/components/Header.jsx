import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav id="naveg">
        <div>
          <Link to="/">
            <img
              id="logotipo"
              src="./imagens/xsonho-de-ter-plano-de-saude.png.pagespeed.ic_.ChCKlfCICv.png"
              alt="Ícones sobre saúde"
              width="100px"
            />
          </Link>
        </div>
        <div id="div-links">
          <Link className="link" to="/">Início</Link>
          <Link className="link" to="#textos-introd">Dicas sobre saúde</Link>
          <Link className="link" to="/saude-mental">Saúde mental</Link>
          <Link className="link" to="/mitos-verdades">Mitos e verdades</Link>
          <Link className="link" to="/contato">Contato</Link>
        </div>
        <div id="area-pesq">
          <button id="envio" type="submit">Pesquisar</button>
          <input type="text" placeholder="Pesquise um tópico" id="pesquisa" />
        </div>
        <Link to="/perfil" target="_blank">
          <img
            src="./imagens/cadastro.png"
            alt="Área de cadastro"
            width="70px"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;