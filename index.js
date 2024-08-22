let pagina = document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

let nome = document.getElementById("nome").value;

console.log(nome);


function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome);

    let idade = document.getElementById("idade").value;
    console.log(idade);

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);

    if(nome == "") { // Não considerar nomes com somente espaços! dica: remover espaços em branco
        alert("Nome não deve ser vazio!");
    }

    
}

function validaCPF(cpf) {
    // retorna true se o cpf for válido, caso contrário retorna false
    return true;
}