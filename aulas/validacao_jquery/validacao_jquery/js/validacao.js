$(document).ready(function () {
  $("#cadastroFuncionario").validate({
    rules: {
      nome: {
        required: true,
        minlength: 5,
        maxlength: 50
      },
      email: {
        required: true,
        email: true
      },
      filhos: {
        required: true,
        number: true,
        min: 0,
        max: 10
      },
      salario: {
        required: true,
        number: true,
        min: 2000,
        max: 10000,
      },
      admissao: {
        required: true,
        date: true
      },
      social: {
        required: true,
        url: true
      }
    },
    messages: {
      nome: {
        required: "O campo Nome é obrigatório.",
        minlength: "O nome deve ter pelo menos 5 caracteres.",
        maxlength: "O nome pode ter no máximo 50 caracteres."
      },
      email: {
        required: "O campo E-mail é obrigatório.",
        email: "Informe um e-mail válido."
      },
      filhos: {
        required: "Informe o número de filhos.",
        number: "Informe um número válido.",
        min: "O número de filhos não pode ser menor que 0.",
        max: "O número de filhos não pode ser maior que 10."
      },
      salario: {
        required: "Informe o salário.",
        number: "Informe um valor numérico válido.",
        min: "O salário mínimo é R$ 2000.",
        max: "O salário máximo é R$ 10000.",
      },
      admissao: {
        required: "Informe a data de admissão.",
        date: "Informe uma data válida."
      },
      social: {
        required: "Informe o endereço da rede social.",
        url: "Informe uma URL válida (ex: https://...)."
      }
    },
  });
});
