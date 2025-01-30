function exibirElementos() {
  let nomeForm = document.getElementById("nome").value.trim();
  let emailForm = document.getElementById("email").value.trim();
  let requisicaoForm = document.getElementById("requisicao").value.trim();
  let descricaoForm = document.getElementById("descricao").value.trim();
  let resultadoForm = document.getElementById("resultForm");

  let dadosForm = {
    Nome: nomeForm,
    Email: emailForm,
    Requisicao: requisicaoForm,
    Descricao: descricaoForm,
  };

  const arrayForm = [];
  arrayForm.push(dadosForm);
  console.log(arrayForm);

  if (
    nomeForm === "" ||  
    emailForm === "" ||
    requisicaoForm === "" ||
    descricaoForm === ""
  ) {
    alert("Preencha todas as áreas do formulário!");
  } 
  
  else {
    resultadoForm.innerHTML = ` 
    <h2>Requisição enviada com sucesso!</h2>
    <p>Nome:</strong> "${dadosForm.Nome}"</p>
    <p>Email:</strong> "${dadosForm.Email}"</p>
    <p>Requisição:</strong> "${dadosForm.Requisicao}"</p>
    <p>Descrição:</strong> "${dadosForm.Descricao}"</p>`;
  }

}


function resetar(){
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("requisicao").value = "";
  document.getElementById("descricao").value = "";

  const resultadoForm = document.getElementById("resultForm");
  resultadoForm.innerHTML = "";
}
