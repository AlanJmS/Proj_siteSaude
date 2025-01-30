function SaudeMental() {
  return (
    <section>
      <div id="saudeMental">
        <div id="textos_mental1">
          <h1>Qual a importância da saúde mental?</h1>
          <p>
            A saúde mental é um pilar essencial para o bem-estar integral do ser
            humano, sendo tão importante quanto a saúde física. Ela envolve a
            forma como pensamos, sentimos e lidamos com os desafios do dia a
            dia, influenciando diretamente nossas relações, escolhas e qualidade
            de vida. Cuidar da saúde mental significa cultivar equilíbrio
            emocional, gerenciar o estresse, reconhecer nossos limites e buscar
            ajuda quando necessário. Infelizmente, questões como ansiedade,
            depressão e outros transtornos mentais são cada vez mais comuns,
            muitas vezes agravados pela correria cotidiana, excesso de
            responsabilidades e falta de tempo para o autocuidado. Por isso,
            práticas como reservar momentos para relaxamento, manter uma rede de
            apoio social, praticar atividades físicas e adotar uma rotina
            saudável são indispensáveis para preservar a saúde mental. Além
            disso, é importante quebrar estigmas relacionados ao tema,
            promovendo diálogos abertos sobre sentimentos e emoções e buscando
            profissionais especializados quando necessário. Priorizar a saúde
            mental não é sinal de fraqueza, mas de coragem e autoconsciência.
            Afinal, uma mente saudável é a base para uma vida plena e
            equilibrada.
          </p>
        </div>
        <img
          src="./imagens/008281cdfa315d2756372ade260aa41d.jpg"
          alt=""
          width="300px"
          height="230px"
        />
      </div>
      <div id="textos_mental2">
        <p>
          A saúde mental não se limita apenas ao que sentimos individualmente.
          Ela é uma rede de fatores relacionados. De acordo com a Organização
          Mundial de Saúde (OMS), a Saúde Mental pode ser considerada um estado
          de bem-estar vivido pelo indivíduo, que possibilita o desenvolvimento
          de suas habilidades pessoais para responder aos desafios da vida e
          contribuir com a comunidade. O bem-estar de uma pessoa não depende
          apenas do aspecto psicológico e emocional, mas também de condições
          fundamentais, como saúde física, apoio social, condições de vida. Além
          dos aspectos individuais, a saúde mental é também determinada pelos
          aspectos sociais, ambientais e econômicos. A saúde mental não é algo
          isolado, é também influenciada pelo ambiente ao nosso redor. Isso
          significa que deve-se considerar que a saúde mental resulta da
          interação de fatores biológicos, psicológicos e sociais. Pode-se
          afirmar que a saúde mental tem características biopsicossociais.
          Entender a saúde mental como algo que envolve o corpo, as emoções e a
          forma como interagimos ajuda a ver que todos têm um papel importante
          em cuidar do bem-estar de todos, cuidando de nós mesmos e apoiando uns
          aos outros.
        </p>
      </div>
      <div className="container">
        <div className="video">
          <h2>Doutor Barakat fala sobre a saúde mental</h2>
          <iframe
            width="760"
            height="450"
            src="https://www.youtube.com/embed/lyKC1mE7hOI?si=y5KHIh94XTOZprGQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mini-perfil">
          <img
            src="./imagens/1675611203942.jpg"
            alt="Imagem do doutor Barakat"
            width="130px"
            height="130px"
          />
          <p>
            Mohamad Barakat, conhecido como Dr Barakat, atua há mais de três
            décadas no campo da saúde. Fundador do Instituto Dr Barakat de
            Medicina Integrativa, tem como bandeiras a alimentação e intestino
            saudável.
          </p>
          <div className="sociais">
            <h5>Redes sociais:</h5>
            <a href="https://www.instagram.com/doutorbarakat" target="_blank">
              <img
                src="./imagens/instagram.png"
                alt="Imagem que leva ao instagram do médico"
                width="40px"
              />
            </a>
            <a
              href="https://www.youtube.com/@InstitutoDrBarakat"
              target="_blank"
            >
              <img
                src="./imagens/youtube.png"
                alt="Imagem que leva ao canal no youtube do médico"
                width="45px"
              />
            </a>

            <a href="https://www.linkedin.com/in/dr-barakat-a60a69157/?originalSubdomain=br">
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

export default SaudeMental;
