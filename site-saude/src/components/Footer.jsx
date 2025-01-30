function Footer (){
    return(
        <footer>

      <div id="redes_foot">
        <a href="instagram.com" target="_blank">
          <img
            src="./imagens/instagram.png"
            alt="Imagem que leva ao instagram"
            width="40px"
          />Instagram
        </a>
        <a href="youtube.com" target="_blank">
          <img
            src="./imagens/youtube.png"
            alt="Imagem que leva ao youtube"
            width="40px"
          />
          Youtube
        </a>
        <a href="facebook.com" target="_blank">
          <img
            src="./imagens/facebook.png"
            alt="Imagem que leva ao facebook"
            width="40px"
          />
          facebook
        </a>
      </div>
      <div>
        <ul>
          <li><a href="#politica">Política de Privacidade</a></li>
          <li><a href="#termos">Termos de Uso</a></li>
          <li><a href="#ajuda">Ajuda</a></li>
        </ul>
      </div>

      <p>&copy; 2024 Saúde e bem estar. Todos os direitos reservados.</p>
    </footer>
    )
}

export default Footer;