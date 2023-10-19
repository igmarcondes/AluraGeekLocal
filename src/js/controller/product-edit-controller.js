// Importe o módulo clienteService do arquivo client-service.js
import { clienteService } from '../service/client-service.js';

// função autoexecutável arrow function 
(async () => {

  //URL atual da janela do navegador usando o construtor URL e guarde-o na variável getUrl
  const getUrl = new URL(window.location);

  //Extraia o parâmetro id da URL usando o método searchParams.get() e armazene-o na variável id
  const id = getUrl.searchParams.get('id')

  //Usa document.querySelector() para selecionar os campos de formulário corretos por seus atributos de dados, que correspondem às propriedades do produto. Armazene cada campo em sua respectiva variável.
  const inputUrl = document.querySelector('[data-url]');
  const inputSection = document.querySelector('[data-section]');
  const inputName = document.querySelector('[data-name]');
  const inputPrice = document.querySelector('[data-price]');
  const inputDescription = document.querySelector('[data-description]');

  //Chame a função clienteService.productDetails(id) para obter os dados do produto atual e armazená-los na variável dados.
  const dados = await clienteService.productDetails(id)

  //Preenche os campos do formulário com os dados recuperados, usando as propriedades de dados para atribuir os valores.
  inputUrl.value = dados.url;
  inputSection.value = dados.section;
  inputName.value = dados.name;
  inputPrice.value = dados.price;
  inputDescription.value = dados.description;

  //Selecione o formulário de edição por meio do atributo de dados "data-form" e armazene-o na variável editForm.
  const editForm = document.querySelector('[data-form]');

  //Adicione um ouvinte de evento para o evento submit do formulário de edição.
  editForm.addEventListener('submit', (event) => {

    //Quando o formulário é enviado, o método preventDefault() é chamado no objeto de evento event, para evitar que a página seja recarregada.
    event.preventDefault();

    //Chame o método clienteService.updateProduct() e passe como argumentos os valores atualizados dos campos de formulário inputUrl, inputSection, inputName, inputPrice, inputDescription e id.
    clienteService.updateProduct(inputUrl.value, inputSection.value, inputName.value, inputPrice.value, inputDescription.value, id)

    //Redirecione o usuário para a página de sucesso de adição do produto usando window.location.href
    window.location.href = "..//../pages/product-add-success.html"

  });
})()

