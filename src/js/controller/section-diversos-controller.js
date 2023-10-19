//Importa o módulo "clienteService" de "../service/client-service.js"
import { clienteService } from "../service/client-service.js";

//Define uma função chamada "cardBuild" que recebe quatro parâmetros: "url" (string), "name" (string), "price" (number) e "id" (string). A função cria um novo elemento "div" com a classe "product-box" e insere nela uma imagem, um título, um preço e um link para a página de detalhes do produto, usando as informações passadas como argumentos. Ele também adiciona o atributo "data-id" com o valor do ID fornecido.
function cardBuild(url, name, price, id) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-box';
  newProduct.innerHTML = `<img src="${url}" alt="imagem do produto" class="product-box-img">
  <h4 class="product-box-title">${name}</h4>
  <p class="product-box-price">R$ ${price}</p>
  <a href="..//../pages/product.details.html?id=${id}" class="product-box-link">Ver produto</a>
  `
  
  newProduct.dataset.id = id;

  return newProduct;
}

//Obtém a seção HTML da página usando "document.querySelector", com base no atributo de dados "data-diversos".
const sectionDiversos = document.querySelector('[data-diversos]');

//Chama o método "productList" do objeto "clienteService" para obter a lista de produtos.
clienteService.productList()

  //Quando a lista de produtos é recebida, o código itera sobre cada elemento e verifica a propriedade "section" de cada produto.
  .then(data => {
    data.forEach(elemento => {

      //Se a propriedade "section" for "Diversos", o código chama a função "cardBuild" com os parâmetros apropriados e anexa o resultado à seção HTML "sectionDiversos".
      if (elemento.section === 'Diversos') {
        sectionDiversos.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
      }

    })
  })