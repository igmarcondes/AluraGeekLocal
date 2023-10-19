//Importa o módulo clienteService do arquivo client-service.js para recuperar uma lista de produtos do servidor.
import { clienteService } from "../service/client-service.js";

//Define uma função cardBuild() que constrói um elemento div para exibir informações sobre um produto, incluindo sua imagem, nome, preço e um link para uma página de detalhes do produto.
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

//Seleciona três seções HTML diferentes (uma para cada seção de produtos: "Star Wars", "Consoles" e "Diversos") usando o querySelector() do DOM e armazena as referências em constantes;
const sectionStarWars = document.querySelector('[data-starwars]');

//Chama o método clienteService.productList() para obter a lista de produtos do servidor, que é retornada como uma promessa.
clienteService.productList()

  .then(data => {
    //Quando a promessa é resolvida, o método forEach() é usado para iterar sobre cada produto retornado da lista de produtos e verifica se a seção a que ele pertence é igual a "Star Wars", "Consoles" ou "Diversos";
    data.forEach(elemento => {

      if (elemento.section === 'Star Wars') {
        
        //Para cada produto, a função cardBuild() é chamada para construir o elemento de produto apropriado e o elemento é anexado à seção HTML correta usando o método appendChild().
        sectionStarWars.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
      }

    })
  })