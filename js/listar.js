function carregaDados() {
  return JSON.parse(localStorage.getItem("Funcionarios"));
}

function carregarEditar(event, id) {
  console.log("Evento de click", event);
  event.preventDefault();
  carregarEditar(id);
}

function carregar() {
  console.log("Carregando Janela");
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  var funcionarios = localStorage.getItem("Funcionarios");

  funcionarios = JSON.parse(funcionarios);

  funcionarios.forEach((e) => {
    var tr = `<tr>
                    <td>${e["id"]}</td>
                    <td>${e["nome_completo"]}</td>
                    <td>${e["cargo"]}</td>
                    <td>${e["salario"]}</td>
                    <td>
                    <a href="editar.html">editar</a>
                    <button href="" onclick="deletar(${e["id"]})">Deletar</button>
                    </td>
                </tr>`;

    tbody.innerHTML += tr;
  });
}

function deletar(id) {
  var lista = carregaDados();
  var novaLista = [];
  lista.forEach((e) => {
    if (e["id"] != id) {
      novaLista.push(e);
    }
  });
  localStorage.setItem("Funcionarios", JSON.stringify(novaLista));
  carregar();
}

window.onload = carregar;
