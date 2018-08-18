export default class Usuario {
    id;
    nome;
    email;
    password;
    tipo; //proprietario ou fornecedo
    telefone;
    localidade;
    clienteServico; //Contratacao veterinario true ou false
    frequenciaEntrega; // Quinzenalmente, mensalmente, anualmente
    atualizacoesTemporarias;// Atualizacoes para serem exibidas em tela
    constructor() {
        //...
    }
  }