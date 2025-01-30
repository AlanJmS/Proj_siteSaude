import React from 'react';

function Contato() {
  return (
    <section id="contato">
    <form>
      <h2>
        Tem alguma dúvida, deseja corrigir uma informação do site ou relatar
        um problema? Entre em contato!
      </h2>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" required placeholder="Nome completo" />
      <label for="Email">Email:</label>
      <input type="email" id="email" required placeholder="Email" />
      <label for="Requisição">Motivo:</label>
      <select id="requisicao">
        <option value="Nenhuma das opções">Nenhuma das opções</option>
        <option value="Dúvida">Dúvida</option>
        <option value="Correção">Correção</option>
        <option value="Erro">Erro ao acessar alguma parte do site</option>
        <option value="Carregamento">
          As imagens / vídeos não carregam
        </option>
      </select>
      <label for="Descrição">Descreva o seu problema!</label>
      <textarea
        id="descricao"
        placeholder="Descreva o motivo da sua solicitação!"
      ></textarea>
      <button type="button">Enviar</button>
      <button type="button">Limpar</button>

      <div id="resultForm"></div>

    </form>
  </section>
  );
}

export default Contato;