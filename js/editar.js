function carregalocalstorage(){
    return JSON.parse(localStorage.getItem('Funcionarios'))
};

function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando....');
};

function editar(event){
    event.preventDefault();
    console.log('salvando....');

    var id = document.getElementsByName('id')[0].value;
    var name = document.getElementsByName('nome_completo')[0].value;
    var cargo = document.getElementsByName('cargo')[0].value;
    var salario = document.getElementsByName('salario')[0].value;

    var Func = {
        'id': id,
        'nome_completo': name,
        'cargo': cargo,
        'salario': salario
};

var lista = carregalocalstorage();
var novaLista = [];

lista.forEach(e => {
    if(e['id'] != id){
        novaLista.push(e);
    }
    else{
        novaLista.push(Func);
    }
    
});
localStorage.setItem('Funcionarios', JSON.stringify(novaLista));
alert('Editado com Sucesso...'),

limpar(event);    
};

function carregaCampos(dado){
    document.getElementsByName('id')[0].value = dado['id'];
    document.getElementsByName('nome_completo')[0].value = dado['nome_completo'];
    document.getElementsByName('cargo')[0].value = dado['cargo'];
    document.getElementsByName('salario')[0].value = dado['salario'];
};

function carregadados(){
    var urlParametros = new URLSearchParams(window.location.search);

    var id = parseInt =(urlParametros.get('id'));

    var funcionarios = JSON.parse(localStorage.getItem('Funcionarios'));
    
    funcionarios.forEach(e =>{
        if(e['id'] == id){
            carregaCampos(e);
        }
    });
};
window.onload = carregadados();