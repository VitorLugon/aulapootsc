"use strict";
function medirTamanhoNome(nome) {
    return nome.length;
}
const atribuirNome = (nome, aluno) => {
    aluno.nome = nome;
};
let aluno = {
    nome: "",
    email: "",
    idade: 0,
    matricula: ""
};
atribuirNome("lugas", aluno);
console.log(aluno.nome);
