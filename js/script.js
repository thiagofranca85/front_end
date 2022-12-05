//criei uma variavel chamada elemento 
//document acessa o documento html que esta sendo chamado o script
//query selector e um methodo interno do javaScript que nos retorna um elemento html 
var elemento = document.querySelector('h1')
//variavel recebendo inner html para incremento ou alteracao descrtivo
elemento.innerHTML += ' JS';
//variavel elemento recebendo estilizacao de cor 
elemento.style.color = '#white';
//console log e o nosso print retorno variavel
console.log(elemento);

function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando....');
}

function salvar(event){
    event.preventDefault();
    console.log('salvando....');
    
    var name = document.getElementsByName('nome_completo')[0].value;
    var cargo = document.getElementsByName('cargo')[0].value;
    var salario = document.getElementsByName('salario')[0].value;

    var listaFunc = JSON.parse(localStorage.getItem('Funcionarios'));

    if(listaFunc == null){
        listaFunc = [];
    }
    var id = JSON.parse(localStorage.getItem('IdFuncionario'));
    if(listaFunc == null){
        id = 0;
    }
    id = id +1;

    var Aluno = {
                    'id': id,
                    'nome_completo': name,
                    'cargo': cargo,
                    'salario': salario
        };listaFunc.push(Aluno);

    
    localStorage.setItem('IdFuncionario', JSON.stringify(id));    
    localStorage.setItem('Funcionarios', JSON.stringify(listaFunc));
    // limpar(event)
}

document.getElementById('salvar').addEventListener('click', salvar)
