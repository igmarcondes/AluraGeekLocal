//Importa a função "clienteService" do arquivo "client-service.js" localizado na pasta "../service"
import { clienteService } from '../service/client-service.js';

//Exporta a função "deleteProduct"
export function deleteProduct() {

  //Seleciona o elemento HTML com a classe "container-allProductsShow" e armazena-o na variável "productBox"
  const productBox = document.querySelector('.container-allProductsShow');

  //Adiciona um listener de evento de clique no elemento "productBox". Quando o usuário clica em algum lugar dentro do elemento "productBox", a função anônima é executada
  productBox.addEventListener('click', async (event) => {

    //Verifica se o elemento clicado tem a classe "product-delete". Se sim, executa as etapas a seguir
    if (event.target.className === 'product-delete') {

      //Usa o método "closest" para obter o elemento pai mais próximo com um atributo de "data-id" e armazena-o na variável "product"
      const product = event.target.closest('[data-id]');

      //Obtém o valor do atributo "data-id" do elemento "product" e armazena-o na variável "id".
      const id = product.dataset.id;

      //Chama a função "productDelete" da "clienteService" passando o valor "id" como argumento.
      await clienteService.productDelete(id)

      //Remove o elemento "product" da página.
      product.remove()
    }

  })
}