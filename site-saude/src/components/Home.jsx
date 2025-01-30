function Home() {
  return (
    <section>
      <div id="inicio">
        <img
          src="./imagens/internasaudeOMS.png"
          alt="imagem de pessoas ilustrando coisas relacionadas a saúde"
          width="350px"
          height="255px"
        />

        <div id="textos-apresent">
          <h1>Apresentação</h1>
          <p>
            Bem-vindo, o site foi criado para ajudar você a cuidar da sua saúde
            de forma completa e prática! Aqui, você encontrará dicas valiosas
            sobre saúde física e mental, orientações para adotar hábitos
            saudáveis no dia a dia, além de conteúdos sobre bem-estar e
            qualidade de vida. Nosso objetivo é ser uma fonte confiável de
            informações para inspirar mudanças positivas e promover o equilíbrio
            entre corpo e mente. Porque cuidar de si é o primeiro passo para
            viver melhor!
          </p>

          <p>
            As práticas saudáveis desempenham um papel fundamental na construção
            de uma vida equilibrada e de qualidade. Adotar hábitos como manter
            uma alimentação balanceada, praticar exercícios físicos
            regularmente, dormir bem e cuidar da saúde mental contribui
            significativamente para o bem-estar geral. Esses comportamentos
            ajudam a prevenir doenças, fortalecem o sistema imunológico e
            promovem maior disposição para enfrentar os desafios do dia a dia.
            Além disso, cuidar da saúde não é apenas uma questão física; envolve
            também manter relações sociais positivas, gerenciar o estresse e
            reservar tempo para momentos de lazer e autocuidado. Pequenas
            mudanças, como incluir mais alimentos naturais na dieta ou começar
            uma rotina de atividades físicas, podem gerar grandes impactos ao
            longo do tempo, melhorando a qualidade de vida e proporcionando
            longevidade com saúde. Assim, investir em práticas saudáveis é
            investir em você mesmo, garantindo mais energia, equilíbrio e
            felicidade no presente e no futuro.
          </p>
        </div>
      </div>
      <div id="textos-introd">
        <h1>Passo a passo para ter uma vida saudável!</h1>
        <p>
          Bem-vindo à nossa seção de dicas sobre saúde, onde você encontrará
          informações valiosas para melhorar seu bem-estar e qualidade de vida.
          Aqui, oferecemos orientações práticas sobre alimentação, exercícios
          físicos e hábitos saudáveis, com o objetivo de ajudá-lo a adotar uma
          rotina mais equilibrada e saudável. Seja você um iniciante ou já
          familiarizado com o mundo da saúde, nossas dicas são pensadas para
          atender a todos, proporcionando conhecimento acessível e eficaz para
          que você se sinta cada vez melhor, tanto no corpo quanto na mente.
        </p>
      </div>
      <div id="praticas">
        <div id="alimentacao">
          <h3>Práticas de uma alimentação saudável:</h3>
          <ul>
            <li>
              Priorize alimentos naturais e minimamente processados: Inclua
              frutas, legumes, verduras, grãos integrais, proteínas magras (como
              frango grelhado, peixe, feijão e lentilhas) e fontes saudáveis de
              gordura (como abacate, azeite de oliva e castanhas) na sua
              alimentação.
            </li>

            <li>
              Consuma carboidratos complexos: Alimentos como batata-doce,
              quinoa, arroz integral e aveia são fontes de energia de lenta
              liberação e ajudam a manter os níveis de energia ao longo do dia.
            </li>
            <li>
              Evite alimentos ultraprocessados e ricos em açúcar adicionado:
              Doces, biscoitos, refrigerantes e alimentos com excesso de sódio
              podem contribuir para o ganho de peso e problemas de saúde.
            </li>
            <li>
              Hidrate-se adequadamente: Beba água regularmente ao longo do dia.
              A recomendação geral é de cerca de 2 litros (8 copos) de água por
              dia.
            </li>
            <li>
              Varie o cardápio e inclua alimentos coloridos: Quanto mais
              colorido o prato, maior a diversidade de nutrientes.
            </li>
          </ul>
        </div>
        <img
          src="./imagens/1724330771878.jpg"
          alt="imagem de um prato saudável e suas respectivasa proporções"
          width="450px"
          height="240px"
        />
      </div>
      <div id="habitos">
        <img
          src="./imagens/entenda-como-adotar-habitos-saudaveis-muda-a-vida.jpg"
          alt="Imagem que ilustra hábitos saudáveis"
          width="400px"
          height="280px"
        />
        <div id="textos_habitos">
          <h3>Hábitos Saudáveis:</h3>
          <ul>
            <li>
              Durma bem: A falta de sono pode impactar negativamente o humor, a
              capacidade de concentração e a função imunológica. O ideal é ter
              de 7 a 9 horas de sono por noite.
            </li>
            <li>
              Pratique atividades físicas regularmente: Além dos benefícios
              físicos, a atividade física regular melhora o bem-estar mental,
              reduz o estresse e aumenta a disposição.
            </li>
            <li>
              Gerencie o estresse: Técnicas como meditação, ioga, práticas de
              respiração e atividades relaxantes podem ajudar a controlar os
              níveis de estresse.
            </li>
            <li>
              Limite o consumo de álcool e evite fumar: O consumo excessivo de
              álcool e o tabagismo são fatores de risco para diversas doenças
              crônicas.
            </li>
            <li>
              Faça pausas durante o dia para relaxar e se desconectar das telas:
              Isso pode melhorar a produtividade e o bem-estar emocional.
            </li>
            <li>
              Cultive relacionamentos saudáveis e passe tempo com amigos e
              familiares: Conexões sociais são essenciais para a saúde mental e
              emocional.
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="video">
          <h2>Doutor Drauzio Varella dá dicas sobre hábitos saudáveis:</h2>
          <iframe
            width="760"
            height="450"
            src="https://www.youtube.com/embed/T8H8NU9eoBw?si=vFlrcHzIevKTeRu0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mini-perfil">
          <img
            src="./imagens/drauzio.jpg"
            alt="Foto do Doutor Drauzio Varella"
            width="130px"
            height="130px"
          />
          <p>
            Antônio Drauzio Varella é um médico, oncologista, cientista e
            escritor brasileiro. Formado pela Universidade de São Paulo, na qual
            foi aprovado em 2° lugar, é conhecido por popularizar a informação
            médica no Brasil, através de aparições em programas de rádio, TV e
            pela Internet, com um site e canal no Youtube.
          </p>
          <div className="sociais">
            <h3>Redes sociais:</h3>

            <a href="https://www.youtube.com/@drauziovarella" target="_blank">
              <img
                src="./imagens/youtube.png"
                alt="Imagem que leva ao canal do youtube do médico"
                width="40px"
              />
            </a>

            <a
              href="https://www.instagram.com/sitedrauziovarella/"
              target="_blank"
            >
              <img
                src="./imagens/instagram.png"
                alt="Imagem que leva ao instagram do médico"
                width="40px"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/dr-drauzio-varella-056a97239/?originalSubdomain=br"
              target="_blank"
            >
              <img
                src="./imagens/linkedin.webp"
                alt="Imagem que leva ao linkedin do médico"
                width="60px"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;