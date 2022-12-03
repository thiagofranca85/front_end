function carregar(){
    console.log('Carregando Janela');
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = ''

    var funcionarios = localStorage.getItem('Funcionarios');

    funcionarios = JSON.parse(funcionarios);
    
    funcionarios.forEach((e) =>{
    var tr = `<tr>
                    <td>${e['id']}</td>
                    <td>${e['nome_completo']}</td>
                    <td>${e['cargo']}</td>
                    <td>${e['salario']}</td>
                    <td>
                    <a href="editar.html">editar</a>
                    </td>
                </tr>`

        tbody.innerHTML += tr
        
    });
}

window.onload = carregar