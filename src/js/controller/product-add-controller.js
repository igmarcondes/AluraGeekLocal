//Importa o módulo clienteService do arquivo client-service.js
import { clienteService } from '../service/client-service.js'; 

// Seleciona o elemento do formulário HTML que possui o atributo data-form e armazena-o na variável form
const form = document.querySelector('[data-form]');

// Adiciona um evento de escuta ao formulário que aguarda o evento submit.
form.addEventListener('submit', (event) => {

  // Quando o evento submit é acionado, ele chama o método preventDefault() no objeto de evento para evitar que a página seja recarregada.
  event.preventDefault();


  //Coleta os valores de entrada do usuário para os campos de URL, seção, nome, preço e descrição a partir dos elementos HTML correspondentes dentro do formulário.
  const url = event.target.querySelector('[data-url]').value;
  const section = event.target.querySelector('[data-section]').value;
  const name = event.target.querySelector('[data-name]').value;
  const price = event.target.querySelector('[data-price]').value;
  const description = event.target.querySelector('[data-description]').value;


  //chama o método createProduct() do objeto clienteService com os valores coletados como argumentos. Este método provavelmente envia uma solicitação POST para um servidor com os dados do novo produto
  clienteService.createProduct(url, section, name, price, description);

 // Redireciona o usuário para uma página de sucesso usando a propriedade href do objeto window.location.
  window.location.href = "..//../pages/product-add-success.html";

});

